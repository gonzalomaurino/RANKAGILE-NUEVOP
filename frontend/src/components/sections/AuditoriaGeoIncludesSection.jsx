import { useTranslation } from 'react-i18next';

export default function AuditoriaGeoIncludesSection() {
  const { t } = useTranslation();
  const items = t('auditoria.features.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('auditoria.features.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('auditoria.features.h2')}</h2>
      <div className="geo-accordion-grid">
        {items.map((feature) => (
          <details key={feature.title} className="geo-accordion-card">
            <summary>
              <span className="geo-accordion-title">{feature.title}</span>
              <span className="geo-accordion-icon">+</span>
            </summary>
            <p className="geo-accordion-body">{feature.body}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
