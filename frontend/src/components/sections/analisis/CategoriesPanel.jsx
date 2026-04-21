const LABELS = {
  performance: 'Rendimiento',
  page_structure: 'Estructura de Página',
  headings: 'Encabezados',
  image_optimization: 'Optimización de Imágenes',
  internal_links: 'Enlaces Internos',
  backlinks: 'Enlaces Externos',
};

function severity(score) {
  if (score >= 80) return 'good';
  if (score >= 50) return 'warning';
  return 'poor';
}

export default function CategoriesPanel({ categories }) {
  if (!categories || !Object.keys(categories).length) return null;
  return (
    <div className="ra-ana-gratis-categories-panel">
      <h3 className="ra-ana-gratis-h3">Categorías SEO</h3>
      <div className="ra-ana-gratis-categories-list">
        {Object.entries(categories).map(([k, v]) => {
          const cls = severity(v);
          return (
            <div key={k} className="ra-ana-gratis-category-item">
              <span className="ra-ana-gratis-category-label">{LABELS[k] || k}</span>
              <div className="ra-ana-gratis-category-bar-container">
                <div
                  className={`ra-ana-gratis-category-bar is-${cls}`}
                  style={{ width: `${v}%` }}
                />
              </div>
              <span className="ra-ana-gratis-category-value">{v}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
