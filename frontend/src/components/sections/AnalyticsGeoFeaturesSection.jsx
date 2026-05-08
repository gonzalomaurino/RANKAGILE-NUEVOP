const features = [
    { n: '01', title: 'Vista unificada en tiempo real', body: 'Todas tus métricas SEO en un solo lugar: rankings, tráfico, conversiones, backlinks, competencia. Actualización en vivo sin esperar 24-48h.' },
    { n: '02', title: 'Métricas de negocio, no vanidad', body: 'Tráfico cualificado, conversiones orgánicas, revenue atribuido a SEO, ROI calculado. Conectamos datos SEO con resultados de negocio reales.' },
    { n: '03', title: 'Análisis predictivo', body: 'Proyecciones basadas en tendencias históricas. Simulaciones de impacto antes de implementar cambios. Forecasting de tráfico y conversiones.' },
    { n: '04', title: 'Alertas inteligentes', body: 'Notificaciones automáticas ante caídas de rankings críticos, picos de tráfico anómalos, nuevos backlinks detectados o movimientos de competencia.' },
    { n: '05', title: 'Benchmarking competitivo', body: 'Comparación lado a lado vs competidores: share of voice, keyword gaps, velocidad de crecimiento, estrategias de contenido detectadas.' },
    { n: '06', title: 'Reportes automáticos', body: 'Informes mensuales generados automáticamente con insights accionables. Formato white-label para presentar a stakeholders o clientes.' },
    { n: '07', title: 'Integraciones nativas', body: 'Conecta Google Analytics, Search Console, GA4, CRM, Ahrefs, SEMrush. Centraliza datos sin exportar/importar manualmente cada vez.' },
    { n: '08', title: 'Acceso multi-usuario', body: 'Dashboards personalizados por rol: CEO ve ROI, Marketing ve tráfico, Producto ve conversiones. Permisos granulares por equipo.' },
];

export default function AnalyticsGeoFeaturesSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Nuestra Solución</span>
            <h2 className="geo-page-h2">Dashboard unificado con métricas que importan</h2>
            <div className="services-grid">
                {features.map((feature) => (
                    <article className="svc-card" key={feature.n}>
                        <div>
                            <div className="svc-card-num">{feature.n} / módulo</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.body}</p>
                        </div>
                        <span className="svc-card-arrow">MÓDULO</span>
                    </article>
                ))}
            </div>
        </section>
    );
}
