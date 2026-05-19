import { useTranslation } from 'react-i18next';

export default function AuditoriaFaqsSection() {
  const { t } = useTranslation();
  const items = t('auditoria.faqs.items', { returnObjects: true });
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">{t('auditoria.faqs.eyebrow')}</span>
        <h2 className="ra-aud-h2">{t('auditoria.faqs.h2')}</h2>
        <div className="ra-aud-faqs">
          {items.map((f) => (
            <div key={f.q} className="ra-aud-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
