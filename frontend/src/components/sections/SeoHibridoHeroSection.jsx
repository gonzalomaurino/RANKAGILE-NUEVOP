import { useTranslation } from 'react-i18next';

export default function SeoHibridoHeroSection() {
  const { t } = useTranslation();
  const checks = t('seoHibrido.hero.checks', { returnObjects: true });
  return (
    <section className="hero ra-hib-hero">
      <div className="aurora"></div>
      <div className="hero-grid"></div>
      <div className="hero-inner ra-hib-container">
        <span className="eyebrow centered ra-hib-eyebrow">{t('seoHibrido.hero.eyebrow')}</span>
        <h1 className="display ra-hib-h1">{t('seoHibrido.hero.h1')}</h1>
        <p className="hero-sub ra-hib-lead">{t('seoHibrido.hero.lead')}</p>
        <ul className="ra-hib-checks">
          {checks.map((c) => (
            <li key={c}><span className="ra-hib-check">✓</span>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
