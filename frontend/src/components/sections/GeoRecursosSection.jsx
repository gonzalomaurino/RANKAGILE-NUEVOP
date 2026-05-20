import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const recursos = [
  { to: '/blog/geo',                     label: 'Qué es GEO en detalle: guía completa' },
  { to: '/blog/seo-vs-geo-vs-aeo',            label: 'Diferencias entre SEO, GEO y AEO' },
  { to: '/blog/por-que-no-aparezco-en-chatgpt', label: 'Por qué tu marca no aparece en ChatGPT' },
  { to: '/blog/cuanto-cuesta-geo',            label: 'Cuánto cuesta implementar GEO' },
  { to: '/blog/branding-digital',        label: 'Branding digital en la era de la IA' },
  { to: '/blog/zero-click-search',       label: 'Zero-click search y el cambio de búsqueda' },
];

export default function GeoRecursosSection() {
  const { t } = useTranslation();
  return (
    <section className="geo-page-section">
      <span className="geo-page-eyebrow">{t('common.recursosLabel', 'Recursos')}</span>
      <h2 className="geo-page-h2">Recursos sobre GEO</h2>
      <p className="geo-page-small">Profundizá en cada aspecto del Generative Engine Optimization:</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {recursos.map((r) => (
          <li key={r.to}>
            <Link
              to={r.to}
              style={{ color: 'var(--accent)', fontWeight: 500, textDecoration: 'none', fontSize: 15 }}
            >
              → {r.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
