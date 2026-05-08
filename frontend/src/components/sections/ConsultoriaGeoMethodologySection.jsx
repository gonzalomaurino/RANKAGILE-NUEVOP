const steps = [
    { n: '01', label: 'paso', title: 'Diagnóstico Inicial', body: 'Auditoría completa de tu situación actual SEO. Identificamos gaps estratégicos, oportunidades de crecimiento y prioridades de acción.' },
    { n: '02', label: 'paso', title: 'Roadmap Estratégico', body: 'Diseñamos un plan de acción priorizado por impacto. Definimos KPIs, recursos necesarios y timeline realista de implementación.' },
    { n: '03', label: 'paso', title: 'Sesiones Mensuales', body: 'Reuniones recurrentes de alineación estratégica. Revisamos progreso, ajustamos táctica y resolvemos bloqueos técnicos.' },
    { n: '04', label: 'paso', title: 'Validación Técnica', body: 'Revisión de implementaciones críticas de tu equipo. Garantizamos que la ejecución técnica cumple estándares de excelencia SEO.' },
    { n: '05', label: 'paso', title: 'Capacitación Interna', body: 'Transferencia de conocimiento a tu equipo de marketing y desarrollo. Construimos capacidad interna sostenible a largo plazo.' },
    { n: '06', label: 'paso', title: 'Análisis de Resultados', body: 'Medición de impacto real de las iniciativas implementadas. Optimizamos el roadmap basándonos en datos concretos de performance.' },
];

export default function ConsultoriaGeoMethodologySection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Cómo Funciona</span>
            <h2 className="geo-page-h2">En qué consiste la consultoría</h2>
            <div className="geo-phases-panel">
                {steps.map((step) => (
                    <div className="geo-phase-card" key={step.n}>
                        <span className="geo-phase-kicker">{step.n} / {step.label}</span>
                        <h3 className="geo-phase-title">{step.title}</h3>
                        <p className="geo-phase-body">{step.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
