import { ok, warn, info, scoreFor, PRIORITY } from '../findings.js';

const QUESTION_STARTERS = [
  'qué', 'que', 'quién', 'quien', 'cómo', 'como', 'dónde', 'donde',
  'cuándo', 'cuando', 'por qué', 'por que', 'porque', 'cuál', 'cual',
  'cuánto', 'cuanto', 'what', 'who', 'how', 'where', 'when', 'why', 'which',
];

function looksLikeQuestion(text) {
  const t = text.trim().toLowerCase();
  if (t.endsWith('?')) return true;
  return QUESTION_STARTERS.some((q) => t.startsWith(q + ' '));
}

function jsonLdTypes($) {
  const types = [];
  $('script[type="application/ld+json"]').each((_, el) => {
    try {
      const parsed = JSON.parse($(el).contents().text());
      const nodes = Array.isArray(parsed) ? parsed : [parsed];
      for (const n of nodes) {
        if (!n) continue;
        const t = n['@type'];
        if (Array.isArray(t)) types.push(...t);
        else if (t) types.push(String(t));
      }
    } catch { /* ignore */ }
  });
  return types;
}

/**
 * GEO = Generative Engine Optimization. Evalúa qué tan bien la página sirve a
 * LLMs: respuestas directas a preguntas, estructura semántica, FAQ, etc.
 * Diferenciador pedido en la sección 12 del requerimientos.md.
 */
export function analyzeGeo({ $ }) {
  const findings = [];
  const meta = {};

  // Preguntas explícitas en H2/H3
  const headings = $('h2, h3').map((_, el) => $(el).text().trim()).get().filter(Boolean);
  const questionHeadings = headings.filter(looksLikeQuestion);
  meta.questionHeadings = questionHeadings.length;
  if (questionHeadings.length === 0) {
    findings.push(warn('qa_structure', 'Preguntas como encabezados', {
      message: 'No hay encabezados con formato de pregunta',
      recommendation: 'Usar preguntas como H2/H3 para que los LLMs extraigan respuestas directas.',
      weight: 2, priority: PRIORITY.medium,
    }));
  } else {
    findings.push(ok('qa_structure', 'Preguntas como encabezados', {
      value: `${questionHeadings.length} H2/H3 con formato de pregunta`,
      weight: 2,
    }));
  }

  // FAQPage en JSON-LD
  const types = jsonLdTypes($);
  meta.schemaTypes = types;
  if (types.includes('FAQPage')) {
    findings.push(ok('faq_schema', 'Schema FAQPage', {
      value: 'JSON-LD FAQPage presente',
      weight: 3,
    }));
  } else {
    findings.push(warn('faq_schema', 'Schema FAQPage', {
      message: 'No se encontró Schema FAQPage',
      recommendation: 'Agregar JSON-LD FAQPage si la página tiene preguntas frecuentes. Mejora rich snippets y respuestas de LLMs.',
      weight: 2,
    }));
  }

  // HowTo / Article / Organization
  const relevantTypes = types.filter((t) => ['HowTo', 'Article', 'BlogPosting', 'Organization', 'Product', 'QAPage'].includes(t));
  if (relevantTypes.length > 0) {
    findings.push(ok('semantic_types', 'Tipos semánticos', {
      value: relevantTypes.join(', '),
      weight: 1,
    }));
  } else {
    findings.push(warn('semantic_types', 'Tipos semánticos', {
      message: 'No hay tipos semánticos (Article / HowTo / Product…)',
      recommendation: 'Marcar la página con el @type más adecuado para que los LLMs entiendan el contenido.',
      weight: 1,
    }));
  }

  // Estructura semántica HTML5
  const hasMain = $('main').length > 0;
  const hasArticle = $('article').length > 0;
  const hasNav = $('nav').length > 0;
  meta.html5 = { main: hasMain, article: hasArticle, nav: hasNav };
  const missing = [];
  if (!hasMain) missing.push('<main>');
  if (!hasArticle) missing.push('<article>');
  if (!hasNav) missing.push('<nav>');
  if (missing.length) {
    findings.push(warn('html5_semantic', 'HTML5 semántico', {
      message: `Faltan tags: ${missing.join(', ')}`,
      recommendation: 'Envolver el contenido principal en <main> y <article>, y la navegación en <nav>.',
      weight: 1,
    }));
  } else {
    findings.push(ok('html5_semantic', 'HTML5 semántico', {
      value: '<main>, <article> y <nav> presentes',
      weight: 1,
    }));
  }

  // llms.txt (convención emergente para LLMs)
  meta.llmsTxt = undefined; // se puebla en el orquestador si existe

  // Respuestas directas: primera frase informativa tras un heading de pregunta
  let directAnswers = 0;
  $('h2, h3').each((_, el) => {
    const heading = $(el).text().trim();
    if (!looksLikeQuestion(heading)) return;
    const next = $(el).next('p').text().trim();
    if (next.length >= 60 && next.length <= 320) directAnswers += 1;
  });
  if (questionHeadings.length > 0) {
    const pct = Math.round((directAnswers / questionHeadings.length) * 100);
    if (pct >= 70) {
      findings.push(ok('direct_answers', 'Respuestas directas', {
        value: `${directAnswers}/${questionHeadings.length} preguntas con respuesta directa`,
        weight: 2,
      }));
    } else {
      findings.push(warn('direct_answers', 'Respuestas directas', {
        message: `Solo ${directAnswers}/${questionHeadings.length} preguntas con respuesta inmediata`,
        recommendation: 'Responder cada pregunta en 2-4 líneas justo debajo del encabezado para que los LLMs citen.',
        weight: 2,
      }));
    }
  }

  return {
    key: 'geo',
    label: 'GEO (SEO + IA / LLMs)',
    score: scoreFor(findings),
    weight: 0, // no se promedia al score global para no penalizar sitios que no apuntan a LLMs
    findings,
    meta,
  };
}
