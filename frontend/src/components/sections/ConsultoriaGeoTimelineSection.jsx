import { useTranslation } from 'react-i18next';

export default function ConsultoriaGeoTimelineSection() {
  const { t } = useTranslation();
  const items = t('consultoria.geoTimeline.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('consultoria.geoTimeline.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('consultoria.geoTimeline.h2')}</h2>
      <div className="geo-phases-panel geo-phases-4">
        {items.map((item, idx) => (
          <div className="geo-phase-card" key={item.tag}>
            <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} {t('common.faseLabel')}</span>
            <h3 className="geo-phase-title">{item.title}</h3>
            <p className="geo-phase-body">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
