const steps = [
    { kicker: 'google', title: 'SEO Técnico', body: 'Core Web Vitals, indexación, crawlability, estructura de sitio optimizada para rastreo eficiente.' },
    { kicker: 'google', title: 'Keywords Estratégicas', body: 'Research profundo, intención de búsqueda, long-tail y oportunidades de featured snippets.' },
    { kicker: 'google', title: 'Link Building', body: 'Autoridad de dominio mediante backlinks de calidad desde fuentes relevantes y confiables.' },
    { kicker: 'google', title: 'Optimización On-Page', body: 'Meta tags, headers, contenido, internal linking y experiencia de usuario optimizada.' },
    { kicker: 'ia', title: 'Entity SEO', body: 'Construcción de entidades reconocibles en Knowledge Graph, desambiguación y autoridad contextual.' },
    { kicker: 'ia', title: 'Schema Avanzado', body: 'Structured data rico que permite a LLMs comprender contexto, relaciones y hechos verificables.' },
    { kicker: 'ia', title: 'Contenido Semántico', body: 'NLP-optimizado, topic clusters, co-ocurrencias y profundidad temática que LLMs valoran.' },
    { kicker: 'ia', title: 'E-E-A-T Signals', body: 'Experiencia, expertise, autoridad y confianza demostrable para ser citado por motores generativos.' },
];

export default function SeoHibridoGeoMethodologySection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Nuestra Metodología</span>
            <h2 className="geo-page-h2">Estrategia dual: Google + motores generativos</h2>
            <p className="geo-page-p">
                Fusionamos optimización tradicional con posicionamiento en IA generativa.
                Dos frentes, una sola estrategia coherente orientada a resultados reales.
            </p>
            <div className="geo-phases-panel geo-phases-4">
                {steps.map((step, idx) => (
                    <div className="geo-phase-card" key={step.title}>
                        <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} / {step.kicker}</span>
                        <h3 className="geo-phase-title">{step.title}</h3>
                        <p className="geo-phase-body">{step.body}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
