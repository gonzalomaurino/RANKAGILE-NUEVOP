const steps = [
    { title: 'Auditoría Técnica', body: 'Análisis profundo de arquitectura, indexación y Core Web Vitals. Optimizamos la base técnica de tu sitio para garantizar un rastreo eficiente y carga ultra rápida.' },
    { title: 'Investigación de Keywords', body: 'Identificamos las búsquedas críticas para tu negocio. Fusionamos semántica, datos estructurados y visibilidad en entornos generativos para maximizar el retorno orgánico.' },
    { title: 'Optimización On-Page', body: 'Optimización continua de contenido, estructura y metadatos. Cada página se convierte en un activo estratégico diseñado para captar intención de búsqueda.' },
    { title: 'Link Building', body: 'Construcción de autoridad a través de enlaces de calidad. Priorizamos relevancia y contexto sobre volumen para fortalecer la reputación digital de tu marca.' },
    { title: 'Monitoreo Continuo', body: 'Seguimiento de rankings, tráfico y conversiones. Transformamos datos complejos en decisiones estratégicas claras para medir tu retorno de inversión real.' },
    { title: 'Reporting Estratégico', body: 'Informes mensuales detallados con insights accionables. Entendemos que los datos sin contexto son ruido; te entregamos claridad.' },
];

export default function SeoCompletoGeoMethodologySection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Proceso RankAgile</span>
            <h2 className="geo-page-h2">6 fases del servicio SEO completo</h2>
            <p className="geo-page-p">
                Ejecutamos un plan SEO con KPIs claros, cronograma por fases y
                optimizacion mensual para acelerar tu visibilidad orgánica.
            </p>
            <div className="geo-phases-panel">
                {steps.map((step, idx) => (
                    <div className="geo-phase-card" key={step.title}>
                        <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} / fase</span>
                        <h3 className="geo-phase-title">{step.title}</h3>
                        <p className="geo-phase-body">{step.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
