import { useTranslation } from 'react-i18next';

export default function SeoCompletoStepsSection() {
  const { t } = useTranslation();
  const items = t('seoCompleto.steps.items', { returnObjects: true });
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="eyebrow ra-comp-eyebrow">{t('seoCompleto.steps.eyebrow')}</span>
        <h2 className="ra-comp-h2">{t('seoCompleto.steps.h2')}</h2>
        <div className="ra-comp-steps">
          {items.map((s) => (
            <div key={s.n} className="ra-comp-step">
              <div className="ra-comp-num">{s.n}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
