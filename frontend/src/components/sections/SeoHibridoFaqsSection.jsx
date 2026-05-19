import { useTranslation } from 'react-i18next';

export default function SeoHibridoFaqsSection() {
  const { t } = useTranslation();
  const items = t('seoHibrido.faqs.items', { returnObjects: true });
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">{t('seoHibrido.faqs.eyebrow')}</span>
        <h2 className="ra-hib-h2">{t('seoHibrido.faqs.h2')}</h2>
        <div className="ra-hib-faq-list">
          {items.map((f) => (
            <details key={f.q} className="ra-hib-faq-item">
              <summary>{f.q}</summary>
              <p className="ra-hib-faq-body">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
