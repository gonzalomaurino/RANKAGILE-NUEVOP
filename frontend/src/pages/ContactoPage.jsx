import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ContactHeroSection from '../components/sections/ContactHeroSection.jsx';
import ContactFormSection from '../components/sections/ContactFormSection.jsx';
import ContactInfoSection from '../components/sections/ContactInfoSection.jsx';

const styles = `
  .ct-page {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    color: #FFFFFF;
    background: #000000;
    padding: 96px 24px 120px;
    min-height: 100vh;
    box-sizing: border-box;
  }
  .ct-container {
    max-width: 1180px;
    margin: 0 auto;
  }

  .ct-hero {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: stretch;
  }
  .ct-hero-left {
    padding: 8px 0 0;
    max-width: 820px;
  }
  .ct-eyebrow {
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
  .ct-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    color: #FFFFFF;
    margin: 0 0 24px;
    letter-spacing: -0.01em;
  }
  .ct-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 0;
  }

  .ct-form-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 48px 44px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .ct-form-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .ct-form-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 28px;
  }
  .ct-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .ct-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .ct-label {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 600;
    color: #FFFFFF;
    letter-spacing: 0.01em;
  }
  .ct-input,
  .ct-textarea {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #FFFFFF;
    background: rgba(17, 24, 39, 0.8);
    border: 2px solid rgba(56, 254, 218, 0.2);
    border-radius: 16px;
    padding: 14px 16px;
    outline: none;
    transition: border-color 150ms ease, box-shadow 150ms ease;
    width: 100%;
    box-sizing: border-box;
  }
  .ct-input::placeholder,
  .ct-textarea::placeholder {
    color: rgba(255, 255, 255, 0.45);
    font-weight: 300;
  }
  .ct-input:focus,
  .ct-textarea:focus {
    border-color: #38FEDA;
    box-shadow: 0 0 0 4px rgba(56, 254, 218, 0.15);
  }
  .ct-textarea {
    min-height: 110px;
    resize: vertical;
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }

  .ct-btn {
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
    cursor: pointer;
    align-self: flex-start;
    margin-top: 4px;
    transition: transform 150ms ease, background 150ms ease;
  }
  .ct-btn:hover:not(:disabled) {
    background: #5affe3;
    transform: translateY(-1px);
  }
  .ct-btn:disabled {
    background: #555;
    color: #999;
    cursor: not-allowed;
  }

  .ct-feedback {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 400;
    margin: 0;
    padding: 12px 16px;
    border-radius: 12px;
  }
  .ct-feedback.is-ok {
    color: #0A0A0A;
    background: #38FEDA;
  }
  .ct-feedback.is-err {
    color: rgba(255, 255, 255, 0.82);
    background: rgba(255, 90, 90, 0.12);
    border: 1px solid rgba(255, 90, 90, 0.35);
  }

  .ct-data-wrap {
    margin-top: 96px;
  }
  .ct-data-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.2;
    color: #FFFFFF;
    text-align: center;
    margin: 0 0 40px;
  }
  .ct-data-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
  .ct-data-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-radius: 12px;
    padding: 40px 32px;
    text-align: center;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .ct-data-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .ct-data-icon {
    width: 56px;
    height: 56px;
    border-radius: 999px;
    background: rgba(56, 254, 218, 0.12);
    border: 1px solid rgba(56, 254, 218, 0.35);
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #38FEDA;
  }
  .ct-data-h {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 12px;
  }
  .ct-data-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }
  .ct-data-body a {
    color: #FFFFFF;
    text-decoration: none;
    transition: color 150ms ease;
  }
  .ct-data-body a:hover {
    color: #38FEDA;
  }

  .ct-social {
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 4px;
  }
  .ct-social a {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid rgba(56, 254, 218, 0.35);
    background: rgba(56, 254, 218, 0.06);
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 150ms ease, transform 150ms ease, border-color 150ms ease;
  }
  .ct-social a:hover {
    background: rgba(56, 254, 218, 0.18);
    border-color: #38FEDA;
    transform: translateY(-1px);
  }
  .ct-social svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  @media (max-width: 960px) {
    .ct-data-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px) {
    .ct-page { padding: 64px 16px 88px; }
    .ct-hero-left { padding: 0; }
    .ct-form-card { padding: 36px 24px; }
    .ct-form-title { font-size: 32px; }
    .ct-data-title { font-size: 32px; }
    .ct-data-card { padding: 32px 24px; }
  }
`;

export default function ContactoPage() {
  useDocumentMeta({
    title: 'Contacto: Habla con un Especialista SEO | RankAgile',
    description:
      'Contactá a RankAgile y llevá tu estrategia SEO al siguiente nivel. Estamos listos para ayudarte a posicionar tu negocio y generar resultados.',
  });

  return (
    <div className="ct-page">
      <style>{styles}</style>
      <div className="ct-container">
        <section className="ct-hero">
          <ContactHeroSection />
          <ContactFormSection />
        </section>
        <ContactInfoSection />
      </div>
    </div>
  );
}
