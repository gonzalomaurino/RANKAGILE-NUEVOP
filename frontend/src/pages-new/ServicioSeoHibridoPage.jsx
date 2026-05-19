import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import SeoHibridoGeoMethodologySection from '../components/sections/SeoHibridoGeoMethodologySection.jsx';
import SeoHibridoGeoContextSection from '../components/sections/SeoHibridoGeoContextSection.jsx';
import SeoHibridoGeoTimelineSection from '../components/sections/SeoHibridoGeoTimelineSection.jsx';
import SeoHibridoGeoFeaturesSection from '../components/sections/SeoHibridoGeoFeaturesSection.jsx';
import SeoHibridoGeoFaqSection from '../components/sections/SeoHibridoGeoFaqSection.jsx';
import SeoHibridoGeoCtaSection from '../components/sections/SeoHibridoGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function ServicioSeoHibridoPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const items = t('seoHibrido.geoPage.items', { returnObjects: true });

  useDocumentMeta({
    title: t('seoHibrido.geoPage.meta.title'),
    description: t('seoHibrido.geoPage.meta.description'),
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">{t('seoHibrido.geoPage.eyebrow')}</span>
            <h1 className="display geo-title">
              {t('seoHibrido.geoPage.h1')}
            </h1>
            <p className="geo-page-p">{t('seoHibrido.geoPage.p')}</p>
            <ul className="geo-page-list">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href={`${prefix}/contacto/`}>{t('seoHibrido.geoPage.btn')}</a>
            </div>
          </div>
        </section>
        <SeoHibridoGeoMethodologySection />
        <SeoHibridoGeoContextSection />
        <SeoHibridoGeoTimelineSection />
        <SeoHibridoGeoFeaturesSection />
        <SeoHibridoGeoFaqSection />
        <SeoHibridoGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
