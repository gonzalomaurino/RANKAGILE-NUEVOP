const PRIORITY_LABEL = {
  high: 'ALTA',
  medium: 'MEDIA',
  low: 'BAJA',
  info: 'INFO',
};

export default function PriorityList({ priorities }) {
  if (!priorities?.length) return null;
  const top = priorities.slice(0, 10);
  return (
    <div className="ra-ana-gratis-priority-section">
      <h3 className="ra-ana-gratis-h3">Por dónde empezar</h3>
      <p className="ra-ana-gratis-priority-lead">
        Lista priorizada: primero lo que más impacto tiene en tu SEO.
      </p>
      <ol className="ra-ana-gratis-priority-list">
        {top.map((p, idx) => (
          <li key={`${p.moduleKey}-${p.id}-${idx}`} className={`ra-ana-gratis-priority-item is-${p.type} prio-${p.priority}`}>
            <span className="ra-ana-gratis-priority-rank">{idx + 1}</span>
            <div className="ra-ana-gratis-priority-body">
              <div className="ra-ana-gratis-priority-meta">
                <span className={`ra-ana-gratis-priority-badge prio-${p.priority}`}>
                  {PRIORITY_LABEL[p.priority] || 'MEDIA'}
                </span>
                <span className="ra-ana-gratis-priority-module">{p.moduleLabel}</span>
              </div>
              <div className="ra-ana-gratis-priority-title">{p.label}</div>
              {p.message && <div className="ra-ana-gratis-priority-msg">{p.message}</div>}
              {p.recommendation && (
                <div className="ra-ana-gratis-priority-rec">{p.recommendation}</div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
