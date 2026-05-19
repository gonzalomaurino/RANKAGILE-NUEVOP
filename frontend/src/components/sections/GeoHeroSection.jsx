import { useTranslation } from 'react-i18next';

export default function GeoHeroSection() {
  const { t } = useTranslation();
  return (
    <section className="geo-page-section" style={{ paddingTop: 24, borderTop: 'none' }}>
      <span className="geo-page-eyebrow">{t('geo.hero.eyebrow')}</span>
      <h1 className="geo-page-h1">{t('geo.hero.title')}</h1>
      <p className="geo-page-lead">{t('geo.hero.lead1')}</p>
      <p className="geo-page-lead"><strong>{t('geo.hero.lead2Strong')}</strong></p>
      <p className="geo-page-p">
        {t('geo.hero.body')}{' '}
        <span className="accent">{t('geo.hero.accent')}</span>
      </p>
      <div style={{ marginTop: 24 }}>
        <a className="geo-page-btn" href="/contacto/">{t('geo.hero.cta')}</a>
      </div>
    </section>
  );
}
