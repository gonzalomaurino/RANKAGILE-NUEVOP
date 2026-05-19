import { useTranslation } from 'react-i18next';

export default function ConsultoriaStepsSection() {
  const { t } = useTranslation();
  const items = t('consultoria.steps.items', { returnObjects: true });
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">{t('consultoria.steps.eyebrow')}</span>
        <h2 className="ra-cons-h2">{t('consultoria.steps.h2')}</h2>
        <div className="ra-cons-steps">
          {items.map((s) => (
            <div key={s.n} className="ra-cons-step">
              <div className="ra-cons-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
