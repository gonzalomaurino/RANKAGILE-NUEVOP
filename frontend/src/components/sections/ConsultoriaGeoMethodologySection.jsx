import { useTranslation } from 'react-i18next';

export default function ConsultoriaGeoMethodologySection() {
  const { t } = useTranslation();
  const steps = t('consultoria.steps.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('consultoria.geoMethodology.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('consultoria.geoMethodology.h2')}</h2>
      <div className="geo-phases-panel">
        {steps.map((step) => (
          <div className="geo-phase-card" key={step.n}>
            <span className="geo-phase-kicker">{step.n} {t('common.pasoLabel')}</span>
            <h3 className="geo-phase-title">{step.title}</h3>
            <p className="geo-phase-body">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
