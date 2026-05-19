import { useTranslation } from 'react-i18next';

export default function SeoHibridoCtaSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <section className="ra-hib-cta">
      <div className="ra-hib-container">
        <div className="ra-hib-cta-inner">
          <h2 className="ra-hib-h2">{t('seoHibrido.cta.h2')}</h2>
          <p className="ra-hib-cta-text">{t('seoHibrido.cta.text')}</p>
          <a className="ra-hib-btn" href={`${prefix}/contacto/`}>{t('seoHibrido.cta.btn')}</a>
        </div>
      </div>
    </section>
  );
}
