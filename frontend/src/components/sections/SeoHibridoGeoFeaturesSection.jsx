import { useTranslation } from 'react-i18next';

export default function SeoHibridoGeoFeaturesSection() {
  const { t } = useTranslation();
  const items = t('seoHibrido.features.items', { returnObjects: true });
  const label = t('seoHibrido.geoFeatures.label');
  const tag = t('seoHibrido.geoFeatures.tag');
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('seoHibrido.geoFeatures.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('seoHibrido.geoFeatures.h2')}</h2>
      <div className="services-grid">
        {items.map((feature, idx) => (
          <article className="svc-card" key={feature.title}>
            <div>
              <div className="svc-card-num">{String(idx + 1).padStart(2, '0')} {label}</div>
              <h4>{feature.title}</h4>
              <p>{feature.body}</p>
            </div>
            <span className="svc-card-arrow">{tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
