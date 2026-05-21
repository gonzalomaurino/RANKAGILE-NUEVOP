// src/seo/data/articles.js
// Article schemas para los posts del blog.
// Editá datePublished/dateModified con valores reales para cada artículo.

import { SITE_URL } from './organization';

const article = ({ slug, headline, description, datePublished, dateModified, image, keywords }) => ({
  '@type': 'Article',
  '@id': `${SITE_URL}/blog/${slug}#article`,
  headline,
  description,
  url: `${SITE_URL}/blog/${slug}`,
  mainEntityOfPage: { '@id': `${SITE_URL}/blog/${slug}` },
  image: image || `${SITE_URL}/og/blog/${slug}.png`,
  datePublished,
  dateModified: dateModified || datePublished,
  inLanguage: 'es',
  author: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  keywords: keywords?.join(', '),
});

export const ARTICLES = {
  'como-funciona-el-algoritmo-pagerank-de-google': article({
    slug: 'como-funciona-el-algoritmo-pagerank-de-google',
    headline: 'Cómo funciona el algoritmo PageRank de Google',
    description:
      'Explicación clara del algoritmo PageRank: cómo Google evalúa la autoridad de las páginas web a través de la estructura de enlaces.',
    datePublished: '2026-01-15',
    keywords: ['PageRank', 'algoritmo Google', 'autoridad SEO', 'link building'],
  }),
  'agencia-seo-internacional-rankagile': article({
    slug: 'agencia-seo-internacional-rankagile',
    headline: 'Agencia SEO Internacional RankAgile',
    description:
      'Qué hace una agencia SEO internacional y por qué RankAgile opera en 15+ mercados con foco en GEO y SEO técnico.',
    datePublished: '2026-02-01',
    keywords: ['agencia SEO internacional', 'SEO global', 'RankAgile'],
  }),
  'branding-digital': article({
    slug: 'branding-digital',
    headline: 'Branding Digital en la era de la IA',
    description:
      'Cómo construir una marca digital reconocible por motores de IA y posicionarse en respuestas generativas.',
    datePublished: '2026-02-15',
    keywords: ['branding digital', 'marca en IA', 'identidad digital'],
  }),
  'zero-click-search': article({
    slug: 'zero-click-search',
    headline: 'Zero-Click Search: el nuevo paradigma de la búsqueda',
    description:
      'Más de la mitad de las búsquedas terminan sin clic. Cómo adaptar tu estrategia SEO a las zero-click searches y featured snippets.',
    datePublished: '2026-03-01',
    keywords: ['zero click search', 'featured snippets', 'SERP'],
  }),
  geo: article({
    slug: 'geo',
    headline: 'GEO: Generative Engine Optimization',
    description:
      'Guía completa sobre GEO: qué es, cómo se implementa y por qué es la evolución natural del SEO para la era de los LLMs.',
    datePublished: '2026-03-15',
    keywords: ['GEO', 'generative engine optimization', 'AI SEO'],
  }),
  'seo-para-empresas': article({
    slug: 'seo-para-empresas',
    headline: 'SEO para Empresas: estrategia B2B que escala',
    description:
      'Cómo plantear una estrategia SEO para empresas medianas y corporativas con foco en leads cualificados y ROI medible.',
    datePublished: '2026-04-01',
    keywords: ['SEO para empresas', 'SEO B2B', 'estrategia SEO corporativa'],
  }),
  'seo-que-es-y-para-que-sirve': article({
    slug: 'seo-que-es-y-para-que-sirve',
    headline: 'SEO: qué es y para qué sirve',
    description:
      'Introducción al SEO: qué es, cómo funciona y por qué sigue siendo la base del crecimiento orgánico incluso en 2026.',
    datePublished: '2026-04-15',
    keywords: ['qué es SEO', 'SEO 2026', 'guía SEO'],
  }),
  'seo-y-sem-en-marketing-digital': article({
    slug: 'seo-y-sem-en-marketing-digital',
    headline: 'SEO y SEM en marketing digital',
    description:
      'Diferencias, sinergias y cuándo conviene cada uno. La combinación SEO + SEM en estrategias de crecimiento.',
    datePublished: '2026-05-01',
    keywords: ['SEO vs SEM', 'marketing digital', 'orgánico vs pagado'],
  }),
  'dashboard-seo-en-power-bi-para-agencias': article({
    slug: 'dashboard-seo-en-power-bi-para-agencias',
    headline: 'Dashboard SEO en Power BI para agencias',
    description:
      'Cómo construir un dashboard SEO en Power BI: métricas clave, fuentes de datos y visualizaciones para clientes.',
    datePublished: '2026-05-10',
    keywords: ['dashboard SEO', 'Power BI SEO', 'reporting SEO'],
  }),
  'cuanto-cuesta-geo': article({
    slug: 'cuanto-cuesta-geo',
    headline: '¿Cuánto cuesta el GEO? Guía de precios 2026',
    description:
      'Sin rodeos: qué incluye un servicio GEO real, qué exigir por tu inversión y los rangos de precio justos en el mercado 2026.',
    datePublished: '2026-03-01',
    keywords: ['precio GEO', 'cuánto cuesta GEO', 'inversión GEO', 'generative engine optimization'],
  }),
  'por-que-no-aparezco-en-chatgpt': article({
    slug: 'por-que-no-aparezco-en-chatgpt',
    headline: 'Por qué tu empresa no aparece en ChatGPT (y cómo solucionarlo)',
    description:
      'Las 5 razones reales por las que tu empresa no aparece en ChatGPT y el plan GEO para revertirlo.',
    datePublished: '2026-03-10',
    keywords: ['no aparezco en ChatGPT', 'visibilidad IA', 'GEO', 'ChatGPT marcas'],
  }),
  'seo-vs-geo-vs-aeo': article({
    slug: 'seo-vs-geo-vs-aeo',
    headline: 'SEO vs GEO vs AEO: las diferencias reales en 2026',
    description:
      'Tres siglas, tres objetivos distintos. Diferencias reales entre SEO, GEO y AEO, cuándo aplicar cada uno y por qué la estrategia ganadora es integrarlos.',
    datePublished: '2026-03-20',
    keywords: ['SEO vs GEO', 'AEO', 'generative engine optimization', 'answer engine optimization'],
  }),
  'seo-tecnico-que-es': article({
    slug: 'seo-tecnico-que-es',
    headline: 'Qué es el SEO técnico: guía completa 2026',
    description:
      'SEO técnico abarca la optimización de la infraestructura web para que Google pueda crawlear, indexar y rankear tu sitio.',
    datePublished: '2026-04-01',
    keywords: ['SEO técnico', 'technical SEO', 'crawlability', 'Core Web Vitals'],
  }),
  'que-es-on-page-seo': article({
    slug: 'que-es-on-page-seo',
    headline: 'Qué es SEO on-page: optimización completa de páginas',
    description:
      'El SEO on-page optimiza elementos dentro de cada página para mejorar su posicionamiento: contenido, headings, meta tags e internal linking.',
    datePublished: '2026-04-10',
    keywords: ['SEO on-page', 'optimización on-page', 'meta tags', 'headings SEO'],
  }),
  'que-es-link-building': article({
    slug: 'que-es-link-building',
    headline: 'Qué es link building: estrategias y mejores prácticas',
    description:
      'Link building es el proceso de conseguir enlaces de calidad desde otros sitios hacia el tuyo. Estrategias éticas y efectivas en 2026.',
    datePublished: '2026-04-20',
    keywords: ['link building', 'backlinks', 'autoridad de dominio', 'off-page SEO'],
  }),
  'que-es-eeat-google': article({
    slug: 'que-es-eeat-google',
    headline: 'Qué es E-E-A-T en Google: experiencia, expertise, autoridad y confianza',
    description:
      'E-E-A-T son los 4 criterios de calidad que Google usa para evaluar contenido. Cómo construir señales E-E-A-T sólidas para tu sitio.',
    datePublished: '2026-05-01',
    keywords: ['E-E-A-T', 'EEAT Google', 'autoridad SEO', 'calidad de contenido'],
  }),
  'como-aparecer-en-motores-de-ia': article({
    slug: 'como-aparecer-en-motores-de-ia',
    headline: 'Cómo aparecer en motores de IA (ChatGPT, Gemini, Perplexity)',
    description:
      'Guía completa para que tu marca aparezca en respuestas de ChatGPT, Gemini, Perplexity y Claude. Estrategias, métricas y casos reales.',
    datePublished: '2026-05-05',
    keywords: ['aparecer en ChatGPT', 'visibilidad IA', 'GEO', 'LLMs marcas'],
  }),
  'citabilidad-llms-como-medirla': article({
    slug: 'citabilidad-llms-como-medirla',
    headline: 'Citabilidad en LLMs: cómo medir la visibilidad de tu marca en IA',
    description:
      'Cómo medir si tu marca aparece en ChatGPT, Gemini y Perplexity. Métricas, herramientas y metodología para trackear citabilidad.',
    datePublished: '2026-05-08',
    keywords: ['citabilidad LLMs', 'visibilidad en IA', 'métricas GEO', 'tracking IA'],
  }),
  'knowledge-panel-google-como-conseguirlo': article({
    slug: 'knowledge-panel-google-como-conseguirlo',
    headline: 'Cómo conseguir un Knowledge Panel en Google: guía 2026',
    description:
      'El Knowledge Panel es la tarjeta lateral en Google que consolida tu entidad. Cómo conseguirlo paso a paso para marcas y empresas.',
    datePublished: '2026-05-10',
    keywords: ['Knowledge Panel', 'Knowledge Graph', 'entidad Google', 'marca en Google'],
  }),
  'wikipedia-wikidata-marcas': article({
    slug: 'wikipedia-wikidata-marcas',
    headline: 'Wikipedia y Wikidata para marcas: guía de posicionamiento',
    description:
      'Wikipedia y Wikidata son fuentes clave para LLMs y Knowledge Graph. Cómo construir presencia en estas plataformas para tu marca.',
    datePublished: '2026-05-12',
    keywords: ['Wikipedia marcas', 'Wikidata', 'Knowledge Graph', 'entidad SEO'],
  }),
  'schema-markup-para-geo': article({
    slug: 'schema-markup-para-geo',
    headline: 'Schema markup para GEO: datos estructurados para IA',
    description:
      'Qué tipos de Schema Markup implementar para que ChatGPT, Gemini y Perplexity entiendan tu marca. Guía técnica con ejemplos prácticos.',
    datePublished: '2026-05-15',
    keywords: ['schema markup GEO', 'datos estructurados IA', 'JSON-LD', 'structured data'],
  }),
};
