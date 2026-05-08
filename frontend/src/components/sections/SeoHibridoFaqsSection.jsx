const faqs = [
  { q: '¿Realmente puedo medir visibilidad en IA?', a: 'Sí. Monitoreamos menciones y citaciones de tu marca en ChatGPT, Perplexity, Gemini mediante queries estratégicas recurrentes. Medimos share of voice vs competidores.' },
  { q: '¿Esto reemplaza el SEO tradicional?', a: 'No. Es complementario. Seguimos optimizando para Google (que sigue siendo dominante) mientras preparamos tu presencia para el futuro de la búsqueda.' },
  { q: '¿Qué es Entity SEO exactamente?', a: 'Construir tu marca como una entidad reconocible en el Knowledge Graph de Google. Desambiguar quién sos, qué hacés y por qué sos autoridad — legible por máquinas.' },
  { q: '¿Cuánto tarda en verse resultados?', a: 'Resultados en Google: 3-6 meses. Citaciones en IA: 2-4 meses. Los LLMs actualizan su comprensión más rápido que el crawl tradicional de Google.' },
  { q: '¿Necesito conocimientos técnicos?', a: 'No. Implementamos todo técnicamente y te explicamos la estrategia en lenguaje accesible. Solo necesitás acceso a tu sitio web para las implementaciones.' },
  { q: '¿Esto funciona para cualquier industria?', a: 'Especialmente efectivo en B2B, SaaS, servicios profesionales, tech y e-commerce de nicho. Industrias donde los usuarios investigan antes de decidir.' },
];

export default function SeoHibridoFaqsSection() {
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">Preguntas Frecuentes</span>
        <h2 className="ra-hib-h2">Lo que suelen preguntarnos</h2>
        <div className="ra-hib-faq-list">
          {faqs.map((f) => (
            <details key={f.q} className="ra-hib-faq-item">
              <summary>{f.q}</summary>
              <p className="ra-hib-faq-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
