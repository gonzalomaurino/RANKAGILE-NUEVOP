import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogPostLayout from '../components/BlogPostLayout.jsx';

const aiEngines = [
  { title: 'ChatGPT', body: 'Consultas de compra, comparativas y recomendaciones.' },
  { title: 'Gemini', body: 'AI Overviews desplaza resultados orgánicos.' },
  { title: 'Perplexity', body: 'Preferido por perfiles técnicos, cita fuentes.' },
  { title: 'Bing Copilot', body: 'Integrado en Microsoft, uso corporativo masivo.' },
];

const comparison = [
  { num: '01', name: 'SEO', sub: 'Search Engine Optimization', body: 'Ranking en SERPs con keywords, backlinks y autoridad de dominio. Métricas: posición, tráfico orgánico y CTR.' },
  { num: '02', name: 'GEO', sub: 'Generative Engine Optimization', body: 'Presencia de marca dentro de respuestas de IA con citaciones, datos estructurados y cobertura en fuentes clave.' },
  { num: '03', name: 'AEO', sub: 'Answer Engine Optimization', body: 'Featured snippets y posición cero con estructura Q&A y FAQ Schema. Subconjunto del SEO orientado a respuestas directas.' },
];

const benefits = [
  { num: '01', title: 'Visibilidad donde compran tus clientes', body: 'Los decisores B2B usan IA para shortlistear proveedores antes de contactar a nadie. GEO te posiciona en esa conversación invisible que determina quién llega a la demo.' },
  { num: '02', title: 'Autoridad de marca en IA', body: 'Ser citado repetidamente por ChatGPT o Gemini construye percepción de liderazgo. Los modelos aprenden que tu marca es la referencia en tu categoría.' },
  { num: '03', title: 'Pipeline de ventas ampliado', body: 'Nuevos canales de entrada sin depender exclusivamente de Google Ads o SEO orgánico. Diversificación real de fuentes de tráfico cualificado.' },
  { num: '04', title: 'Ventaja competitiva duradera', body: 'Tus competidores aún no lo están haciendo. La autoridad en IA se acumula con el tiempo, igual que el DA en SEO. Quien empieza primero construye una ventaja compuesta.' },
  { num: '05', title: 'Datos estructurados como activo', body: 'GEO genera un ecosistema de datos, citas y referencias digitales que beneficia simultáneamente al SEO tradicional, al AEO y a la búsqueda de voz.' },
  { num: '06', title: 'Protección frente a AI Overviews', body: 'Google AI Overviews está destruyendo el tráfico orgánico de webs que no están citadas como fuente. GEO es la respuesta defensiva y ofensiva a esa amenaza.' },
];

const phases = [
  { num: '01', title: 'Auditoría GEO', body: 'Analizamos tu visibilidad actual en ChatGPT, Gemini y Perplexity para tu categoría, keywords de intención y competidores. Identificamos el gap de citaciones y la arquitectura actual.' },
  { num: '02', title: 'Estrategia Semántica', body: 'Mapeamos las entidades, conceptos y preguntas que los LLMs asocian a tu categoría. Definimos el plan de contenido orientado a máxima coincidencia con los training patterns.' },
  { num: '03', title: 'Content Engineering', body: 'Creamos y optimizamos contenido con alta densidad informacional, datos verificables, estructura de respuesta directa y formato que los LLMs aprenden a citar.' },
  { num: '04', title: 'Authority Building', body: 'Construimos presencia en fuentes que los modelos usan como referencia: medios especializados, directorios de industria, Wikipedia, Wikidata, LinkedIn editorial y podcasts de autoridad.' },
  { num: '05', title: 'Datos Estructurados', body: 'Implementamos Schema.org avanzado, Knowledge Panel optimization y markup técnico que facilita que los LLMs extraigan y procesen correctamente la información de tu empresa.' },
  { num: '06', title: 'Tracking y Optimización', body: 'Monitorizamos citaciones en motores de IA, Share of Voice en respuestas generativas, tráfico referido desde IA y conversiones atribuidas. Iteramos cada 30 días.' },
];

const faqs = [
  { q: '¿GEO reemplaza al SEO que ya hacemos?', a: 'No. GEO amplía el SEO. Las señales que construís para Google siguen siendo valiosas y muchas acciones GEO refuerzan el SEO tradicional. Lo trabajamos como una capa adicional.' },
  { q: '¿Cuánto tiempo tarda en verse resultados?', a: 'Las primeras citaciones aparecen entre 30 y 60 días en Perplexity. Para ChatGPT y Gemini los resultados consolidados llegan entre 90 y 180 días.' },
  { q: '¿Funciona para todos los sectores?', a: 'GEO es especialmente efectivo en B2B, SaaS, servicios profesionales, consultoría y tecnología. Si tu cliente consulta IA antes de comprar, GEO es crítico.' },
  { q: '¿Pueden garantizar que apareceré en ChatGPT?', a: 'Nadie garantiza posiciones en modelos de IA, igual que nadie garantiza el #1 en Google. Garantizamos un proceso sistemático, medible y basado en datos reales con resultados documentados.' },
];

export default function GeoPage() {
  useDocumentMeta({
    title: 'GEO: Guía Completa de Generative Engine Optimization | RankAgile Blog',
    description:
      'Qué es GEO, cómo funciona y cómo aplicarlo para aparecer en ChatGPT, Gemini y Perplexity. La guía definitiva de Generative Engine Optimization por RankAgile.',
  });

  return (
    <BlogPostLayout
      tag="GEO"
      date="3 Mar 2026"
      title="GEO: Generative Engine Optimization"
      lead="ChatGPT responde 10 millones de consultas por día. Gemini recomienda marcas. Perplexity sustituye a Google para millones de compradores B2B. ¿Tu empresa aparece en esas respuestas? GEO es el conjunto de estrategias que posiciona tu marca dentro de las respuestas generadas por IA. No es el futuro del SEO. Es el presente."
    >
      <h2>GEO optimiza tu presencia dentro de respuestas de IA</h2>
      <p>
        GEO trabaja sobre autoridad semántica, datos estructurados y cobertura en fuentes que los modelos usan para citar marcas.
      </p>
      <ul>
        <li>Citaciones en contenido de alta autoridad.</li>
        <li>Schema claro y coherencia semántica.</li>
        <li>Contenido con respuestas directas y densidad informacional.</li>
        <li>Presencia en medios, directorios y fuentes de training data.</li>
      </ul>

      <h2>GEO es urgente para 2026</h2>
      <p>
        El 72% de decisores B2B consulta una IA antes del primer contacto. Si no apareces ahí, no entras al ciclo de venta.
      </p>
      <ul>
        <li>ChatGPT y Gemini influyen en la selección de proveedores.</li>
        <li>Perplexity y Copilot citan fuentes y desplazan el orgánico.</li>
        <li>GEO amplifica el SEO tradicional en capas nuevas.</li>
      </ul>

      <h3>Los motores que tenés que cubrir</h3>
      {aiEngines.map((e) => (
        <div key={e.title} className="blogpost-card">
          <h4 className="blogpost-card-title">{e.title}</h4>
          <p className="blogpost-card-body">{e.body}</p>
        </div>
      ))}

      <h2>SEO vs. GEO vs. AEO: diferencias clave</h2>
      {comparison.map((c) => (
        <div key={c.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{c.num} · {c.name} — {c.sub}</h4>
          <p className="blogpost-card-body">{c.body}</p>
        </div>
      ))}
      <p className="blogpost-pullquote">
        La estrategia ganadora en 2026 no elige uno: combina SEO + GEO + AEO en una arquitectura de visibilidad integrada.
      </p>

      <h2>Lo que gana tu empresa con GEO</h2>
      {benefits.map((b) => (
        <div key={b.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{b.num} · {b.title}</h4>
          <p className="blogpost-card-body">{b.body}</p>
        </div>
      ))}

      <h2>6 fases de ejecución GEO</h2>
      <p>
        Ejecutamos un plan GEO con KPIs claros, cronograma por fases y optimización mensual sobre visibilidad en motores generativos.
      </p>
      {phases.map((p) => (
        <div key={p.num} className="blogpost-card">
          <h4 className="blogpost-card-title">{p.num} · {p.title}</h4>
          <p className="blogpost-card-body">{p.body}</p>
        </div>
      ))}

      <h2>Preguntas frecuentes</h2>
      {faqs.map((f) => (
        <div key={f.q} className="blogpost-card">
          <h4 className="blogpost-card-title">{f.q}</h4>
          <p className="blogpost-card-body">{f.a}</p>
        </div>
      ))}

      <h2>Conclusión</h2>
      <p>
        GEO no es una moda ni un experimento académico. Es la disciplina que decide si tu empresa existe en la conversación que ya están teniendo tus clientes con la IA. Empezar primero compone ventaja en el tiempo — exactamente como funcionó el SEO en 2005.
      </p>
    </BlogPostLayout>
  );
}
