import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';
import PageSeo from '../seo/PageSeo';

const reasons = [
  {
    num: '01',
    title: 'Tu contenido no tiene densidad informacional suficiente',
    body: 'Los LLMs aprenden de contenido que responde preguntas con precisión y profundidad. Si tus páginas tienen textos genéricos de 300 palabras, el modelo no te aprende.',
  },
  {
    num: '02',
    title: 'Tenés poca presencia en fuentes de autoridad',
    body: 'Wikipedia, medios especializados, directorios de industria, G2, Capterra, LinkedIn editorial. Si tu marca no aparece citada en estos contextos, el modelo no te conoce como referente.',
  },
  {
    num: '03',
    title: 'Tus datos estructurados son incompletos',
    body: 'Sin Schema.org Organization, Service, FAQPage implementados correctamente, sos invisible a nivel semántico para los crawlers de entrenamiento.',
  },
  {
    num: '04',
    title: 'No tenés un Knowledge Panel o está incompleto',
    body: 'El Google Knowledge Graph es una de las fuentes que los LLMs priorizan. Sin entidad consolidada, tu autoridad como marca real es cuestionable para los modelos.',
  },
  {
    num: '05',
    title: 'Tu competencia lleva meses ejecutando GEO',
    body: 'La visibilidad en IA se construye con tiempo y consistencia. Cada mes que pasa sin actuar amplía esa brecha. Las primeras citaciones en Perplexity aparecen entre 30 y 60 días.',
  },
];

export default function PorQueNoAparezcoEnChatGPTPage() {
  useDocumentMeta({
    title: 'Por Qué tu Empresa No Aparece en ChatGPT (y Cómo Solucionarlo) | RankAgile',
    description:
      'Las 5 razones reales por las que tu empresa no aparece en ChatGPT y el plan GEO para revertirlo. Guía práctica de RankAgile.',
  });

  return (
    <>
      <PageSeo
        title="Por Qué tu Empresa No Aparece en ChatGPT (y Cómo Solucionarlo) | RankAgile"
        description="Las 5 razones reales por las que tu empresa no aparece en ChatGPT y el plan GEO para revertirlo. Guía práctica de RankAgile."
        image="/og/blog/por-que-no-aparezco-en-chatgpt.png"
        type="article"
      />
      <BlogPostLayout
      tag="GEO"
      date="Mar 2025"
      title="Por Qué tu Empresa No Aparece en ChatGPT (y Cómo Solucionarlo)"
      lead="Lo buscaste. Tu nombre no salió. Salió el de tu competidor. No es casualidad ni mala suerte: es el resultado de una arquitectura de autoridad que ellos tienen y vos no has construido todavía."
    >
      <h2>Cómo decide ChatGPT qué marcas recomendar</h2>
      <p>
        ChatGPT no busca en tiempo real. Sus respuestas se basan en patrones aprendidos durante el entrenamiento. Menciona marcas que aparecían frecuentemente en textos de alta calidad: artículos especializados, comparativas, reseñas en medios, foros de industria y documentación técnica que formó parte de su corpus de entrenamiento.
      </p>
      <p>
        Si tu empresa nunca fue mencionada en esos contextos, el modelo simplemente no tiene información sobre ti. No es un algoritmo que puedas hackear con meta tags:{' '}
        <strong>es un problema de presencia en el ecosistema digital de autoridad.</strong>
      </p>
      <blockquote>
        <p>Los LLMs no rankean sitios web: sintetizan conocimiento acumulado de millones de fuentes. Tu marca tiene que estar en esas fuentes.</p>
      </blockquote>

      <h2>Las 5 razones más comunes por las que no aparecés</h2>
      {reasons.map((r) => (
        <div key={r.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{r.num} · {r.title}</h4>
          <p className="blogpost-card-body">{r.body}</p>
        </div>
      ))}

      <h2>El plan de acción: cómo empezar a aparecer en ChatGPT</h2>
      <p>
        La solución es el <strong>GEO (Generative Engine Optimization)</strong>: una combinación de content engineering, authority building y optimización de datos estructurados diseñada para construir presencia en motores de IA.
      </p>
      <p>
        En RankAgile auditamos tu visibilidad actual en ChatGPT, Gemini y Perplexity e identificamos exactamente dónde está el gap.{' '}
        <Link to="/servicios/geo">Conocé la metodología completa del servicio GEO</Link>: 6 fases con KPIs claros y optimización mensual.
      </p>
      <p>
        ¿Querés saber cuánto cuesta implementarlo?{' '}
        <Link to="/blog/cuanto-cuesta-geo">Revisá la guía de precios GEO 2026</Link> para entender qué incluye cada nivel de servicio.
      </p>

      <h2>La diferencia entre GEO, SEO y AEO</h2>
      <p>
        Muchas empresas confunden estas tres disciplinas. GEO no reemplaza al SEO: lo amplía hacia una capa nueva de visibilidad.{' '}
        <Link to="/blog/seo-vs-geo-vs-aeo">Entendé las diferencias reales entre SEO, GEO y AEO</Link> y cómo integrarlos en una estrategia coherente.
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
          <Link to="/blog/cuanto-cuesta-geo">¿Cuánto cuesta el GEO y qué incluye?</Link>
        </h4>
        <p className="blogpost-card-body">Guía transparente de precios para 2026: niveles de servicio, qué exigir y ROI esperado.</p>
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
          to="/servicios/geo"
          style={{ display: 'inline-block', padding: '14px 32px', background: 'var(--accent)', color: 'var(--btn-fg)', borderRadius: 8, fontWeight: 600, textDecoration: 'none', fontSize: 15 }}
        >
          Ver el servicio GEO de RankAgile
        </Link>
      </p>
    </BlogPostLayout>
    </>
  );
}
