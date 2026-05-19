import { useTranslation } from 'react-i18next';

export default function AnalyticsGeoMetricsSection() {
  const { t } = useTranslation();
  const metrics = t('analytics.metrics.items', { returnObjects: true });
  const label = t('analytics.geoMetrics.label');
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('analytics.geoMetrics.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('analytics.geoMetrics.h2')}</h2>
      <div className="geo-phases-panel geo-phases-4">
        {metrics.map((m, idx) => (
          <div className="geo-phase-card" key={m.title}>
            <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} {label}</span>
            <h3 className="geo-phase-title">{m.title}</h3>
            <ul className="geo-page-list" style={{ marginTop: 12 }}>
              {m.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
