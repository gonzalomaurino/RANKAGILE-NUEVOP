import { useTranslation } from 'react-i18next';

const ArrowUpRight = ({ size = 14 }) => (
  <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function SeoCompletoCtaSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <section className="ra-comp-cta">
      <div className="cta-band">
        <div className="aurora"></div>
        <div className="ra-comp-cta-inner">
          <span className="eyebrow centered">{t('seoCompleto.cta.eyebrow')}</span>
          <h2 className="display">{t('seoCompleto.cta.h2')}</h2>
          <p className="ra-comp-cta-text">{t('seoCompleto.cta.text')}</p>
          <div className="ra-comp-cta-buttons">
            <a className="btn-pill" href={`${prefix}/contacto/`}>{t('seoCompleto.cta.btn')} <ArrowUpRight /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
