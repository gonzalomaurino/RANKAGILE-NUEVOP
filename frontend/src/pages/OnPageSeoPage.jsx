import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const elements = [
  { num: '01', title: 'Title tag (etiqueta título)', body: 'El elemento de mayor peso en SEO on-page. Debe contener la keyword principal, tener entre 50 y 60 caracteres y ser único en cada página. Es lo que aparece en la pestaña del navegador y como enlace en los resultados de Google.' },
  { num: '02', title: 'Meta description', body: 'No impacta directamente en el ranking pero sí en el CTR. Una meta description bien escrita actúa como anuncio del contenido: debe resumir el valor de la página en 140-160 caracteres e incluir un gancho que motive el clic.' },
  { num: '03', title: 'H1 y jerarquía de encabezados', body: 'Cada página debe tener exactamente un H1 con la keyword principal y la propuesta de valor central. Los H2 y H3 estructuran el contenido en subsecciones que refuerzan la relevancia semántica y la legibilidad.' },
  { num: '04', title: 'Contenido con intención de búsqueda', body: 'La intención de búsqueda determina el formato: informacional (artículo o guía), transaccional (landing de venta), navegacional (homepage de marca). Publicar el tipo de contenido incorrecto para una keyword es el error más frecuente.' },
  { num: '05', title: 'Internal linking estratégico', body: 'Los enlaces internos distribuyen PageRank entre páginas y ayudan a Google a entender la relación temática del contenido. Páginas huérfanas (sin enlaces internos entrantes) raramente rankean, independientemente de su calidad.' },
  { num: '06', title: 'Optimización de imágenes', body: 'Nombre de archivo descriptivo, atributo alt con keyword relevante y formato WebP con compresión sin pérdida visible. Las imágenes no optimizadas son la causa más frecuente de LCP alto y mala puntuación en Core Web Vitals.' },
];

const checklist = [
  'Title tag único con keyword principal, 50-60 caracteres.',
  'Meta description atractiva con CTA implícito, 140-160 caracteres.',
  'H1 único con keyword principal y propuesta de valor.',
  'H2-H3 estructurando el contenido en secciones temáticas.',
  'Keyword principal en el primer párrafo (100-150 palabras).',
  'Imágenes con alt descriptivo y compresión WebP.',
  'Internal links hacia páginas relacionadas de mayor autoridad.',
  'URL descriptiva, corta y con keyword (sin parámetros innecesarios).',
  'Schema apropiado (Article, FAQPage, Product según el tipo de página).',
  'Canonical apuntando a sí misma (o a la versión canónica si hay duplicados).',
];

export default function OnPageSeoPage() {
  useDocumentMeta({
    title: 'Qué es SEO On-Page: Optimización Completa de Páginas | RankAgile',
    description:
      'El SEO on-page optimiza elementos dentro de cada página para mejorar su posicionamiento: contenido, headings, meta tags, internal linking y más.',
  });

  return (
    <>
      <PageSeo
        title="Qué es SEO On-Page: Optimización Completa de Páginas | RankAgile"
        description="El SEO on-page optimiza elementos dentro de cada página para mejorar su posicionamiento: contenido, headings, meta tags, internal linking y más."
        image="/og/blog/que-es-on-page-seo.png"
        type="article"
      />
      <BlogPostLayout
      tag="SEO On-Page"
      date="May 2026"
      title="Qué es el SEO On-Page: Guía de Optimización Página a Página"
      lead="El SEO on-page trabaja todos los elementos que están dentro de tu control directo: title, H1, contenido, imágenes, internal linking y schema. Es la capa que conecta la intención de búsqueda de tu audiencia con el contenido que publicás."
    >
      {/* TODO: contenido real */}
      <h2>Definición de SEO on-page</h2>
      <p>
        El SEO on-page (también llamado SEO on-site) es el conjunto de optimizaciones que se aplican dentro de cada página web para mejorar su posicionamiento en los motores de búsqueda. Incluye la optimización del contenido (palabras clave, estructura semántica, densidad informacional), los metadatos (title, description, canonical), la jerarquía de encabezados (H1-H6), las imágenes y el enlazado interno.
      </p>
      <p>
        A diferencia del SEO off-page (que trabaja sobre señales externas como backlinks) y el SEO técnico (que trabaja sobre la infraestructura), el SEO on-page actúa sobre el contenido que controla el propio webmaster. Es la palanca de mayor impacto a corto plazo y la que está disponible para cualquier sitio sin importar su autoridad de dominio.
      </p>
      <p>
        Para entender cómo el SEO on-page se integra con los demás pilares, consultá la{' '}
        <Link to="/blog/seo-que-es-y-para-que-sirve">guía completa de SEO de RankAgile</Link>.
      </p>

      <h2>Los 6 elementos clave del SEO on-page</h2>
      {elements.map((e) => (
        <div key={e.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{e.num} · {e.title}</h4>
          <p className="blogpost-card-body">{e.body}</p>
        </div>
      ))}

      <h2>La intención de búsqueda: el principio que gobierna el SEO on-page</h2>
      <p>
        Antes de optimizar cualquier elemento, hay que entender qué espera encontrar el usuario que busca esa keyword. Google clasifica las intenciones en cuatro categorías:
      </p>
      <ul>
        <li><strong>Informacional:</strong> el usuario quiere aprender algo. Formato óptimo: artículo de blog, guía, explicación.</li>
        <li><strong>Navigacional:</strong> el usuario busca un sitio específico. Formato: homepage o página de marca.</li>
        <li><strong>Transaccional:</strong> el usuario quiere comprar o contratar. Formato: landing page con CTA claro.</li>
        <li><strong>Comercial/investigativa:</strong> el usuario compara opciones antes de decidir. Formato: comparativa, reseña, tabla de precios.</li>
      </ul>
      <p className="blogpost-pullquote">
        Publicar contenido informacional para una keyword transaccional, o viceversa, es el error de SEO on-page más costoso y frecuente.
      </p>

      <h2>Cómo optimizar el title tag de forma efectiva</h2>
      <p>
        El title tag tiene más peso en el ranking que cualquier otro elemento on-page. La fórmula más efectiva:
      </p>
      <ul>
        <li>Keyword principal al inicio (máximo en los primeros 3 palabras).</li>
        <li>Propuesta de valor diferenciadora (qué aporta esta página frente a otras).</li>
        <li>Nombre de marca al final separado con pipe o guion.</li>
        <li>Longitud: 50-60 caracteres para no truncarse en los resultados.</li>
      </ul>
      <p>
        Ejemplo: "Qué es el SEO On-Page: Optimización Completa 2026 | RankAgile"
      </p>

      <h2>Internal linking: la palanca más subestimada del SEO on-page</h2>
      <p>
        Cada enlace interno que ponés en una página transfiere una porción de autoridad (PageRank) hacia la página de destino. Páginas con pocos o ningún enlace interno entrante raramente rankean, incluso con contenido excelente.
      </p>
      <p>
        La regla básica: las páginas más importantes (las que más quieras rankear) deben recibir más enlaces internos. Las páginas de mayor contenido (artículos del blog) deben enlazar a las páginas de servicios con anchors comerciales.
      </p>
      <p>
        Este principio también aplica al GEO: los artículos de blog del cluster GEO deben enlazar al pillar{' '}
        <Link to="/servicios/geo">servicio de GEO de RankAgile</Link> con anchors comerciales para consolidar autoridad temática.
      </p>

      <h2>Checklist de SEO on-page para cada nueva página</h2>
      <ul>
        {checklist.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-que-es-y-para-que-sirve">SEO: Guía completa del posicionamiento web</Link>
        </h4>
        <p className="blogpost-card-body">Los tres pilares del SEO, el algoritmo de Google y cómo construir visibilidad orgánica sostenible.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-tecnico-que-es">Qué es el SEO Técnico y cómo auditarlo</Link>
        </h4>
        <p className="blogpost-card-body">Core Web Vitals, rastreabilidad, indexabilidad y Schema: la capa que funciona debajo del contenido.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-link-building">Qué es Link Building y cómo conseguir backlinks en 2026</Link>
        </h4>
        <p className="blogpost-card-body">La capa de autoridad externa que complementa la optimización on-page.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/seo-completo"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Ver servicio de SEO Completo
        </Link>
      </p>
    </BlogPostLayout>
    </>
  );
}
