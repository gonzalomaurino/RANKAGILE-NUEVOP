const audience = [
  { title: 'CMOs y directores de marketing', body: 'Necesitas demostrar ROI de SEO a CEO/board. Dashboard ejecutivo con métricas de negocio, no métricas técnicas que nadie entiende.' },
  { title: 'Agencias SEO', body: 'Gestión de múltiples clientes desde un solo dashboard. Reportes white-label automatizados que liberan horas de trabajo manual cada mes.' },
  { title: 'Equipos de producto / growth', body: 'Decisiones rápidas basadas en data. Dashboards en tiempo real para validar hipótesis, medir experimentos y priorizar roadmap.' },
  { title: 'E-commerce y marketplaces', body: 'Tracking granular por categoría, producto, landing page. Conecta SEO directamente con revenue para optimizar lo que genera ventas.' },
];

export default function AnalyticsAudienceSection() {
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">¿Es Para Ti?</span>
        <h2 className="ra-ana-h2">Ideal para quien toma decisiones basadas en datos</h2>
        <div className="ra-ana-audience">
          {audience.map((a) => (
            <div key={a.title} className="ra-ana-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
