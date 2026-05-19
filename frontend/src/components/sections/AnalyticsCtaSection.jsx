import { useTranslation } from 'react-i18next';

export default function AnalyticsCtaSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <section className="ra-ana-cta">
      <div className="ra-ana-container ra-ana-cta-inner">
        <h2 className="ra-ana-h2">{t('analytics.cta.h2')}</h2>
        <p className="ra-ana-cta-text">{t('analytics.cta.text')}</p>
        <a className="ra-ana-btn" href={`${prefix}/contacto/`}>{t('analytics.cta.btn')}</a>
      </div>
    </section>
  );
}
