import { useTranslation } from 'react-i18next';

export default function AuditoriaFeaturesSection() {
  const { t } = useTranslation();
  const items = t('auditoria.features.items', { returnObjects: true });
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">{t('auditoria.features.eyebrow')}</span>
        <h2 className="ra-aud-h2">{t('auditoria.features.h2')}</h2>
        <div className="ra-aud-features">
          {items.map((f) => (
            <div key={f.title} className="ra-aud-feature">
              <h4>✓ {f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
