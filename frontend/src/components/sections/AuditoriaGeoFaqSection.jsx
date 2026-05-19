import { useTranslation } from 'react-i18next';

export default function AuditoriaGeoFaqSection() {
  const { t } = useTranslation();
  const items = t('auditoria.faqs.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('auditoria.faqs.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('auditoria.faqs.h2')}</h2>
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
