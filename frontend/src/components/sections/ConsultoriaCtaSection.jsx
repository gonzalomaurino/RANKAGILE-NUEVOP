import { useTranslation } from 'react-i18next';

export default function ConsultoriaCtaSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <section className="ra-cons-cta">
      <div className="ra-cons-container ra-cons-cta-inner">
        <h2 className="ra-cons-h2">{t('consultoria.cta.h2')}</h2>
        <p className="ra-cons-cta-text">{t('consultoria.cta.text')}</p>
        <a className="ra-cons-btn" href={`${prefix}/contacto/`}>{t('consultoria.cta.btn')}</a>
      </div>
    </section>
  );
}
