import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const schema_types = [
  { num: '01', type: 'Organization', priority: 'Crítico', where: 'Homepage', desc: 'Define tu empresa como entidad reconocible. Debe incluir name, url, logo, description, foundingDate, address, contactPoint, sameAs (todos tus perfiles verificados). Es la base del Knowledge Panel y la primera fuente que leen los LLMs sobre tu empresa.' },
  { num: '02', type: 'Service', priority: 'Alto', where: 'Páginas de servicio', desc: 'Describe cada servicio de forma estructurada: name, description, provider, areaServed, offers (con precio o rango de precio). Ayuda a los LLMs a entender qué ofrece tu empresa y a qué mercados.' },
  { num: '03', type: 'FAQPage', priority: 'Alto', where: 'Páginas con FAQs', desc: 'Convierte preguntas frecuentes en datos estructurados que Google puede mostrar en featured snippets y que los LLMs extraen directamente para responder preguntas de los usuarios. Máximo impacto en citabilidad.' },
  { num: '04', type: 'Article / BlogPosting', priority: 'Medio-alto', where: 'Artículos de blog', desc: 'Marca el contenido editorial con author (Person u Organization), datePublished, dateModified, headline e image. Refuerza las señales E-E-A-T y la autoría reconocible del contenido.' },
  { num: '05', type: 'BreadcrumbList', priority: 'Medio', where: 'Todas las páginas', desc: 'Muestra la jerarquía de navegación en los resultados de búsqueda. Mejora el CTR y ayuda a Google a entender la arquitectura del sitio. Importante para sitios con múltiples niveles de categorías.' },
  { num: '06', type: 'WebSite + SearchAction', priority: 'Medio', where: 'Homepage', desc: 'Habilita el sitelink searchbox en los resultados de búsqueda de marca. Permite a los usuarios buscar directamente dentro de tu sitio desde los resultados de Google.' },
];

export default function SchemaMarkupGeoPage() {
  useDocumentMeta({
    title: 'Schema Markup para GEO: Datos Estructurados para IA | RankAgile',
    description:
      'Qué tipos de Schema Markup implementar para que ChatGPT, Gemini y Perplexity entiendan tu marca. Guía técnica con ejemplos prácticos.',
  });

  return (
    <>
      <PageSeo
        title="Schema Markup para GEO: Datos Estructurados para IA | RankAgile"
        description="Qué tipos de Schema Markup implementar para que ChatGPT, Gemini y Perplexity entiendan tu marca. Guía técnica con ejemplos prácticos."
        image="/og/blog/schema-markup-para-geo.png"
        type="article"
      />
      <BlogPostLayout
      tag="GEO · Schema"
      date="May 2026"
      title="Schema Markup para GEO: Datos Estructurados que los LLMs Procesan"
      lead="Schema Markup es el lenguaje que permite a los motores de búsqueda y a los modelos de IA procesar información de tu sitio de forma estructurada. En GEO, implementar el Schema correcto es la diferencia entre ser una entidad reconocible o un dominio anónimo para los LLMs."
    >
      {/* TODO: contenido real */}
      <h2>Qué es Schema Markup y por qué importa para GEO</h2>
      <p>
        Schema Markup (o datos estructurados) es un vocabulario estandarizado de etiquetas semánticas (Schema.org) que se implementan en el HTML de un sitio para comunicar el significado del contenido a las máquinas. A diferencia del HTML convencional (que describe el formato visual), el Schema describe el significado: "esto es el precio de un servicio", "este es el autor del artículo", "esta es la dirección de la empresa".
      </p>
      <p>
        Para el GEO, el Schema Markup tiene un rol doble: primero, es una de las fuentes primarias que el Google Knowledge Graph usa para construir el Knowledge Panel de tu empresa. Segundo, los crawlers de entrenamiento de los LLMs (que rastrean la web pública) pueden leer e interpretar Schema, lo que facilita que los modelos aprendan información precisa y estructurada sobre tu empresa.
      </p>
      <p>
        Si querés entender el contexto completo de por qué esto importa, la{' '}
        <Link to="/blog/como-aparecer-en-motores-de-ia">guía completa de visibilidad en motores de IA</Link> explica cómo el Schema es uno de los 6 pasos del proceso de GEO.
      </p>

      <h2>Los 6 tipos de Schema más importantes para GEO</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tipo</th>
            <th>Prioridad</th>
            <th>Dónde usar</th>
          </tr>
        </thead>
        <tbody>
          {schema_types.map((row) => (
            <tr key={row.num}>
              <td>{row.num}</td>
              <td><strong>{row.type}</strong></td>
              <td style={{ color: 'var(--accent)', fontWeight: 600, whiteSpace: 'nowrap' }}>{row.priority}</td>
              <td>{row.where}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Detalle de cada Schema type crítico para GEO</h2>
      {schema_types.map((s) => (
        <div key={s.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{s.num} · {s.type} <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent)', border: '1px solid var(--accent)', padding: '2px 8px', borderRadius: 999, marginLeft: 8 }}>{s.priority}</span></h4>
          <p className="blogpost-card-body">{s.desc}</p>
        </div>
      ))}

      <h2>Ejemplo de Schema Organization básico</h2>
      <p>Este es el mínimo indispensable del Schema Organization para GEO (implementar en la homepage como JSON-LD):</p>
      <div className="blogpost-card" style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 13, lineHeight: 1.6 }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: 'var(--fg-dim)' }}>{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nombre de Tu Empresa",
  "url": "https://tudominio.com",
  "logo": "https://tudominio.com/logo.png",
  "description": "Descripción clara en 100-150 caracteres.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AR"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "hola@tudominio.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/tu-empresa",
    "https://www.wikidata.org/wiki/Q...",
    "https://twitter.com/tu_empresa"
  ]
}`}</pre>
      </div>

      <h2>Schema FAQPage: el tipo de mayor impacto en citabilidad</h2>
      <p>
        El FAQPage Schema convierte preguntas frecuentes en respuestas directas que los LLMs pueden extraer y citar textualmente. Es el tipo de Schema con mayor impacto en citabilidad en motores de IA porque las respuestas estructuradas Q&A son exactamente el formato que los modelos buscan para generar sus propias respuestas.
      </p>
      <p className="blogpost-pullquote">
        Una FAQ bien implementada con Schema FAQPage puede ser citada por ChatGPT o Gemini textualmente, con tu marca como fuente.
      </p>

      <h2>Cómo validar tu Schema Markup</h2>
      <p>Antes de dar por implementado el Schema, validar con:</p>
      <ul>
        <li><strong>Google Rich Results Test:</strong> verifica que el Schema es válido y elegible para resultados enriquecidos.</li>
        <li><strong>Schema Markup Validator (schema.org/validator):</strong> validación técnica del vocabulario.</li>
        <li><strong>Google Search Console → Experiencia → Datos estructurados:</strong> monitorear errores y advertencias post-indexación.</li>
      </ul>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/como-aparecer-en-motores-de-ia">Cómo aparecer en motores de IA: guía completa</Link>
        </h4>
        <p className="blogpost-card-body">El Schema Markup en el contexto del proceso completo de GEO.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/knowledge-panel-google-como-conseguirlo">Cómo conseguir un Knowledge Panel en Google</Link>
        </h4>
        <p className="blogpost-card-body">El Schema Organization es la base técnica del Knowledge Panel.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-tecnico-que-es">Qué es el SEO Técnico</Link>
        </h4>
        <p className="blogpost-card-body">El Schema Markup como parte de la capa técnica del SEO.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/servicios/geo"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Implementar GEO en tu empresa
        </Link>
      </p>
    </BlogPostLayout>
    </>
  );
}
