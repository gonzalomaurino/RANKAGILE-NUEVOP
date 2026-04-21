const metrics = [
  {
    title: 'Visibilidad',
    items: ['Rankings por keyword', 'Share of voice', 'Featured snippets', 'Visibilidad SERP', 'Posición promedio'],
  },
  {
    title: 'Tráfico',
    items: ['Sesiones orgánicas', 'Usuarios nuevos', 'Páginas vistas', 'Tiempo en sitio', 'Tasa de rebote'],
  },
  {
    title: 'Conversión',
    items: ['Tasa de conversión', 'Costo por adquisición', 'Ventas directas por SEO', 'Retorno de inversión', 'Revenue orgánico'],
  },
  {
    title: 'Autoridad',
    items: ['Domain Authority', 'Dominios referentes', 'Perfil de backlinks', 'Trust Flow', 'Velocidad de crecimiento'],
  },
];

export default function AnalyticsMetricsSection() {
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">Qué Medimos</span>
        <h2 className="ra-ana-h2">Métricas que rastreamos en tu dashboard</h2>
        <div className="ra-ana-metrics">
          {metrics.map((m) => (
            <div key={m.title} className="ra-ana-metric-card">
              <h4>{m.title}</h4>
              <ul>
                {m.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
