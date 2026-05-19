import { useTranslation } from 'react-i18next';

export default function AuditoriaCtaSection() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  return (
    <section className="ra-aud-cta">
      <div className="ra-aud-container ra-aud-cta-inner">
        <h2 className="ra-aud-h2">{t('auditoria.cta.h2')}</h2>
        <p className="ra-aud-cta-text">{t('auditoria.cta.text')}</p>
        <a className="ra-aud-btn" href={`${prefix}/contacto/`}>{t('auditoria.cta.btn')}</a>
      </div>
    </section>
  );
}
