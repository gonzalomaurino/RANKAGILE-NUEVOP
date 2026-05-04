import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import ClaudeFooter from '../components/ClaudeFooter.jsx';
import ConsultoriaHeroSection from '../components/sections/ConsultoriaHeroSection.jsx';
import ConsultoriaStepsSection from '../components/sections/ConsultoriaStepsSection.jsx';
import ConsultoriaFeaturesSection from '../components/sections/ConsultoriaFeaturesSection.jsx';
import ConsultoriaAudienceSection from '../components/sections/ConsultoriaAudienceSection.jsx';
import ConsultoriaCompareSection from '../components/sections/ConsultoriaCompareSection.jsx';
import ConsultoriaFaqsSection from '../components/sections/ConsultoriaFaqsSection.jsx';
import ConsultoriaCtaSection from '../components/sections/ConsultoriaCtaSection.jsx';
import '../styles/claude-system.css';

const styles = `
  .ra-cons-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  .ra-cons-page .ra-cons-hero,
  .ra-cons-page .ra-cons-section,
  .ra-cons-page .ra-cons-cta {
    padding: 80px 0;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
  }
  .ra-cons-page .ra-cons-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
  .ra-cons-page .ra-cons-eyebrow { display: inline-block; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #38FEDA; font-size: 13px; margin: 0 0 14px 0; padding: 0; }
  .ra-cons-page .ra-cons-h1 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 3.2rem); line-height: 1.1; margin: 0 0 24px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-cons-page .ra-cons-h2 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: 40px; line-height: 1.2; margin: 0 0 48px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-cons-page .ra-cons-lead { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.82); font-size: 18px; line-height: 1.7; max-width: 760px; margin: 0 0 36px 0; }

  .ra-cons-page .ra-cons-checks { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 40px; max-width: 820px; }
  .ra-cons-page .ra-cons-checks li { display: flex; align-items: flex-start; gap: 12px; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 500; color: #FFFFFF; font-size: 16px; line-height: 1.5; }
  .ra-cons-page .ra-cons-check { flex: 0 0 auto; color: #38FEDA; font-weight: 700; }

  .ra-cons-page .ra-cons-steps { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 24px; }
  .ra-cons-page .ra-cons-step { background: rgba(56, 254, 218, 0.04); border: 1px solid rgba(56, 254, 218, 0.18); border-radius: 12px; padding: 28px 28px 26px 28px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-cons-page .ra-cons-step:hover { border-color: rgba(56, 254, 218, 0.45); background: rgba(56, 254, 218, 0.07); }
  .ra-cons-page .ra-cons-num { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 40px; line-height: 1; margin-bottom: 14px; }
  .ra-cons-page .ra-cons-step h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 20px; line-height: 1.4; margin: 0 0 10px 0; padding: 0; }
  .ra-cons-page .ra-cons-step p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.75); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-cons-page .ra-cons-features { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 32px 48px; }
  .ra-cons-page .ra-cons-feature h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #38FEDA; font-size: 18px; line-height: 1.4; margin: 0 0 10px 0; padding: 0; }
  .ra-cons-page .ra-cons-feature p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-cons-page .ra-cons-audience { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
  .ra-cons-page .ra-cons-audience-card { background: rgba(56, 254, 218, 0.04); border: 1px solid rgba(56, 254, 218, 0.18); border-radius: 12px; padding: 30px 32px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-cons-page .ra-cons-audience-card:hover { border-color: rgba(56, 254, 218, 0.45); background: rgba(56, 254, 218, 0.07); }
  .ra-cons-page .ra-cons-audience-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 22px; line-height: 1.3; margin: 0 0 14px 0; padding: 0; }
  .ra-cons-page .ra-cons-audience-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.80); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-cons-page .ra-cons-compare { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
  .ra-cons-page .ra-cons-compare-card { background: rgba(56, 254, 218, 0.04); border: 1px solid rgba(56, 254, 218, 0.22); border-radius: 14px; padding: 36px 34px; }
  .ra-cons-page .ra-cons-compare-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 26px; line-height: 1.3; margin: 0 0 20px 0; padding: 0; }
  .ra-cons-page .ra-cons-compare-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.82); font-size: 15px; line-height: 1.75; margin: 0 0 14px 0; padding: 0; }
  .ra-cons-page .ra-cons-compare-card p strong { color: #38FEDA; font-weight: 600; }

  .ra-cons-page .ra-cons-faqs { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px 48px; }
  .ra-cons-page .ra-cons-faq { padding: 22px 24px; border-left: 2px solid rgba(56, 254, 218, 0.35); background: rgba(255,255,255,0.015); border-radius: 0 10px 10px 0; }
  .ra-cons-page .ra-cons-faq h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 17px; line-height: 1.4; margin: 0 0 10px 0; padding: 0; }
  .ra-cons-page .ra-cons-faq p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 14.5px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-cons-page .ra-cons-cta { padding: 90px 0; text-align: center; }
  .ra-cons-page .ra-cons-cta-inner { max-width: 820px; }
  .ra-cons-page .ra-cons-cta .ra-cons-h2 { margin-bottom: 20px; }
  .ra-cons-page .ra-cons-cta-text { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.78); font-size: 16px; line-height: 1.75; margin: 0 0 32px 0; }
  .ra-cons-page .ra-cons-btn { display: inline-block; background: #38FEDA; color: #0A0A0A; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.02em; padding: 14px 28px; border-radius: 999px; text-decoration: none; transition: transform 150ms ease, background 150ms ease; }
  .ra-cons-page .ra-cons-btn:hover { background: #5affe3; transform: translateY(-1px); }

  @media (max-width: 900px) {
    .ra-cons-page .ra-cons-steps { grid-template-columns: repeat(2, minmax(0,1fr)); }
  }
  @media (max-width: 768px) {
    .ra-cons-page .ra-cons-h1 { font-size: 44px; }
    .ra-cons-page .ra-cons-h2 { font-size: 30px; margin-bottom: 32px; }
    .ra-cons-page .ra-cons-checks { grid-template-columns: 1fr; }
    .ra-cons-page .ra-cons-features { grid-template-columns: 1fr; }
    .ra-cons-page .ra-cons-audience { grid-template-columns: 1fr; }
    .ra-cons-page .ra-cons-compare { grid-template-columns: 1fr; }
    .ra-cons-page .ra-cons-faqs { grid-template-columns: 1fr; }
  }
  @media (max-width: 600px) {
    .ra-cons-page .ra-cons-steps { grid-template-columns: 1fr; }
  }
`;

export default function SeoConsultoriaAplicadaPage() {
    useDocumentMeta({
        title: 'Consultoría SEO Aplicada | RankAgile',
        description:
            'Consultoría SEO aplicada para mejorar tu posicionamiento con estrategias prácticas, análisis experto y acompañamiento enfocado en resultados.',
    });

    return (
        <>
            <ClaudeNavbar />
            <main className="ra-cons-page">
                <style>{styles}</style>
                <ConsultoriaHeroSection />
                <ConsultoriaStepsSection />
                <ConsultoriaFeaturesSection />
                <ConsultoriaAudienceSection />
                <ConsultoriaCompareSection />
                <ConsultoriaFaqsSection />
                <ConsultoriaCtaSection />
            </main>
            <ClaudeFooter />
        </>
    );
}
