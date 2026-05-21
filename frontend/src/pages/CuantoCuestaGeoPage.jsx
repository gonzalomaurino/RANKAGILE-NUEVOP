import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const tiers = [
  {
    level: 'Nivel Entrada',
    price: '800 – 1.500 USD/mes',
    desc: 'Auditoría básica + estrategia de contenido + implementación de Schema. Ideal para empresas con presupuesto limitado que quieren empezar. Resultados en 3–6 meses.',
  },
  {
    level: 'Nivel Profesional',
    price: '1.500 – 3.500 USD/mes',
    badge: 'Más elegido',
    desc: 'Estrategia completa + producción de contenido mensual + authority building en medios especializados + reporting avanzado. El nivel óptimo para empresas B2B en mercados medianos.',
  },
  {
    level: 'Nivel Premium',
    price: '3.500 – 8.000+ USD/mes',
    desc: 'Estrategia GEO + SEO integrada, equipo dedicado, producción intensiva, campañas en múltiples idiomas y mercados, reportes ejecutivos semanales.',
  },
];

const includes = [
  { title: 'Auditoría de visibilidad inicial', body: 'Análisis de citaciones actuales en ChatGPT, Gemini y Perplexity para tus keywords objetivo.' },
  { title: 'Análisis de competidores en IA', body: 'Benchmark de Share of Voice vs. tus principales rivales en motores generativos.' },
  { title: 'Estrategia de contenido GEO', body: 'Plan de topics, formatos y densidad informacional orientado a cómo aprenden los LLMs.' },
  { title: 'Producción de contenido optimizado', body: 'Artículos, páginas pilar y Q&A diseñados para ser citados por IA.' },
  { title: 'Authority building', body: 'Publicaciones en medios de industria, directorios y fuentes de referencia que los modelos usan.' },
  { title: 'Datos estructurados avanzados', body: 'Schema.org, Knowledge Graph y markup técnico para que los LLMs procesen tu información correctamente.' },
  { title: 'Reporting mensual de citaciones', body: 'Tracking de menciones en motores de IA con variación mes a mes y análisis de Share of Voice.' },
];

export default function CuantoCuestaGeoPage() {
  useDocumentMeta({
    title: '¿Cuánto Cuesta el GEO? Guía de Precios 2026 | RankAgile',
    description:
      'Sin rodeos: qué incluye un servicio GEO real, qué exigir por tu inversión y los rangos de precio justos en el mercado 2026. Guía transparente de RankAgile.',
  });

  return (
    <>
      <PageSeo
        title="¿Cuánto Cuesta el GEO? Guía de Precios 2026 | RankAgile"
        description="Sin rodeos: qué incluye un servicio GEO real, qué exigir por tu inversión y los rangos de precio justos en el mercado 2026. Guía transparente de RankAgile."
        image="/og/blog/cuanto-cuesta-geo.png"
        type="article"
      />
      <BlogPostLayout
      tag="GEO · Precios"
      date="Abr 2025"
      title="¿Cuánto Cuesta el GEO y Qué Incluye?"
      lead="Sin rodeos. Te explicamos qué incluye un servicio GEO real, qué debés exigir por tu inversión y cuál es el rango de precios justo en el mercado actual."
    >
      <h2>Por qué el precio del GEO varía tanto</h2>
      <p>
        El mercado GEO es joven y sin estándares establecidos. Esto genera una brecha enorme entre agencias: desde servicios de <strong>300 USD/mes</strong> que son consultoría genérica, hasta retainers de <strong>8.000 USD/mes</strong> con equipos especializados en LLM optimization. El precio refleja la profundidad técnica, la velocidad de ejecución y el nivel de especialización del equipo.
      </p>
      <p>
        A diferencia del SEO tradicional, el GEO requiere capacidades que pocas agencias tienen: análisis de citaciones en modelos de lenguaje, content engineering orientado a LLMs y construcción de presencia en fuentes que los modelos usan como referencia de entrenamiento.
      </p>

      <h2>Qué debe incluir un servicio GEO completo</h2>
      <p>Antes de comparar precios, verificá que el servicio incluya estos componentes. Si alguno falta, el servicio es incompleto.</p>
      {includes.map((item) => (
        <div key={item.title} className="blogpost-card">
          <h4 className="blogpost-card-title">{item.title}</h4>
          <p className="blogpost-card-body">{item.body}</p>
        </div>
      ))}

      <h2>Rangos de precio orientativos por nivel de servicio</h2>
      <p>Estos rangos reflejan el mercado de agencias especializadas en 2026. Un precio por debajo del nivel entrada generalmente indica que el servicio no cubre los componentes críticos.</p>
      {tiers.map((tier) => (
        <div key={tier.level} className="blogpost-card">
          <h4 className="blogpost-card-title">
            {tier.level} — {tier.price}
            {tier.badge && (
              <span style={{ marginLeft: 10, fontSize: 11, fontWeight: 600, color: 'var(--accent)', border: '1px solid var(--accent)', padding: '2px 8px', borderRadius: 999 }}>
                {tier.badge}
              </span>
            )}
          </h4>
          <p className="blogpost-card-body">{tier.desc}</p>
        </div>
      ))}

      <h2>¿Vale la pena la inversión en GEO?</h2>
      <p>
        El ROI del GEO es acumulativo: cada citación en ChatGPT es un activo que trabaja 24/7 sin coste marginal. Clientes de RankAgile en nivel Profesional recuperan la inversión en <strong>4–9 meses</strong> cuando el pipeline está bien instrumentado.
      </p>
      <p className="blogpost-pullquote">
        Si tus clientes potenciales usan IA para decidir, la pregunta no es si podés permitirte hacer GEO. Es si podés permitirte no hacerlo.
      </p>
      <p>
        La ventana para construir ventaja competitiva en IA generativa se está cerrando. Las marcas que empiezan hoy tienen entre 6 y 18 meses de ventaja sobre quienes esperan.{' '}
        <Link to="/servicios/geo">Ver la metodología GEO de RankAgile</Link> y qué incluye cada fase de ejecución. O si ya querés entender el diagnóstico,{' '}
        <Link to="/blog/por-que-no-aparezco-en-chatgpt">entendé por qué tu empresa aún no aparece en ChatGPT</Link>.
      </p>

      <h2>Artículos relacionados del cluster GEO</h2>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/servicios/geo">GEO: Generative Engine Optimization — Ver servicio completo</Link>
        </h4>
        <p className="blogpost-card-body">La metodología completa de RankAgile para posicionar tu empresa en ChatGPT, Gemini y Perplexity.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/por-que-no-aparezco-en-chatgpt">Por qué tu empresa no aparece en ChatGPT (y cómo solucionarlo)</Link>
        </h4>
        <p className="blogpost-card-body">Las 5 razones reales por las que los modelos de IA no mencionan tu marca y el plan para revertirlo.</p>
      </div>
      <div className="blogpost-card">
        <h4 className="blogpost-card-title">
          <Link to="/blog/seo-vs-geo-vs-aeo">SEO vs GEO vs AEO: Las diferencias reales</Link>
        </h4>
        <p className="blogpost-card-body">Tres disciplinas, un solo objetivo. Cuándo aplicar cada una y cómo integrarlas en 2026.</p>
      </div>

      <hr />
      <p style={{ textAlign: 'center', marginTop: 32 }}>
        <Link
          to="/contacto"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Solicitar presupuesto GEO
        </Link>
      </p>
    </BlogPostLayout>
    </>
  );
}
