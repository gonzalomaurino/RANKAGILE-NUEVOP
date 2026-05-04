import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ServicesHeroSection from '../components/sections/ServicesHeroSection.jsx';
import ServicesPackSection from '../components/sections/ServicesPackSection.jsx';
import ServicesConsultingSection from '../components/sections/ServicesConsultingSection.jsx';
import ServicesAnalyzerSection from '../components/sections/ServicesAnalyzerSection.jsx';

const styles = `
  .svc-page {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    background: #000000;
    padding: 96px 24px 120px;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .svc-page * {
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }
  .svc-container { max-width: 1180px; margin: 0 auto; }

  .svc-section { padding: 56px 0; }
  .svc-section + .svc-section {
    border-top: 1px solid rgba(56, 254, 218, 0.12);
  }

  .svc-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #38FEDA;
    margin: 0 0 20px;
  }

  .svc-h1 {
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    color: #FFFFFF;
    margin: 0 0 12px;
    letter-spacing: -0.01em;
  }

  .svc-h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
    letter-spacing: -0.01em;
  }

  .svc-p {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    max-width: 820px;
    margin: 0 0 16px;
  }
  .svc-p strong, .svc-p b { color: #FFFFFF; font-weight: 600; }
  .svc-p a { color: #38FEDA; text-decoration: none; }
  .svc-p a:hover { color: #5affe3; }

  .svc-lead {
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    max-width: 820px;
    margin: 0 0 28px;
  }

  .svc-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #0A0A0A;
    background: #38FEDA;
    border: 0;
    border-radius: 999px;
    padding: 14px 28px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 150ms ease, background 150ms ease;
    margin-top: 8px;
  }
  .svc-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
    color: #0A0A0A;
  }

  .svc-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 40px;
  }

  .svc-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .svc-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .svc-card-icon {
    width: 44px;
    height: 44px;
    border-radius: 999px;
    background: rgba(56, 254, 218, 0.12);
    border: 1px solid rgba(56, 254, 218, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38FEDA;
  }
  .svc-card-icon svg { width: 22px; height: 22px; }
  .svc-card-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0;
  }
  .svc-card-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .svc-card-list li {
    position: relative;
    padding: 10px 0 10px 22px;
    font-size: 14.5px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
  .svc-card-list li:first-child { border-top: 0; padding-top: 4px; }
  .svc-card-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 18px;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #38FEDA;
  }
  .svc-card-list li:first-child::before { top: 12px; }
  .svc-card-list li b,
  .svc-card-list li strong { color: #FFFFFF; font-weight: 600; }

  @media (max-width: 960px) {
    .svc-grid-3 { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .svc-page { padding: 64px 16px 88px; }
    .svc-h2 { font-size: 30px; }
    .svc-section { padding: 40px 0; }
  }
`;

export default function ServiciosSeoPage() {
  useDocumentMeta({
    title: 'Servicios SEO para Posicionamiento Google | RankAgile',
    description:
      'Servicios SEO profesionales para mejorar tu Ranking Google. SEO Pack completo con el respaldo de un especialista en SEO.',
  });

  return (
    <>
      <ClaudeNavbar />
      <div className="svc-page">
        <style>{styles}</style>
        <div className="svc-container">
          <ServicesHeroSection />
          <ServicesPackSection />
          <ServicesConsultingSection />
          <ServicesAnalyzerSection />
        </div>
      </div>
      <ClaudeFooter />
    </>
  );
}
