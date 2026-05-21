// src/seo/SchemaJsonLd.jsx
// Inyecta JSON-LD en <head>. Lo elimina al desmontar para evitar duplicados entre rutas.

import { useEffect } from 'react';

const STAMP = 'data-rankagile-schema';

const SchemaJsonLd = ({ schema, id }) => {
  useEffect(() => {
    if (!schema) return undefined;

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute(STAMP, id || 'rankagile');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema, id]);

  return null;
};

export default SchemaJsonLd;
