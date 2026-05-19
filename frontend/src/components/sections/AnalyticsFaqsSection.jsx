import { useTranslation } from 'react-i18next';

export default function AnalyticsFaqsSection() {
  const { t } = useTranslation();
  const faqs = t('analytics.faqs.items', { returnObjects: true });
  return (
    <section className="ra-ana-section">
      <div className="ra-ana-container">
        <span className="ra-ana-eyebrow">{t('analytics.faqs.eyebrow')}</span>
        <h2 className="ra-ana-h2">{t('analytics.faqs.h2')}</h2>
        <div className="ra-ana-faqs">
          {faqs.map((f) => (
            <div key={f.q} className="ra-ana-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
