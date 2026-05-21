import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import PageSeo from '../seo/PageSeo';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/claude-system.css';
import '../styles/claude-analisis.css';

const RING_RADIUS = 52;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const TAB_TO_MODULE = {
  seo: 'onPage',
  geo: 'geo',
  rendimiento: 'performance',
  mobile: 'mobile',
};

function scoreTone(score) {
  if (score >= 75) return 'good';
  if (score >= 50) return 'warn';
  return 'bad';
}

function findingIcon(type) {
  if (type === 'ok') return '✅';
  if (type === 'warning') return '⚠️';
  if (type === 'error') return '❌';
  return 'ℹ️';
}

function normalizeInputUrl(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export default function ClaudeAnalisisPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';

  const MODULE_LABELS = useMemo(() => ({
    onPage: t('analisis.moduleLabels.onPage'),
    technical: t('analisis.moduleLabels.technical'),
    performance: t('analisis.moduleLabels.performance'),
    mobile: t('analisis.moduleLabels.mobile'),
    geo: t('analisis.moduleLabels.geo'),
    server: t('analisis.moduleLabels.server'),
    offPage: t('analisis.moduleLabels.offPage'),
  }), [t]);

  useDocumentMeta({
    title: t('analisis.meta.title'),
    description: t('analisis.meta.description'),
  });

  const [url, setUrl] = useState('');
  const [displayScore, setDisplayScore] = useState(0);
  const [animTarget, setAnimTarget] = useState(0);
  const [activeTab, setActiveTab] = useState('resumen');
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (animTarget === 0) { setDisplayScore(0); return; }
    const start = performance.now();
    const duration = 1200;
    let frame;
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayScore(Math.round(animTarget * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [animTarget]);

  const dashOffset = useMemo(
    () => RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * displayScore) / 100,
    [displayScore],
  );

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const normalized = normalizeInputUrl(url);
    if (!normalized) return;
    setStatus('loading');
    setResult(null);
    setErrorMsg('');
    setAnimTarget(0);
    setActiveTab('resumen');
    try {
      const res = await fetch(`/api/seo/analyze?url=${encodeURIComponent(normalized)}`);
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.message || `Error ${res.status}`);
      setResult(data);
      setAnimTarget(data.score ?? 0);
      setStatus('done');
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  }, [url]);

  const categories = useMemo(() => {
    if (!result?.modules) return [];
    return result.modules
      .filter((m) => m.weight > 0)
      .map((m) => ({
        key: m.key,
        name: MODULE_LABELS[m.key] ?? m.label ?? m.key,
        value: m.score,
        tone: scoreTone(m.score),
      }));
  }, [result, MODULE_LABELS]);

  const activeFindings = useMemo(() => {
    if (!result?.modules) return [];
    const moduleKey = TAB_TO_MODULE[activeTab];
    if (!moduleKey) return [];
    const mod = result.modules.find((m) => m.key === moduleKey);
    return mod?.findings ?? [];
  }, [result, activeTab]);

  const summary = result?.summary ?? { errors: 0, warnings: 0, oks: 0 };
  const topPriorities = result?.priorities?.slice(0, 6) ?? [];

  const showReport = status === 'loading' || status === 'done';

  return (
    <>
      <PageSeo
        title={t('analisis.meta.title')}
        description={t('analisis.meta.description')}
        image="/og/analisis-gratuito.png"
        locale={i18n.language === 'en' ? 'en_US' : 'es_ES'}
      />
      <ClaudeNavbar />
      <div className="page">
        <main className="main">
          <section className="hero-card">
            <div className="aurora-bg" />
            <div className="hero-card-inner">
              <span className="eyebrow">{t('analisis.eyebrow')}</span>
              <h1>{t('analisis.h1')}</h1>
              <p>{t('analisis.lead')}</p>
              <form className="url-pill" onSubmit={handleSubmit}>
                <svg className="globe" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  type="text"
                  placeholder={t('analisis.placeholder')}
                  disabled={status === 'loading'}
                />
                <span className="country">ES</span>
                <button type="submit" className="btn-pill filled" disabled={status === 'loading' || !url.trim()}>
                  {status === 'loading' ? t('analisis.btnLoading') : t('analisis.btnAnalyze')}
                  <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
              {status === 'error' && (
                <p className="analysis-error">{errorMsg}</p>
              )}
            </div>
          </section>

          {showReport && (
            <>
              <nav className="tabs">
                {['seo', 'geo', 'resumen', 'rendimiento', 'mobile'].map((tab) => (
                  <button
                    key={tab}
                    className={`tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                    disabled={status === 'loading'}
                  >
                    {tab === 'seo' && t('analisis.tabSeo')}
                    {tab === 'geo' && <>{t('analisis.tabGeo')} <span className="dot" /></>}
                    {tab === 'resumen' && t('analisis.tabResumen')}
                    {tab === 'rendimiento' && t('analisis.tabRendimiento')}
                    {tab === 'mobile' && t('analisis.tabMobile')}
                  </button>
                ))}
              </nav>

              <section className="report-card">
                {status === 'loading' ? (
                  <div className="analysis-loading">
                    <div className="analysis-spinner" />
                    <span>{t('analisis.loading')}</span>
                  </div>
                ) : (
                  <>
                    <div className="score">
                      <div className="score-head">{t('analisis.scoreHead')}</div>
                      <div className="score-ring-wrap">
                        <div className="score-ring">
                          <svg viewBox="0 0 120 120">
                            <circle className="track" cx="60" cy="60" r="52" />
                            <circle
                              className="bar"
                              cx="60" cy="60" r="52"
                              strokeDasharray={RING_CIRCUMFERENCE}
                              strokeDashoffset={dashOffset}
                            />
                          </svg>
                          <div className="num">
                            <span className="val">{displayScore}</span>
                          </div>
                        </div>
                      </div>
                      <div className="score-mini">
                        <div className="score-mini-item">
                          <div className={`v ${summary.errors === 0 ? 'good' : 'bad'}`}>{summary.errors}</div>
                          <div className="l">{t('analisis.errors')}</div>
                        </div>
                        <div className="score-mini-item">
                          <div className={`v ${summary.warnings <= 3 ? 'good' : 'warn'}`}>{summary.warnings}</div>
                          <div className="l">{t('analisis.warnings')}</div>
                        </div>
                      </div>
                    </div>

                    <div className="cats">
                      <div className="cats-head">
                        <h3>
                          {activeTab === 'resumen'
                            ? t('analisis.catsHead')
                            : (MODULE_LABELS[TAB_TO_MODULE[activeTab]] ?? activeTab)}
                        </h3>
                        <span className="domain">
                          {result?.url?.replace(/^https?:\/\//, '')}
                        </span>
                      </div>

                      {activeTab === 'resumen' ? (
                        <>
                          <div className="cat-list">
                            {categories.map((cat) => (
                              <div className="cat" key={cat.key}>
                                <span className="cat-name">{cat.name}</span>
                                <div className="cat-bar">
                                  <div className={`cat-bar-fill ${cat.tone}`} style={{ width: `${cat.value}%` }} />
                                </div>
                                <span className="cat-val">{cat.value}%</span>
                              </div>
                            ))}
                          </div>
                          {topPriorities.length > 0 && (
                            <div className="priorities">
                              <div className="priorities-head">{t('analisis.startHere')}</div>
                              {topPriorities.map((f) => (
                                <div key={`${f.moduleKey}-${f.id}`} className={`priority-item priority-item--${f.type}`}>
                                  <span className="priority-icon">{findingIcon(f.type)}</span>
                                  <div className="priority-body">
                                    <div className="priority-label">{f.label}</div>
                                    <div className="priority-msg">{f.message}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          <div className="cat-footer">
                            <span className="cat-footer-hint">
                              <b>{summary.errors} {t('analisis.errors').toLowerCase()}</b> · <b>{summary.warnings} {t('analisis.warnings').toLowerCase()}</b>
                            </span>
                            <a href={`${prefix}/contacto`} className="btn-pill">
                              {t('analisis.fullReport')}
                              <svg className="arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                              </svg>
                            </a>
                          </div>
                        </>
                      ) : (
                        <div className="findings-list">
                          {activeFindings.length === 0 ? (
                            <p className="findings-empty">{t('analisis.noData')}</p>
                          ) : activeFindings.map((f) => (
                            <div key={f.id} className={`finding finding--${f.type}`}>
                              <span className="finding-icon">{findingIcon(f.type)}</span>
                              <div className="finding-body">
                                <div className="finding-label">{f.label}</div>
                                <div className="finding-msg">{f.message}</div>
                                {f.value !== undefined && f.value !== null && String(f.value) !== '' && (
                                  <div className="finding-value">{String(f.value)}</div>
                                )}
                                {f.recommendation && (
                                  <div className="finding-rec">{f.recommendation}</div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </section>
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}
