import { useTranslation } from 'react-i18next';

export default function SeoCompletoGeoMethodologySection() {
  const { t } = useTranslation();
  const steps = t('seoCompleto.steps.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('seoCompleto.geoMethodology.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('seoCompleto.geoMethodology.h2')}</h2>
      <p className="geo-page-p">{t('seoCompleto.geoMethodology.lead')}</p>
      <div className="geo-phases-panel">
        {steps.map((step, idx) => (
          <div className="geo-phase-card" key={step.title}>
            <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} {t('common.faseLabel')}</span>
            <h3 className="geo-phase-title">{step.title}</h3>
            <p className="geo-phase-body">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
