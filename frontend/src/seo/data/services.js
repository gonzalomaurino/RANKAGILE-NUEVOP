// src/seo/data/services.js
// Schemas Service para las 6 páginas de servicios + análisis gratuito.

import { SITE_URL } from './organization';

const baseService = (slug) => ({
  '@type': 'Service',
  '@id': `${SITE_URL}${slug}#service`,
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Country', name: 'Peru' },
    { '@type': 'Country', name: 'Bolivia' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'Country', name: 'Mexico' },
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'Chile' },
  ],
  availableLanguage: ['es', 'en'],
});

export const SERVICES = {
  '/servicios/geo': {
    ...baseService('/servicios/geo'),
    name: 'GEO — Generative Engine Optimization',
    serviceType: 'Generative Engine Optimization',
    category: 'AI Search Optimization',
    description:
      'Optimización para que tu marca sea citada por motores de IA como ChatGPT, Gemini, Claude y Perplexity. Incluye auditoría GEO, estrategia semántica, content engineering, authority building, datos estructurados y tracking de citaciones.',
    url: `${SITE_URL}/servicios/geo`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Fases del servicio GEO',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Auditoría GEO' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Estrategia Semántica' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Engineering' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Authority Building' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Datos Estructurados' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tracking y Optimización' } },
      ],
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '800',
      highPrice: '8000',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
    },
  },

  '/seo-completo': {
    ...baseService('/seo-completo'),
    name: 'SEO Completo',
    serviceType: 'Search Engine Optimization',
    category: 'SEO Services',
    description:
      'Servicio SEO integral: auditoría técnica, estrategia de contenidos, link building, visibilidad en IA y reporting mensual ejecutivo. Resultados medibles en 3–6 meses.',
    url: `${SITE_URL}/seo-completo`,
  },

  '/auditoria-tecnica': {
    ...baseService('/auditoria-tecnica'),
    name: 'Auditoría Técnica SEO',
    serviceType: 'Technical SEO Audit',
    category: 'SEO Audit',
    description:
      'Auditoría técnica profesional de 10 áreas: crawlability, Core Web Vitals, arquitectura, JS rendering, schema, mobile-first, seguridad, canonicals, hreflang y logs. Informe en 72 horas.',
    url: `${SITE_URL}/auditoria-tecnica`,
  },

  '/seo-hibrido': {
    ...baseService('/seo-hibrido'),
    name: 'SEO Híbrido — Google + IA',
    serviceType: 'Hybrid SEO and GEO',
    category: 'SEO and AI Optimization',
    description:
      'Estrategia combinada de SEO clásico (Google) y GEO (ChatGPT, Gemini, Perplexity). Posicionamiento dual en buscadores tradicionales y motores generativos.',
    url: `${SITE_URL}/seo-hibrido`,
  },

  '/seo-consultoria': {
    ...baseService('/seo-consultoria'),
    name: 'Consultoría SEO Estratégica',
    serviceType: 'SEO Consulting',
    category: 'Strategic Consulting',
    description:
      'Consultoría SEO aplicada con foco en resultados: hoja de ruta priorizada, análisis experto, sesiones mensuales y acompañamiento en la implementación.',
    url: `${SITE_URL}/seo-consultoria`,
  },

  '/seo-analytics': {
    ...baseService('/seo-analytics'),
    name: 'SEO Analytics Dashboard',
    serviceType: 'SEO Analytics and Reporting',
    category: 'SEO Reporting',
    description:
      'Medición y análisis SEO para decisiones basadas en datos: dashboards personalizados, tracking de rankings, conversiones orgánicas y autoridad.',
    url: `${SITE_URL}/seo-analytics`,
  },

  '/analisis-seo-gratuito': {
    ...baseService('/analisis-seo-gratuito'),
    name: 'Análisis SEO + GEO Gratuito',
    serviceType: 'Free SEO Audit',
    category: 'SEO Analysis',
    description:
      'Análisis gratuito que evalúa SEO on-page, técnico, rendimiento, mobile, GEO, servidor y off-page. Score 0–100 con top 3 recomendaciones. Sin registro.',
    url: `${SITE_URL}/analisis-seo-gratuito`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
};
