// src/seo/PageSeo.jsx
// Wrapper que combina JSON-LD + Open Graph + Twitter Cards en un solo componente.
// Pensado para usarse en cada página junto a useDocumentMeta y useHreflang.

import { useSchema } from './useSchema';
import { useSocialMeta } from './useSocialMeta';
import SchemaJsonLd from './SchemaJsonLd';
import { SITE_URL } from './data/organization';

/**
 * <PageSeo
 *   title="..."           // mismo title que useDocumentMeta
 *   description="..."     // misma description
 *   image="/og/geo.png"   // opcional, ruta relativa o absoluta
 *   type="article"        // 'website' por defecto; 'article' en blog
 *   locale="es_ES"        // 'en_US' en versión EN
 * />
 */
const PageSeo = ({ title, description, image, type = 'website', locale = 'es_ES' }) => {
  const schema = useSchema();
  const absoluteImage = image
    ? image.startsWith('http')
      ? image
      : `${SITE_URL}${image.startsWith('/') ? image : `/${image}`}`
    : undefined;

  useSocialMeta({
    title,
    description,
    url: typeof window !== 'undefined' ? window.location.href : SITE_URL,
    image: absoluteImage,
    type,
    locale,
  });

  return <SchemaJsonLd schema={schema} id="page-graph" />;
};

export default PageSeo;
