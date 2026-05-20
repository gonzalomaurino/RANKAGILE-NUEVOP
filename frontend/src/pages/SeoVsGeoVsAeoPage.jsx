import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const disciplines = [
  {
    num: '01',
    name: 'SEO',
    full: 'Search Engine Optimization',
    tag: 'Base de autoridad',
    body: 'Lleva más de 25 años definiendo cómo las empresas compiten en los resultados de Google. Trabaja con señales de autoridad (backlinks), relevancia técnica (Core Web Vitals) y calidad de contenido. Las AI Overviews de Google están reduciendo el tráfico orgánico de webs que no están citadas como fuente. SEO + GEO ya no son opcionales por separado.',
  },
  {
    num: '02',
    name: 'AEO',
    full: 'Answer Engine Optimization',
    tag: 'Respuesta directa',
    body: 'Especialización dentro del SEO orientada a conseguir el featured snippet o responder directamente en voz. Trabaja con FAQ Schema, estructura pregunta-respuesta y claridad semántica extrema. Es relevante para búsquedas conversacionales, pero no cubre la visibilidad en ChatGPT, Gemini o Perplexity.',
  },
  {
    num: '03',
    name: 'GEO',
    full: 'Generative Engine Optimization',
    tag: 'Frontera 2026',
    body: 'No busca rankings en listas, sino presencia en respuestas generativas. Un LLM devuelve una respuesta y cita entre 3 y 5 marcas. GEO trabaja para que tu empresa esté en esa lista. Las palancas son: autoridad semántica, densidad informacional, datos estructurados para Knowledge Graph y arquitectura de citas digitales.',
  },
];

const comparison = [
  { variable: 'Objetivo', seo: 'Ranking en SERPs', aeo: 'Featured snippets', geo: 'Citaciones en IA' },
  { variable: 'Canal principal', seo: 'Google, Bing', aeo: 'Google (posición 0)', geo: 'ChatGPT, Gemini, Perplexity' },
  { variable: 'Resultado visible', seo: 'Posición 1-10', aeo: 'Caja de respuesta directa', geo: 'Mención de marca en respuesta' },
  { variable: 'Tiempo de resultado', seo: '3–12 meses', aeo: '2–6 meses', geo: '1–6 meses (según motor)' },
  { variable: 'Palanca principal', seo: 'Autoridad + técnica', aeo: 'Estructura Q&A', geo: 'Presencia en fuentes de training data' },
  { variable: 'Métricas clave', seo: 'Posición, tráfico, CTR', aeo: 'Snippet ganado, CTR de voz', geo: 'Share of Voice en IA, citaciones' },
];

export default function SeoVsGeoVsAeoPage() {
  useDocumentMeta({
    title: 'SEO vs GEO vs AEO: Las Diferencias Reales en 2026 | RankAgile',
    description:
      'Tres siglas, tres objetivos distintos. Diferencias reales entre SEO, GEO y AEO, cuándo aplicar cada uno y por qué la estrategia ganadora de 2026 es integrarlos.',
  });

  return (
    <BlogPostLayout
      tag="SEO · GEO · AEO"
      date="Mar 2026"
      title="SEO vs GEO vs AEO: Las Diferencias Reales que Toda Empresa Debe Entender en 2026"
      lead="Tres siglas, tres objetivos distintos, una sola misión: que tu empresa aparezca donde tus clientes buscan. Acá los desglosamos sin tecnicismos innecesarios."
    >
      <h2>Las tres disciplinas de visibilidad digital</h2>
      <p>
        El ecosistema de búsqueda se fragmentó. Ya no alcanza con aparecer en la primera página de Google. Tus clientes buscan en ChatGPT, Gemini y Perplexity. Cada canal requiere una estrategia distinta pero coordinada.
      </p>
      {disciplines.map((d) => (
        <div key={d.num} className="blogpost-card">
          <h4 className="blogpost-card-title">
            {d.num} · {d.name} — {d.full}
            <span style={{ marginLeft: 10, fontSize: 11, fontWeight: 600, color: 'var(--accent)', border: '1px solid var(--accent)', padding: '2px 8px', borderRadius: 999 }}>
              {d.tag}
            </span>
          </h4>
          <p className="blogpost-card-body">{d.body}</p>
        </div>
      ))}

      <h2>Comparativa directa: SEO vs AEO vs GEO</h2>
      <table>
        <thead>
          <tr>
            <th>Variable</th>
            <th>SEO</th>
            <th>AEO</th>
            <th>GEO</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row) => (
            <tr key={row.variable}>
              <td><strong>{row.variable}</strong></td>
              <td>{row.seo}</td>
              <td>{row.aeo}</td>
              <td>{row.geo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>La estrategia correcta: las tres capas integradas</h2>
      <p>
        La pregunta correcta no es <strong>cuál elijo</strong> sino <strong>cómo las integro</strong>. SEO construye la base de autoridad. AEO captura búsquedas de respuesta directa. GEO posiciona en la capa de IA generativa.
      </p>
      <p className="blogpost-pullquote">
        La estrategia ganadora en 2026 no elige uno: combina SEO + GEO + AEO en una arquitectura de visibilidad integrada.
      </p>
      <p>
        En RankAgile diseñamos estrategias integradas que trabajan las tres capas con recursos coordinados. Si tu empresa ya tiene SEO maduro,{' '}
        <Link to="/servicios/geo">agregar GEO con RankAgile</Link> es la siguiente palanca de mayor impacto. Si recién empezás,{' '}
        <Link to="/blog/seo-que-es-y-para-que-sirve">entendé primero qué es el SEO y cómo funciona</Link> antes de construir las capas superiores.
      </p>

      <h2>¿Por qué GEO es urgente ahora?</h2>
      <p>
        El 72% de decisores B2B consulta una IA antes del primer contacto. Si no aparecés en esa respuesta, no entrás al ciclo de venta. La brecha entre empresas que ejecutan GEO y las que no se amplía cada mes.{' '}
        <Link to="/blog/por-que-no-aparezco-en-chatgpt">Entendé por qué tu empresa aún no aparece en ChatGPT</Link> y qué hacer para revertirlo.
      </p>

      <h2>Artículos relacionados del cluster GEO</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/servicios/geo">GEO: Ver metodología completa de RankAgile</Link>
        </h4>
        <p className="blogpost-card-body">Estrategia, fases de ejecución y casos de uso del servicio GEO de RankAgile.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/cuanto-cuesta-geo">¿Cuánto cuesta el GEO? Guía de precios 2026</Link>
        </h4>
        <p className="blogpost-card-body">Rangos de inversión, qué incluye cada nivel y ROI esperado.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-que-es-y-para-que-sirve">SEO: Qué es y para qué sirve</Link>
        </h4>
        <p className="blogpost-card-body">La base que toda empresa necesita antes de construir las capas de AEO y GEO.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/servicios/geo"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Ver el servicio GEO de RankAgile
        </Link>
      </p>
    </BlogPostLayout>
  );
}
