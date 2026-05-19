import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import AnalyticsGeoFeaturesSection from '../components/sections/AnalyticsGeoFeaturesSection.jsx';
import AnalyticsGeoMetricsSection from '../components/sections/AnalyticsGeoMetricsSection.jsx';
import AnalyticsGeoContextSection from '../components/sections/AnalyticsGeoContextSection.jsx';
import AnalyticsGeoFaqSection from '../components/sections/AnalyticsGeoFaqSection.jsx';
import AnalyticsGeoCtaSection from '../components/sections/AnalyticsGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function SeoAnalyticsPage() {
  const { t, i18n } = useTranslation();
  const prefix = i18n.language === 'en' ? '/en' : '';
  const checks = t('analytics.hero.checks', { returnObjects: true });

  useDocumentMeta({
    title: t('analytics.meta.title'),
    description: t('analytics.meta.description'),
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">{t('analytics.hero.eyebrow')} · RankAgile</span>
            <h1 className="display geo-title">
              {t('analytics.hero.h1')}
            </h1>
            <p className="geo-page-p">{t('analytics.hero.lead')}</p>
            <ul className="geo-page-list">
              {checks.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href={`${prefix}/contacto/`}>{t('analytics.cta.btn')}</a>
            </div>
          </div>
        </section>
        <AnalyticsGeoFeaturesSection />
        <AnalyticsGeoMetricsSection />
        <AnalyticsGeoContextSection />
        <AnalyticsGeoFaqSection />
        <AnalyticsGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
