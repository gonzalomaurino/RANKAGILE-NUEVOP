import { useTranslation } from 'react-i18next';

export default function ConsultoriaFeaturesSection() {
  const { t } = useTranslation();
  const items = t('consultoria.features.items', { returnObjects: true });
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">{t('consultoria.features.eyebrow')}</span>
        <h2 className="ra-cons-h2">{t('consultoria.features.h2')}</h2>
        <div className="ra-cons-features">
          {items.map((f) => (
            <div key={f.title} className="ra-cons-feature">
              <h4>✓ {f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
