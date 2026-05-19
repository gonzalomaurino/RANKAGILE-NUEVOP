import { useTranslation } from 'react-i18next';

export default function SeoCompletoHeroSection() {
  const { t } = useTranslation();
  const checks = t('seoCompleto.hero.checks', { returnObjects: true });
  return (
    <section className="hero ra-comp-hero">
      <div className="aurora"></div>
      <div className="hero-grid"></div>
      <div className="hero-inner ra-comp-container">
        <span className="eyebrow centered ra-comp-eyebrow">{t('seoCompleto.hero.eyebrow')}</span>
        <h1 className="display ra-comp-h1">{t('seoCompleto.hero.h1')}</h1>
        <p className="hero-sub ra-comp-lead">{t('seoCompleto.hero.lead')}</p>
        <ul className="ra-comp-checks">
          {checks.map((c) => (
            <li key={c}><span className="ra-comp-check">✓</span>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
