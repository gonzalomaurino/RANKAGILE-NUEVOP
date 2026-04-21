const fases = [
  { n: 'Fase 1', title: 'Auditoría GEO', body: 'Analizamos tu visibilidad actual en ChatGPT, Gemini y Perplexity para tu categoría, keywords de intención y competidores. Identificamos el gap de citaciones y la arquitectura actual.' },
  { n: 'Fase 2', title: 'Estrategia Semántica', body: 'Mapeamos las entidades, conceptos y preguntas que los LLMs asocian a tu categoría. Definimos el plan de contenido orientado a máxima coincidencia con los training patterns.' },
  { n: 'Fase 3', title: 'Content Engineering', body: 'Creamos y optimizamos contenido con alta densidad informacional, datos verificables, estructura de respuesta directa y formato que los LLMs aprenden a citar.' },
  { n: 'Fase 4', title: 'Authority Building', body: 'Construimos presencia en fuentes que los modelos usan como referencia: medios especializados, directorios de industria, Wikipedia, Wikidata, LinkedIn editorial y podcasts de autoridad.' },
  { n: 'Fase 5', title: 'Datos Estructurados', body: 'Implementamos Schema.org avanzado, Knowledge Panel optimization y markup técnico que facilita que los LLMs extraigan y procesen correctamente la información de tu empresa.' },
  { n: 'Fase 6', title: 'Tracking y Optimización', body: 'Monitorizamos citaciones en motores de IA, Share of Voice en respuestas generativas, tráfico referido desde IA y conversiones atribuidas. Iteramos cada 30 días.' },
];

export default function GeoMethodologySection() {
  return (
    <section className="geo-section">
      <span className="geo-eyebrow">Proceso RankAgile</span>
      <h2 className="geo-h2">La metodología GEO de RankAgile: 6 fases de ejecución</h2>
      <p className="geo-p">
        No vendemos informes. Entregamos ejecución. Cada cliente recibe un
        plan GEO a medida con KPIs claros, cronograma de implementación y
        tracking de resultados mensual.
      </p>
      <div className="geo-phases">
        {fases.map((f) => (
          <article className="geo-phase" key={f.n}>
            <p className="geo-card-eyebrow">{f.n}</p>
            <p className="geo-phase-title">{f.title}</p>
            <p className="geo-phase-body">{f.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
