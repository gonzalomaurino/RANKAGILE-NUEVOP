const features = [
    { n: '01', title: 'Auditoría técnica SEO completa', body: 'Análisis exhaustivo de arquitectura web, velocidad de carga, indexación, Schema markup y optimización para Core Web Vitals.' },
    { n: '02', title: 'Estrategia de contenido SEO', body: 'Roadmap de contenido basado en análisis de keywords, intención de búsqueda y gaps de contenido vs competencia.' },
    { n: '03', title: 'Optimización on-page mensual', body: 'Trabajo continuo en títulos, meta descripciones, headers, contenido, enlaces internos y optimización de imágenes.' },
    { n: '04', title: 'Link building de autoridad', body: 'Consecución de backlinks de calidad desde sitios relevantes con alta autoridad de dominio.' },
    { n: '05', title: 'Monitoreo de rankings y tráfico', body: 'Seguimiento diario de posiciones en Google para keywords objetivo y análisis de evolución de tráfico orgánico.' },
    { n: '06', title: 'Análisis de competencia', body: 'Benchmark mensual contra competidores directos: keywords, backlinks, contenido y estrategias emergentes.' },
    { n: '07', title: 'Informes mensuales ejecutivos', body: 'Reportes detallados con KPIs, evolución de métricas, insights accionables y próximas acciones estratégicas.' },
    { n: '08', title: 'Soporte técnico prioritario', body: 'Acceso directo a nuestro equipo de especialistas para resolución de incidencias y consultas estratégicas.' },
];

export default function SeoCompletoGeoBenefitsSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Entregables</span>
            <h2 className="geo-page-h2">Qué incluye el servicio</h2>
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
