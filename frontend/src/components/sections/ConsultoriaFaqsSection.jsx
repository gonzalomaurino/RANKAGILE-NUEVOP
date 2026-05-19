import { useTranslation } from 'react-i18next';

export default function ConsultoriaFaqsSection() {
  const { t } = useTranslation();
  const items = t('consultoria.faqs.items', { returnObjects: true });
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">{t('consultoria.faqs.eyebrow')}</span>
        <h2 className="ra-cons-h2">{t('consultoria.faqs.h2')}</h2>
        <div className="ra-cons-faqs">
          {items.map((f) => (
            <div key={f.q} className="ra-cons-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
