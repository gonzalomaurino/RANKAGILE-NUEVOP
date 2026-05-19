import { useTranslation } from 'react-i18next';

export default function SeoCompletoFeaturesSection() {
  const { t } = useTranslation();
  const items = t('seoCompleto.features.items', { returnObjects: true });
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">{t('seoCompleto.features.eyebrow')}</span>
        <h2 className="ra-comp-h2">{t('seoCompleto.features.h2')}</h2>
        <div className="ra-comp-features">
          {items.map((f) => (
            <div key={f.n} className="ra-comp-feature">
              <h4>✓ {f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
