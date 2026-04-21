export default function ConsultoriaCompareSection() {
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">Consultoría vs Servicio</span>
        <h2 className="ra-cons-h2">¿Qué camino elegir?</h2>
        <div className="ra-cons-compare">
          <div className="ra-cons-compare-card">
            <h3>Consultoría SEO</h3>
            <p><strong>Dirección estratégica.</strong> Te guiamos en la toma de decisiones críticas y tu equipo ejecuta las implementaciones.</p>
            <p><strong>Ideal si tienes:</strong> Equipo técnico interno, pero necesitas expertise especializado para priorizar y validar.</p>
            <p><strong>Entregamos:</strong> Roadmaps, auditorías, validación técnica, sesiones mensuales y capacitación de equipos.</p>
          </div>
          <div className="ra-cons-compare-card">
            <h3>Servicio SEO Completo</h3>
            <p><strong>Ejecución hands-on.</strong> Nosotros implementamos toda la estrategia SEO end-to-end: auditoría, optimización, contenido, link building.</p>
            <p><strong>Ideal si:</strong> No tienes equipo SEO dedicado o prefieres delegar la ejecución completa a especialistas externos.</p>
            <p><strong>Entregamos:</strong> Auditorías, optimizaciones on-page, link building activo, contenido, monitoreo continuo y reportes mensuales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
