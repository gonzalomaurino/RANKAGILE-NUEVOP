import { useTranslation } from 'react-i18next';

export default function AuditoriaHeroSection() {
  const { t } = useTranslation();
  const checks = t('auditoria.hero.checks', { returnObjects: true });
  return (
    <section className="ra-aud-hero">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">{t('auditoria.hero.eyebrow')}</span>
        <h1 className="ra-aud-h1">{t('auditoria.hero.h1')}</h1>
        <p className="ra-aud-lead">{t('auditoria.hero.lead')}</p>
        <ul className="ra-aud-checks">
          {checks.map((c) => (
            <li key={c}><span className="ra-aud-check">✓</span>{c}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
