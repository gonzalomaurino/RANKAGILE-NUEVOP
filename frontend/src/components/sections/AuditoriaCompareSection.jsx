import { useTranslation } from 'react-i18next';

export default function AuditoriaCompareSection() {
  const { t } = useTranslation();
  const bad = t('auditoria.compare.bad.items', { returnObjects: true });
  const good = t('auditoria.compare.good.items', { returnObjects: true });
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">{t('auditoria.compare.eyebrow')}</span>
        <h2 className="ra-aud-h2">{t('auditoria.compare.h2')}</h2>
        <div className="ra-aud-compare">
          <div className="ra-aud-compare-card ra-aud-compare-bad">
            <h3>{t('auditoria.compare.bad.title')}</h3>
            {bad.map((item) => <p key={item}>✗ {item}</p>)}
          </div>
          <div className="ra-aud-compare-card ra-aud-compare-good">
            <h3>{t('auditoria.compare.good.title')}</h3>
            {good.map((item) => <p key={item}>✓ {item}</p>)}
          </div>
        </div>
      </div>
    </section>
  );
}
