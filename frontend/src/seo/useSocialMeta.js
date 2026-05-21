// src/seo/useSocialMeta.js
// Inyecta meta tags Open Graph y Twitter Cards en <head>.
// Mismo patrón que useDocumentMeta — actualiza/crea y limpia al desmontar.

import { useEffect } from 'react';

import { SITE_URL } from './data/organization';

const STAMP = 'data-rankagile-social';

const upsertMeta = (attr, key, value) => {
  if (!value) return null;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    el.setAttribute(STAMP, 'true');
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
  return el;
};

/**
 * useSocialMeta — sincroniza OG y Twitter Cards con la ruta actual.
 * @param {Object} opts
 * @param {string} opts.title — Title para OG/Twitter (recomendado: el mismo que el title de la página)
 * @param {string} opts.description — Description para OG/Twitter
 * @param {string} opts.url — URL canónica absoluta
 * @param {string} [opts.image] — URL absoluta de la imagen de preview (1200x630). Default: /og/default.png
 * @param {string} [opts.type] — og:type. Default: 'website'. Usar 'article' en blog.
 * @param {string} [opts.locale] — og:locale. Default: 'es_ES'.
 */
export const useSocialMeta = ({
  title,
  description,
  url,
  image,
  type = 'website',
  locale = 'es_ES',
}) => {
  useEffect(() => {
    const ogImage = image || `${SITE_URL}/og/default.png`;
    const ogUrl = url || window.location.href;

    const created = [
      // Open Graph
      upsertMeta('property', 'og:type', type),
      upsertMeta('property', 'og:site_name', 'RankAgile'),
      upsertMeta('property', 'og:title', title),
      upsertMeta('property', 'og:description', description),
      upsertMeta('property', 'og:url', ogUrl),
      upsertMeta('property', 'og:image', ogImage),
      upsertMeta('property', 'og:image:width', '1200'),
      upsertMeta('property', 'og:image:height', '630'),
      upsertMeta('property', 'og:locale', locale),
      // Twitter
      upsertMeta('name', 'twitter:card', 'summary_large_image'),
      upsertMeta('name', 'twitter:title', title),
      upsertMeta('name', 'twitter:description', description),
      upsertMeta('name', 'twitter:image', ogImage),
      upsertMeta('name', 'twitter:site', '@rankagile'),
    ].filter(Boolean);

    return () => {
      // Solo limpiar lo que creó este hook (no tags previas del HTML estático)
      created.forEach((el) => {
        if (el && el.getAttribute(STAMP) === 'true' && el.parentNode) {
          el.parentNode.removeChild(el);
        }
      });
    };
  }, [title, description, url, image, type, locale]);
};
