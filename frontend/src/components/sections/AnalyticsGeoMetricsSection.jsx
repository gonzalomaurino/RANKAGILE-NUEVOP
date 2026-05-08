const metrics = [
    {
        n: '01',
        title: 'Visibilidad',
        items: ['Rankings por keyword', 'Share of voice', 'Featured snippets', 'Visibilidad SERP', 'Posición promedio'],
    },
    {
        n: '02',
        title: 'Tráfico',
        items: ['Sesiones orgánicas', 'Usuarios nuevos', 'Páginas vistas', 'Tiempo en sitio', 'Tasa de rebote'],
    },
    {
        n: '03',
        title: 'Conversión',
        items: ['Tasa de conversión', 'Costo por adquisición', 'Ventas directas por SEO', 'Retorno de inversión', 'Revenue orgánico'],
    },
    {
        n: '04',
        title: 'Autoridad',
        items: ['Domain Authority', 'Dominios referentes', 'Perfil de backlinks', 'Trust Flow', 'Velocidad de crecimiento'],
    },
];

export default function AnalyticsGeoMetricsSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Qué Medimos</span>
            <h2 className="geo-page-h2">Métricas que rastreamos en tu dashboard</h2>
            <div className="geo-phases-panel geo-phases-4">
                {metrics.map((m) => (
                    <div className="geo-phase-card" key={m.n}>
                        <span className="geo-phase-kicker">{m.n} / categoría</span>
                        <h3 className="geo-phase-title">{m.title}</h3>
                        <ul className="geo-page-list" style={{ marginTop: 12 }}>
                            {m.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
