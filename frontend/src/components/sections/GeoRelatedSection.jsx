export default function GeoRelatedSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Profundizá en el tema</span>
      <h2 className="geo-page-h2">Artículos que complementan esta guía</h2>
      <p className="geo-page-small">Dos lecturas esenciales sobre visibilidad en IA y costos reales del servicio.</p>
      <div className="geo-page-related">
        <article className="geo-page-related-card">
          <p className="geo-page-card-eyebrow">Lectura relacionada</p>
          <p className="geo-page-related-title">Por qué tu empresa no aparece en ChatGPT</p>
          <p className="geo-page-related-body">
            Las 5 razones exactas por las que el modelo no te conoce y el
            plan para revertirlo en 90 días.
          </p>
          <a className="geo-page-btn-ghost" href="/por-que-no-aparezco-en-chatgpt/">
            Leer artículo →
          </a>
        </article>
        <article className="geo-page-related-card">
          <p className="geo-page-card-eyebrow">Lectura relacionada</p>
          <p className="geo-page-related-title">Cuánto cuesta el GEO y qué incluye en 2026</p>
          <p className="geo-page-related-body">
            Precios reales, qué exigir en una propuesta y cómo calcular el
            ROI antes de contratar.
          </p>
          <a className="geo-page-btn-ghost" href="/cuanto-cuesta-geo/">
            Leer artículo →
          </a>
        </article>
      </div>
    </section>
  );
}
