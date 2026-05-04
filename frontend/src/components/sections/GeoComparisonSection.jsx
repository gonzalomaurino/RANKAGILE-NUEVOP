export default function GeoComparisonSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Comparativa tecnica</span>
      <h2 className="geo-page-h2">SEO vs GEO vs AEO: diferencias clave</h2>
      <div className="services-grid">
        <article className="svc-card">
          <div>
            <div className="svc-card-num">01 / SEO</div>
            <h4>Search Engine Optimization</h4>
            <p>
              Ranking en SERPs con keywords, backlinks y autoridad de dominio.
              Metricas: posicion, trafico organico y CTR.
            </p>
          </div>
          <span className="svc-card-arrow">ORGANICO</span>
        </article>
        <article className="svc-card">
          <div>
            <div className="svc-card-num">02 / GEO</div>
            <h4>Generative Engine Optimization</h4>
            <p>
              Presencia de marca dentro de respuestas de IA con citaciones,
              datos estructurados y cobertura en fuentes clave.
            </p>
          </div>
          <span className="svc-card-arrow">GENERATIVO</span>
        </article>
        <article className="svc-card">
          <div>
            <div className="svc-card-num">03 / AEO</div>
            <h4>Answer Engine Optimization</h4>
            <p>
              Featured snippets y posicion cero con estructura Q&A y FAQ Schema.
              Subconjunto del SEO orientado a respuestas directas.
            </p>
          </div>
          <span className="svc-card-arrow">RESPUESTAS</span>
        </article>
      </div>
      <p className="geo-page-quote">
        La estrategia ganadora en 2026 no elige uno: combina{' '}
        <a href="/seo-vs-geo-vs-aeo/">SEO + GEO + AEO</a> en una
        arquitectura de visibilidad integrada. Eso es exactamente lo que
        construimos en RankAgile.
      </p>
    </section>
  );
}
