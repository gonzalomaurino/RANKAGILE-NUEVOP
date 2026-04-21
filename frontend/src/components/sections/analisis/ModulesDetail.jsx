import { useState } from 'react';

const ICONS = { ok: '✓', warning: '!', error: '✕', info: 'i' };

function severityClass(score) {
  if (score >= 75) return 'good';
  if (score >= 50) return 'warning';
  return 'poor';
}

function ModuleRow({ module, open, onToggle }) {
  const cls = severityClass(module.score);
  const issues = module.findings.filter((f) => f.type !== 'ok' && f.type !== 'info').length;
  return (
    <div className="ra-ana-gratis-detail-category">
      <button
        type="button"
        className="ra-ana-gratis-detail-category-header"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="ra-ana-gratis-detail-category-title">
          {module.label}
          {issues > 0 && (
            <span className="ra-ana-gratis-detail-issues">{issues}</span>
          )}
        </span>
        <span className="ra-ana-gratis-detail-right">
          <span className={`ra-ana-gratis-detail-category-score is-${cls}`}>{module.score}%</span>
          <span className={`ra-ana-gratis-detail-chev ${open ? 'is-open' : ''}`}>▾</span>
        </span>
      </button>
      {open && (
        <div className="ra-ana-gratis-detail-category-findings">
          {module.findings.map((f) => (
            <div key={f.id} className="ra-ana-gratis-finding-item">
              <div className={`ra-ana-gratis-finding-icon is-${f.type}`}>{ICONS[f.type] || '?'}</div>
              <div className="ra-ana-gratis-finding-content">
                <div className="ra-ana-gratis-finding-message">
                  <strong>{f.label}</strong>
                  {f.message && <> — {f.message}</>}
                </div>
                {f.value && <div className="ra-ana-gratis-finding-value">{f.value}</div>}
                {f.recommendation && (
                  <div className="ra-ana-gratis-finding-rec">
                    <em>Recomendación:</em> {f.recommendation}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ModulesDetail({ modules }) {
  const [openKey, setOpenKey] = useState(modules?.[0]?.key || null);
  if (!modules?.length) return null;
  return (
    <div className="ra-ana-gratis-details-section">
      <h3 className="ra-ana-gratis-h3">Análisis por módulos (RankAgile)</h3>
      <div className="ra-ana-gratis-details-list">
        {modules.map((m) => (
          <ModuleRow
            key={m.key}
            module={m}
            open={openKey === m.key}
            onToggle={() => setOpenKey(openKey === m.key ? null : m.key)}
          />
        ))}
      </div>
    </div>
  );
}
