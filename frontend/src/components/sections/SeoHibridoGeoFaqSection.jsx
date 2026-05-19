import { useTranslation } from 'react-i18next';

export default function SeoHibridoGeoFaqSection() {
  const { t } = useTranslation();
  const items = t('seoHibrido.faqs.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('seoHibrido.faqs.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('seoHibrido.faqs.h2')}</h2>
      <div className="geo-page-faq">
        {items.map((faq, index) => (
          <details key={index}>
            <summary>{faq.q}</summary>
            <p className="geo-page-faq-body">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
