import useDocumentMeta from '../hooks/useDocumentMeta.js';
import HeroSection from '../components/sections/HeroSection.jsx';
import ServicesGridSection from '../components/sections/ServicesGridSection.jsx';
import ClientsSection from '../components/sections/ClientsSection.jsx';
import InternationalSection from '../components/sections/InternationalSection.jsx';
import AIIntroSection from '../components/sections/AIIntroSection.jsx';
import PilarsSection from '../components/sections/PilarsSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import FaqSection from '../components/sections/FaqSection.jsx';
import ContactSection from '../components/sections/ContactSection.jsx';

const styles = `
  .home-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
  }

  .home-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px;
  }
  .home-narrow { max-width: 900px; }
  .home-narrow-text { max-width: 760px; margin-left: auto; margin-right: auto; }

  .home-section {
    padding: 88px 0;
    position: relative;
  }
  .home-section + .home-section {
    border-top: 1px solid rgba(56, 254, 218, 0.08);
  }

  .home-center-stack {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 48px;
  }

  /* Typography */
  .home-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .home-eyebrow.is-center { display: block; text-align: center; }

  .home-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 28px;
    text-align: center;
  }

  .home-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .home-h2.is-center { text-align: center; }

  .home-accent { color: #38FEDA; }
  .home-accent-strong { color: #38FEDA; font-weight: 700; }
  .home-accent-alt { color: #FFFFFF; }

  .home-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 18px;
  }
  .home-p:last-child { margin-bottom: 0; }
  .home-p.is-center { text-align: center; }
  .home-p strong { color: #FFFFFF; font-weight: 600; }

  /* Buttons */
  .home-btn {
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
  .home-btn:hover:not(:disabled) {
    background: #5affe3;
    transform: translateY(-1px);
  }
  .home-btn:disabled {
    background: #555;
    color: #999;
    cursor: not-allowed;
  }

  /* Link arrows */
  .home-link-arrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 600;
    color: #38FEDA;
    text-decoration: none;
    transition: color 150ms ease, transform 150ms ease;
  }
  .home-link-arrow:hover {
    color: #5affe3;
    transform: translateX(2px);
  }
  .home-link-underline {
    color: #FFFFFF;
    text-decoration: underline;
    text-decoration-color: rgba(56, 254, 218, 0.45);
    text-underline-offset: 6px;
    transition: text-decoration-color 150ms ease, color 150ms ease;
  }
  .home-link-underline:hover {
    color: #38FEDA;
    text-decoration-color: #38FEDA;
  }

  /* Cards */
  .home-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 32px 30px;
    transition: border-color 200ms ease, background 200ms ease, transform 200ms ease;
  }
  .home-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }

  /* HERO */
  .home-hero {
    padding: 56px 0 80px;
    text-align: center;
  }
  .home-hero-sub {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.55;
    color: rgba(255, 255, 255, 0.82);
    max-width: 860px;
    margin: 0 auto 36px;
  }
  .home-hero-cta { margin-top: 8px; }

  /* SERVICES GRID */
  .home-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 22px;
    margin-top: 48px;
  }
  .home-service-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .home-service-card:hover { transform: translateY(-2px); }
  .home-service-icon {
    width: 56px;
    height: 56px;
    border-radius: 14px;
    background: rgba(56, 254, 218, 0.08);
    border: 1px solid rgba(56, 254, 218, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
  }
  .home-service-icon img {
    width: 34px;
    height: 34px;
    object-fit: contain;
  }
  .home-service-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.3;
    color: #FFFFFF;
    margin: 0;
  }
  .home-service-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 300;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
    flex: 1;
  }

  /* CLIENTS */
  .home-clients-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    margin: 0 0 36px;
  }
  .home-client-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 3 / 2;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.15);
    border-radius: 12px;
    padding: 14px;
    transition: border-color 200ms ease, background 200ms ease, transform 200ms ease;
  }
  .home-client-logo:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    transform: translateY(-2px);
  }
  .home-client-logo img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(1) brightness(1.4);
    opacity: 0.78;
    transition: filter 200ms ease, opacity 200ms ease;
  }
  .home-client-logo:hover img {
    filter: grayscale(0);
    opacity: 1;
  }
  .home-clients-caption {
    text-align: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* PILARS */
  .home-pilars-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
    margin-top: 48px;
  }
  .home-pilar {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-left: 3px solid #38FEDA;
    border-radius: 12px;
    padding: 32px 30px;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .home-pilar:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    border-left-color: #38FEDA;
  }
  .home-pilar-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    margin: 0 0 14px;
  }
  .home-pilar-body {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14.5px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
  }

  /* TESTIMONIALS */
  .home-testimonial {
    position: relative;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 56px 48px;
    margin: 0 0 28px;
    text-align: center;
  }
  .home-testimonial-mark {
    position: absolute;
    top: 10px;
    left: 28px;
    font-family: Georgia, serif;
    font-size: 90px;
    line-height: 1;
    color: rgba(56, 254, 218, 0.25);
  }
  .home-testimonial-quote {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: clamp(1.1rem, 1.8vw, 1.3rem);
    font-weight: 400;
    line-height: 1.55;
    color: #FFFFFF;
    margin: 0 0 24px;
    letter-spacing: -0.005em;
  }
  .home-testimonial-author {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
  }
  .home-testimonial-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
  .home-testimonial-btn {
    width: 42px;
    height: 42px;
    border-radius: 999px;
    border: 1px solid rgba(56, 254, 218, 0.35);
    background: rgba(56, 254, 218, 0.06);
    color: #38FEDA;
    font-family: inherit;
    font-size: 18px;
    cursor: pointer;
    transition: background 150ms ease, border-color 150ms ease, transform 150ms ease;
  }
  .home-testimonial-btn:hover {
    background: rgba(56, 254, 218, 0.18);
    border-color: #38FEDA;
    transform: translateY(-1px);
  }
  .home-testimonial-dots {
    display: flex;
    gap: 8px;
  }
  .home-testimonial-dot {
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
    border: 0;
    padding: 0;
    cursor: pointer;
    transition: background 150ms ease, transform 150ms ease;
  }
  .home-testimonial-dot.is-active {
    background: #38FEDA;
    transform: scale(1.2);
  }

  /* FAQ */
  .home-faq {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .home-faq-item {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .home-faq-item[open],
  .home-faq-item:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .home-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 22px 26px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
  }
  .home-faq-summary::-webkit-details-marker { display: none; }
  .home-faq-summary::after {
    content: "+";
    color: #38FEDA;
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    flex: 0 0 auto;
  }
  .home-faq-item[open] .home-faq-summary::after { content: "–"; }
  .home-faq-body {
    padding: 0 26px 24px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15.5px;
    font-weight: 300;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
  }
  .home-faq-body p { margin: 0 0 10px; }
  .home-faq-body p:last-child { margin-bottom: 0; }
  .home-faq-body strong { color: #38FEDA; font-weight: 600; }

  /* CONTACT */
  .home-contact-grid {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 48px;
    align-items: start;
  }
  .home-contact-card {
    padding: 44px 40px;
    border-radius: 24px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
  }
  .home-contact-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 32px;
    font-weight: 700;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .home-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .home-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .home-label {
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    letter-spacing: 0.01em;
  }
  .home-input,
  .home-textarea {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #FFFFFF;
    background: rgba(17, 24, 39, 0.8);
    border: 2px solid rgba(56, 254, 218, 0.2);
    border-radius: 16px;
    padding: 13px 16px;
    outline: none;
    transition: border-color 150ms ease, box-shadow 150ms ease;
    width: 100%;
    box-sizing: border-box;
  }
  .home-input::placeholder,
  .home-textarea::placeholder {
    color: rgba(255, 255, 255, 0.45);
    font-weight: 300;
  }
  .home-input:focus,
  .home-textarea:focus {
    border-color: #38FEDA;
    box-shadow: 0 0 0 4px rgba(56, 254, 218, 0.15);
  }
  .home-textarea {
    min-height: 96px;
    resize: vertical;
  }
  .home-form-btn {
    align-self: flex-start;
    margin-top: 4px;
  }
  .home-feedback {
    font-size: 14.5px;
    font-weight: 400;
    margin: 0;
    padding: 12px 16px;
    border-radius: 12px;
  }
  .home-feedback.is-ok {
    color: #0A0A0A;
    background: #38FEDA;
  }
  .home-feedback.is-err {
    color: rgba(255, 255, 255, 0.82);
    background: rgba(255, 90, 90, 0.12);
    border: 1px solid rgba(255, 90, 90, 0.35);
  }
  .home-contact-right { padding-top: 12px; }

  /* Responsive */
  @media (max-width: 1024px) {
    .home-services-grid { grid-template-columns: repeat(2, 1fr); }
    .home-clients-grid { grid-template-columns: repeat(3, 1fr); }
  }
  @media (max-width: 768px) {
    .home-section { padding: 64px 0; }
    .home-h2 { font-size: 30px; }
    .home-hero-sub { font-size: 17px; }
    .home-services-grid { grid-template-columns: 1fr; }
    .home-pilars-grid { grid-template-columns: 1fr; }
    .home-contact-grid { grid-template-columns: 1fr; gap: 32px; }
    .home-contact-card { padding: 32px 24px; }
    .home-testimonial { padding: 48px 28px 36px; }
    .home-clients-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 480px) {
    .home-container { padding: 0 16px; }
    .home-section { padding: 48px 0; }
  }
`;

export default function HomePage() {
  useDocumentMeta({
    title: 'RankAgile: Agencia SEO Internacional experta en IA para empresas',
    description:
      'Aumentamos tu tráfico orgánico con SEO técnico + GEO (optimización para IA). Auditoría SEO gratis las 24 hs. ¡Hablemos!',
  });

  return (
    <main className="home-page">
      <style>{styles}</style>
      <HeroSection />
      <ServicesGridSection />
      <ClientsSection />
      <InternationalSection />
      <AIIntroSection />
      <PilarsSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
