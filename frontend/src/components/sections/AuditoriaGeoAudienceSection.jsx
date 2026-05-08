const audience = [
    {
        title: 'Caidas de trafico inexplicables',
        body: 'Tu trafico organico cayo sin razon aparente. Probablemente hay errores tecnicos silenciosos que bloquean el crawl o desindexan paginas.',
    },
    {
        title: 'Pre/post migracion de sitio',
        body: 'Migraciones de dominio, HTTPS, plataforma o rediseño son de alto riesgo. Auditoria pre-migracion previene desastres. Post-migracion valida que todo funciono.',
    },
    {
        title: 'Sitios grandes o complejos',
        body: 'E-commerce con miles de SKUs, marketplaces, sitios multi-idioma o plataformas JavaScript pesadas requieren expertise especializado.',
    },
    {
        title: 'Baseline antes de invertir en SEO',
        body: 'Antes de invertir en contenido o link building, asegurate de que la base tecnica sea solida. No tiene sentido construir sobre cimientos rotos.',
    },
];

export default function AuditoriaGeoAudienceSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Es para ti</span>
            <h2 className="geo-page-h2">Cuando necesitas una auditoria tecnica</h2>
            <div className="geo-phases-panel geo-phases-2">
                {audience.map((item, idx) => (
                    <div key={item.title} className="geo-phase-card">
                        <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} / caso</span>
                        <h3 className="geo-phase-title">{item.title}</h3>
                        <p className="geo-phase-body">{item.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
