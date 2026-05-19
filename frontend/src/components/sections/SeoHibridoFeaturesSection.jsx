import { useTranslation } from 'react-i18next';

export default function SeoHibridoFeaturesSection() {
  const { t } = useTranslation();
  const items = t('seoHibrido.features.items', { returnObjects: true });
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">{t('seoHibrido.features.eyebrow')}</span>
        <h2 className="ra-hib-h2">{t('seoHibrido.features.h2')}</h2>
        <div className="ra-hib-accordion-grid">
          {items.map((f) => (
            <details key={f.title} className="ra-hib-accordion-card">
              <summary>
                {f.title}
                <span className="ra-hib-accordion-icon">+</span>
              </summary>
              <p className="ra-hib-accordion-body">{f.body}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
