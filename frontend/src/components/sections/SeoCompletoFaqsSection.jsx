import { useTranslation } from 'react-i18next';

export default function SeoCompletoFaqsSection() {
  const { t } = useTranslation();
  const items = t('seoCompleto.faqs.items', { returnObjects: true });
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">{t('seoCompleto.faqs.eyebrow')}</span>
        <h2 className="ra-comp-h2">{t('seoCompleto.faqs.h2')}</h2>
        <div className="ra-comp-faqs">
          {items.map((f) => (
            <div key={f.q} className="ra-comp-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
