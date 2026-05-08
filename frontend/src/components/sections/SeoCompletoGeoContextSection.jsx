const audience = [
    {
        title: 'E-commerce & Marketplaces',
        body: 'Catálogos extensos que necesitan visibilidad orgánica escalable. Optimizamos arquitectura de categorías, fichas de producto y contenido transaccional para captar intención de compra.',
    },
    {
        title: 'SaaS & Tecnología',
        body: 'Plataformas que compiten en mercados saturados. Creamos contenido técnico de valor que atrae usuarios cualificados y reduce el CAC (costo de adquisición de cliente).',
    },
    {
        title: 'Servicios Profesionales',
        body: 'Despachos, consultoras y firmas que requieren autoridad digital. Posicionamos tu expertise en búsquedas comerciales e informativas para atraer clientes de alto valor.',
    },
    {
        title: 'Medios & Contenido',
        body: 'Sitios editoriales y blogs que monetizan tráfico. Maximizamos alcance orgánico con estrategias de keywords long-tail, actualización de contenido y clusterización temática.',
    },
];

export default function SeoCompletoGeoContextSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Contexto estrategico</span>
            <div className="geo-urgent">
                <div className="geo-urgent-copy">
                    <h2 className="geo-page-h2">Ideal para negocios que buscan resultados a largo plazo</h2>
                    <p className="geo-page-p">
                        Estrategia integral diseñada para escalar tu visibilidad orgánica.
                        Gestionamos contenido, técnica y autoridad para que tu marca lidere
                        los resultados de búsqueda hoy mismo.
                    </p>
                    <ul className="geo-page-list">
                        <li>Auditoría técnica SEO completa.</li>
                        <li>Estrategia de contenido SEO.</li>
                        <li>Optimización on-page mensual.</li>
                    </ul>
                    <a className="btn-ghost" href="/contacto/">Hablar con un especialista</a>
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
