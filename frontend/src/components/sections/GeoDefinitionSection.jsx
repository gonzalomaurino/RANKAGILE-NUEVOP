export default function GeoDefinitionSection() {
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">Definicion operativa</span>
      <div className="vignette" style={{ gridTemplateColumns: '1fr' }}>
        <div className="vignette-left geo-center">
          <h2 className="geo-page-h2">GEO optimiza presencia dentro de respuestas de IA</h2>
          <p className="geo-page-p">
            GEO trabaja sobre autoridad semantica, datos estructurados y cobertura en
            fuentes que los modelos usan para citar marcas.
          </p>
          <ul className="vignette-bullets">
            <li>Citaciones en contenido de alta autoridad.</li>
            <li>Schema claro y coherencia semantica.</li>
            <li>Contenido con respuestas directas y densidad informacional.</li>
            <li>Presencia en medios, directorios y fuentes de training data.</li>
          </ul>
          <a className="btn-ghost" href="/servicios/geo">Ver agencia GEO</a>
        </div>
      </div>
    </section>
  );
}
