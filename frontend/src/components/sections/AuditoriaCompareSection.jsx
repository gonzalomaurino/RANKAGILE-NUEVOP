export default function AuditoriaCompareSection() {
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">Nuestra Diferencia</span>
        <h2 className="ra-aud-h2">Qué nos diferencia de auditorías automáticas</h2>
        <div className="ra-aud-compare">
          <div className="ra-aud-compare-card ra-aud-compare-bad">
            <h3>Auditorías Automáticas</h3>
            <p>✗ Listas genéricas de errores sin contexto de negocio</p>
            <p>✗ Sin priorización — todo parece igualmente urgente</p>
            <p>✗ No detectan problemas específicos de tu stack tecnológico</p>
            <p>✗ Falsos positivos que generan ruido</p>
            <p>✗ Sin roadmap de implementación ni seguimiento</p>
          </div>
          <div className="ra-aud-compare-card ra-aud-compare-good">
            <h3>Nuestra Auditoría Profesional</h3>
            <p>✓ Análisis humano con contexto de industria y objetivos de negocio</p>
            <p>✓ Priorización por impacto real en rankings y revenue</p>
            <p>✓ Expertise en React, Next.js, WordPress, Shopify, custom stacks</p>
            <p>✓ Validación manual para eliminar ruido de falsos positivos</p>
            <p>✓ Roadmap técnico implementable + sesión de Q&amp;A con tu equipo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
