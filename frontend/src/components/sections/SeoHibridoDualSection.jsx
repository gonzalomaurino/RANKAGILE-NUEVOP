export default function SeoHibridoDualSection() {
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">Nuestra Metodología</span>
        <h2 className="ra-hib-h2">Estrategia dual: Google + motores generativos</h2>
        <div className="ra-hib-diff">
          <div className="ra-hib-diff-card ra-hib-diff-card--muted">
            <h3>Optimización para Google Tradicional</h3>
            <p><strong>✓ SEO Técnico:</strong> Core Web Vitals, indexación, crawlability, estructura de sitio optimizada para rastreo eficiente.</p>
            <p><strong>✓ Keywords Estratégicas:</strong> Research profundo, intención de búsqueda, long-tail y oportunidades de featured snippets.</p>
            <p><strong>✓ Link Building:</strong> Autoridad de dominio mediante backlinks de calidad desde fuentes relevantes y confiables.</p>
            <p><strong>✓ Optimización On-Page:</strong> Meta tags, headers, contenido, internal linking y experiencia de usuario optimizada.</p>
          </div>
          <div className="ra-hib-diff-card ra-hib-diff-card--glow">
            <h3>Optimización para IA Generativa</h3>
            <p><strong>✓ Entity SEO:</strong> Construcción de entidades reconocibles en Knowledge Graph, desambiguación y autoridad contextual.</p>
            <p><strong>✓ Schema Avanzado:</strong> Structured data rico que permite a LLMs comprender contexto, relaciones y hechos verificables.</p>
            <p><strong>✓ Contenido Semántico:</strong> NLP-optimizado, topic clusters, co-ocurrencias y profundidad temática que LLMs valoran.</p>
            <p><strong>✓ E-E-A-T Signals:</strong> Experiencia, expertise, autoridad y confianza demostrable para ser citado por motores generativos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
