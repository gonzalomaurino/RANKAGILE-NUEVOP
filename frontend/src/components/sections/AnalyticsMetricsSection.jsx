import { useTranslation } from 'react-i18next';

export default function AnalyticsMetricsSection() {
  const { t } = useTranslation();
  const metrics = t('analytics.metrics.items', { returnObjects: true });
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">{t('analytics.metrics.eyebrow')}</span>
        <h2 className="ra-ana-h2">{t('analytics.metrics.h2')}</h2>
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
