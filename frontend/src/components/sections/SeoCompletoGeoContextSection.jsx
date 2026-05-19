import { useTranslation } from 'react-i18next';

export default function SeoCompletoGeoContextSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const audience = t('seoCompleto.audience.items', { returnObjects: true });
  const list = t('seoCompleto.geoContext.list', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('seoCompleto.geoContext.eyebrow')}</span>
      <div className="geo-urgent">
        <div className="geo-urgent-copy">
          <h2 className="geo-page-h2">{t('seoCompleto.geoContext.h2')}</h2>
          <p className="geo-page-p">{t('seoCompleto.geoContext.p')}</p>
          <ul className="geo-page-list">
            {list.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <a className="btn-ghost" href={`${prefix}/contacto/`}>{t('seoCompleto.geoContext.cta')}</a>
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
