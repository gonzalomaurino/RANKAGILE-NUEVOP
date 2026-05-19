import { useTranslation } from 'react-i18next';

export default function SeoHibridoGeoContextSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const audience = t('seoHibrido.audience.items', { returnObjects: true });
  const list = t('seoHibrido.geoContext.list', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('seoHibrido.geoContext.eyebrow')}</span>
      <div className="geo-urgent">
        <div className="geo-urgent-copy">
          <h2 className="geo-page-h2">{t('seoHibrido.geoContext.h2')}</h2>
          <ul className="geo-page-list">
            {list.map((item) => <li key={item}><strong>{item.split('.')[0]}.</strong>{item.slice(item.indexOf('.') + 1)}</li>)}
          </ul>
          <a className="btn-ghost" href={`${prefix}/contacto/`}>{t('seoHibrido.geoContext.cta')}</a>
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
