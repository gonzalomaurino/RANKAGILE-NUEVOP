import { useTranslation } from 'react-i18next';

export default function SeoHibridoDualSection() {
  const { t } = useTranslation();
  const googleItems = t('seoHibrido.dual.google.items', { returnObjects: true });
  const aiItems = t('seoHibrido.dual.ai.items', { returnObjects: true });
  return (
    <section className="ra-hib-section">
      <div className="ra-hib-container">
        <span className="ra-hib-eyebrow">{t('seoHibrido.dual.eyebrow')}</span>
        <h2 className="ra-hib-h2">{t('seoHibrido.dual.h2')}</h2>
        <div className="ra-hib-diff">
          <div className="ra-hib-diff-card ra-hib-diff-card--muted">
            <h3>{t('seoHibrido.dual.google.title')}</h3>
            {googleItems.map((item) => (
              <p key={item.label}><strong>✓ {item.label}</strong> {item.text}</p>
            ))}
          </div>
          <div className="ra-hib-diff-card ra-hib-diff-card--glow">
            <h3>{t('seoHibrido.dual.ai.title')}</h3>
            {aiItems.map((item) => (
              <p key={item.label}><strong>✓ {item.label}</strong> {item.text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
