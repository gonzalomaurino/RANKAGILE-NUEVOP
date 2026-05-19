import { useTranslation } from 'react-i18next';

export default function ConsultoriaGeoContextSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const audience = t('consultoria.audience.items', { returnObjects: true });
  const bullets = t('consultoria.geoContext.bullets', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('consultoria.geoContext.eyebrow')}</span>
      <div className="geo-urgent">
        <div className="geo-urgent-copy">
          <h2 className="geo-page-h2">{t('consultoria.geoContext.h2')}</h2>
          <ul className="geo-page-list">
            {bullets.map((item) => {
              const parts = item.split('. ');
              return <li key={item}><strong>{parts[0]}.</strong> {parts.slice(1).join('. ')}</li>;
            })}
          </ul>
          <a className="btn-ghost" href={`${prefix}/contacto/`}>{t('consultoria.geoContext.cta')}</a>
        </div>
        <div className="geo-urgent-panel">
          {audience.map((item) => (
            <div className="geo-urgent-item" key={item.title}>
              <span className="geo-urgent-name">{item.title}</span>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
