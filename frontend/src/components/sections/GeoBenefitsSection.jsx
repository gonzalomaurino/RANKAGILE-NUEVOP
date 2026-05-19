import { useTranslation } from 'react-i18next';

export default function GeoBenefitsSection() {
  const { t } = useTranslation();
  const items = t('geo.benefits.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('geo.benefits.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('geo.benefits.title')}</h2>
      <div className="services-grid">
        {items.map((b) => (
          <article className="svc-card" key={b.n}>
            <div>
              <div className="svc-card-num">{b.n} {t('geo.benefits.label')}</div>
              <h4>{b.title}</h4>
              <p>{b.body}</p>
            </div>
            <span className="svc-card-arrow">{t('geo.benefits.advantage')}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
