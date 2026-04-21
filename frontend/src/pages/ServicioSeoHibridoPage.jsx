import useDocumentMeta from '../hooks/useDocumentMeta.js';
import SeoHibridoHeroSection from '../components/sections/SeoHibridoHeroSection.jsx';
import SeoHibridoStatsSection from '../components/sections/SeoHibridoStatsSection.jsx';
import SeoHibridoDualSection from '../components/sections/SeoHibridoDualSection.jsx';
import SeoHibridoFeaturesSection from '../components/sections/SeoHibridoFeaturesSection.jsx';
import SeoHibridoAudienceSection from '../components/sections/SeoHibridoAudienceSection.jsx';
import SeoHibridoFaqsSection from '../components/sections/SeoHibridoFaqsSection.jsx';
import SeoHibridoCtaSection from '../components/sections/SeoHibridoCtaSection.jsx';

const styles = `
  .ra-hib-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  .ra-hib-page .ra-hib-hero,
  .ra-hib-page .ra-hib-section,
  .ra-hib-page .ra-hib-cta {
    padding: 80px 0;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
  }
  .ra-hib-page .ra-hib-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
  .ra-hib-page .ra-hib-eyebrow { display: inline-block; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #38FEDA; font-size: 13px; margin: 0 0 14px 0; padding: 0; }
  .ra-hib-page .ra-hib-h1 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 3.2rem); line-height: 1.1; margin: 0 0 24px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-hib-page .ra-hib-h2 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: 40px; line-height: 1.2; margin: 0 0 48px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-hib-page .ra-hib-lead { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.82); font-size: 18px; line-height: 1.7; max-width: 760px; margin: 0 0 36px 0; }

  .ra-hib-page .ra-hib-checks { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 40px; max-width: 820px; }
  .ra-hib-page .ra-hib-checks li { display: flex; align-items: flex-start; gap: 12px; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 500; color: #FFFFFF; font-size: 16px; line-height: 1.5; }
  .ra-hib-page .ra-hib-check { flex: 0 0 auto; color: #38FEDA; font-weight: 700; }

  .ra-hib-page .ra-hib-stats { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px; }
  .ra-hib-page .ra-hib-stat-card { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.18); border-radius: 12px; padding: 32px 28px; text-align: center; transition: border-color 200ms ease, background 200ms ease; }
  .ra-hib-page .ra-hib-stat-card:hover { border-color: rgba(56,254,218,0.45); background: rgba(56,254,218,0.07); }
  .ra-hib-page .ra-hib-stat-num { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 56px; line-height: 1; margin-bottom: 12px; }
  .ra-hib-page .ra-hib-stat-card h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 18px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-hib-page .ra-hib-stat-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 14px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-hib-page .ra-hib-dual { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
  .ra-hib-page .ra-hib-dual-card { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.22); border-radius: 14px; padding: 36px 34px; }
  .ra-hib-page .ra-hib-dual-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 22px; line-height: 1.3; margin: 0 0 20px; padding: 0; }
  .ra-hib-page .ra-hib-dual-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.80); font-size: 15px; line-height: 1.75; margin: 0 0 14px; padding: 0; }
  .ra-hib-page .ra-hib-dual-card p strong { color: #38FEDA; font-weight: 600; }

  .ra-hib-page .ra-hib-features { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 32px 48px; }
  .ra-hib-page .ra-hib-feature h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #38FEDA; font-size: 18px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-hib-page .ra-hib-feature p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-hib-page .ra-hib-audience { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px; }
  .ra-hib-page .ra-hib-audience-card { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.18); border-radius: 12px; padding: 30px 32px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-hib-page .ra-hib-audience-card:hover { border-color: rgba(56,254,218,0.45); background: rgba(56,254,218,0.07); }
  .ra-hib-page .ra-hib-audience-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 22px; line-height: 1.3; margin: 0 0 14px; padding: 0; }
  .ra-hib-page .ra-hib-audience-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.80); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-hib-page .ra-hib-faqs { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px 48px; }
  .ra-hib-page .ra-hib-faq { padding: 22px 24px; border-left: 2px solid rgba(56,254,218,0.35); background: rgba(255,255,255,0.015); border-radius: 0 10px 10px 0; }
  .ra-hib-page .ra-hib-faq h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 17px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-hib-page .ra-hib-faq p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 14.5px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-hib-page .ra-hib-cta { padding: 90px 0; text-align: center; }
  .ra-hib-page .ra-hib-cta-inner { max-width: 820px; }
  .ra-hib-page .ra-hib-cta .ra-hib-h2 { margin-bottom: 20px; }
  .ra-hib-page .ra-hib-cta-text { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.78); font-size: 16px; line-height: 1.75; margin: 0 0 32px; }
  .ra-hib-page .ra-hib-btn { display: inline-block; background: #38FEDA; color: #0A0A0A; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.02em; padding: 14px 28px; border-radius: 999px; text-decoration: none; transition: transform 150ms ease, background 150ms ease; }
  .ra-hib-page .ra-hib-btn:hover { background: #5affe3; transform: translateY(-1px); }

  @media (max-width: 900px) {
    .ra-hib-page .ra-hib-audience { grid-template-columns: 1fr; }
  }
  @media (max-width: 768px) {
    .ra-hib-page .ra-hib-h1 { font-size: 44px; }
    .ra-hib-page .ra-hib-h2 { font-size: 30px; margin-bottom: 32px; }
    .ra-hib-page .ra-hib-checks { grid-template-columns: 1fr; }
    .ra-hib-page .ra-hib-stats { grid-template-columns: 1fr; }
    .ra-hib-page .ra-hib-dual { grid-template-columns: 1fr; }
    .ra-hib-page .ra-hib-features { grid-template-columns: 1fr; }
    .ra-hib-page .ra-hib-faqs { grid-template-columns: 1fr; }
  }
`;

export default function ServicioSeoHibridoPage() {
  useDocumentMeta({
    title: 'Servicio SEO Híbrido | RankAgile',
    description:
      'Escala tu negocio con un servicio SEO híbrido que combina estrategia y ejecución enfocada en resultados reales.',
  });

  return (
    <main className="ra-hib-page">
      <style>{styles}</style>
      <SeoHibridoHeroSection />
      <SeoHibridoStatsSection />
      <SeoHibridoDualSection />
      <SeoHibridoFeaturesSection />
      <SeoHibridoAudienceSection />
      <SeoHibridoFaqsSection />
      <SeoHibridoCtaSection />
    </main>
  );
}
