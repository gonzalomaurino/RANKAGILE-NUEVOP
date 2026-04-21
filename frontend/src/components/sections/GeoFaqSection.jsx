const faqs = [
  { q: '¿GEO reemplaza al SEO que ya hacemos?', a: 'No. GEO amplía el SEO. Las señales que construís para Google siguen siendo valiosas y muchas acciones GEO refuerzan el SEO tradicional. Lo trabajamos como una capa adicional.' },
  { q: '¿Cuánto tiempo tarda en verse resultados?', a: 'Las primeras citaciones aparecen entre 30 y 60 días en Perplexity. Para ChatGPT y Gemini los resultados consolidados llegan entre 90 y 180 días.' },
  { q: '¿Funciona para todos los sectores?', a: 'GEO es especialmente efectivo en B2B, SaaS, servicios profesionales, consultoría y tecnología. Si tu cliente consulta IA antes de comprar, GEO es crítico.' },
  { q: '¿Pueden garantizar que apareceré en ChatGPT?', a: 'Nadie garantiza posiciones en modelos de IA, igual que nadie garantiza el #1 en Google. Garantizamos un proceso sistemático, medible y basado en datos reales con resultados documentados.' },
];

export default function GeoFaqSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Preguntas frecuentes</span>
      <h2 className="geo-page-h2">Lo que preguntan antes de empezar</h2>
      <div className="geo-page-faq">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p className="geo-page-faq-body">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
