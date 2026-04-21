import useDocumentMeta from '../hooks/useDocumentMeta.js';
import GeoHeroSection from '../components/sections/GeoHeroSection.jsx';
import GeoDefinitionSection from '../components/sections/GeoDefinitionSection.jsx';
import GeoContextSection from '../components/sections/GeoContextSection.jsx';
import GeoComparisonSection from '../components/sections/GeoComparisonSection.jsx';
import GeoBenefitsSection from '../components/sections/GeoBenefitsSection.jsx';
import GeoMethodologySection from '../components/sections/GeoMethodologySection.jsx';
import GeoFaqSection from '../components/sections/GeoFaqSection.jsx';
import GeoRelatedSection from '../components/sections/GeoRelatedSection.jsx';
import GeoCtaFinalSection from '../components/sections/GeoCtaFinalSection.jsx';

const styles = `
  .geo-page {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    background: #000000;
    padding: 96px 24px 120px;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .geo-container {
    max-width: 1180px;
    margin: 0 auto;
  }

  .geo-page * {
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }

  .geo-section {
    padding: 56px 0;
  }
  .geo-section + .geo-section {
    border-top: 1px solid rgba(56, 254, 218, 0.12);
  }

  .geo-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #38FEDA;
    margin: 0 0 20px;
  }

  .geo-h1 {
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    color: #FFFFFF;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
    max-width: 980px;
  }

  .geo-h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
    letter-spacing: -0.01em;
  }

  .geo-h3 {
    font-weight: 700;
    font-size: 22px;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 32px 0 16px;
  }

  .geo-lead {
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    max-width: 820px;
    margin: 0 0 18px;
  }
  .geo-lead strong { color: #FFFFFF; font-weight: 600; }
  .geo-lead .accent { color: #38FEDA; font-weight: 600; }

  .geo-p {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    max-width: 820px;
    margin: 0 0 16px;
  }
  .geo-p strong { color: #FFFFFF; font-weight: 600; }
  .geo-p .accent { color: #38FEDA; font-weight: 600; }
  .geo-p a { color: #38FEDA; text-decoration: none; }
  .geo-p a:hover { color: #5affe3; }

  .geo-small {
    font-weight: 300;
    font-size: 14.5px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
  }

  .geo-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px;
    max-width: 820px;
  }
  .geo-list li {
    position: relative;
    padding: 10px 0 10px 28px;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
  }
  .geo-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 20px;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #38FEDA;
  }
  .geo-list li strong { color: #FFFFFF; font-weight: 600; }

  .geo-quote {
    border-left: 3px solid #38FEDA;
    padding: 4px 0 4px 20px;
    margin: 32px 0 0;
    font-weight: 300;
    font-size: 15.5px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.72);
    max-width: 820px;
  }
  .geo-quote a { color: #38FEDA; text-decoration: none; }
  .geo-quote a:hover { color: #5affe3; }

  .geo-btn {
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
  }
  .geo-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
    color: #0A0A0A;
  }
  .geo-btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #38FEDA;
    background: transparent;
    border: 1px solid rgba(56, 254, 218, 0.45);
    border-radius: 999px;
    padding: 12px 22px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
  }
  .geo-btn-ghost:hover {
    background: rgba(56, 254, 218, 0.1);
    border-color: #38FEDA;
    transform: translateY(-1px);
  }

  .geo-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 28px;
  }
  .geo-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 28px;
  }

  .geo-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .geo-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .geo-card-title {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0;
  }
  .geo-card-title.is-accent { color: #38FEDA; }
  .geo-card-body {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }
  .geo-card-eyebrow {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0;
  }

  .geo-phases {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 28px;
  }
  .geo-phase {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-left: 3px solid #38FEDA;
    border-radius: 12px;
    padding: 24px 28px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .geo-phase:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    border-left-color: #38FEDA;
  }
  .geo-phase-title {
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 8px;
  }
  .geo-phase-body {
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  .geo-faq {
    margin-top: 28px;
  }
  .geo-faq details {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-radius: 12px;
    padding: 0;
    margin-bottom: 12px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .geo-faq details[open],
  .geo-faq details:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .geo-faq summary {
    list-style: none;
    cursor: pointer;
    padding: 20px 24px;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .geo-faq summary::-webkit-details-marker { display: none; }
  .geo-faq summary::after {
    content: "+";
    color: #38FEDA;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    transition: transform 200ms ease;
  }
  .geo-faq details[open] summary::after {
    content: "–";
  }
  .geo-faq .geo-faq-body {
    padding: 0 24px 22px;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  .geo-related {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 28px;
  }
  .geo-related-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  .geo-related-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .geo-related-title {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0;
  }
  .geo-related-body {
    font-size: 14.5px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  .geo-final {
    text-align: center;
    padding: 72px 0 24px;
  }
  .geo-final .geo-h2 {
    margin: 0 auto 12px;
    max-width: 820px;
  }
  .geo-final p {
    max-width: 640px;
    margin: 0 auto 32px;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
  }

  @media (max-width: 960px) {
    .geo-grid-3 { grid-template-columns: 1fr; }
    .geo-grid-2 { grid-template-columns: 1fr; }
    .geo-related { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .geo-page { padding: 64px 16px 88px; }
    .geo-h2 { font-size: 30px; }
    .geo-section { padding: 40px 0; }
  }
`;

export default function GeoPage() {
  useDocumentMeta({
    title: 'GEO: Generative Engine Optimization para Empresas | RankAgile',
    description:
      'GEO (Generative Engine Optimization) es la estrategia que posiciona tu empresa en ChatGPT, Gemini y Perplexity. Descubre la metodología RankAgile y empieza a existir donde tus clientes ya buscan.',
  });

  return (
    <div className="geo-page">
      <style>{styles}</style>
      <div className="geo-container">
        <GeoHeroSection />
        <GeoDefinitionSection />
        <GeoContextSection />
        <GeoComparisonSection />
        <GeoBenefitsSection />
        <GeoMethodologySection />
        <GeoFaqSection />
        <GeoRelatedSection />
        <GeoCtaFinalSection />
      </div>
    </div>
  );
}
