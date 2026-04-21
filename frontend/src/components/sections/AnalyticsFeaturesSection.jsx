const features = [
  { title: '📊 Vista unificada en tiempo real', body: 'Todas tus métricas SEO en un solo lugar: rankings, tráfico, conversiones, backlinks, competencia. Actualización en vivo sin esperar 24-48h.' },
  { title: '🎯 Métricas de negocio, no vanidad', body: 'Tráfico cualificado, conversiones orgánicas, revenue atribuido a SEO, ROI calculado. Conectamos datos SEO con resultados de negocio reales.' },
  { title: '📈 Análisis predictivo', body: 'Proyecciones basadas en tendencias históricas. Simulaciones de impacto antes de implementar cambios. Forecasting de tráfico y conversiones.' },
  { title: '⚡ Alertas inteligentes', body: 'Notificaciones automáticas ante caídas de rankings críticos, picos de tráfico anómalos, nuevos backlinks detectados o movimientos de competencia.' },
  { title: '🔍 Benchmarking competitivo', body: 'Comparación lado a lado vs competidores: share of voice, keyword gaps, velocidad de crecimiento, estrategias de contenido detectadas.' },
  { title: '📝 Reportes automáticos', body: 'Informes mensuales generados automáticamente con insights accionables. Formato white-label para presentar a stakeholders o clientes.' },
  { title: '🧩 Integraciones nativas', body: 'Conecta Google Analytics, Search Console, GA4, CRM, Ahrefs, SEMrush. Centraliza datos sin exportar/importar manualmente cada vez.' },
  { title: '👥 Acceso multi-usuario', body: 'Dashboards personalizados por rol: CEO ve ROI, Marketing ve tráfico, Producto ve conversiones. Permisos granulares por equipo.' },
];

export default function AnalyticsFeaturesSection() {
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">Nuestra Solución</span>
        <h2 className="ra-ana-h2">Dashboard unificado con métricas que importan</h2>
        <div className="ra-ana-features">
          {features.map((f) => (
            <div key={f.title} className="ra-ana-feature">
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
