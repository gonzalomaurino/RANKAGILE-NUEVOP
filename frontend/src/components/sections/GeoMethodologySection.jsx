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
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Proceso RankAgile</span>
      <div className="vignette" style={{ gridTemplateColumns: '1.05fr 1fr' }}>
        <div className="vignette-left">
          <span className="eyebrow">metodologia</span>
          <h2 className="geo-page-h2">6 fases de ejecucion GEO</h2>
          <p className="geo-page-p">
            Ejecutamos un plan GEO con KPIs claros, cronograma por fases y
            optimizacion mensual sobre visibilidad en motores generativos.
          </p>
          <ul className="vignette-bullets">
            <li>Auditoria y gap de citaciones.</li>
            <li>Mapa semantico y prioridades de contenido.</li>
            <li>Tracking continuo de resultados.</li>
          </ul>
        </div>
        <div className="vignette-right">
          <div className="geo-columns">
            {fases.map((f) => (
              <div className="geo-column-card" key={f.n}>
                <h4>{f.n} · {f.title}</h4>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
