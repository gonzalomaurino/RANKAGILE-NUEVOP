import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const components = [
  { num: '01', title: 'Rastreabilidad e indexabilidad', body: 'Googlebot debe poder acceder a todas tus páginas importantes. Un robots.txt mal configurado, errores de servidor o bloqueos por JavaScript pueden impedir que el crawler indexe tu contenido, haciéndolo invisible aunque sea excelente.' },
  { num: '02', title: 'Core Web Vitals', body: 'LCP (Largest Contentful Paint) debe ser inferior a 2.5s, INP inferior a 200ms y CLS inferior a 0.1. Estas métricas miden la experiencia real del usuario y forman parte directa del ranking de Google desde 2021.' },
  { num: '03', title: 'Estructura de URLs y arquitectura', body: 'URLs descriptivas, jerarquía de carpetas coherente con la intención de búsqueda y no más de 3 niveles de profundidad para páginas de alta prioridad. La arquitectura debe permitir que el PageRank interno fluya hacia las páginas más importantes.' },
  { num: '04', title: 'HTTPS y seguridad', body: 'Google usa HTTPS como señal de ranking desde 2014. Además, errores de certificado o contenido mixto (recursos cargados por HTTP en páginas HTTPS) generan alertas en navegadores que dañan la conversión y la confianza.' },
  { num: '05', title: 'Datos estructurados (Schema.org)', body: 'El markup Schema comunica al algoritmo qué tipo de entidad es cada página: organización, artículo, producto, FAQ, evento. Aumenta la probabilidad de resultados enriquecidos y mejora la comprensión semántica del contenido.' },
  { num: '06', title: 'Hreflang y SEO internacional', body: 'Si tu sitio tiene versiones en múltiples idiomas, el atributo hreflang indica a Google qué versión servir a cada usuario. Errores en hreflang generan canibalización entre versiones lingüísticas.' },
];

const audit = [
  { check: 'Sitemap XML', detail: 'Incluye todas las páginas indexables, excluye canónicas alternativas y noindex, está registrado en Google Search Console.' },
  { check: 'Robots.txt', detail: 'No bloquea Googlebot en páginas clave, no bloquea recursos CSS/JS que el renderizador necesita.' },
  { check: 'Canonicals', detail: 'Cada URL tiene una canonical correctamente apuntada. Páginas con parámetros o duplicados tienen canonical hacia la versión principal.' },
  { check: 'Core Web Vitals', detail: 'Medir con PageSpeed Insights y Google Search Console → informe de experiencia de página. Detectar páginas por debajo del umbral.' },
  { check: 'Errores de cobertura', detail: 'En GSC, revisar "Páginas" → "No indexada" para identificar errores 404, Soft 404, Redireccionada y Excluida por noindex.' },
  { check: 'Velocidad en móvil', detail: 'El 70% del tráfico es móvil. Comprimir imágenes, implementar lazy loading y usar CDN para reducir el LCP en dispositivos de gama media.' },
];

export default function SeoTecnicoPage() {
  useDocumentMeta({
    title: 'Qué es el SEO Técnico: Guía Completa 2026 | RankAgile',
    description:
      'SEO técnico abarca la optimización de la infraestructura web para que Google pueda crawlear, indexar y rankear tu sitio. Te explicamos sus componentes clave.',
  });

  return (
    <>
      <PageSeo
        title="Qué es el SEO Técnico: Guía Completa 2026 | RankAgile"
        description="SEO técnico abarca la optimización de la infraestructura web para que Google pueda crawlear, indexar y rankear tu sitio. Te explicamos sus componentes clave."
        image="/og/blog/seo-tecnico-que-es.png"
        type="article"
      />
      <BlogPostLayout
      tag="SEO Técnico"
      date="May 2026"
      title="Qué es el SEO Técnico y cómo se aplica en 2026"
      lead="El SEO técnico es la disciplina que garantiza que los motores de búsqueda puedan acceder, interpretar y rankear tu sitio sin fricciones. Sin una base técnica sólida, el mejor contenido del mundo puede quedar invisible."
    >
      {/* TODO: contenido real */}
      <h2>Qué es el SEO técnico: definición directa</h2>
      <p>
        El SEO técnico comprende todas las optimizaciones de la infraestructura de un sitio web que facilitan el rastreo, la indexación y el rankeado por parte de los motores de búsqueda. A diferencia del SEO de contenido (que trabaja sobre el texto y la intención) o el SEO de autoridad (que trabaja sobre los backlinks), el SEO técnico actúa sobre la capa invisible que conecta tu sitio con el algoritmo de Google. Sin ella, las otras dos capas no funcionan.
      </p>

      <h2>Por qué el SEO técnico es la base de cualquier estrategia</h2>
      <p>
        Google no puede rankear lo que no puede leer. Un sitio con contenido excelente pero con problemas técnicos graves —velocidad de carga deficiente, páginas bloqueadas por robots.txt, estructura de URLs caótica— competirá en desventaja contra sitios técnicamente sólidos aunque con contenido inferior.
      </p>
      <p>
        Además, Google usa señales técnicas directamente en su algoritmo de ranking: Core Web Vitals, HTTPS, experiencia de página en móvil. No son señales de calidad "adicionales"; son factores de posicionamiento desde 2021.
      </p>
      <p>
        Si querés entender el ecosistema completo de SEO del que forma parte el SEO técnico, la{' '}
        <Link to="/blog/seo-que-es-y-para-que-sirve">guía completa de SEO de RankAgile</Link> es el punto de partida.
      </p>

      <h2>Los 6 componentes del SEO técnico</h2>
      {components.map((c) => (
        <div key={c.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{c.num} · {c.title}</h4>
          <p className="blogpost-card-body">{c.body}</p>
        </div>
      ))}

      <h2>Cómo hacer una auditoría técnica SEO</h2>
      <p>
        Una auditoría técnica SEO sistemática revisa los puntos críticos en orden de impacto. Este es el checklist mínimo para un sitio de 50-500 páginas:
      </p>
      <table>
        <thead>
          <tr>
            <th>Componente</th>
            <th>Qué verificar</th>
          </tr>
        </thead>
        <tbody>
          {audit.map((row) => (
            <tr key={row.check}>
              <td><strong>{row.check}</strong></td>
              <td>{row.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>SEO técnico vs. SEO de contenido vs. SEO de autoridad</h2>
      <p>
        Los tres pilares del SEO operan en paralelo y se refuerzan. El SEO técnico garantiza que el contenido se indexe; el SEO de contenido garantiza que el contenido rankee para las keywords correctas; el SEO de autoridad (link building) garantiza que Google confíe en el dominio. Fallar en cualquiera de los tres limita los resultados de los otros dos.
      </p>
      <p className="blogpost-pullquote">
        Una web rápida, rastreable y con Schema correcto puede rankear con menos contenido que una web lenta y con errores técnicos graves.
      </p>

      <h2>Core Web Vitals: el indicador técnico más crítico en 2026</h2>
      <p>
        Google evalúa tres métricas de experiencia de usuario que impactan directamente en el ranking:
      </p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint):</strong> tiempo hasta que el elemento más grande de la página se renderiza. Umbral: ≤ 2.5s.</li>
        <li><strong>INP (Interaction to Next Paint):</strong> tiempo de respuesta a interacciones del usuario. Umbral: ≤ 200ms.</li>
        <li><strong>CLS (Cumulative Layout Shift):</strong> estabilidad visual durante la carga. Umbral: ≤ 0.1.</li>
      </ul>
      <p>
        La mayoría de sitios sin optimización de imágenes WebP, lazy loading y CDN no superan el umbral LCP en dispositivos móviles de gama media. Este es el problema técnico de mayor impacto en ranking para la mayoría de empresas.
      </p>

      <h2>El SEO técnico en la era de la IA</h2>
      <p>
        Los crawlers de los LLMs (modelos de lenguaje de los motores de IA) también requieren buena estructura técnica. Schema.org Organization, FAQPage y Service son los tipos de markup más relevantes para que ChatGPT, Gemini y Perplexity extraigan y procesen correctamente la información de tu empresa. Esto es parte de lo que trabaja la disciplina del{' '}
        <Link to="/servicios/geo">GEO (Generative Engine Optimization)</Link>.
      </p>

      <h2>Artículos relacionados</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-que-es-y-para-que-sirve">SEO: Guía completa para entender el posicionamiento</Link>
        </h4>
        <p className="blogpost-card-body">Los tres pilares del SEO, cómo funciona el algoritmo y cómo construir una estrategia sostenible.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-on-page-seo">Qué es el SEO On-Page y cómo optimizar cada página</Link>
        </h4>
        <p className="blogpost-card-body">Títulos, H1-H6, meta descriptions, contenido y internal linking: la capa que trabaja sobre el texto.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/que-es-eeat-google">Qué es E-E-A-T y cómo construir señales de autoridad</Link>
        </h4>
        <p className="blogpost-card-body">Experiencia, Expertise, Autoridad y Confianza: los criterios de calidad que Google usa para evaluar contenido.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/auditoria-tecnica"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Ver servicio de Auditoría Técnica SEO
        </Link>
      </p>
    </BlogPostLayout>
    </>
  );
}
