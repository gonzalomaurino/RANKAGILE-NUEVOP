const fases = [
  { title: 'Auditoría GEO', body: 'Analizamos tu visibilidad actual en ChatGPT, Gemini y Perplexity para tu categoría, keywords de intención y competidores. Identificamos el gap de citaciones y la arquitectura actual.' },
  { title: 'Estrategia Semántica', body: 'Mapeamos las entidades, conceptos y preguntas que los LLMs asocian a tu categoría. Definimos el plan de contenido orientado a máxima coincidencia con los training patterns.' },
  { title: 'Content Engineering', body: 'Creamos y optimizamos contenido con alta densidad informacional, datos verificables, estructura de respuesta directa y formato que los LLMs aprenden a citar.' },
  { title: 'Authority Building', body: 'Construimos presencia en fuentes que los modelos usan como referencia: medios especializados, directorios de industria, Wikipedia, Wikidata, LinkedIn editorial y podcasts de autoridad.' },
  { title: 'Datos Estructurados', body: 'Implementamos Schema.org avanzado, Knowledge Panel optimization y markup técnico que facilita que los LLMs extraigan y procesen correctamente la información de tu empresa.' },
  { title: 'Tracking y Optimización', body: 'Monitorizamos citaciones en motores de IA, Share of Voice en respuestas generativas, tráfico referido desde IA y conversiones atribuidas. Iteramos cada 30 días.' },
];

export default function GeoMethodologySection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Proceso RankAgile</span>
      <h2 className="geo-page-h2">6 fases de ejecucion GEO</h2>
      <p className="geo-page-p">
        Ejecutamos un plan GEO con KPIs claros, cronograma por fases y
        optimizacion mensual sobre visibilidad en motores generativos.
      </p>
      <div className="geo-phases-panel">
        {fases.map((f, idx) => (
          <div className="geo-phase-card" key={f.title}>
            <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} / fase</span>
            <h3 className="geo-phase-title">{f.title}</h3>
            <p className="geo-phase-body">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
