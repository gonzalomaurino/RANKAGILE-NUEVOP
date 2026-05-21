// src/seo/data/organization.js
// Configuración central de marca. Cambios aquí se propagan a TODOS los schemas.

export const SITE_URL = 'https://rankagile.com';

export const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'RankAgile',
  alternateName: 'RankAgile Agency',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    '@id': `${SITE_URL}/#logo`,
    url: `${SITE_URL}/logo.svg`,
    contentUrl: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
    caption: 'RankAgile',
  },
  image: { '@id': `${SITE_URL}/#logo` },
  description:
    'Agencia SEO internacional especializada en GEO (Generative Engine Optimization) y posicionamiento en motores de IA como ChatGPT, Gemini, Claude y Perplexity.',
  foundingDate: '2022',
  slogan: 'Posicionamiento inteligente. Resultados que escalan.',
  knowsAbout: [
    'SEO',
    'Generative Engine Optimization',
    'GEO',
    'AI Search Optimization',
    'Technical SEO',
    'Entity SEO',
    'Schema Markup',
    'Core Web Vitals',
    'Link Building',
    'Content Strategy',
  ],
  areaServed: [
    { '@type': 'Country', name: 'Argentina' },
    { '@type': 'Country', name: 'Peru' },
    { '@type': 'Country', name: 'Bolivia' },
    { '@type': 'Country', name: 'Spain' },
    { '@type': 'Country', name: 'Mexico' },
    { '@type': 'Country', name: 'Colombia' },
    { '@type': 'Country', name: 'Chile' },
  ],
  sameAs: [
    'https://www.linkedin.com/company/rankagile/',
    'https://www.instagram.com/rank.agile/',
    'https://www.facebook.com/rankagile',
    'https://www.youtube.com/@rankagile',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: `${SITE_URL}/contacto`,
      availableLanguage: ['Spanish', 'English'],
      areaServed: ['AR', 'PE', 'BO', 'ES', 'MX', 'CO', 'CL'],
    },
  ],
};

export const WEBSITE = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'RankAgile',
  description: 'Agencia SEO Internacional & GEO para IA',
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: ['es', 'en'],
};

// URL absoluta para una ruta relativa, considerando idioma
export const absoluteUrl = (path = '/', lang = 'es') => {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en' && !clean.startsWith('/en/') && clean !== '/en') {
    return `${SITE_URL}/en${clean === '/' ? '/' : clean}`;
  }
  return `${SITE_URL}${clean}`;
};
