const steps = [
  { n: '01', title: 'Auditoría Técnica', body: 'Análisis profundo de arquitectura, indexación y Core Web Vitals. Optimizamos la base técnica de tu sitio para garantizar un rastreo eficiente y carga ultra rápida.' },
  { n: '02', title: 'Investigación de Keywords', body: 'Identificamos las búsquedas críticas para tu negocio. Fusionamos semántica, datos estructurados y visibilidad en entornos generativos para maximizar el retorno orgánico.' },
  { n: '03', title: 'Optimización On-Page', body: 'Optimización continua de contenido, estructura y metadatos. Cada página se convierte en un activo estratégico diseñado para captar intención de búsqueda.' },
  { n: '04', title: 'Link Building', body: 'Construcción de autoridad a través de enlaces de calidad. Priorizamos relevancia y contexto sobre volumen para fortalecer la reputación digital de tu marca.' },
  { n: '05', title: 'Monitoreo Continuo', body: 'Seguimiento de rankings, tráfico y conversiones. Transformamos datos complejos en decisiones estratégicas claras para medir tu retorno de inversión real.' },
  { n: '06', title: 'Reporting Estratégico', body: 'Informes mensuales detallados con insights accionables. Entendemos que los datos sin contexto son ruido; te entregamos claridad.' },
];

export default function SeoCompletoStepsSection() {
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">Nuestro Proceso</span>
        <h2 className="ra-comp-h2">En qué consiste el servicio</h2>
        <div className="ra-comp-steps">
          {steps.map((s) => (
            <div key={s.n} className="ra-comp-step">
              <div className="ra-comp-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
