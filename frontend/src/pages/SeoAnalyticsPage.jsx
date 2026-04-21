import useDocumentMeta from '../hooks/useDocumentMeta.js';
import AnalyticsHeroSection from '../components/sections/AnalyticsHeroSection.jsx';
import AnalyticsFeaturesSection from '../components/sections/AnalyticsFeaturesSection.jsx';
import AnalyticsMetricsSection from '../components/sections/AnalyticsMetricsSection.jsx';
import AnalyticsAudienceSection from '../components/sections/AnalyticsAudienceSection.jsx';
import AnalyticsFaqsSection from '../components/sections/AnalyticsFaqsSection.jsx';
import AnalyticsCtaSection from '../components/sections/AnalyticsCtaSection.jsx';

const styles = `
  .ra-ana-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  .ra-ana-page .ra-ana-hero,
  .ra-ana-page .ra-ana-section,
  .ra-ana-page .ra-ana-cta {
    padding: 80px 0;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
  }
  .ra-ana-page .ra-ana-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
  .ra-ana-page .ra-ana-eyebrow { display: inline-block; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #38FEDA; font-size: 13px; margin: 0 0 14px 0; padding: 0; }
  .ra-ana-page .ra-ana-h1 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 3.2rem); line-height: 1.1; margin: 0 0 24px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-ana-page .ra-ana-h2 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: 40px; line-height: 1.2; margin: 0 0 48px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-ana-page .ra-ana-lead { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.82); font-size: 18px; line-height: 1.7; max-width: 760px; margin: 0 0 36px 0; }

  .ra-ana-page .ra-ana-checks { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 40px; max-width: 820px; }
  .ra-ana-page .ra-ana-checks li { display: flex; align-items: flex-start; gap: 12px; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 500; color: #FFFFFF; font-size: 16px; line-height: 1.5; }
  .ra-ana-page .ra-ana-check { flex: 0 0 auto; color: #38FEDA; font-weight: 700; }

  .ra-ana-page .ra-ana-features { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 32px 48px; }
  .ra-ana-page .ra-ana-feature h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #38FEDA; font-size: 18px; line-height: 1.4; margin: 0 0 10px 0; padding: 0; }
  .ra-ana-page .ra-ana-feature p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-ana-page .ra-ana-metrics { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 24px; }
  .ra-ana-page .ra-ana-metric-card { background: rgba(56, 254, 218, 0.04); border: 1px solid rgba(56, 254, 218, 0.18); border-radius: 12px; padding: 28px 24px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-ana-page .ra-ana-metric-card:hover { border-color: rgba(56, 254, 218, 0.45); background: rgba(56, 254, 218, 0.07); }
  .ra-ana-page .ra-ana-metric-card h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 18px; line-height: 1.3; margin: 0 0 16px 0; padding: 0; }
  .ra-ana-page .ra-ana-metric-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 8px; }
  .ra-ana-page .ra-ana-metric-card ul li { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.78); font-size: 14px; line-height: 1.5; padding-left: 14px; position: relative; }
  .ra-ana-page .ra-ana-metric-card ul li::before { content: '—'; position: absolute; left: 0; color: rgba(56,254,218,0.5); font-size: 12px; }

  .ra-ana-page .ra-ana-audience { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
  .ra-ana-page .ra-ana-audience-card { background: rgba(56, 254, 218, 0.04); border: 1px solid rgba(56, 254, 218, 0.18); border-radius: 12px; padding: 30px 32px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-ana-page .ra-ana-audience-card:hover { border-color: rgba(56, 254, 218, 0.45); background: rgba(56, 254, 218, 0.07); }
  .ra-ana-page .ra-ana-audience-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 22px; line-height: 1.3; margin: 0 0 14px 0; padding: 0; }
  .ra-ana-page .ra-ana-audience-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.80); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-ana-page .ra-ana-faqs { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px 48px; }
  .ra-ana-page .ra-ana-faq { padding: 22px 24px; border-left: 2px solid rgba(56, 254, 218, 0.35); background: rgba(255,255,255,0.015); border-radius: 0 10px 10px 0; }
  .ra-ana-page .ra-ana-faq h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 17px; line-height: 1.4; margin: 0 0 10px 0; padding: 0; }
  .ra-ana-page .ra-ana-faq p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 14.5px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-ana-page .ra-ana-cta { padding: 90px 0; text-align: center; }
  .ra-ana-page .ra-ana-cta-inner { max-width: 820px; }
  .ra-ana-page .ra-ana-cta .ra-ana-h2 { margin-bottom: 20px; }
  .ra-ana-page .ra-ana-cta-text { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.78); font-size: 16px; line-height: 1.75; margin: 0 0 32px 0; }
  .ra-ana-page .ra-ana-btn { display: inline-block; background: #38FEDA; color: #0A0A0A; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.02em; padding: 14px 28px; border-radius: 999px; text-decoration: none; transition: transform 150ms ease, background 150ms ease; }
  .ra-ana-page .ra-ana-btn:hover { background: #5affe3; transform: translateY(-1px); }

  @media (max-width: 900px) {
    .ra-ana-page .ra-ana-metrics { grid-template-columns: repeat(2, minmax(0,1fr)); }
  }
  @media (max-width: 768px) {
    .ra-ana-page .ra-ana-h1 { font-size: 44px; }
    .ra-ana-page .ra-ana-h2 { font-size: 30px; margin-bottom: 32px; }
    .ra-ana-page .ra-ana-checks { grid-template-columns: 1fr; }
    .ra-ana-page .ra-ana-features { grid-template-columns: 1fr; }
    .ra-ana-page .ra-ana-audience { grid-template-columns: 1fr; }
    .ra-ana-page .ra-ana-faqs { grid-template-columns: 1fr; }
  }
  @media (max-width: 540px) {
    .ra-ana-page .ra-ana-metrics { grid-template-columns: 1fr; }
  }
`;

export default function SeoAnalyticsPage() {
  useDocumentMeta({
    title: 'SEO Analytics | RankAgile',
    description:
      'SEO analytics para analizar datos, medir resultados y optimizar tu estrategia SEO con decisiones basadas en información real.',
  });

  return (
    <main className="ra-ana-page">
      <style>{styles}</style>
      <AnalyticsHeroSection />
      <AnalyticsFeaturesSection />
      <AnalyticsMetricsSection />
      <AnalyticsAudienceSection />
      <AnalyticsFaqsSection />
      <AnalyticsCtaSection />
    </main>
  );
}
