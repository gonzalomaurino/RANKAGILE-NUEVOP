import { useTranslation } from 'react-i18next';

export default function SeoCompletoTimelineSection() {
  const { t } = useTranslation();
  const items = t('seoCompleto.timeline.items', { returnObjects: true });
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">{t('seoCompleto.timeline.eyebrow')}</span>
        <h2 className="ra-comp-h2">{t('seoCompleto.timeline.h2')}</h2>
        <div className="ra-comp-timeline">
          {items.map((item) => (
            <div key={item.tag} className="ra-comp-tl-card">
              <div className="ra-comp-tl-tag">{item.tag}</div>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
