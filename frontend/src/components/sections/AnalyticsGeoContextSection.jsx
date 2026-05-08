const audience = [
    {
        title: 'CMOs y directores de marketing',
        body: 'Necesitas demostrar ROI de SEO a CEO/board. Dashboard ejecutivo con métricas de negocio, no métricas técnicas que nadie entiende.',
    },
    {
        title: 'Agencias SEO',
        body: 'Gestión de múltiples clientes desde un solo dashboard. Reportes white-label automatizados que liberan horas de trabajo manual cada mes.',
    },
    {
        title: 'Equipos de producto / growth',
        body: 'Decisiones rápidas basadas en data. Dashboards en tiempo real para validar hipótesis, medir experimentos y priorizar roadmap.',
    },
    {
        title: 'E-commerce y marketplaces',
        body: 'Tracking granular por categoría, producto, landing page. Conecta SEO directamente con revenue para optimizar lo que genera ventas.',
    },
];

export default function AnalyticsGeoContextSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">¿Es Para Ti?</span>
            <div className="geo-urgent">
                <div className="geo-urgent-copy">
                    <h2 className="geo-page-h2">Ideal para quien toma decisiones basadas en datos</h2>
                    <ul className="geo-page-list">
                        <li><strong>Vista unificada.</strong> Todas tus métricas SEO en un solo lugar, actualizadas en tiempo real sin esperar 24-48h.</li>
                        <li><strong>ROI medible.</strong> Conectamos datos SEO con resultados de negocio reales: revenue, conversiones y retorno de inversión.</li>
                        <li><strong>Sin trabajo manual.</strong> Integraciones nativas con GA4, Search Console, Ahrefs y más — centraliza todo automáticamente.</li>
                        <li><strong>Reportes white-label.</strong> Informes automáticos listos para presentar a stakeholders o clientes cada mes.</li>
                    </ul>
                    <a className="btn-ghost" href="/contacto/">Agenda una demo personalizada</a>
                </div>
                <div className="geo-urgent-panel">
                    {audience.map((item) => (
                        <div className="geo-urgent-item" key={item.title}>
                            <span className="geo-urgent-name">{item.title}</span>
                            <p>{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
