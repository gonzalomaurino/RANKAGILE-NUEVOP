import { useState } from 'react';
import { analyzeSeo } from '../../services/seoClient.js';
import ScorePanel from './analisis/ScorePanel.jsx';
import CategoriesPanel from './analisis/CategoriesPanel.jsx';
import ModulesDetail from './analisis/ModulesDetail.jsx';
import PriorityList from './analisis/PriorityList.jsx';
import PdfDownloadForm from './analisis/PdfDownloadForm.jsx';

function summarize(result) {
  const external = result?.external;
  const internal = result?.internal;
  const errors = (internal?.summary?.errors || 0) + (external?.issuesCount || 0);
  const warnings = internal?.summary?.warnings || 0;
  return { errors, warnings, issuesCount: errors + warnings };
}

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
      const result = await analyzeSeo(trimmed);
      setData(result);
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

  const summary = data ? summarize(data) : null;
  const externalIssues = data?.external?.issues || [];

  return (
    <section className="ra-ana-gratis-tool">
      <div className="ra-ana-gratis-hero">
        <span className="ra-ana-gratis-eyebrow">Análisis SEO Gratuito</span>
        <h1 className="ra-ana-gratis-h1">
          Análisis Gratuito SEO: detecta oportunidades SEO reales
        </h1>
        <p className="ra-ana-gratis-lead">
          Evaluamos tu URL en 7 módulos: On-Page, Técnico, Rendimiento, Móvil,
          Off-Page, Servidor y GEO (SEO + IA). Sin registro. En menos de 30 segundos.
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
          <p>Analizando URL en los 7 módulos…</p>
        </div>
      )}

      {status === 'ok' && data && (
        <div className="ra-ana-gratis-card">
          <div className="ra-ana-gratis-dashboard">
            <ScorePanel
              score={data.score}
              status={data.status}
              issuesCount={summary.issuesCount}
            />
            <CategoriesPanel categories={data.external?.categories} />
          </div>

          {externalIssues.length > 0 && (
            <div className="ra-ana-gratis-issues-container">
              <h3 className="ra-ana-gratis-h3">Problemas detectados</h3>
              <ul className="ra-ana-gratis-issues-list">
                {externalIssues.map((i, idx) => (<li key={idx}>{i}</li>))}
              </ul>
            </div>
          )}

          {data.internal?.modules && (
            <ModulesDetail modules={data.internal.modules} />
          )}

          {data.internal?.priorities && (
            <PriorityList priorities={data.internal.priorities} />
          )}

          {data.internal?.id && (
            <PdfDownloadForm
              analysisId={data.internal.id}
              analysisUrl={data.url}
            />
          )}
        </div>
      )}
    </section>
  );
}
