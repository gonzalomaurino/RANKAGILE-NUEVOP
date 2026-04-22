import { Link } from 'react-router-dom';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const styles = `
  .nf-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px 24px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .nf-page::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at 18% 22%, rgba(56, 254, 218, 0.09), transparent 42%),
      radial-gradient(circle at 82% 78%, rgba(56, 254, 218, 0.06), transparent 48%);
    pointer-events: none;
  }
  .nf-container {
    position: relative;
    max-width: 560px;
    margin: 0 auto;
    z-index: 1;
  }
  .nf-code {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: clamp(5rem, 14vw, 8rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.03em;
    background: linear-gradient(180deg, #38FEDA 0%, rgba(56, 254, 218, 0.35) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 0 0 8px;
  }
  .nf-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .nf-title {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(1.8rem, 4vw, 2.4rem);
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 18px;
  }
  .nf-text {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.72);
    margin: 0 0 36px;
  }
  .nf-actions {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
  }
  .nf-btn {
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
  .nf-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }
  .nf-btn-ghost {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #38FEDA;
    background: transparent;
    border: 1px solid rgba(56, 254, 218, 0.4);
    border-radius: 999px;
    padding: 13px 26px;
    text-decoration: none;
    cursor: pointer;
    transition: background 150ms ease, border-color 150ms ease, transform 150ms ease;
  }
  .nf-btn-ghost:hover {
    background: rgba(56, 254, 218, 0.08);
    border-color: #38FEDA;
    transform: translateY(-1px);
  }
`;

export default function NotFoundPage() {
  useDocumentMeta({
    title: '404 · Página no encontrada | RankAgile',
    description:
      'La página que buscás no existe o fue movida. Volvé al inicio para seguir explorando RankAgile.',
  });

  return (
    <main className="nf-page">
      <style>{styles}</style>
      <div className="nf-container">
        <p className="nf-code" aria-hidden="true">404</p>
        <p className="nf-eyebrow">Error 404</p>
        <h1 className="nf-title">Página no encontrada</h1>
        <p className="nf-text">
          La URL que buscás no existe o fue movida. Puede que el enlace esté
          roto o que hayamos reorganizado el contenido. Volvé al inicio y
          seguí explorando.
        </p>
        <div className="nf-actions">
          <Link to="/" className="nf-btn">Volver al inicio</Link>
          <Link to="/blogs/" className="nf-btn-ghost">Ver el blog</Link>
        </div>
      </div>
    </main>
  );
}
