import { useTranslation } from 'react-i18next';

export default function ConsultoriaAudienceSection() {
  const { t } = useTranslation();
  const items = t('consultoria.audience.items', { returnObjects: true });
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">{t('consultoria.audience.eyebrow')}</span>
        <h2 className="ra-cons-h2">{t('consultoria.audience.h2')}</h2>
        <div className="ra-cons-audience">
          {items.map((a) => (
            <div key={a.title} className="ra-cons-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
