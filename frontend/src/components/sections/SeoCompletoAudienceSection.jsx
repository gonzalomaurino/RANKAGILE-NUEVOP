import { useTranslation } from 'react-i18next';

export default function SeoCompletoAudienceSection() {
  const { t } = useTranslation();
  const items = t('seoCompleto.audience.items', { returnObjects: true });
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">{t('seoCompleto.audience.eyebrow')}</span>
        <h2 className="ra-comp-h2">{t('seoCompleto.audience.h2')}</h2>
        <div className="ra-comp-audience">
          {items.map((a) => (
            <div key={a.title} className="ra-comp-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
