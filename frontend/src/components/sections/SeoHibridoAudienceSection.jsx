import { useTranslation } from 'react-i18next';

export default function SeoHibridoAudienceSection() {
  const { t } = useTranslation();
  const items = t('seoHibrido.audience.items', { returnObjects: true });
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">{t('seoHibrido.audience.eyebrow')}</span>
        <h2 className="ra-hib-h2">{t('seoHibrido.audience.h2')}</h2>
        <div className="ra-hib-audience">
          {items.map((a) => (
            <div key={a.title} className="ra-hib-audience-card">
              <h3>{a.title}</h3>
              <p>{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
