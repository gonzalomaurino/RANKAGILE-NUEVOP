const features = [
    { n: '01', title: 'Auditoría de visibilidad en IA', body: 'Análisis de presencia actual en ChatGPT, Perplexity, Gemini, SGE y otros motores generativos. Identificación de gaps de citación.' },
    { n: '02', title: 'Implementación de Schema avanzado', body: 'Structured data estratégico: Organization, Product, Article, FAQ, HowTo, Event y schemas personalizados según industria.' },
    { n: '03', title: 'Estrategia de Entity SEO', body: 'Construcción de marca como entidad reconocible: Knowledge Panel, desambiguación, relaciones semánticas y señales de autoridad.' },
    { n: '04', title: 'Optimización de contenido semántico', body: 'Reescritura NLP-optimizada, topic modeling, profundidad contextual y co-ocurrencias que maximizan citaciones en LLMs.' },
    { n: '05', title: 'Monitoreo de citaciones en IA', body: 'Tracking mensual de menciones en respuestas generativas, análisis de contexto de citación y share of voice vs competencia.' },
    { n: '06', title: 'Optimización para SGE y AI Overviews', body: 'Estrategias específicas para aparecer en Search Generative Experience de Google y AI-powered overviews.' },
    { n: '07', title: 'SEO técnico tradicional completo', body: 'Auditoría técnica, Core Web Vitals, indexación, arquitectura de información y link building de autoridad.' },
    { n: '08', title: 'Reporting dual: Google + IA', body: 'Informes mensuales con métricas tradicionales (rankings, tráfico) + métricas de IA (citaciones, contexto, share of voice).' },
];

export default function SeoHibridoGeoFeaturesSection() {
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
