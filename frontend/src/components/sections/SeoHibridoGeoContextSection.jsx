const audience = [
    {
        title: 'Marcas B2B y SaaS',
        body: 'Productos y servicios complejos donde los usuarios investigan profundamente antes de decidir. Aparecer en ChatGPT/Perplexity durante esa fase es crítico.',
    },
    {
        title: 'E-Commerce de Nicho',
        body: 'Sitios que necesitan maximizar citaciones en respuestas generativas para mantener relevancia mientras las búsquedas evolucionan.',
    },
    {
        title: 'Expertos y Thought Leaders',
        body: 'Profesionales que generan contenido de autoridad y necesitan ser citados como fuente confiable en respuestas generativas sobre su dominio.',
    },
];

export default function SeoHibridoGeoContextSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Cambio de Paradigma</span>
            <div className="geo-urgent">
                <div className="geo-urgent-copy">
                    <h2 className="geo-page-h2">Por qué el SEO tradicional ya no es suficiente</h2>
                    <ul className="geo-page-list">
                        <li><strong>43% Búsquedas Zero-Click.</strong> Casi la mitad de las búsquedas en Google terminan sin click. La respuesta aparece directamente en el SERP o en motores generativos.</li>
                        <li><strong>2B+ Usuarios de ChatGPT.</strong> Los modelos de IA generativa están redefiniendo cómo las personas buscan información. Tu marca necesita aparecer allí.</li>
                        <li><strong>SGE (Search Generative Experience).</strong> Google integra IA generativa directamente en los resultados. Optimizar para SGE es optimizar para el futuro de la búsqueda.</li>
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
