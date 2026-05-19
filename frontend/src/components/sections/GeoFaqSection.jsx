import { useTranslation } from 'react-i18next';

export default function GeoFaqSection() {
  const { t } = useTranslation();
  const faqs = t('geo.faq.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('geo.faq.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('geo.faq.title')}</h2>
      <div className="geo-page-faq">
        {faqs.map((f, i) => (
          <details key={i}>
            <summary>{f.q}</summary>
            <p className="geo-page-faq-body">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
