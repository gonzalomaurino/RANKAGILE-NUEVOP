export default function GeoComparisonSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Comparativa técnica</span>
      <h2 className="geo-page-h2">SEO vs GEO vs AEO: ¿en qué se diferencian?</h2>
      <div className="geo-page-grid-3">
        <article className="geo-page-card">
          <p className="geo-page-card-title">SEO — Search Engine Optimization</p>
          <p className="geo-page-card-body">
            Optimiza páginas web para aparecer en resultados orgánicos de
            Google y Bing. Trabaja con keywords, backlinks y autoridad de
            dominio. Objetivo: ranking en SERPs. Métricas: posición, tráfico
            orgánico, CTR.
          </p>
        </article>
        <article className="geo-page-card">
          <p className="geo-page-card-title is-accent">GEO — Generative Engine Optimization</p>
          <p className="geo-page-card-body">
            Optimiza la presencia de marca dentro de las respuestas
            generadas por IA. Trabaja con autoridad semántica, datos
            estructurados, citas digitales y cobertura en fuentes de
            entrenamiento. Objetivo: ser mencionado o recomendado por
            ChatGPT, Gemini y Perplexity.
          </p>
        </article>
        <article className="geo-page-card">
          <p className="geo-page-card-title">AEO — Answer Engine Optimization</p>
          <p className="geo-page-card-body">
            Optimiza contenido para obtener featured snippets y posición
            cero en Google. Trabaja con estructura de preguntas y
            respuestas, FAQ Schema, y claridad de contenido. Es un
            subconjunto del SEO enfocado en respuestas directas.
          </p>
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
