const features = [
    { n: '01', title: 'Auditoría SEO estratégica completa', body: 'Análisis exhaustivo de arquitectura técnica, contenido, perfil de enlaces y posicionamiento competitivo con recomendaciones priorizadas.' },
    { n: '02', title: 'Roadmap SEO trimestral', body: 'Plan de acción detallado con iniciativas priorizadas por impacto, esfuerzo requerido y dependencias técnicas.' },
    { n: '03', title: 'Sesiones de consultoría mensuales', body: 'Reuniones estratégicas de 90 minutos para alineación, resolución de bloqueos y validación de decisiones críticas.' },
    { n: '04', title: 'Revisión de implementaciones', body: 'Validación técnica de cambios críticos implementados por tu equipo para garantizar correcta ejecución SEO.' },
    { n: '05', title: 'Análisis de competencia estratégico', body: 'Benchmarking profundo vs competidores directos: keywords, contenido, autoridad de dominio y estrategias detectadas.' },
    { n: '06', title: 'Capacitación de equipos internos', body: 'Workshops y sesiones de formación para marketing, producto y desarrollo en mejores prácticas SEO.' },
    { n: '07', title: 'Dashboard de métricas clave', body: 'Panel de control con KPIs esenciales: rankings, tráfico orgánico, conversiones y progreso vs objetivos.' },
    { n: '08', title: 'Soporte estratégico continuo', body: 'Acceso directo vía Slack/email para consultas urgentes, validación de decisiones y resolución de dudas técnicas.' },
];

export default function ConsultoriaGeoFeaturesSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Entregables</span>
            <h2 className="geo-page-h2">Qué incluye la consultoría</h2>
            <div className="services-grid">
                {features.map((feature) => (
                    <article className="svc-card" key={feature.n}>
                        <div>
                            <div className="svc-card-num">{feature.n} / entregable</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.body}</p>
                        </div>
                        <span className="svc-card-arrow">ENTREGABLE</span>
                    </article>
                ))}
            </div>
        </section>
    );
}
