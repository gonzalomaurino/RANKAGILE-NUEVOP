import useDocumentMeta from '../hooks/useDocumentMeta.js';
import AuditoriaHeroSection from '../components/sections/AuditoriaHeroSection.jsx';
import AuditoriaFeaturesSection from '../components/sections/AuditoriaFeaturesSection.jsx';
import AuditoriaStepsSection from '../components/sections/AuditoriaStepsSection.jsx';
import AuditoriaCompareSection from '../components/sections/AuditoriaCompareSection.jsx';
import AuditoriaAudienceSection from '../components/sections/AuditoriaAudienceSection.jsx';
import AuditoriaFaqsSection from '../components/sections/AuditoriaFaqsSection.jsx';
import AuditoriaCtaSection from '../components/sections/AuditoriaCtaSection.jsx';

const styles = `
  .ra-aud-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  .ra-aud-page .ra-aud-hero,
  .ra-aud-page .ra-aud-section,
  .ra-aud-page .ra-aud-cta {
    padding: 80px 0;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
  }
  .ra-aud-page .ra-aud-container { max-width: 1180px; margin: 0 auto; padding: 0 24px; }
  .ra-aud-page .ra-aud-eyebrow { display: inline-block; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: #38FEDA; font-size: 13px; margin: 0 0 14px 0; padding: 0; }
  .ra-aud-page .ra-aud-h1 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: clamp(2.5rem, 5vw, 3.2rem); line-height: 1.1; margin: 0 0 24px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-aud-page .ra-aud-h2 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #FFFFFF; font-size: 40px; line-height: 1.2; margin: 0 0 48px 0; padding: 0; letter-spacing: -0.01em; }
  .ra-aud-page .ra-aud-lead { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.82); font-size: 18px; line-height: 1.7; max-width: 760px; margin: 0 0 36px 0; }

  .ra-aud-page .ra-aud-checks { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 40px; max-width: 820px; }
  .ra-aud-page .ra-aud-checks li { display: flex; align-items: flex-start; gap: 12px; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 500; color: #FFFFFF; font-size: 16px; line-height: 1.5; }
  .ra-aud-page .ra-aud-check { flex: 0 0 auto; color: #38FEDA; font-weight: 700; }

  .ra-aud-page .ra-aud-features { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 32px 48px; }
  .ra-aud-page .ra-aud-feature h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #38FEDA; font-size: 18px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-aud-page .ra-aud-feature p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-aud-page .ra-aud-steps { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 24px; }
  .ra-aud-page .ra-aud-step { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.18); border-radius: 12px; padding: 28px 24px 26px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-aud-page .ra-aud-step:hover { border-color: rgba(56,254,218,0.45); background: rgba(56,254,218,0.07); }
  .ra-aud-page .ra-aud-num { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 40px; line-height: 1; margin-bottom: 14px; }
  .ra-aud-page .ra-aud-step h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 20px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-aud-page .ra-aud-step p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.75); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-aud-page .ra-aud-compare { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
  .ra-aud-page .ra-aud-compare-card { border-radius: 14px; padding: 36px 34px; }
  .ra-aud-page .ra-aud-compare-bad { background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.12); }
  .ra-aud-page .ra-aud-compare-good { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.25); }
  .ra-aud-page .ra-aud-compare-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 22px; line-height: 1.3; margin: 0 0 20px; padding: 0; }
  .ra-aud-page .ra-aud-compare-bad h3 { color: rgba(255,255,255,0.5); }
  .ra-aud-page .ra-aud-compare-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 15px; line-height: 1.7; margin: 0 0 10px; padding: 0; }
  .ra-aud-page .ra-aud-compare-good p { color: rgba(255,255,255,0.85); }

  .ra-aud-page .ra-aud-audience { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
  .ra-aud-page .ra-aud-audience-card { background: rgba(56,254,218,0.04); border: 1px solid rgba(56,254,218,0.18); border-radius: 12px; padding: 30px 32px; transition: border-color 200ms ease, background 200ms ease; }
  .ra-aud-page .ra-aud-audience-card:hover { border-color: rgba(56,254,218,0.45); background: rgba(56,254,218,0.07); }
  .ra-aud-page .ra-aud-audience-card h3 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 700; color: #38FEDA; font-size: 22px; line-height: 1.3; margin: 0 0 14px; padding: 0; }
  .ra-aud-page .ra-aud-audience-card p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.80); font-size: 15px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-aud-page .ra-aud-faqs { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px 48px; }
  .ra-aud-page .ra-aud-faq { padding: 22px 24px; border-left: 2px solid rgba(56,254,218,0.35); background: rgba(255,255,255,0.015); border-radius: 0 10px 10px 0; }
  .ra-aud-page .ra-aud-faq h4 { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; color: #FFFFFF; font-size: 17px; line-height: 1.4; margin: 0 0 10px; padding: 0; }
  .ra-aud-page .ra-aud-faq p { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.72); font-size: 14.5px; line-height: 1.7; margin: 0; padding: 0; }

  .ra-aud-page .ra-aud-cta { padding: 90px 0; text-align: center; }
  .ra-aud-page .ra-aud-cta-inner { max-width: 820px; }
  .ra-aud-page .ra-aud-cta .ra-aud-h2 { margin-bottom: 20px; }
  .ra-aud-page .ra-aud-cta-text { font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 300; color: rgba(255,255,255,0.78); font-size: 16px; line-height: 1.75; margin: 0 0 32px; }
  .ra-aud-page .ra-aud-btn { display: inline-block; background: #38FEDA; color: #0A0A0A; font-family: Poppins, Helvetica, Arial, sans-serif; font-weight: 600; font-size: 15px; letter-spacing: 0.02em; padding: 14px 28px; border-radius: 999px; text-decoration: none; transition: transform 150ms ease, background 150ms ease; }
  .ra-aud-page .ra-aud-btn:hover { background: #5affe3; transform: translateY(-1px); }

  @media (max-width: 900px) {
    .ra-aud-page .ra-aud-steps { grid-template-columns: repeat(2, minmax(0,1fr)); }
  }
  @media (max-width: 768px) {
    .ra-aud-page .ra-aud-h1 { font-size: 44px; }
    .ra-aud-page .ra-aud-h2 { font-size: 30px; margin-bottom: 32px; }
    .ra-aud-page .ra-aud-checks { grid-template-columns: 1fr; }
    .ra-aud-page .ra-aud-features { grid-template-columns: 1fr; }
    .ra-aud-page .ra-aud-compare { grid-template-columns: 1fr; }
    .ra-aud-page .ra-aud-audience { grid-template-columns: 1fr; }
    .ra-aud-page .ra-aud-faqs { grid-template-columns: 1fr; }
  }
  @media (max-width: 540px) {
    .ra-aud-page .ra-aud-steps { grid-template-columns: 1fr; }
  }
`;

export default function AuditoriaTecnicaSeoPage() {
  useDocumentMeta({
    title: 'Auditoría Técnica SEO | RankAgile',
    description:
      'Auditoría técnica SEO para detectar errores, mejorar la indexación y optimizar el rendimiento de tu web en Google.',
  });

  return (
    <main className="ra-aud-page">
      <style>{styles}</style>
      <AuditoriaHeroSection />
      <AuditoriaFeaturesSection />
      <AuditoriaStepsSection />
      <AuditoriaCompareSection />
      <AuditoriaAudienceSection />
      <AuditoriaFaqsSection />
      <AuditoriaCtaSection />
    </main>
  );
}
