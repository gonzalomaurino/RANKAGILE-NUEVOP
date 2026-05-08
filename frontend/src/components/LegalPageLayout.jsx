import ClaudeNavbar from './ClaudeNavbar.jsx';
import Footer from './Footer.jsx';
import '../styles/claude-system.css';

const styles = `
  .legal-page {
    min-height: 100vh;
    background: var(--bg);
    color: var(--fg);
    padding-bottom: 96px;
  }

  .legal-hero {
    max-width: 760px;
    margin: 0 auto;
    padding: 80px 32px 32px;
  }

  .legal-hero-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--fg-faint);
    margin: 0 0 14px;
  }

  .legal-hero-h1 {
    font-size: clamp(2rem, 4.5vw, 2.6rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--fg);
    margin: 0 0 12px;
  }

  .legal-hero-meta {
    font-size: 13px;
    color: var(--fg-faint);
    font-family: 'JetBrains Mono', monospace;
    margin: 0 0 24px;
  }

  .legal-hero-lead {
    font-size: 17px;
    line-height: 1.7;
    color: var(--fg-dim);
    font-weight: 300;
    margin: 0;
  }

  .legal-hero-lead strong { color: var(--fg); font-weight: 600; }

  .legal-body {
    max-width: 760px;
    margin: 0 auto;
    padding: 16px 32px 0;
  }

  .legal-body hr {
    border: 0;
    border-top: 1px solid var(--border);
    margin: 16px 0 40px;
  }

  .legal-body h2 {
    font-size: clamp(1.25rem, 2.4vw, 1.5rem);
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.01em;
    color: var(--fg);
    margin: 48px 0 16px;
  }

  .legal-body h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--fg);
    margin: 24px 0 8px;
  }

  .legal-body p {
    font-size: 15.5px;
    line-height: 1.75;
    color: var(--fg-dim);
    font-weight: 400;
    margin: 0 0 16px;
  }

  .legal-body p strong { color: var(--fg); font-weight: 600; }
  .legal-body p em { color: var(--fg); font-style: italic; }

  .legal-body a {
    color: var(--accent);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  .legal-body ul,
  .legal-body ol {
    margin: 0 0 18px;
    padding-left: 22px;
    color: var(--fg-dim);
    font-size: 15.5px;
    line-height: 1.75;
  }

  .legal-body li { margin-bottom: 6px; }

  .legal-contact-link {
    display: inline-block;
    font-weight: 600;
    font-size: 15px;
    color: var(--accent);
    text-decoration: none;
    margin-top: 4px;
  }

  .legal-contact-link:hover { text-decoration: underline; }

  @media (max-width: 640px) {
    .legal-hero { padding: 56px 20px 24px; }
    .legal-body { padding: 16px 20px 0; }
    .legal-body h2 { margin-top: 36px; }
  }
`;

export default function LegalPageLayout({ eyebrow = 'Legales', title, lead, lastUpdated, children }) {
  return (
    <>
      <ClaudeNavbar />
      <main className="legal-page">
        <style>{styles}</style>

        <header className="legal-hero">
          <p className="legal-hero-eyebrow">{eyebrow}</p>
          <h1 className="legal-hero-h1">{title}</h1>
          {lastUpdated && (
            <p className="legal-hero-meta">Última actualización: {lastUpdated}</p>
          )}
          {lead && <p className="legal-hero-lead">{lead}</p>}
        </header>

        <article className="legal-body">
          <hr />
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
