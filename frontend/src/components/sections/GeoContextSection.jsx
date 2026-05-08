export default function GeoContextSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Contexto estrategico</span>
      <div className="geo-urgent">
        <div className="geo-urgent-copy">
          <h2 className="geo-page-h2">GEO es urgente para 2026</h2>
          <p className="geo-page-p">
            El 72% de decisores B2B consulta una IA antes del primer contacto.
            Si no apareces ahi, no entras al ciclo de venta.
          </p>
          <ul className="geo-page-list">
            <li>ChatGPT y Gemini influyen en la seleccion de proveedores.</li>
            <li>Perplexity y Copilot citan fuentes y desplazan el organico.</li>
            <li>GEO amplifica el SEO tradicional en capas nuevas.</li>
          </ul>
          <a className="btn-ghost" href="/">Ver SEO para IA</a>
        </div>
        <div className="geo-urgent-panel">
          <div className="geo-urgent-item">
            <span className="geo-urgent-name">ChatGPT</span>
            <p>Consultas de compra, comparativas y recomendaciones.</p>
          </div>
          <div className="geo-urgent-item">
            <span className="geo-urgent-name">Gemini</span>
            <p>AI Overviews desplaza resultados organicos.</p>
          </div>
          <div className="geo-urgent-item">
            <span className="geo-urgent-name">Perplexity</span>
            <p>Preferido por perfiles tecnicos, cita fuentes.</p>
          </div>
          <div className="geo-urgent-item">
            <span className="geo-urgent-name">Bing Copilot</span>
            <p>Integrado en Microsoft, uso corporativo masivo.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
