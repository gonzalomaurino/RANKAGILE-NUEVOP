export default function GeoComparisonSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Comparativa tecnica</span>
      <h2 className="geo-page-h2">SEO vs GEO vs AEO: diferencias clave</h2>
      <div className="geo-compare">
        <div className="geo-compare-col">
          <span className="geo-compare-kicker">01 / SEO</span>
          <h3 className="geo-compare-title">Search Engine Optimization</h3>
          <p className="geo-compare-body">
            Ranking en SERPs con keywords, backlinks y autoridad de dominio.
            Metricas: posicion, trafico organico y CTR.
          </p>
          <span className="geo-compare-tag">ORGANICO</span>
        </div>
        <div className="geo-compare-col">
          <span className="geo-compare-kicker">02 / GEO</span>
          <h3 className="geo-compare-title">Generative Engine Optimization</h3>
          <p className="geo-compare-body">
            Presencia de marca dentro de respuestas de IA con citaciones,
            datos estructurados y cobertura en fuentes clave.
          </p>
          <span className="geo-compare-tag">GENERATIVO</span>
        </div>
        <div className="geo-compare-col">
          <span className="geo-compare-kicker">03 / AEO</span>
          <h3 className="geo-compare-title">Answer Engine Optimization</h3>
          <p className="geo-compare-body">
            Featured snippets y posicion cero con estructura Q&A y FAQ Schema.
            Subconjunto del SEO orientado a respuestas directas.
          </p>
          <span className="geo-compare-tag">RESPUESTAS</span>
        </div>
      </div>
      <p className="geo-page-quote">
        La estrategia ganadora en 2026 no elige uno: combina{' '}
        <a href="/seo-vs-geo-vs-aeo">SEO + GEO + AEO</a> en una
        arquitectura de visibilidad integrada. Eso es exactamente lo que
        construimos en RankAgile.
      </p>
    </section>
  );
}
