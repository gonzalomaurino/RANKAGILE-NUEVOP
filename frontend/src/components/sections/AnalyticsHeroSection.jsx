import { useTranslation } from 'react-i18next';

export default function AnalyticsHeroSection() {
  const { t } = useTranslation();
  const checks = t('analytics.hero.checks', { returnObjects: true });
  return (
    <section className="ra-ana-hero">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">{t('analytics.hero.eyebrow')}</span>
        <h1 className="ra-ana-h1">{t('analytics.hero.h1')}</h1>
        <p className="ra-ana-lead">{t('analytics.hero.lead')}</p>
        <ul className="ra-ana-checks">
          {checks.map((check) => (
            <li key={check}><span className="ra-ana-check">✓</span>{check}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
