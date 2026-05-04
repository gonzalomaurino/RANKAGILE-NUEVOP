import useDocumentMeta from '../hooks/useDocumentMeta.js';
import AboutHeroSection from '../components/sections/AboutHeroSection.jsx';
import AboutMissionVisionSection from '../components/sections/AboutMissionVisionSection.jsx';
import AboutVideoSection from '../components/sections/AboutVideoSection.jsx';
import AboutCtaSection from '../components/sections/AboutCtaSection.jsx';

const styles = `
  .qs-page {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    background: #000000;
    padding: 96px 24px 120px;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .qs-container {
    max-width: 1120px;
    margin: 0 auto;
  }
  .qs-hero {
    padding: 24px 0 8px;
    text-align: center;
  }
  .qs-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #38FEDA;
    margin: 0 0 24px;
  }
  .qs-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    color: #FFFFFF;
    margin: 0 0 28px;
    letter-spacing: -0.01em;
  }
  .qs-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    max-width: 780px;
    margin: 0 auto;
  }
  .qs-lead strong {
    color: #FFFFFF;
    font-weight: 600;
  }

  .qs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    margin-top: 56px;
  }
  .qs-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-radius: 12px;
    padding: 44px 36px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .qs-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .qs-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 20px;
  }
  .qs-card-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  .qs-video {
    margin-top: 56px;
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    overflow: hidden;
    background: rgba(56, 254, 218, 0.04);
    aspect-ratio: 16 / 9;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .qs-video:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .qs-video iframe {
    width: 100%;
    height: 100%;
    display: block;
    border: 0;
  }

  .qs-cta-row {
    display: flex;
    justify-content: center;
    margin-top: 56px;
  }
  .qs-btn {
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
  .qs-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
    color: #0A0A0A;
  }

  @media (max-width: 768px) {
    .qs-page { padding: 64px 16px 88px; }
    .qs-hero { padding: 8px 0; }
    .qs-card { padding: 36px 28px; }
    .qs-h2 { font-size: 32px; }
  }
`;

export default function QuienesSomosPage() {
  useDocumentMeta({
    title: 'Quienes somos | RankAgile',
    description:
      'En RankAgile somos especialistas en SEO y crecimiento digital. Ayudamos a empresas a posicionarse en Google y ChatGPT.',
  });

  return (
    <>
      <ClaudeNavbar />
      <div className="qs-page">
        <style>{styles}</style>
        <div className="qs-container">
          <AboutHeroSection />
          <AboutMissionVisionSection />
          <AboutVideoSection />
          <AboutCtaSection />
        </div>
      </div>
      <ClaudeFooter />
    </>
  );
}
