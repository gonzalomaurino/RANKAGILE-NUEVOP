const audience = [
  { title: 'Marcas B2B y SaaS', body: 'Productos y servicios complejos donde los usuarios investigan profundamente antes de decidir. Aparecer en ChatGPT/Perplexity durante esa fase es crítico.' },
  { title: 'E-Commerce de Nicho', body: 'Sitios que necesitan maximizar citaciones en respuestas generativas para mantener relevancia mientras las búsquedas evolucionan.' },
  { title: 'Expertos y Thought Leaders', body: 'Profesionales que generan contenido de autoridad y necesitan ser citados como fuente confiable en respuestas generativas sobre su dominio.' },
];

export default function SeoHibridoAudienceSection() {
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">¿Es Para Ti?</span>
        <h2 className="ra-hib-h2">Ideal para marcas que piensan a futuro</h2>
        <div className="ra-hib-audience">
          {audience.map((a) => (
            <div key={a.title} className="ra-hib-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
