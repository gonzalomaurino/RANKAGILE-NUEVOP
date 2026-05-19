import { useTranslation } from 'react-i18next';

export default function GeoContextSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const list = t('geo.context.list', { returnObjects: true });
  const engines = t('geo.context.engines', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('geo.context.eyebrow')}</span>
      <div className="geo-urgent">
        <div className="geo-urgent-copy">
          <h2 className="geo-page-h2">{t('geo.context.title')}</h2>
          <p className="geo-page-p">{t('geo.context.body1')}</p>
          <ul className="geo-page-list">
            {list.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
          <p className="geo-page-p" style={{ fontSize: 14, marginTop: 16 }}>
            {t('geo.context.body2pre')}{' '}
            <a href={`${prefix}/`} style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 500 }}>{t('geo.context.body2link')}</a>{' '}
            {t('geo.context.body2post')}
          </p>
          <a className="btn-ghost" href={`${prefix}/`}>{t('geo.context.cta')}</a>
        </div>
        <div className="geo-urgent-panel">
          {Object.values(engines).map((engine) => (
            <div className="geo-urgent-item" key={engine.name}>
              <span className="geo-urgent-name">{engine.name}</span>
              <p>{engine.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
