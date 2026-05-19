import { useTranslation } from 'react-i18next';

export default function ConsultoriaCompareSection() {
  const { t } = useTranslation();
  const consItems = t('consultoria.compare.consultoria.items', { returnObjects: true });
  const seoItems = t('consultoria.compare.seoCompleto.items', { returnObjects: true });
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">{t('consultoria.compare.eyebrow')}</span>
        <h2 className="ra-cons-h2">{t('consultoria.compare.h2')}</h2>
        <div className="ra-cons-compare">
          <div className="ra-cons-compare-card">
            <h3>{t('consultoria.compare.consultoria.title')}</h3>
            {consItems.map((item) => (
              <p key={item.label}><strong>{item.label}</strong> {item.text}</p>
            ))}
          </div>
          <div className="ra-cons-compare-card">
            <h3>{t('consultoria.compare.seoCompleto.title')}</h3>
            {seoItems.map((item) => (
              <p key={item.label}><strong>{item.label}</strong> {item.text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
