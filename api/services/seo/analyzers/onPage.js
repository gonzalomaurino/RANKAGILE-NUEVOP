import { ok, warn, err, info, scoreFor, PRIORITY } from '../findings.js';

const STOPWORDS = new Set([
  'a', 'al', 'ante', 'bajo', 'con', 'contra', 'de', 'del', 'desde', 'durante',
  'en', 'entre', 'hacia', 'hasta', 'mediante', 'para', 'por', 'segun', 'según',
  'sin', 'sobre', 'tras', 'y', 'e', 'ni', 'o', 'u', 'pero', 'mas', 'sino',
  'que', 'si', 'no', 'ya', 'su', 'sus', 'mi', 'mis', 'tu', 'tus', 'un', 'una',
  'unos', 'unas', 'el', 'la', 'los', 'las', 'le', 'les', 'lo', 'es', 'son',
  'era', 'fue', 'ser', 'esta', 'este', 'estos', 'estas', 'como', 'cual',
  'the', 'of', 'to', 'in', 'for', 'on', 'and', 'or', 'is', 'are', 'was', 'be',
  'this', 'that', 'it', 'its', 'an', 'at', 'by', 'as',
]);

function visibleText($) {
  const $clone = $.root().clone();
  $clone.find('script, style, noscript, template, svg').remove();
  return $clone.text().replace(/\s+/g, ' ').trim();
}

function tokenize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .split(/[^a-z0-9áéíóúñü]+/i)
    .filter((t) => t.length >= 3 && !STOPWORDS.has(t));
}

function keywordDensity(tokens, topN = 10) {
  const counts = new Map();
  for (const t of tokens) counts.set(t, (counts.get(t) || 0) + 1);
  const total = tokens.length || 1;
  return [...counts.entries()]
    .map(([term, count]) => ({ term, count, density: +(count / total * 100).toFixed(2) }))
    .sort((a, b) => b.count - a.count)
    .slice(0, topN);
}

function paragraphDuplicates($) {
  const seen = new Map();
  $('p, li').each((_, el) => {
    const t = $(el).text().replace(/\s+/g, ' ').trim();
    if (t.length < 80) return;
    seen.set(t, (seen.get(t) || 0) + 1);
  });
  return [...seen.entries()].filter(([, c]) => c > 1).map(([text, count]) => ({
    count, preview: text.slice(0, 120),
  }));
}

export function analyzeOnPage({ $, html, finalUrl }) {
  const findings = [];
  const meta = {};

  // Title
  const title = ($('head > title').first().text() || '').trim();
  meta.title = title;
  if (!title) {
    findings.push(err('title', 'Title tag', {
      message: 'La página no tiene etiqueta <title>',
      recommendation: 'Agregar un <title> único, descriptivo, de 30-60 caracteres, con tu keyword principal.',
      weight: 3, priority: PRIORITY.high,
    }));
  } else if (title.length < 30) {
    findings.push(warn('title', 'Title tag', {
      message: `Title demasiado corto (${title.length} chars)`,
      value: title,
      recommendation: 'Ampliar el title a 30-60 caracteres para aprovechar el snippet de Google.',
      weight: 2, priority: PRIORITY.high,
    }));
  } else if (title.length > 60) {
    findings.push(warn('title', 'Title tag', {
      message: `Title demasiado largo (${title.length} chars, se truncará)`,
      value: title,
      recommendation: 'Acortar el title a 60 caracteres máximo para evitar truncado en SERP.',
      weight: 2, priority: PRIORITY.high,
    }));
  } else {
    findings.push(ok('title', 'Title tag', { value: title, weight: 3 }));
  }

  // Meta description
  const metaDesc = ($('head > meta[name="description"]').attr('content') || '').trim();
  meta.description = metaDesc;
  if (!metaDesc) {
    findings.push(err('meta_description', 'Meta description', {
      message: 'No hay meta description',
      recommendation: 'Agregar <meta name="description"> de 70-160 caracteres con el valor único de la página.',
      weight: 3, priority: PRIORITY.high,
    }));
  } else if (metaDesc.length < 70) {
    findings.push(warn('meta_description', 'Meta description', {
      message: `Descripción demasiado corta (${metaDesc.length} chars)`,
      value: metaDesc,
      recommendation: 'Expandir a 70-160 caracteres con un call-to-action claro.',
      weight: 2,
    }));
  } else if (metaDesc.length > 160) {
    findings.push(warn('meta_description', 'Meta description', {
      message: `Descripción demasiado larga (${metaDesc.length} chars)`,
      value: metaDesc,
      recommendation: 'Acortar a 160 caracteres para evitar truncado en resultados.',
      weight: 2,
    }));
  } else {
    findings.push(ok('meta_description', 'Meta description', { value: metaDesc, weight: 3 }));
  }

  // Headings
  const h1s = $('h1').map((_, el) => $(el).text().trim()).get().filter(Boolean);
  const h2s = $('h2').map((_, el) => $(el).text().trim()).get().filter(Boolean);
  const h3s = $('h3').map((_, el) => $(el).text().trim()).get().filter(Boolean);
  meta.h1 = h1s; meta.h2Count = h2s.length; meta.h3Count = h3s.length;
  if (h1s.length === 0) {
    findings.push(err('h1', 'Etiqueta H1', {
      message: 'No hay H1 en la página',
      recommendation: 'Agregar exactamente un H1 con el título principal y la keyword foco.',
      weight: 3, priority: PRIORITY.high,
    }));
  } else if (h1s.length > 1) {
    findings.push(warn('h1', 'Etiqueta H1', {
      message: `Hay ${h1s.length} etiquetas H1 (se recomienda sólo 1)`,
      value: h1s.slice(0, 5).join(' | '),
      recommendation: 'Mantener un único H1 por página; el resto deberían ser H2/H3.',
      weight: 2, priority: PRIORITY.high,
    }));
  } else {
    findings.push(ok('h1', 'Etiqueta H1', { value: h1s[0], weight: 3 }));
  }

  // Heading hierarchy
  const order = [];
  $('h1, h2, h3, h4, h5, h6').each((_, el) => {
    order.push(Number(el.tagName.substring(1)));
  });
  let hierarchyJump = false;
  for (let i = 1; i < order.length; i += 1) {
    if (order[i] - order[i - 1] > 1) { hierarchyJump = true; break; }
  }
  if (hierarchyJump) {
    findings.push(warn('h_hierarchy', 'Jerarquía de encabezados', {
      message: 'La jerarquía salta niveles (ej: de H2 a H4)',
      recommendation: 'Mantener un orden secuencial: H1 → H2 → H3 → H4...',
      weight: 1,
    }));
  } else if (order.length > 1) {
    findings.push(ok('h_hierarchy', 'Jerarquía de encabezados', { value: `${order.length} encabezados ordenados`, weight: 1 }));
  }

  // Canonical
  const canonical = $('link[rel="canonical"]').attr('href');
  meta.canonical = canonical || null;
  if (!canonical) {
    findings.push(warn('canonical', 'Canonical tag', {
      message: 'No hay <link rel="canonical">',
      recommendation: 'Agregar un canonical absoluto apuntando a la URL definitiva.',
      weight: 2, priority: PRIORITY.high,
    }));
  } else {
    try {
      const resolved = new URL(canonical, finalUrl).toString();
      const ok_ = new URL(resolved).origin === new URL(finalUrl).origin;
      findings.push(ok_
        ? ok('canonical', 'Canonical tag', { value: resolved, weight: 2 })
        : warn('canonical', 'Canonical tag', {
            message: 'Canonical apunta a un dominio externo',
            value: resolved,
            recommendation: 'Verificar si el canonical cross-domain es intencional.',
            weight: 2,
          }));
    } catch {
      findings.push(warn('canonical', 'Canonical tag', {
        message: 'Canonical malformado', value: canonical, weight: 2,
      }));
    }
  }

  // Open Graph / Twitter
  const og = {
    title: $('meta[property="og:title"]').attr('content'),
    description: $('meta[property="og:description"]').attr('content'),
    image: $('meta[property="og:image"]').attr('content'),
  };
  const tw = {
    card: $('meta[name="twitter:card"]').attr('content'),
    title: $('meta[name="twitter:title"]').attr('content'),
  };
  const ogMissing = Object.entries(og).filter(([, v]) => !v).map(([k]) => `og:${k}`);
  if (ogMissing.length === 3 && !tw.card) {
    findings.push(warn('social_tags', 'Open Graph / Twitter Cards', {
      message: 'No hay etiquetas Open Graph ni Twitter Cards',
      recommendation: 'Agregar og:title, og:description, og:image y twitter:card para mejorar el preview en redes.',
      weight: 1,
    }));
  } else if (ogMissing.length > 0) {
    findings.push(warn('social_tags', 'Open Graph / Twitter Cards', {
      message: `Faltan etiquetas: ${ogMissing.join(', ')}`,
      recommendation: 'Completar los campos Open Graph para un preview consistente en redes.',
      weight: 1,
    }));
  } else {
    findings.push(ok('social_tags', 'Open Graph / Twitter Cards', { value: 'og:title, og:description, og:image presentes', weight: 1 }));
  }

  // Alt text en imágenes
  const imgs = $('img').toArray();
  const imgsConAlt = imgs.filter((el) => {
    const alt = ($(el).attr('alt') || '').trim();
    return alt.length > 0;
  });
  const altPct = imgs.length ? Math.round((imgsConAlt.length / imgs.length) * 100) : 100;
  meta.images = { total: imgs.length, withAlt: imgsConAlt.length, altPct };
  if (imgs.length === 0) {
    findings.push(info('img_alt', 'Alt text en imágenes', { message: 'No hay imágenes en la página', weight: 0 }));
  } else if (altPct < 70) {
    findings.push(err('img_alt', 'Alt text en imágenes', {
      message: `Sólo ${altPct}% de las imágenes tienen alt (${imgsConAlt.length}/${imgs.length})`,
      recommendation: 'Agregar atributo alt descriptivo a todas las imágenes relevantes.',
      weight: 2, priority: PRIORITY.medium,
    }));
  } else if (altPct < 95) {
    findings.push(warn('img_alt', 'Alt text en imágenes', {
      message: `${altPct}% de imágenes con alt (${imgsConAlt.length}/${imgs.length})`,
      recommendation: 'Completar el alt en las imágenes restantes.',
      weight: 1,
    }));
  } else {
    findings.push(ok('img_alt', 'Alt text en imágenes', { value: `${imgsConAlt.length}/${imgs.length} con alt`, weight: 2 }));
  }

  // Keyword density
  const text = visibleText($);
  const tokens = tokenize(text);
  const density = keywordDensity(tokens, 10);
  meta.keywords = density;
  const topKeyword = density[0];
  if (!tokens.length) {
    findings.push(warn('keyword_density', 'Densidad de keywords', {
      message: 'No se pudo extraer texto visible', weight: 1,
    }));
  } else if (topKeyword && topKeyword.density > 6) {
    findings.push(warn('keyword_density', 'Densidad de keywords', {
      message: `Posible keyword stuffing: "${topKeyword.term}" ${topKeyword.density}%`,
      recommendation: 'Reducir la repetición; densidad ideal 1-3%.',
      weight: 1,
    }));
  } else {
    findings.push(ok('keyword_density', 'Densidad de keywords', {
      value: density.slice(0, 5).map((k) => `${k.term} (${k.density}%)`).join(', '),
      weight: 1,
    }));
  }

  // Ratio texto / HTML
  const htmlBytes = Buffer.byteLength(html, 'utf8');
  const textBytes = Buffer.byteLength(text, 'utf8');
  const ratio = htmlBytes ? Math.round((textBytes / htmlBytes) * 100) : 0;
  meta.textHtmlRatio = ratio;
  if (ratio < 10) {
    findings.push(warn('text_html_ratio', 'Ratio texto/HTML', {
      message: `Sólo ${ratio}% del HTML es texto visible`,
      recommendation: 'Reducir código inline / limpiar HTML o ampliar el contenido textual.',
      weight: 1, priority: PRIORITY.low,
    }));
  } else {
    findings.push(ok('text_html_ratio', 'Ratio texto/HTML', { value: `${ratio}%`, weight: 1 }));
  }

  // Contenido duplicado on-page
  const duplicates = paragraphDuplicates($);
  if (duplicates.length > 0) {
    findings.push(warn('duplicate_content', 'Contenido duplicado on-page', {
      message: `${duplicates.length} bloque(s) de texto repetidos`,
      value: duplicates.slice(0, 2).map((d) => `${d.count}× "${d.preview}…"`).join(' | '),
      recommendation: 'Consolidar o reescribir los bloques duplicados.',
      weight: 1,
    }));
  } else {
    findings.push(ok('duplicate_content', 'Contenido duplicado on-page', { weight: 1 }));
  }

  // Longitud del contenido
  const wordCount = tokens.length;
  meta.wordCount = wordCount;
  if (wordCount < 300) {
    findings.push(warn('content_length', 'Longitud del contenido', {
      message: `Contenido corto (${wordCount} palabras)`,
      recommendation: 'Expandir el contenido a al menos 300-500 palabras para competir mejor.',
      weight: 1, priority: PRIORITY.low,
    }));
  } else {
    findings.push(ok('content_length', 'Longitud del contenido', { value: `${wordCount} palabras`, weight: 1 }));
  }

  return {
    key: 'onPage',
    label: 'SEO On-Page',
    score: scoreFor(findings),
    weight: 0.30,
    findings,
    meta,
  };
}
