import { useTranslation } from 'react-i18next';

export default function ConsultoriaHeroSection() {
  const { t } = useTranslation();
  const checks = t('consultoria.hero.checks', { returnObjects: true });
  return (
    <section className="ra-cons-hero">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">{t('consultoria.hero.eyebrow')}</span>
        <h1 className="ra-cons-h1">{t('consultoria.hero.h1')}</h1>
        <p className="ra-cons-lead">{t('consultoria.hero.lead')}</p>
        <ul className="ra-cons-checks">
          {checks.map((c) => (
            <li key={c}><span className="ra-cons-check">✓</span>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
