import { useTranslation } from 'react-i18next';

export default function AnalyticsAudienceSection() {
  const { t } = useTranslation();
  const audience = t('analytics.audience.items', { returnObjects: true });
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">{t('analytics.audience.eyebrow')}</span>
        <h2 className="ra-ana-h2">{t('analytics.audience.h2')}</h2>
        <div className="ra-ana-audience">
          {audience.map((a) => (
            <div key={a.title} className="ra-ana-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
