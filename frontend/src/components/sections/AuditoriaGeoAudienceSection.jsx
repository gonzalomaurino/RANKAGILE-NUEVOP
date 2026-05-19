import { useTranslation } from 'react-i18next';

export default function AuditoriaGeoAudienceSection() {
  const { t } = useTranslation();
  const items = t('auditoria.audience.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('auditoria.audience.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('auditoria.audience.h2')}</h2>
      <div className="geo-phases-panel geo-phases-2">
        {items.map((item, idx) => (
          <div key={item.title} className="geo-phase-card">
            <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} / caso</span>
            <h3 className="geo-phase-title">{item.title}</h3>
            <p className="geo-phase-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
