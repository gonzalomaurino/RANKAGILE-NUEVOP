const features = [
  { title: '✓ Auditoría SEO estratégica completa', body: 'Análisis exhaustivo de arquitectura técnica, contenido, perfil de enlaces y posicionamiento competitivo con recomendaciones priorizadas.' },
  { title: '✓ Roadmap SEO trimestral', body: 'Plan de acción detallado con iniciativas priorizadas por impacto, esfuerzo requerido y dependencias técnicas.' },
  { title: '✓ Sesiones de consultoría mensuales', body: 'Reuniones estratégicas de 90 minutos para alineación, resolución de bloqueos y validación de decisiones críticas.' },
  { title: '✓ Revisión de implementaciones', body: 'Validación técnica de cambios críticos implementados por tu equipo para garantizar correcta ejecución SEO.' },
  { title: '✓ Análisis de competencia estratégico', body: 'Benchmarking profundo vs competidores directos: keywords, contenido, autoridad de dominio y estrategias detectadas.' },
  { title: '✓ Capacitación de equipos internos', body: 'Workshops y sesiones de formación para marketing, producto y desarrollo en mejores prácticas SEO.' },
  { title: '✓ Dashboard de métricas clave', body: 'Panel de control con KPIs esenciales: rankings, tráfico orgánico, conversiones y progreso vs objetivos.' },
  { title: '✓ Soporte estratégico continuo', body: 'Acceso directo vía Slack/email para consultas urgentes, validación de decisiones y resolución de dudas técnicas.' },
];

export default function ConsultoriaFeaturesSection() {
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">Entregables</span>
        <h2 className="ra-cons-h2">Qué incluye la consultoría</h2>
        <div className="ra-cons-features">
          {features.map((f) => (
            <div key={f.title} className="ra-cons-feature">
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
