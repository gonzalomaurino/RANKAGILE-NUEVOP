import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import PageSeo from '../seo/PageSeo';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import SeoCompletoGeoContextSection from '../components/sections/SeoCompletoGeoContextSection.jsx';
import SeoCompletoGeoBenefitsSection from '../components/sections/SeoCompletoGeoBenefitsSection.jsx';
import SeoCompletoGeoMethodologySection from '../components/sections/SeoCompletoGeoMethodologySection.jsx';
import SeoCompletoGeoTimelineSection from '../components/sections/SeoCompletoGeoTimelineSection.jsx';
import SeoCompletoGeoFaqSection from '../components/sections/SeoCompletoGeoFaqSection.jsx';
import SeoCompletoGeoCtaSection from '../components/sections/SeoCompletoGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function ServicioSeoCompletoPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const items = t('seoCompleto.geoPage.items', { returnObjects: true });

  useDocumentMeta({
    title: t('seoCompleto.geoPage.meta.title'),
    description: t('seoCompleto.geoPage.meta.description'),
  });

  return (
    <>
      <PageSeo
        title={t('seoCompleto.geoPage.meta.title')}
        description={t('seoCompleto.geoPage.meta.description')}
        image="/og/seo-completo.png"
        locale={i18n.language === 'en' ? 'en_US' : 'es_ES'}
      />
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">{t('seoCompleto.geoPage.eyebrow')}</span>
            <h1 className="display geo-title">
              {t('seoCompleto.geoPage.h1')}
            </h1>
            <p className="geo-page-p">{t('seoCompleto.geoPage.p')}</p>
            <ul className="geo-page-list">
              {items.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href={`${prefix}/contacto/`}>{t('seoCompleto.geoPage.btn')}</a>
            </div>
          </div>
        </section>
        <SeoCompletoGeoMethodologySection />
        <SeoCompletoGeoContextSection />
        <SeoCompletoGeoTimelineSection />
        <SeoCompletoGeoBenefitsSection />
        <SeoCompletoGeoFaqSection />
        <SeoCompletoGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
