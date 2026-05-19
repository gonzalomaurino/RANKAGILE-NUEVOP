import { useTranslation } from 'react-i18next';

export default function AuditoriaAudienceSection() {
  const { t } = useTranslation();
  const items = t('auditoria.audience.items', { returnObjects: true });
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">{t('auditoria.audience.eyebrow')}</span>
        <h2 className="ra-aud-h2">{t('auditoria.audience.h2')}</h2>
        <div className="ra-aud-audience">
          {items.map((a) => (
            <div key={a.title} className="ra-aud-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
