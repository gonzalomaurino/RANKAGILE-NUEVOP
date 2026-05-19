import { useTranslation } from 'react-i18next';

export default function SeoCompletoGeoBenefitsSection() {
  const { t } = useTranslation();
  const items = t('seoCompleto.features.items', { returnObjects: true });
  const label = t('seoCompleto.features.label');
  const tag = t('seoCompleto.features.tag');
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('seoCompleto.features.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('seoCompleto.features.h2')}</h2>
      <div className="services-grid">
        {items.map((feature) => (
          <article className="svc-card" key={feature.n}>
            <div>
              <div className="svc-card-num">{feature.n} {label}</div>
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
