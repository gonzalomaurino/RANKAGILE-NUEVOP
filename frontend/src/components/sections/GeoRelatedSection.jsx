export default function GeoRelatedSection() {
  return (
    <section className="geo-section">
      <span className="geo-eyebrow">Profundizá en el tema</span>
      <h2 className="geo-h2">Artículos que complementan esta guía</h2>
      <p className="geo-small">Dos lecturas esenciales sobre visibilidad en IA y costos reales del servicio.</p>
      <div className="geo-related">
        <article className="geo-related-card">
          <p className="geo-card-eyebrow">Lectura relacionada</p>
          <p className="geo-related-title">Por qué tu empresa no aparece en ChatGPT</p>
          <p className="geo-related-body">
            Las 5 razones exactas por las que el modelo no te conoce y el
            plan para revertirlo en 90 días.
          </p>
          <a className="geo-btn-ghost" href="/por-que-no-aparezco-en-chatgpt/">
            Leer artículo →
          </a>
        </article>
        <article className="geo-related-card">
          <p className="geo-card-eyebrow">Lectura relacionada</p>
          <p className="geo-related-title">Cuánto cuesta el GEO y qué incluye en 2026</p>
          <p className="geo-related-body">
            Precios reales, qué exigir en una propuesta y cómo calcular el
            ROI antes de contratar.
          </p>
          <a className="geo-btn-ghost" href="/cuanto-cuesta-geo/">
            Leer artículo →
          </a>
        </article>
      </div>
    </section>
  );
}
