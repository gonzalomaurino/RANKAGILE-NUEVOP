import { useTranslation } from 'react-i18next';

export default function SeoHibridoStatsSection() {
  const { t } = useTranslation();
  const items = t('seoHibrido.stats.items', { returnObjects: true });
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">{t('seoHibrido.stats.eyebrow')}</span>
        <h2 className="ra-hib-h2">{t('seoHibrido.stats.h2')}</h2>
        <div className="ra-hib-stats">
          {items.map((s) => (
            <div key={s.num} className="ra-hib-stat-card">
              <div className="ra-hib-stat-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
