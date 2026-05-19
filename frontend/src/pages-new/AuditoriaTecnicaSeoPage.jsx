import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import AuditoriaGeoIncludesSection from '../components/sections/AuditoriaGeoIncludesSection.jsx';
import AuditoriaGeoProcessSection from '../components/sections/AuditoriaGeoProcessSection.jsx';
import AuditoriaGeoDifferenceSection from '../components/sections/AuditoriaGeoDifferenceSection.jsx';
import AuditoriaGeoAudienceSection from '../components/sections/AuditoriaGeoAudienceSection.jsx';
import AuditoriaGeoFaqSection from '../components/sections/AuditoriaGeoFaqSection.jsx';
import AuditoriaGeoCtaSection from '../components/sections/AuditoriaGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function AuditoriaTecnicaSeoPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const items = t('auditoria.geoPage.items', { returnObjects: true });

  useDocumentMeta({
    title: t('auditoria.geoPage.meta.title'),
    description: t('auditoria.geoPage.meta.description'),
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">{t('auditoria.geoPage.eyebrow')}</span>
            <h1 className="display geo-title">{t('auditoria.geoPage.h1')}</h1>
            <p className="geo-page-p">{t('auditoria.geoPage.p')}</p>
            <ul className="geo-page-list">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href={`${prefix}/contacto/`}>{t('auditoria.geoPage.btn')}</a>
            </div>
          </div>
        </section>
        <AuditoriaGeoIncludesSection />
        <AuditoriaGeoProcessSection />
        <AuditoriaGeoDifferenceSection />
        <AuditoriaGeoAudienceSection />
        <AuditoriaGeoFaqSection />
        <AuditoriaGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
