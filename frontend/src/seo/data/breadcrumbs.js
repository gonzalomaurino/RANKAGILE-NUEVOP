// src/seo/data/breadcrumbs.js
// BreadcrumbList por ruta. Se genera dinámicamente desde un mapa.

import { SITE_URL } from './organization';

// Mapa: slug → label legible
const LABELS = {
  '': 'Inicio',
  servicios: 'Servicios',
  geo: 'GEO',
  'seo-completo': 'SEO Completo',
  'auditoria-tecnica': 'Auditoría Técnica',
  'seo-hibrido': 'SEO Híbrido',
  'seo-consultoria': 'Consultoría SEO',
  'seo-analytics': 'SEO Analytics',
  'quienes-somos': 'Quiénes Somos',
  contacto: 'Contacto',
  'analisis-seo-gratuito': 'Análisis SEO Gratuito',
  blog: 'Blog',
  'cuanto-cuesta-geo': 'Cuánto cuesta GEO',
  'por-que-no-aparezco-en-chatgpt': 'Por qué no aparezco en ChatGPT',
  'seo-vs-geo-vs-aeo': 'SEO vs GEO vs AEO',
  'seo-que-es-y-para-que-sirve': 'Qué es SEO',
  'seo-tecnico-que-es': 'SEO Técnico',
  'que-es-on-page-seo': 'On-Page SEO',
  'que-es-link-building': 'Link Building',
  'que-es-eeat-google': 'E-E-A-T Google',
  'como-aparecer-en-motores-de-ia': 'Cómo aparecer en IA',
  'citabilidad-llms-como-medirla': 'Citabilidad en LLMs',
  'knowledge-panel-google-como-conseguirlo': 'Knowledge Panel',
  'wikipedia-wikidata-marcas': 'Wikipedia y Wikidata',
  'schema-markup-para-geo': 'Schema para GEO',
  privacidad: 'Política de Privacidad',
  cookies: 'Política de Cookies',
};

const labelize = (slug) =>
  LABELS[slug] ||
  slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase());

export const buildBreadcrumbs = (pathname) => {
  // Quitar /en/ si está, los breadcrumbs son los mismos en ambos idiomas
  const clean = pathname.replace(/^\/en/, '') || '/';
  const segments = clean.split('/').filter(Boolean);

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Inicio',
      item: SITE_URL,
    },
  ];

  let acc = '';
  segments.forEach((seg, idx) => {
    acc += `/${seg}`;
    items.push({
      '@type': 'ListItem',
      position: idx + 2,
      name: labelize(seg),
      item: `${SITE_URL}${acc}`,
    });
  });

  return {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${clean}#breadcrumb`,
    itemListElement: items,
  };
};
