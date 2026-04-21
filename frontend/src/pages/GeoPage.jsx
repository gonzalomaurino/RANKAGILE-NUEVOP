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
    padding: 32px 24px 120px;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .geo-page-container {
    max-width: 1180px;
    margin: 0 auto;
  }

  .geo-page-section { padding: 56px 0; }
  .geo-page-section + .geo-page-section {
    border-top: 1px solid rgba(56, 254, 218, 0.12);
  }

  .geo-page-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #38FEDA;
    margin: 0 0 20px;
  }

  .geo-page-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    color: #FFFFFF;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
    max-width: 980px;
  }

  .geo-page-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
    letter-spacing: -0.01em;
  }

  .geo-page-h3 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 32px 0 16px;
  }

  .geo-page-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    max-width: 820px;
    margin: 0 0 18px;
  }
  .geo-page-lead strong { color: #FFFFFF; font-weight: 600; }
  .geo-page-lead .accent { color: #38FEDA; font-weight: 600; }

  .geo-page-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    max-width: 820px;
    margin: 0 0 16px;
  }
  .geo-page-p strong { color: #FFFFFF; font-weight: 600; }
  .geo-page-p .accent { color: #38FEDA; font-weight: 600; }
  .geo-page-p a { color: #38FEDA; text-decoration: none; }
  .geo-page-p a:hover { color: #5affe3; }

  .geo-page-small {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 14.5px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
  }

  .geo-page-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px;
    max-width: 820px;
  }
  .geo-page-list li {
    position: relative;
    padding: 10px 0 10px 28px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 15.5px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
  }
  .geo-page-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 20px;
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: #38FEDA;
  }
  .geo-page-list li strong { color: #FFFFFF; font-weight: 600; }

  .geo-page-quote {
    border-left: 3px solid #38FEDA;
    padding: 4px 0 4px 20px;
    margin: 32px 0 0;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.72);
    max-width: 820px;
  }
  .geo-page-quote a { color: #38FEDA; text-decoration: none; }
  .geo-page-quote a:hover { color: #5affe3; }

  .geo-page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
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
  .geo-page-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
    color: #0A0A0A;
  }
  .geo-page-btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
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
  .geo-page-btn-ghost:hover {
    background: rgba(56, 254, 218, 0.1);
    border-color: #38FEDA;
    transform: translateY(-1px);
  }

  .geo-page-grid-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 28px;
  }
  .geo-page-grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 28px;
  }

  .geo-page-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .geo-page-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .geo-page-card-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0;
  }
  .geo-page-card-title.is-accent { color: #38FEDA; }
  .geo-page-card-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }
  .geo-page-card-eyebrow {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0;
  }

  .geo-page-phases {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 28px;
  }
  .geo-page-phase {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-left: 3px solid #38FEDA;
    border-radius: 12px;
    padding: 24px 28px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .geo-page-phase:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    border-left-color: #38FEDA;
  }
  .geo-page-phase-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 8px;
  }
  .geo-page-phase-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  .geo-page-faq { margin-top: 28px; }
  .geo-page-faq details {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 0;
    margin-bottom: 12px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .geo-page-faq details[open],
  .geo-page-faq details:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .geo-page-faq summary {
    list-style: none;
    cursor: pointer;
    padding: 20px 24px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .geo-page-faq summary::-webkit-details-marker { display: none; }
  .geo-page-faq summary::after {
    content: "+";
    color: #38FEDA;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    flex: 0 0 auto;
  }
  .geo-page-faq details[open] summary::after { content: "–"; }
  .geo-page-faq-body {
    padding: 0 24px 22px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  .geo-page-related {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 28px;
  }
  .geo-page-related-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 28px;
    transition: border-color 200ms ease, background 200ms ease;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
  .geo-page-related-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .geo-page-related-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0;
  }
  .geo-page-related-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  .geo-page-final {
    text-align: center;
    padding: 72px 0 24px;
  }
  .geo-page-final .geo-page-h2 {
    margin: 0 auto 12px;
    max-width: 820px;
  }
  .geo-page-final p {
    max-width: 640px;
    margin: 0 auto 32px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
  }

  @media (max-width: 960px) {
    .geo-page-grid-3 { grid-template-columns: 1fr; }
    .geo-page-grid-2 { grid-template-columns: 1fr; }
    .geo-page-related { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .geo-page { padding: 16px 16px 88px; }
    .geo-page-h2 { font-size: 30px; }
    .geo-page-section { padding: 40px 0; }
  }
`;

export default function GeoPage() {
  useDocumentMeta({
    title: 'GEO: Generative Engine Optimization para Empresas | RankAgile',
    description:
      'GEO (Generative Engine Optimization) es la estrategia que posiciona tu empresa en ChatGPT, Gemini y Perplexity. Descubrí la metodología RankAgile y empezá a existir donde tus clientes ya buscan.',
  });

  return (
    <main className="geo-page">
      <style>{styles}</style>
      <div className="geo-page-container">
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
    </main>
  );
}
