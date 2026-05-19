import { useTranslation } from 'react-i18next';

export default function AnalyticsGeoFaqSection() {
  const { t } = useTranslation();
  const faqs = t('analytics.faqs.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('analytics.geoFaq.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('analytics.geoFaq.h2')}</h2>
      <div className="geo-page-faq">
        {faqs.map((faq, index) => (
          <details key={index}>
            <summary>{faq.q}</summary>
            <p className="geo-page-faq-body">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
