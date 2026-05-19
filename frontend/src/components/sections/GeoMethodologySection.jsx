import { useTranslation } from 'react-i18next';

export default function GeoMethodologySection() {
  const { t } = useTranslation();
  const phases = t('geo.methodology.phases', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('geo.methodology.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('geo.methodology.title')}</h2>
      <p className="geo-page-p">{t('geo.methodology.lead')}</p>
      <div className="geo-phases-panel">
        {phases.map((f, idx) => (
          <div className="geo-phase-card" key={f.title}>
            <span className="geo-phase-kicker">{String(idx + 1).padStart(2, '0')} {t('geo.methodology.phaseLabel')}</span>
            <h3 className="geo-phase-title">{f.title}</h3>
            <p className="geo-phase-body">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
