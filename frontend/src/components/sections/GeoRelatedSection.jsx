export default function GeoRelatedSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Profundiza en el tema</span>
      <h2 className="geo-page-h2">Lecturas complementarias</h2>
      <p className="geo-page-small">Dos recursos clave para cerrar el circulo de visibilidad.</p>
      <div className="services-grid">
        <article className="svc-card">
          <div>
            <div className="svc-card-num">01 / lectura</div>
            <h4>Por que tu empresa no aparece en ChatGPT</h4>
            <p>Las 5 razones por las que el modelo no te conoce y como revertirlo.</p>
          </div>
          <a className="btn-ghost" href="/por-que-no-aparezco-en-chatgpt">Leer articulo</a>
        </article>
        <article className="svc-card">
          <div>
            <div className="svc-card-num">02 / lectura</div>
            <h4>Cuanto cuesta el GEO y que incluye en 2026</h4>
            <p>Precios reales, que exigir en una propuesta y como calcular el ROI.</p>
          </div>
          <a className="btn-ghost" href="/cuanto-cuesta-geo">Leer articulo</a>
        </article>
      </div>
    </section>
  );
}
