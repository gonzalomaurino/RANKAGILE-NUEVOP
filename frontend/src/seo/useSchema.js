// src/seo/useSchema.js
// Hook que resuelve qué schemas inyectar según la ruta actual.
// Usa @graph para combinar varios schemas en un solo <script>.

import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { ORGANIZATION, WEBSITE, SITE_URL } from './data/organization';
import { SERVICES } from './data/services';
import { FAQS } from './data/faqs';
import { ARTICLES } from './data/articles';
import { buildBreadcrumbs } from './data/breadcrumbs';

const stripLang = (path) => path.replace(/^\/en/, '') || '/';
const isBlogArticle = (path) => /^\/blog\/[^/]+$/.test(path);
const isHome = (path) => path === '/' || path === '';

export const useSchema = () => {
  const { pathname } = useLocation();
  const path = stripLang(pathname).replace(/\/$/, '') || '/';

  return useMemo(() => {
    const graph = [ORGANIZATION, WEBSITE];

    // Breadcrumb en todas las páginas internas
    if (!isHome(path)) {
      graph.push(buildBreadcrumbs(path));
    }

    // Service en páginas de servicio
    if (SERVICES[path]) {
      graph.push(SERVICES[path]);
    }

    // FAQPage donde corresponda
    if (FAQS[path]) {
      graph.push(FAQS[path]);
    }

    // Article en posts del blog
    if (isBlogArticle(path)) {
      const slug = path.replace('/blog/', '');
      if (ARTICLES[slug]) {
        graph.push(ARTICLES[slug]);
      }
    }

    // WebPage genérico (útil para páginas que no son ninguna de las anteriores)
    graph.push({
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}#webpage`,
      url: `${SITE_URL}${path}`,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      inLanguage: pathname.startsWith('/en') ? 'en' : 'es',
      about: { '@id': `${SITE_URL}/#organization` },
    });

    return {
      '@context': 'https://schema.org',
      '@graph': graph,
    };
  }, [path, pathname]);
};
