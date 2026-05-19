import { useTranslation } from 'react-i18next';

export default function GeoComparisonSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('geo.comparison.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('geo.comparison.title')}</h2>
      <div className="geo-compare">
        {['seo', 'geo', 'aeo'].map((key) => (
          <div className="geo-compare-col" key={key}>
            <span className="geo-compare-kicker">{t(`geo.comparison.${key}.kicker`)}</span>
            <h3 className="geo-compare-title">{t(`geo.comparison.${key}.title`)}</h3>
            <p className="geo-compare-body">{t(`geo.comparison.${key}.body`)}</p>
            <span className="geo-compare-tag">{t(`geo.comparison.${key}.tag`)}</span>
          </div>
        ))}
      </div>
      <p className="geo-page-quote">
        {t('geo.comparison.quote')}{' '}
        <a href={`${prefix}/seo-vs-geo-vs-aeo`}>{t('geo.comparison.quoteLink')}</a>{' '}
        {t('geo.comparison.quotePost')}
      </p>
    </section>
  );
}
