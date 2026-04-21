const features = [
  { title: '✓ Auditoría técnica SEO completa', body: 'Análisis exhaustivo de arquitectura web, velocidad de carga, indexación, Schema markup y optimización para Core Web Vitals.' },
  { title: '✓ Estrategia de contenido SEO', body: 'Roadmap de contenido basado en análisis de keywords, intención de búsqueda y gaps de contenido vs competencia.' },
  { title: '✓ Optimización on-page mensual', body: 'Trabajo continuo en títulos, meta descripciones, headers, contenido, enlaces internos y optimización de imágenes.' },
  { title: '✓ Link building de autoridad', body: 'Consecución de backlinks de calidad desde sitios relevantes con alta autoridad de dominio.' },
  { title: '✓ Monitoreo de rankings y tráfico', body: 'Seguimiento diario de posiciones en Google para keywords objetivo y análisis de evolución de tráfico orgánico.' },
  { title: '✓ Análisis de competencia', body: 'Benchmark mensual contra competidores directos: keywords, backlinks, contenido y estrategias emergentes.' },
  { title: '✓ Informes mensuales ejecutivos', body: 'Reportes detallados con KPIs, evolución de métricas, insights accionables y próximas acciones estratégicas.' },
  { title: '✓ Soporte técnico prioritario', body: 'Acceso directo a nuestro equipo de especialistas para resolución de incidencias y consultas estratégicas.' },
];

export default function SeoCompletoFeaturesSection() {
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="ra-comp-eyebrow">Entregables</span>
        <h2 className="ra-comp-h2">Qué incluye el servicio</h2>
        <div className="ra-comp-features">
          {features.map((f) => (
            <div key={f.title} className="ra-comp-feature">
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
