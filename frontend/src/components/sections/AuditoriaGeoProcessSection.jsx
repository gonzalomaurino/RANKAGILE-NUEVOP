import { useTranslation } from 'react-i18next';

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function AuditoriaGeoProcessSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const bullets = t('auditoria.geoProcess.bullets', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('auditoria.geoProcess.eyebrow')}</span>
      <div className="vignette" style={{ gridTemplateColumns: '1fr' }}>
        <div className="vignette-left geo-center">
          <h2 className="geo-page-h2">{t('auditoria.geoProcess.h2')}</h2>
          <p className="geo-page-p">{t('auditoria.geoProcess.p')}</p>
          <ul className="vignette-bullets">
            {bullets.map((item) => (
              <li key={item}><Check />{item}</li>
            ))}
          </ul>
          <a className="btn-ghost" href={`${prefix}/contacto/`}>{t('auditoria.geoProcess.cta')}</a>
        </div>
      </div>
    </section>
  );
}
