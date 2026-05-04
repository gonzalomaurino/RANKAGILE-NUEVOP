import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import ClaudeFooter from '../components/ClaudeFooter.jsx';
import SeoCompletoHeroSection from '../components/sections/SeoCompletoHeroSection.jsx';
import SeoCompletoStepsSection from '../components/sections/SeoCompletoStepsSection.jsx';
import SeoCompletoAudienceSection from '../components/sections/SeoCompletoAudienceSection.jsx';
import SeoCompletoTimelineSection from '../components/sections/SeoCompletoTimelineSection.jsx';
import SeoCompletoFeaturesSection from '../components/sections/SeoCompletoFeaturesSection.jsx';
import SeoCompletoFaqsSection from '../components/sections/SeoCompletoFaqsSection.jsx';
import SeoCompletoCtaSection from '../components/sections/SeoCompletoCtaSection.jsx';
import '../styles/claude-system.css';

const styles = `
  .ra-comp-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  .ra-comp-page .ra-comp-hero,
  .ra-comp-page .ra-comp-section,
  .ra-comp-page .ra-comp-cta {
    padding: 80px 0;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
  }
  .ra-comp-page .ra-comp-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
  .ra-comp-page .ra-comp-eyebrow { display: inline-block; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #38FEDA; font-size: 13px; margin: 0 0 14px 0; padding: 0; }
  .ra-comp-page .ra-comp-h1 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 3.2rem); line-height: 1.1; margin: 0 0 24px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-comp-page .ra-comp-h2 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: 40px; line-height: 1.2; margin: 0 0 48px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-comp-page .ra-comp-lead { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.82); font-size: 18px; line-height: 1.7; max-width: 760px; margin: 0 0 36px 0; }

  .ra-comp-page .ra-comp-checks { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 40px; max-width: 820px; }
  .ra-comp-page .ra-comp-checks li { display: flex; align-items: flex-start; gap: 12px; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 500; color: #FFFFFF; font-size: 16px; line-height: 1.5; }
  .ra-comp-page .ra-comp-check { flex: 0 0 auto; color: #38FEDA; font-weight: 700; }

  .ra-comp-page .ra-comp-steps { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px; }
  .ra-comp-page .ra-comp-step { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.18); border-radius: 12px; padding: 28px 28px 26px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-comp-page .ra-comp-step:hover { border-color: rgba(56,254,218,0.45); background: rgba(56,254,218,0.07); }
  .ra-comp-page .ra-comp-num { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 40px; line-height: 1; margin-bottom: 14px; }
  .ra-comp-page .ra-comp-step h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 20px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-comp-page .ra-comp-step p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.75); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-comp-page .ra-comp-audience { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
  .ra-comp-page .ra-comp-audience-card { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.18); border-radius: 12px; padding: 30px 32px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-comp-page .ra-comp-audience-card:hover { border-color: rgba(56,254,218,0.45); background: rgba(56,254,218,0.07); }
  .ra-comp-page .ra-comp-audience-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 22px; line-height: 1.3; margin: 0 0 14px; padding: 0; }
  .ra-comp-page .ra-comp-audience-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.80); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-comp-page .ra-comp-timeline { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 20px; }
  .ra-comp-page .ra-comp-tl-card { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.18); border-radius: 12px; padding: 24px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-comp-page .ra-comp-tl-card:hover { border-color: rgba(56,254,218,0.45); background: rgba(56,254,218,0.07); }
  .ra-comp-page .ra-comp-tl-tag { display: inline-block; background: rgba(56,254,218,0.12); color: #38FEDA; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; font-size: 12px; letter-spacing: 0.1em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px; margin-bottom: 14px; }
  .ra-comp-page .ra-comp-tl-card h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 18px; line-height: 1.4; margin: 0 0 8px; padding: 0; }
  .ra-comp-page .ra-comp-tl-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 14px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-comp-page .ra-comp-features { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 32px 48px; }
  .ra-comp-page .ra-comp-feature h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #38FEDA; font-size: 18px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-comp-page .ra-comp-feature p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-comp-page .ra-comp-faqs { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px 48px; }
  .ra-comp-page .ra-comp-faq { padding: 22px 24px; border-left: 2px solid rgba(56,254,218,0.35); background: rgba(255,255,255,0.015); border-radius: 0 10px 10px 0; }
  .ra-comp-page .ra-comp-faq h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 17px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-comp-page .ra-comp-faq p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 14.5px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-comp-page .ra-comp-cta { padding: 90px 0; text-align: center; }
  .ra-comp-page .ra-comp-cta-inner { max-width: 820px; }
  .ra-comp-page .ra-comp-cta .ra-comp-h2 { margin-bottom: 20px; }
  .ra-comp-page .ra-comp-cta-text { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.78); font-size: 16px; line-height: 1.75; margin: 0 0 32px; }
  .ra-comp-page .ra-comp-btn { display: inline-block; background: #38FEDA; color: #0A0A0A; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.02em; padding: 14px 28px; border-radius: 999px; text-decoration: none; transition: transform 150ms ease, background 150ms ease; }
  .ra-comp-page .ra-comp-btn:hover { background: #5affe3; transform: translateY(-1px); }

  @media (max-width: 900px) {
    .ra-comp-page .ra-comp-steps { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .ra-comp-page .ra-comp-timeline { grid-template-columns: repeat(2, minmax(0,1fr)); }
  }
  @media (max-width: 768px) {
    .ra-comp-page .ra-comp-h1 { font-size: 44px; }
    .ra-comp-page .ra-comp-h2 { font-size: 30px; margin-bottom: 32px; }
    .ra-comp-page .ra-comp-checks { grid-template-columns: 1fr; }
    .ra-comp-page .ra-comp-audience { grid-template-columns: 1fr; }
    .ra-comp-page .ra-comp-features { grid-template-columns: 1fr; }
    .ra-comp-page .ra-comp-faqs { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .ra-comp-page .ra-comp-steps { grid-template-columns: 1fr; }
  }
  @media (max-width: 540px) {
    .ra-comp-page .ra-comp-timeline { grid-template-columns: 1fr; }
  }
`;

export default function ServicioSeoCompletoPage() {
  useDocumentMeta({
    title: 'Servicio SEO Completo | RankAgile',
    description:
      'Servicio SEO completo que incluye auditoría, estrategia, contenido y SEO técnico para mejorar tu posicionamiento en Google e IA.',
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="ra-comp-page">
        <style>{styles}</style>
        <SeoCompletoHeroSection />
        <SeoCompletoStepsSection />
        <SeoCompletoAudienceSection />
        <SeoCompletoTimelineSection />
        <SeoCompletoFeaturesSection />
        <SeoCompletoFaqsSection />
        <SeoCompletoCtaSection />
      </main>
      <ClaudeFooter />
    </>
  );
}
