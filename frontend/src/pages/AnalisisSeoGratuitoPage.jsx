import useDocumentMeta from '../hooks/useDocumentMeta.js';
import AnalisisToolSection from '../components/sections/AnalisisToolSection.jsx';
import AnalisisCtaSection from '../components/sections/AnalisisCtaSection.jsx';

const styles = `
  .ra-ana-gratis-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 80px 24px 120px;
  }
  .ra-ana-gratis-container {
    max-width: 960px;
    margin: 0 auto;
  }

  .ra-ana-gratis-tool {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .ra-ana-gratis-hero {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    text-align: center;
    transition: border-color 200ms ease;
  }
  .ra-ana-gratis-hero:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .ra-ana-gratis-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .ra-ana-gratis-h1 {
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 18px;
  }
  .ra-ana-gratis-lead {
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    max-width: 640px;
    margin: 0 auto 32px;
  }

  .ra-ana-gratis-form {
    display: flex;
    gap: 12px;
    max-width: 640px;
    margin: 0 auto;
  }
  .ra-ana-gratis-input {
    flex: 1;
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
    box-sizing: border-box;
  }
  .ra-ana-gratis-input::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }
  .ra-ana-gratis-input:focus {
    border-color: #38FEDA;
    box-shadow: 0 0 0 4px rgba(56, 254, 218, 0.15);
  }
  .ra-ana-gratis-input:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ra-ana-gratis-btn {
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
    transition: transform 150ms ease, background 150ms ease;
    white-space: nowrap;
  }
  .ra-ana-gratis-btn:hover:not(:disabled) {
    background: #5affe3;
    transform: translateY(-1px);
  }
  .ra-ana-gratis-btn:disabled {
    background: #555;
    color: #999;
    cursor: not-allowed;
  }

  .ra-ana-gratis-error {
    margin: 20px auto 0;
    max-width: 640px;
    padding: 12px 16px;
    border-radius: 12px;
    background: rgba(255, 90, 90, 0.12);
    border: 1px solid rgba(255, 90, 90, 0.35);
    color: rgba(255, 255, 255, 0.82);
    font-size: 14.5px;
    font-weight: 400;
  }

  .ra-ana-gratis-loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding: 40px 20px;
    color: rgba(255, 255, 255, 0.78);
    font-weight: 300;
  }
  .ra-ana-gratis-spinner {
    width: 36px;
    height: 36px;
    border-radius: 999px;
    border: 3px solid rgba(56, 254, 218, 0.2);
    border-top-color: #38FEDA;
    animation: ra-ana-gratis-spin 800ms linear infinite;
  }
  @keyframes ra-ana-gratis-spin {
    to { transform: rotate(360deg); }
  }

  .ra-ana-gratis-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 40px 36px;
  }
  .ra-ana-gratis-h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
    letter-spacing: -0.01em;
  }
  .ra-ana-gratis-h3 {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.3;
    color: #38FEDA;
    margin: 0 0 18px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .ra-ana-gratis-dashboard {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
    align-items: start;
  }

  .ra-ana-gratis-score-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
  }
  .ra-ana-gratis-score-circle {
    position: relative;
    width: 200px;
    height: 200px;
  }
  .ra-ana-gratis-score-circle svg {
    width: 100%;
    height: 100%;
    transform: rotate(-90deg);
  }
  .ra-ana-gratis-score-bg {
    fill: none;
    stroke: rgba(255, 255, 255, 0.08);
    stroke-width: 6;
  }
  .ra-ana-gratis-score-progress {
    fill: none;
    stroke-width: 6;
    stroke-linecap: round;
    stroke-dasharray: 283;
    transition: stroke-dashoffset 800ms ease;
  }
  .ra-ana-gratis-score-circle.is-good .ra-ana-gratis-score-progress { stroke: #38FEDA; }
  .ra-ana-gratis-score-circle.is-warning .ra-ana-gratis-score-progress { stroke: #ffd166; }
  .ra-ana-gratis-score-circle.is-poor .ra-ana-gratis-score-progress { stroke: #ff6b6b; }
  .ra-ana-gratis-score-inner {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .ra-ana-gratis-score-number {
    font-size: 56px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1;
  }
  .ra-ana-gratis-score-label {
    font-size: 13px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-top: 4px;
  }
  .ra-ana-gratis-score-status {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 6px 14px;
    border-radius: 999px;
  }
  .ra-ana-gratis-score-status.is-good { background: rgba(56,254,218,0.12); color: #38FEDA; }
  .ra-ana-gratis-score-status.is-warning { background: rgba(255,209,102,0.12); color: #ffd166; }
  .ra-ana-gratis-score-status.is-poor { background: rgba(255,107,107,0.12); color: #ff6b6b; }
  .ra-ana-gratis-issues-badge {
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
  }
  .ra-ana-gratis-issues-badge span {
    color: #ff6b6b;
    font-weight: 700;
  }

  .ra-ana-gratis-categories-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .ra-ana-gratis-category-item {
    display: grid;
    grid-template-columns: 180px 1fr 50px;
    align-items: center;
    gap: 14px;
  }
  .ra-ana-gratis-category-label {
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.82);
  }
  .ra-ana-gratis-category-bar-container {
    height: 8px;
    background: rgba(255, 255, 255, 0.06);
    border-radius: 999px;
    overflow: hidden;
  }
  .ra-ana-gratis-category-bar {
    height: 100%;
    border-radius: 999px;
    transition: width 600ms ease;
  }
  .ra-ana-gratis-category-bar.is-good { background: #38FEDA; }
  .ra-ana-gratis-category-bar.is-warning { background: #ffd166; }
  .ra-ana-gratis-category-bar.is-poor { background: #ff6b6b; }
  .ra-ana-gratis-category-value {
    font-size: 13px;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.78);
    text-align: right;
  }

  .ra-ana-gratis-issues-container {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid rgba(56, 254, 218, 0.12);
  }
  .ra-ana-gratis-issues-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .ra-ana-gratis-issues-list li {
    position: relative;
    padding: 10px 0 10px 22px;
    font-size: 14.5px;
    font-weight: 300;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.78);
  }
  .ra-ana-gratis-issues-list li::before {
    content: "•";
    position: absolute;
    left: 6px;
    top: 8px;
    color: #ff6b6b;
    font-weight: 700;
  }

  .ra-ana-gratis-details-section {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid rgba(56, 254, 218, 0.12);
  }
  .ra-ana-gratis-details-list {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .ra-ana-gratis-detail-category {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(56, 254, 218, 0.12);
    border-radius: 12px;
    padding: 20px 22px;
  }
  .ra-ana-gratis-detail-category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  }
  .ra-ana-gratis-detail-category-title {
    font-size: 15px;
    font-weight: 600;
    color: #FFFFFF;
  }
  .ra-ana-gratis-detail-category-score {
    font-size: 13px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 999px;
  }
  .ra-ana-gratis-detail-category-score.is-good { background: rgba(56,254,218,0.12); color: #38FEDA; }
  .ra-ana-gratis-detail-category-score.is-warning { background: rgba(255,209,102,0.12); color: #ffd166; }
  .ra-ana-gratis-detail-category-score.is-poor { background: rgba(255,107,107,0.12); color: #ff6b6b; }
  .ra-ana-gratis-detail-category-findings {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .ra-ana-gratis-finding-item {
    display: grid;
    grid-template-columns: 28px 1fr;
    gap: 12px;
    align-items: start;
  }
  .ra-ana-gratis-finding-icon {
    width: 24px;
    height: 24px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
    line-height: 1;
  }
  .ra-ana-gratis-finding-icon.is-ok { background: rgba(56,254,218,0.12); color: #38FEDA; }
  .ra-ana-gratis-finding-icon.is-warning { background: rgba(255,209,102,0.12); color: #ffd166; }
  .ra-ana-gratis-finding-icon.is-error { background: rgba(255,107,107,0.12); color: #ff6b6b; }
  .ra-ana-gratis-finding-message {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.82);
    line-height: 1.5;
  }
  .ra-ana-gratis-finding-value {
    font-size: 13px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 4px;
    word-break: break-word;
  }

  .ra-ana-gratis-detail-category-header {
    width: 100%;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
    font-family: inherit;
    color: inherit;
    text-align: left;
  }
  .ra-ana-gratis-detail-issues {
    display: inline-block;
    margin-left: 10px;
    padding: 2px 8px;
    border-radius: 999px;
    background: rgba(255, 107, 107, 0.18);
    color: #ff6b6b;
    font-size: 11px;
    font-weight: 700;
  }
  .ra-ana-gratis-detail-right {
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .ra-ana-gratis-detail-chev {
    color: rgba(255, 255, 255, 0.55);
    transition: transform 160ms ease;
  }
  .ra-ana-gratis-detail-chev.is-open {
    transform: rotate(180deg);
  }
  .ra-ana-gratis-finding-rec {
    color: rgba(56, 254, 218, 0.9);
    font-size: 13px;
    margin-top: 6px;
  }
  .ra-ana-gratis-finding-rec em {
    color: #38FEDA;
    font-style: normal;
    font-weight: 600;
  }

  .ra-ana-gratis-priority-section {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid rgba(56, 254, 218, 0.12);
  }
  .ra-ana-gratis-priority-lead {
    color: rgba(255, 255, 255, 0.7);
    font-size: 14px;
    margin: 0 0 20px;
  }
  .ra-ana-gratis-priority-list {
    list-style: none;
    counter-reset: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .ra-ana-gratis-priority-item {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 14px;
    align-items: start;
    background: rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(56, 254, 218, 0.1);
    border-left-width: 3px;
    border-radius: 10px;
    padding: 14px 18px;
  }
  .ra-ana-gratis-priority-item.prio-high { border-left-color: #ff6b6b; }
  .ra-ana-gratis-priority-item.prio-medium { border-left-color: #ffd166; }
  .ra-ana-gratis-priority-item.prio-low { border-left-color: rgba(56, 254, 218, 0.5); }
  .ra-ana-gratis-priority-rank {
    width: 28px;
    height: 28px;
    border-radius: 999px;
    background: rgba(56, 254, 218, 0.12);
    color: #38FEDA;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 700;
  }
  .ra-ana-gratis-priority-body { min-width: 0; }
  .ra-ana-gratis-priority-meta {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 6px;
  }
  .ra-ana-gratis-priority-badge {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.14em;
    padding: 3px 8px;
    border-radius: 999px;
  }
  .ra-ana-gratis-priority-badge.prio-high { background: rgba(255,107,107,0.14); color: #ff6b6b; }
  .ra-ana-gratis-priority-badge.prio-medium { background: rgba(255,209,102,0.14); color: #ffd166; }
  .ra-ana-gratis-priority-badge.prio-low { background: rgba(56,254,218,0.14); color: #38FEDA; }
  .ra-ana-gratis-priority-module {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.55);
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .ra-ana-gratis-priority-title {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
  }
  .ra-ana-gratis-priority-msg {
    color: rgba(255, 255, 255, 0.72);
    font-size: 13.5px;
    margin-top: 2px;
  }
  .ra-ana-gratis-priority-rec {
    color: rgba(56, 254, 218, 0.85);
    font-size: 13px;
    margin-top: 6px;
    line-height: 1.45;
  }

  .ra-ana-gratis-pdf-trigger {
    margin-top: 32px;
    padding-top: 28px;
    border-top: 1px solid rgba(56, 254, 218, 0.12);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .ra-ana-gratis-pdf-note {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.55);
    margin: 0;
  }
  .ra-ana-gratis-pdf-form {
    margin-top: 32px;
    padding: 24px;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.18);
    border-radius: 16px;
  }
  .ra-ana-gratis-pdf-form h4 {
    margin: 0 0 14px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }
  .ra-ana-gratis-pdf-form form {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  .ra-ana-gratis-pdf-form .ra-ana-gratis-btn {
    grid-column: 1 / -1;
  }
  .ra-ana-gratis-pdf-ok {
    color: #38FEDA;
    font-size: 14px;
    margin-top: 12px;
  }

  .ra-ana-gratis-cta {
    margin-top: 80px;
    text-align: center;
  }
  .ra-ana-gratis-cta-inner {
    max-width: 720px;
    margin: 0 auto;
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.22);
    border-radius: 24px;
    padding: 56px 48px;
    transition: border-color 200ms ease;
  }
  .ra-ana-gratis-cta-inner:hover {
    border-color: rgba(56, 254, 218, 0.45);
  }
  .ra-ana-gratis-cta .ra-ana-gratis-h2 {
    margin-bottom: 28px;
  }
  .ra-ana-gratis-cta-btn {
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
    transition: transform 150ms ease, background 150ms ease;
  }
  .ra-ana-gratis-cta-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    .ra-ana-gratis-page { padding: 64px 16px 88px; }
    .ra-ana-gratis-hero { padding: 40px 24px; }
    .ra-ana-gratis-form { flex-direction: column; }
    .ra-ana-gratis-card { padding: 28px 22px; }
    .ra-ana-gratis-dashboard { grid-template-columns: 1fr; }
    .ra-ana-gratis-score-panel { margin: 0 auto; }
    .ra-ana-gratis-category-item { grid-template-columns: 1fr; gap: 6px; }
    .ra-ana-gratis-category-value { text-align: left; }
    .ra-ana-gratis-h2 { font-size: 26px; }
    .ra-ana-gratis-cta-inner { padding: 40px 24px; }
  }
`;

export default function AnalisisSeoGratuitoPage() {
  useDocumentMeta({
    title: 'Análisis SEO Gratuito: Detecta errores SEO en TU pagina WEB',
    description:
      'Realiza un Análisis SEO Gratuito de tu sitio web y detectá errores técnicos, mejoras clave para optimizar tu web y aparecer en Google.',
  });

  return (
    <main className="ra-ana-gratis-page">
      <style>{styles}</style>
      <div className="ra-ana-gratis-container">
        <AnalisisToolSection />
        <AnalisisCtaSection />
      </div>
    </main>
  );
}
