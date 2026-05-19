import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import ConsultoriaGeoMethodologySection from '../components/sections/ConsultoriaGeoMethodologySection.jsx';
import ConsultoriaGeoContextSection from '../components/sections/ConsultoriaGeoContextSection.jsx';
import ConsultoriaGeoTimelineSection from '../components/sections/ConsultoriaGeoTimelineSection.jsx';
import ConsultoriaGeoFeaturesSection from '../components/sections/ConsultoriaGeoFeaturesSection.jsx';
import ConsultoriaGeoFaqSection from '../components/sections/ConsultoriaGeoFaqSection.jsx';
import ConsultoriaGeoCtaSection from '../components/sections/ConsultoriaGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function SeoConsultoriaAplicadaPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const items = t('consultoria.geoPage.items', { returnObjects: true });

  useDocumentMeta({
    title: t('consultoria.geoPage.meta.title'),
    description: t('consultoria.geoPage.meta.description'),
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">{t('consultoria.geoPage.eyebrow')}</span>
            <h1 className="display geo-title">
              {t('consultoria.geoPage.h1')}
            </h1>
            <p className="geo-page-p">{t('consultoria.geoPage.p')}</p>
            <ul className="geo-page-list">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href={`${prefix}/contacto/`}>{t('consultoria.geoPage.btn')}</a>
            </div>
          </div>
        </section>
        <ConsultoriaGeoMethodologySection />
        <ConsultoriaGeoContextSection />
        <ConsultoriaGeoTimelineSection />
        <ConsultoriaGeoFeaturesSection />
        <ConsultoriaGeoFaqSection />
        <ConsultoriaGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
