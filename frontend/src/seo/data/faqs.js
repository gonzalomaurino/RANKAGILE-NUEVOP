// src/seo/data/faqs.js
// FAQPage schemas por ruta. Solo incluir las FAQs que REALMENTE están visibles en la página.
// Google penaliza FAQs que no están renderizadas en el contenido visible.

import { SITE_URL } from './organization';

const faqPage = (path, faqs) => ({
  '@type': 'FAQPage',
  '@id': `${SITE_URL}${path}#faq`,
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
});

export const FAQS = {
  '/': faqPage('/', [
    {
      q: '¿Qué es GEO y en qué se diferencia del SEO tradicional?',
      a: 'GEO (Generative Engine Optimization) optimiza tu marca para aparecer citada en las respuestas de motores de IA como ChatGPT, Gemini o Perplexity. El SEO clásico apunta a rankings en Google; GEO apunta a ser la fuente que los LLMs recomiendan.',
    },
    {
      q: '¿Cuánto tiempo tarda en verse resultados?',
      a: 'Las primeras mejoras de citabilidad en LLMs suelen verse en 60–90 días. Los resultados orgánicos en Google se consolidan en 4–6 meses. Trabajamos con sprints mensuales para que siempre haya entregables visibles.',
    },
    {
      q: '¿Tienen experiencia en mi industria?',
      a: 'Trabajamos con más de 240 marcas en sectores como e-commerce, SaaS, salud, finanzas y retail. En la llamada de diagnóstico mostramos casos del mismo vertical.',
    },
    {
      q: '¿El análisis SEO gratuito tiene algún compromiso?',
      a: 'Ninguno. El análisis es 100% gratuito, sin contrato y sin letra pequeña.',
    },
    {
      q: '¿Cómo miden la visibilidad en IA?',
      a: 'Con un dashboard propietario que rastrea más de 500 prompts en ChatGPT, Gemini, Claude y Perplexity. Reporte semanal con tasa de citabilidad, competidores y acciones concretas.',
    },
  ]),

  '/servicios/geo': faqPage('/servicios/geo', [
    {
      q: '¿Qué es exactamente GEO?',
      a: 'GEO (Generative Engine Optimization) es la disciplina que optimiza tu marca, contenido y entidad para que motores de IA como ChatGPT, Gemini, Claude y Perplexity la citen como fuente en sus respuestas generativas.',
    },
    {
      q: '¿Por qué es urgente implementar GEO en 2026?',
      a: 'El 72% de decisores B2B consulta una IA antes del primer contacto comercial. Si tu marca no aparece en esas respuestas, perdés visibilidad incluso antes de competir por un clic en Google.',
    },
    {
      q: '¿Cuándo voy a ver las primeras citaciones en IA?',
      a: 'Entre 30 y 180 días según la competitividad del nicho y la base inicial de autoridad de la marca. El monitoreo es continuo y se reporta semanalmente.',
    },
    {
      q: '¿GEO reemplaza al SEO tradicional?',
      a: 'No. GEO y SEO son complementarios. Los LLMs se nutren de fuentes que también rankean bien en Google, por eso la estrategia híbrida es la más efectiva.',
    },
    {
      q: '¿Cómo se mide el éxito de una estrategia GEO?',
      a: 'Con tres KPIs principales: tasa de citabilidad (cuántos prompts mencionan tu marca), Share of Voice (cuánto espacio ocupás vs competidores) y tráfico referral desde IA.',
    },
  ]),

  '/seo-completo': faqPage('/seo-completo', [
    {
      q: '¿Qué incluye el servicio de SEO Completo?',
      a: 'Auditoría técnica, estrategia de contenido, optimización on-page mensual, link building de autoridad, monitoreo de rankings, análisis de competencia, informes mensuales y soporte técnico prioritario.',
    },
    {
      q: '¿Cuándo voy a ver resultados?',
      a: 'Mes 1–2 fundamentos técnicos, Mes 3–4 primera tracción de tráfico, Mes 5–6 crecimiento sostenido, Mes 7+ consolidación de posiciones.',
    },
    {
      q: '¿Cuántas personas trabajan en mi proyecto?',
      a: 'Cuatro especialistas: técnico, contenido, link building y GEO. Un Project Lead coordina y es tu punto único de contacto.',
    },
  ]),

  '/auditoria-tecnica': faqPage('/auditoria-tecnica', [
    {
      q: '¿En cuánto tiempo entregan el informe?',
      a: 'En 72 horas hábiles. Incluye informe PDF de 30–50 páginas, roadmap priorizado, crawl data y una sesión Q&A de 60 minutos.',
    },
    {
      q: '¿Qué la diferencia de una auditoría automática?',
      a: 'Las herramientas automáticas detectan errores genéricos. Nuestra auditoría incluye análisis manual de JS rendering, log files, hreflang, intención de búsqueda y priorización por impacto real en negocio.',
    },
    {
      q: '¿Necesito una auditoría técnica si ya hago SEO?',
      a: 'Sí, especialmente si bajó el tráfico orgánico, hubo una migración, se rediseñó el sitio o pasaron más de 12 meses sin una revisión técnica completa.',
    },
  ]),
};
