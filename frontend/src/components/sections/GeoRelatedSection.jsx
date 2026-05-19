import { useTranslation } from 'react-i18next';

export default function GeoRelatedSection() {
  const { t } = useTranslation();
  const articles = t('geo.related.articles', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('geo.related.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('geo.related.title')}</h2>
      <p className="geo-page-small">{t('geo.related.small')}</p>
      <div className="services-grid">
        {articles.map((art, i) => (
          <article className="svc-card" key={i}>
            <div>
              <div className="svc-card-num">{art.num}</div>
              <h4>{art.h4}</h4>
              <p>{art.p}</p>
            </div>
            <a className="btn-ghost" href={art.href}>{art.cta}</a>
          </article>
        ))}
      </div>
    </section>
  );
}
