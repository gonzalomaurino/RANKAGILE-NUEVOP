const steps = [
  { n: '01', title: 'Diagnóstico Inicial', body: 'Auditoría completa de tu situación actual SEO. Identificamos gaps estratégicos, oportunidades de crecimiento y prioridades de acción.' },
  { n: '02', title: 'Roadmap Estratégico', body: 'Diseñamos un plan de acción priorizado por impacto. Definimos KPIs, recursos necesarios y timeline realista de implementación.' },
  { n: '03', title: 'Sesiones Mensuales', body: 'Reuniones recurrentes de alineación estratégica. Revisamos progreso, ajustamos táctica y resolvemos bloqueos técnicos.' },
  { n: '04', title: 'Validación Técnica', body: 'Revisión de implementaciones críticas de tu equipo. Garantizamos que la ejecución técnica cumple estándares de excelencia SEO.' },
  { n: '05', title: 'Capacitación Interna', body: 'Transferencia de conocimiento a tu equipo de marketing y desarrollo. Construimos capacidad interna sostenible a largo plazo.' },
  { n: '06', title: 'Análisis de Resultados', body: 'Medición de impacto real de las iniciativas implementadas. Optimizamos el roadmap basándonos en datos concretos de performance.' },
];

export default function ConsultoriaStepsSection() {
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">Cómo Funciona</span>
        <h2 className="ra-cons-h2">En qué consiste la consultoría</h2>
        <div className="ra-cons-steps">
          {steps.map((s) => (
            <div key={s.n} className="ra-cons-step">
              <div className="ra-cons-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
