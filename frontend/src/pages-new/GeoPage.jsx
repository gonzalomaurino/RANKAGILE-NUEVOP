import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import PageSeo from '../seo/PageSeo';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import GeoDefinitionSection from '../components/sections/GeoDefinitionSection.jsx';
import GeoContextSection from '../components/sections/GeoContextSection.jsx';
import GeoComparisonSection from '../components/sections/GeoComparisonSection.jsx';
import GeoBenefitsSection from '../components/sections/GeoBenefitsSection.jsx';
import GeoMethodologySection from '../components/sections/GeoMethodologySection.jsx';
import GeoFaqSection from '../components/sections/GeoFaqSection.jsx';
import GeoRelatedSection from '../components/sections/GeoRelatedSection.jsx';
import GeoRecursosSection from '../components/sections/GeoRecursosSection.jsx';
import GeoCtaFinalSection from '../components/sections/GeoCtaFinalSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function GeoPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';

  useDocumentMeta({
    title: t('geo.meta.title'),
    description: t('geo.meta.description'),
  });

  return (
    <>
      <PageSeo
        title={t('geo.meta.title')}
        description={t('geo.meta.description')}
        image="/og/geo.png"
        locale={i18n.language === 'en' ? 'en_US' : 'es_ES'}
      />
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">{t('geo.page.eyebrow')}</span>
            <h1 className="display geo-title">
              <span className="grad">GEO</span>{t('geo.page.title').replace('<grad>GEO</grad>', '').replace('GEO', '')}
            </h1>
            <p className="geo-page-p">
              {t('geo.page.description')}
              <span className="accent"> {t('geo.page.accent')}</span>
            </p>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href={`${prefix}/contacto/`}>{t('geo.page.cta')}</a>
            </div>
          </div>
        </section>
        <GeoDefinitionSection />
        <GeoContextSection />
        <GeoComparisonSection />
        <GeoBenefitsSection />
        <GeoMethodologySection />
        <GeoFaqSection />
        <GeoRelatedSection />
        <GeoRecursosSection />
        <GeoCtaFinalSection />
      </main>
      <Footer />
    </>
  );
}
