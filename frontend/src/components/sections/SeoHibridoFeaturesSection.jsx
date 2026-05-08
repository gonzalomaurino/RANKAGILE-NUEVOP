const features = [
  { title: 'Auditoría de visibilidad en IA', body: 'Análisis de presencia actual en ChatGPT, Perplexity, Gemini, SGE y otros motores generativos. Identificación de gaps de citación.' },
  { title: 'Implementación de Schema avanzado', body: 'Structured data estratégico: Organization, Product, Article, FAQ, HowTo, Event y schemas personalizados según industria.' },
  { title: 'Estrategia de Entity SEO', body: 'Construcción de marca como entidad reconocible: Knowledge Panel, desambiguación, relaciones semánticas y señales de autoridad.' },
  { title: 'Optimización de contenido semántico', body: 'Reescritura NLP-optimizada, topic modeling, profundidad contextual y co-ocurrencias que maximizan citaciones en LLMs.' },
  { title: 'Monitoreo de citaciones en IA', body: 'Tracking mensual de menciones en respuestas generativas, análisis de contexto de citación y share of voice vs competencia.' },
  { title: 'Optimización para SGE y AI Overviews', body: 'Estrategias específicas para aparecer en Search Generative Experience de Google y AI-powered overviews.' },
  { title: 'SEO técnico tradicional completo', body: 'Auditoría técnica, Core Web Vitals, indexación, arquitectura de información y link building de autoridad.' },
  { title: 'Reporting dual: Google + IA', body: 'Informes mensuales con métricas tradicionales (rankings, tráfico) + métricas de IA (citaciones, contexto, share of voice).' },
];

export default function SeoHibridoFeaturesSection() {
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">Entregables</span>
        <h2 className="ra-hib-h2">Qué incluye el servicio</h2>
        <div className="ra-hib-accordion-grid">
          {features.map((f) => (
            <details key={f.title} className="ra-hib-accordion-card">
              <summary>
                {f.title}
                <span className="ra-hib-accordion-icon">+</span>
              </summary>
              <p className="ra-hib-accordion-body">{f.body}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
