import { useTranslation } from 'react-i18next';

export default function AuditoriaGeoDifferenceSection() {
  const { t } = useTranslation();
  const automatic = t('auditoria.geoDifference.automatic.items', { returnObjects: true });
  const professional = t('auditoria.geoDifference.professional.items', { returnObjects: true });
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('auditoria.geoDifference.eyebrow')}</span>
      <h2 className="geo-page-h2">{t('auditoria.geoDifference.h2')}</h2>
      <div className="geo-diff">
        <article className="geo-diff-card geo-diff-card--muted">
          <h3>{t('auditoria.geoDifference.automatic.title')}</h3>
          <ul>
            {automatic.map((item) => (
              <li key={item}><span className="geo-diff-icon">✗</span>{item}</li>
            ))}
          </ul>
        </article>
        <article className="geo-diff-card geo-diff-card--glow">
          <h3>{t('auditoria.geoDifference.professional.title')}</h3>
          <ul>
            {professional.map((item) => (
              <li key={item}><span className="geo-diff-icon">✓</span>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
