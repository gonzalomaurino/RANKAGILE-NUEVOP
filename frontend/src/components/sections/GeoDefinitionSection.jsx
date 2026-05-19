import { useTranslation } from 'react-i18next';

export default function GeoDefinitionSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const bullets = t('geo.definition.bullets', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('geo.definition.eyebrow')}</span>
      <div className="vignette" style={{ gridTemplateColumns: '1fr' }}>
        <div className="vignette-left geo-center">
          <h2 className="geo-page-h2">{t('geo.definition.title')}</h2>
          <p className="geo-page-p">{t('geo.definition.body')}</p>
          <ul className="vignette-bullets">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <a className="btn-ghost" href={`${prefix}/servicios/geo`}>{t('geo.definition.cta')}</a>
        </div>
      </div>
    </section>
  );
}
