import { useTranslation } from 'react-i18next';

export default function AnalyticsFeaturesSection() {
  const { t } = useTranslation();
  const features = t('analytics.features.items', { returnObjects: true });
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">{t('analytics.features.eyebrow')}</span>
        <h2 className="ra-ana-h2">{t('analytics.features.h2')}</h2>
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
