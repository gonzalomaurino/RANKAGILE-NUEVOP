import { ok, warn, info, scoreFor, PRIORITY } from '../findings.js';
import { probeUrl } from '../fetcher.js';

const CMS_SIGNATURES = [
  { name: 'WordPress', match: ({ html, headers }) => /wp-content|wp-includes/i.test(html) || /wp-json/i.test(headers.link || '') },
  { name: 'Shopify', match: ({ html, headers }) => /cdn\.shopify\.com/i.test(html) || /shopify/i.test(headers['x-shopify-stage'] || '') },
  { name: 'Wix', match: ({ html }) => /_wix|wix\.com/i.test(html) },
  { name: 'Squarespace', match: ({ html }) => /squarespace/i.test(html) },
  { name: 'Webflow', match: ({ html }) => /webflow\.com/i.test(html) },
  { name: 'Next.js', match: ({ html, headers }) => /__NEXT_DATA__|_next\//.test(html) || /next/i.test(headers['x-powered-by'] || '') },
  { name: 'Drupal', match: ({ html, headers }) => /drupal-settings-json/i.test(html) || /drupal/i.test(headers['x-generator'] || '') },
  { name: 'Joomla', match: ({ html }) => /joomla/i.test(html) },
  { name: 'Magento', match: ({ html }) => /mage\/cookies|magento/i.test(html) },
];

export async function analyzeServer({ $, html, headers, finalUrl }) {
  const findings = [];
  const meta = {};

  // Tech detection
  const detected = CMS_SIGNATURES.filter((s) => s.match({ html, headers })).map((s) => s.name);
  const generator = $('meta[name="generator"]').attr('content');
  const tech = [...detected, generator].filter(Boolean);
  meta.tech = tech;
  findings.push(info('tech_stack', 'Tecnología del sitio', {
    message: tech.length ? `Detectado: ${tech.join(', ')}` : 'No se pudo detectar la tecnología',
    value: headers['x-powered-by'] || headers.server || null,
    weight: 0,
  }));

  // Compresión
  const encoding = (headers['content-encoding'] || '').toLowerCase();
  meta.contentEncoding = encoding || null;
  if (['gzip', 'br', 'deflate'].some((e) => encoding.includes(e))) {
    findings.push(ok('compression', 'Compresión GZIP/Brotli', { value: encoding, weight: 2 }));
  } else {
    findings.push(warn('compression', 'Compresión GZIP/Brotli', {
      message: 'No se detecta compresión en la respuesta',
      recommendation: 'Activar gzip o brotli en el servidor para reducir el peso de transferencia.',
      weight: 2, priority: PRIORITY.medium,
    }));
  }

  // WWW vs non-WWW
  try {
    const u = new URL(finalUrl);
    const isWww = u.hostname.startsWith('www.');
    const alt = new URL(finalUrl);
    alt.hostname = isWww ? u.hostname.replace(/^www\./, '') : `www.${u.hostname}`;
    const probe = await probeUrl(alt.toString(), { timeoutMs: 6000 });
    if (!probe.ok) {
      findings.push(info('www_redirect', 'WWW vs non-WWW', {
        message: `No se pudo verificar la variante ${alt.hostname}`, weight: 0,
      }));
    } else {
      const finalHost = new URL(probe.finalUrl).hostname;
      if (finalHost === u.hostname) {
        findings.push(ok('www_redirect', 'WWW vs non-WWW', {
          value: `${alt.hostname} → ${u.hostname}`, weight: 2,
        }));
      } else {
        findings.push(warn('www_redirect', 'WWW vs non-WWW', {
          message: `La variante ${alt.hostname} no redirige al dominio canónico`,
          recommendation: 'Configurar redirect permanente 301 desde la variante no canónica.',
          weight: 2, priority: PRIORITY.high,
        }));
      }
    }
  } catch { /* malformed URL – ignore */ }

  // Enlazado interno
  try {
    const u = new URL(finalUrl);
    const internalLinks = $('a[href]').toArray().filter((el) => {
      const href = $(el).attr('href');
      if (!href) return false;
      if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
      try {
        const abs = new URL(href, finalUrl);
        return abs.hostname === u.hostname;
      } catch { return false; }
    });
    meta.internalLinks = internalLinks.length;
    if (internalLinks.length < 3) {
      findings.push(warn('internal_links', 'Enlaces internos', {
        message: `Sólo ${internalLinks.length} enlace(s) interno(s)`,
        recommendation: 'Agregar enlaces internos contextuales a otras páginas del sitio.',
        weight: 1,
      }));
    } else {
      findings.push(ok('internal_links', 'Enlaces internos', {
        value: `${internalLinks.length} enlaces internos`, weight: 1,
      }));
    }
  } catch { /* ignore */ }

  return {
    key: 'server',
    label: 'Estructura / Servidor',
    score: scoreFor(findings),
    weight: 0.05,
    findings,
    meta,
  };
}
