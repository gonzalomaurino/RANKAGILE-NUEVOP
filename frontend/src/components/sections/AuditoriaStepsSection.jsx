import { useTranslation } from 'react-i18next';

export default function AuditoriaStepsSection() {
  const { t } = useTranslation();
  const items = t('auditoria.steps.items', { returnObjects: true });
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">{t('auditoria.steps.eyebrow')}</span>
        <h2 className="ra-aud-h2">{t('auditoria.steps.h2')}</h2>
        <div className="ra-aud-steps">
          {items.map((s) => (
            <div key={s.n} className="ra-aud-step">
              <div className="ra-aud-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
