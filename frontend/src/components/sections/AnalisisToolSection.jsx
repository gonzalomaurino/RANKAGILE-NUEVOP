import { useState } from 'react';

const API = 'https://seo-test-delta.vercel.app/api/analyze';

const LABELS = {
  performance: 'Rendimiento',
  page_structure: 'Estructura de Página',
  headings: 'Encabezados',
  image_optimization: 'Optimización de Imágenes',
  internal_links: 'Enlaces Internos',
  backlinks: 'Enlaces Externos',
};

const ICONS = { ok: '✓', warning: '!', error: '✕' };
const STATUS_LABELS = { good: 'BUENO', warning: 'REGULAR', poor: 'DEFICIENTE' };

function severity(score) {
  if (score >= 80) return 'good';
  if (score >= 50) return 'warning';
  return 'poor';
}

const CIRCUMFERENCE = 283;

export default function AnalisisToolSection() {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | ok | error
  const [error, setError] = useState('');
  const [data, setData] = useState(null);

  async function analyze() {
    const trimmed = url.trim();
    if (!trimmed) {
      setStatus('error');
      setError('Ingresá una URL para analizar');
      return;
    }
    if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) {
      setStatus('error');
      setError('La URL debe comenzar con http:// o https://');
      return;
    }

    setStatus('loading');
    setError('');
    setData(null);

    try {
      const res = await fetch(`${API}?url=${encodeURIComponent(trimmed)}`);
      const payload = await res.json();
      if (!res.ok) throw new Error(payload.error || 'Error al analizar la URL');
      setData(payload);
      setStatus('ok');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Ocurrió un error inesperado');
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    analyze();
  }

  const sev = data ? severity(data.score) : 'good';
  const offset = data ? CIRCUMFERENCE - (data.score / 100) * CIRCUMFERENCE : CIRCUMFERENCE;

  return (
    <section className="ra-ana-gratis-tool">
      <div className="ra-ana-gratis-hero">
        <span className="ra-ana-gratis-eyebrow">Análisis SEO Gratuito</span>
        <h1 className="ra-ana-gratis-h1">
          Análisis Gratuito SEO: detecta oportunidades SEO reales
        </h1>
        <p className="ra-ana-gratis-lead">
          Evaluamos tu URL según terminología SEO, estructura y relevancia
          semántica.
        </p>

        <form className="ra-ana-gratis-form" onSubmit={onSubmit} noValidate>
          <input
            id="seo-url"
            className="ra-ana-gratis-input"
            type="url"
            placeholder="Ingresá tu URL (ej: https://tusitio.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={status === 'loading'}
          />
          <button
            type="submit"
            className="ra-ana-gratis-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Analizando…' : 'Analizar URL'}
          </button>
        </form>

        {status === 'error' && (
          <p className="ra-ana-gratis-error" role="alert">{error}</p>
        )}
      </div>

      {status === 'loading' && (
        <div className="ra-ana-gratis-loading" role="status">
          <div className="ra-ana-gratis-spinner" aria-hidden="true" />
          <p>Analizando URL…</p>
        </div>
      )}

      {status === 'ok' && data && (
        <div className="ra-ana-gratis-card">
          <div className="ra-ana-gratis-dashboard">
            <div className="ra-ana-gratis-score-panel">
              <div className={`ra-ana-gratis-score-circle is-${sev}`}>
                <svg viewBox="0 0 100 100">
                  <circle className="ra-ana-gratis-score-bg" cx="50" cy="50" r="45" />
                  <circle
                    className="ra-ana-gratis-score-progress"
                    cx="50" cy="50" r="45"
                    style={{ strokeDashoffset: offset }}
                  />
                </svg>
                <div className="ra-ana-gratis-score-inner">
                  <span className="ra-ana-gratis-score-number">{data.score}</span>
                  <span className="ra-ana-gratis-score-label">Score</span>
                </div>
              </div>
              <div className={`ra-ana-gratis-score-status is-${sev}`}>
                {STATUS_LABELS[sev]}
              </div>
              {data.issuesCount > 0 && (
                <div className="ra-ana-gratis-issues-badge">
                  <span>{data.issuesCount}</span> problemas detectados
                </div>
              )}
            </div>

            <div className="ra-ana-gratis-categories-panel">
              <h3 className="ra-ana-gratis-h3">Categorías SEO</h3>
              <div className="ra-ana-gratis-categories-list">
                {Object.entries(data.categories || {}).map(([k, v]) => {
                  const cls = severity(v);
                  return (
                    <div key={k} className="ra-ana-gratis-category-item">
                      <span className="ra-ana-gratis-category-label">
                        {LABELS[k] || k}
                      </span>
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
          </div>

          {data.issues?.length > 0 && (
            <div className="ra-ana-gratis-issues-container">
              <h3 className="ra-ana-gratis-h3">Problemas detectados</h3>
              <ul className="ra-ana-gratis-issues-list">
                {data.issues.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
            </div>
          )}

          {data.details && (
            <div className="ra-ana-gratis-details-section">
              <h3 className="ra-ana-gratis-h3">Análisis Detallado</h3>
              <div className="ra-ana-gratis-details-list">
                {Object.entries(data.details).map(([k, findings]) => {
                  const catScore = data.categories?.[k] || 0;
                  const cls = severity(catScore);
                  return (
                    <div key={k} className="ra-ana-gratis-detail-category">
                      <div className="ra-ana-gratis-detail-category-header">
                        <span className="ra-ana-gratis-detail-category-title">
                          {LABELS[k] || k}
                        </span>
                        <span className={`ra-ana-gratis-detail-category-score is-${cls}`}>
                          {catScore}%
                        </span>
                      </div>
                      <div className="ra-ana-gratis-detail-category-findings">
                        {findings.map((f, idx) => (
                          <div key={idx} className="ra-ana-gratis-finding-item">
                            <div className={`ra-ana-gratis-finding-icon is-${f.type}`}>
                              {ICONS[f.type] || '?'}
                            </div>
                            <div className="ra-ana-gratis-finding-content">
                              <div className="ra-ana-gratis-finding-message">{f.message}</div>
                              {f.value && (
                                <div className="ra-ana-gratis-finding-value">{f.value}</div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
