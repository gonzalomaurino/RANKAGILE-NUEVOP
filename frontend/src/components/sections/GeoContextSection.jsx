export default function GeoContextSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Contexto estrategico</span>
      <div className="vignette" style={{ gridTemplateColumns: '1fr 1.05fr' }}>
        <div className="vignette-left">
          <span className="eyebrow">por que ahora</span>
          <h2 className="geo-page-h2">GEO es urgente para 2026</h2>
          <p className="geo-page-p">
            El 72% de decisores B2B consulta una IA antes del primer contacto.
            Si no apareces ahi, no entras al ciclo de venta.
          </p>
          <ul className="vignette-bullets">
            <li>ChatGPT y Gemini influyen en la seleccion de proveedores.</li>
            <li>Perplexity y Copilot citan fuentes y desplazan el organico.</li>
            <li>GEO amplifica el SEO tradicional en capas nuevas.</li>
          </ul>
          <a className="btn-ghost" href="/">Ver SEO para IA</a>
        </div>
        <div className="vignette-right">
          <div className="geo-columns">
            <div className="geo-column-card">
              <h4>ChatGPT</h4>
              <p>Consultas de compra, comparativas y recomendaciones.</p>
            </div>
            <div className="geo-column-card">
              <h4>Gemini</h4>
              <p>AI Overviews desplaza resultados organicos.</p>
            </div>
            <div className="geo-column-card">
              <h4>Perplexity</h4>
              <p>Preferido por perfiles tecnicos, cita fuentes.</p>
            </div>
            <div className="geo-column-card">
              <h4>Bing Copilot</h4>
              <p>Integrado en Microsoft, uso corporativo masivo.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
