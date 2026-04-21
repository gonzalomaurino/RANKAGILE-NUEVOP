import { ok, warn, err, info, scoreFor, PRIORITY } from '../findings.js';
import { fetchText, probeUrl } from '../fetcher.js';

function parseRobots(text) {
  const lines = text.split(/\r?\n/);
  const rules = [];
  const sitemaps = [];
  let current = null;
  for (const raw of lines) {
    const line = raw.replace(/#.*$/, '').trim();
    if (!line) continue;
    const [keyRaw, ...rest] = line.split(':');
    if (!rest.length) continue;
    const key = keyRaw.trim().toLowerCase();
    const value = rest.join(':').trim();
    if (key === 'user-agent') {
      current = { userAgent: value, disallow: [], allow: [] };
      rules.push(current);
    } else if (key === 'disallow' && current) current.disallow.push(value);
    else if (key === 'allow' && current) current.allow.push(value);
    else if (key === 'sitemap') sitemaps.push(value);
  }
  return { rules, sitemaps };
}

function blocksPath(rules, path) {
  const generic = rules.find((r) => r.userAgent === '*');
  if (!generic) return false;
  const hits = [...generic.disallow.map((v) => ({ t: 'd', v })), ...generic.allow.map((v) => ({ t: 'a', v }))]
    .filter((r) => r.v && path.startsWith(r.v));
  if (!hits.length) return false;
  hits.sort((a, b) => b.v.length - a.v.length);
  return hits[0].t === 'd';
}

export async function analyzeTechnical({ $, url, finalUrl, status, headers, redirects }) {
  const findings = [];
  const meta = {};
  const u = new URL(finalUrl);

  // HTTPS / SSL
  if (u.protocol === 'https:') {
    findings.push(ok('https', 'HTTPS / SSL', { value: u.origin, weight: 3 }));
  } else {
    findings.push(err('https', 'HTTPS / SSL', {
      message: 'La página no usa HTTPS',
      recommendation: 'Instalar un certificado SSL y redirigir HTTP → HTTPS con código 301.',
      weight: 3, priority: PRIORITY.high,
    }));
  }

  // HTTP → HTTPS redirect (solo si original era http)
  if (url.startsWith('http://')) {
    const upgraded = redirects.some((r) => r.from.startsWith('http://') && r.to.startsWith('https://'));
    if (upgraded) {
      findings.push(ok('http_to_https', 'Redirección HTTP → HTTPS', { weight: 1 }));
    } else if (u.protocol === 'http:') {
      findings.push(err('http_to_https', 'Redirección HTTP → HTTPS', {
        message: 'No redirige automáticamente a HTTPS',
        recommendation: 'Configurar redirect permanente 301 de http:// a https://.',
        weight: 2, priority: PRIORITY.high,
      }));
    }
  }

  // Código HTTP
  meta.httpStatus = status;
  if (status === 200) {
    findings.push(ok('http_status', 'Código HTTP', { value: `${status} OK`, weight: 3 }));
  } else if (status >= 300 && status < 400) {
    findings.push(warn('http_status', 'Código HTTP', {
      message: `Respuesta ${status} (redirect)`,
      value: finalUrl, weight: 2,
    }));
  } else if (status === 404) {
    findings.push(err('http_status', 'Código HTTP', {
      message: 'La página devuelve 404 (no existe)',
      recommendation: 'Verificar la URL o restaurar la página.',
      weight: 3, priority: PRIORITY.high,
    }));
  } else if (status >= 500) {
    findings.push(err('http_status', 'Código HTTP', {
      message: `Error de servidor (${status})`,
      recommendation: 'Revisar logs del servidor. Los 5xx impiden indexación.',
      weight: 3, priority: PRIORITY.high,
    }));
  } else {
    findings.push(warn('http_status', 'Código HTTP', { message: `Código inesperado: ${status}`, weight: 2 }));
  }

  // Redirecciones
  meta.redirectChain = redirects;
  if (redirects.length === 0) {
    findings.push(ok('redirects', 'Redirecciones', { value: 'Sin redirects', weight: 1 }));
  } else if (redirects.length <= 2) {
    findings.push(ok('redirects', 'Redirecciones', {
      value: redirects.map((r) => `${r.status} → ${new URL(r.to).pathname}`).join(' → '),
      weight: 1,
    }));
  } else {
    findings.push(warn('redirects', 'Redirecciones', {
      message: `Cadena larga de ${redirects.length} redirects`,
      value: redirects.map((r) => `${r.status}`).join(' → '),
      recommendation: 'Reducir la cadena a un único redirect para evitar pérdida de link equity.',
      weight: 2, priority: PRIORITY.high,
    }));
  }

  // noindex
  const robotsMeta = ($('meta[name="robots"]').attr('content') || '').toLowerCase();
  meta.robotsMeta = robotsMeta || null;
  if (robotsMeta.includes('noindex')) {
    findings.push(err('noindex', 'Tag noindex', {
      message: 'La página tiene noindex activo',
      value: robotsMeta,
      recommendation: 'Quitar el noindex si querés que la página aparezca en Google.',
      weight: 3, priority: PRIORITY.high,
    }));
  } else {
    findings.push(ok('noindex', 'Tag noindex', { value: robotsMeta || 'sin restricciones', weight: 2 }));
  }

  // Canonical conflictivo
  const canonical = $('link[rel="canonical"]').attr('href');
  if (canonical) {
    try {
      const resolved = new URL(canonical, finalUrl).toString();
      if (new URL(resolved).origin !== u.origin) {
        findings.push(warn('canonical_conflict', 'Canonical conflictivo', {
          message: 'El canonical apunta a otro dominio',
          value: resolved,
          recommendation: 'Revisar si la página debería canonicalizar a un dominio externo.',
          weight: 2, priority: PRIORITY.high,
        }));
      }
    } catch { /* handled in onPage */ }
  }

  // Robots.txt
  const robotsUrl = `${u.origin}/robots.txt`;
  const robotsRes = await fetchText(robotsUrl, { timeoutMs: 6000 });
  if (!robotsRes.ok) {
    findings.push(warn('robots_txt', 'robots.txt', {
      message: `No se pudo leer robots.txt (HTTP ${robotsRes.status || 'error'})`,
      recommendation: 'Publicar un robots.txt en la raíz del dominio con reglas claras.',
      weight: 2, priority: PRIORITY.high,
    }));
  } else {
    const parsed = parseRobots(robotsRes.body);
    meta.robotsTxt = { present: true, sitemaps: parsed.sitemaps, rules: parsed.rules.length };
    if (blocksPath(parsed.rules, u.pathname)) {
      findings.push(err('robots_txt_block', 'robots.txt bloquea esta URL', {
        message: 'robots.txt impide rastrear esta URL',
        value: u.pathname,
        recommendation: 'Quitar la regla Disallow que afecta a esta ruta si se quiere indexar.',
        weight: 3, priority: PRIORITY.high,
      }));
    } else {
      findings.push(ok('robots_txt', 'robots.txt', {
        value: `Presente, ${parsed.sitemaps.length} sitemap(s) referenciado(s)`,
        weight: 2,
      }));
    }
  }

  // Sitemap XML
  const sitemapCandidates = new Set([
    `${u.origin}/sitemap.xml`,
    `${u.origin}/sitemap_index.xml`,
    ...(meta.robotsTxt?.sitemaps || []),
  ]);
  let sitemapFound = null;
  for (const candidate of sitemapCandidates) {
    const probe = await probeUrl(candidate, { timeoutMs: 5000 });
    if (probe.ok) { sitemapFound = candidate; break; }
  }
  meta.sitemap = sitemapFound;
  if (sitemapFound) {
    findings.push(ok('sitemap', 'Sitemap XML', { value: sitemapFound, weight: 2 }));
  } else {
    findings.push(err('sitemap', 'Sitemap XML', {
      message: 'No se encontró sitemap.xml accesible',
      recommendation: 'Publicar /sitemap.xml con las URLs a indexar y referenciarlo en robots.txt.',
      weight: 2, priority: PRIORITY.high,
    }));
  }

  // Structured data (JSON-LD)
  const jsonLdCount = $('script[type="application/ld+json"]').length;
  meta.structuredData = { jsonLd: jsonLdCount };
  if (jsonLdCount > 0) {
    const types = [];
    $('script[type="application/ld+json"]').each((_, el) => {
      try {
        const parsed = JSON.parse($(el).contents().text());
        const nodes = Array.isArray(parsed) ? parsed : [parsed];
        for (const n of nodes) {
          if (n && n['@type']) types.push(String(n['@type']));
        }
      } catch { /* ignore malformed JSON-LD */ }
    });
    findings.push(ok('schema', 'Datos estructurados (Schema)', {
      value: `${jsonLdCount} bloque(s) JSON-LD${types.length ? `: ${[...new Set(types)].join(', ')}` : ''}`,
      weight: 1,
    }));
  } else {
    findings.push(warn('schema', 'Datos estructurados (Schema)', {
      message: 'No hay Schema.org JSON-LD',
      recommendation: 'Agregar marcado JSON-LD (Article, Organization, BreadcrumbList, FAQPage…) para rich snippets.',
      weight: 1,
    }));
  }

  // Hreflang
  const hreflangs = $('link[rel="alternate"][hreflang]').map((_, el) => ({
    hreflang: $(el).attr('hreflang'),
    href: $(el).attr('href'),
  })).get();
  meta.hreflang = hreflangs;
  if (hreflangs.length > 0) {
    const hasXDefault = hreflangs.some((h) => h.hreflang?.toLowerCase() === 'x-default');
    findings.push(hasXDefault
      ? ok('hreflang', 'Hreflang', { value: `${hreflangs.length} variantes con x-default`, weight: 1 })
      : warn('hreflang', 'Hreflang', {
          message: `${hreflangs.length} hreflang sin x-default`,
          recommendation: 'Agregar hreflang="x-default" como fallback.',
          weight: 1, priority: PRIORITY.low,
        }));
  } else {
    findings.push(info('hreflang', 'Hreflang', {
      message: 'Sin hreflang (apropiado para sitios monolingües)',
      weight: 0,
    }));
  }

  // URL amigable
  const path = u.pathname + u.search;
  const hasWeirdChars = /[^\w\-\/\?\=\&\.]/.test(decodeURIComponent(path));
  const hasManyParams = (u.search.match(/&/g) || []).length >= 3;
  if (hasWeirdChars || hasManyParams) {
    findings.push(warn('friendly_url', 'URL amigable', {
      message: hasManyParams
        ? `URL con muchos parámetros (${u.search})`
        : 'URL con caracteres especiales',
      value: u.pathname + u.search,
      recommendation: 'Usar URLs limpias con palabras separadas por guiones.',
      weight: 1,
    }));
  } else {
    findings.push(ok('friendly_url', 'URL amigable', { value: u.pathname || '/', weight: 1 }));
  }

  // Profundidad
  const depth = u.pathname.split('/').filter(Boolean).length;
  meta.urlDepth = depth;
  if (depth > 4) {
    findings.push(warn('url_depth', 'Profundidad de URL', {
      message: `La URL tiene ${depth} niveles`,
      recommendation: 'Mantener las páginas importantes a 3 clics o menos del home.',
      weight: 1, priority: PRIORITY.low,
    }));
  } else {
    findings.push(ok('url_depth', 'Profundidad de URL', { value: `${depth} nivel(es)`, weight: 1 }));
  }

  return {
    key: 'technical',
    label: 'SEO Técnico',
    score: scoreFor(findings),
    weight: 0.25,
    findings,
    meta,
  };
}
