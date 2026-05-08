import { useEffect, useRef, useState } from 'react';
import ClaudeNavbar from './ClaudeNavbar.jsx';
import Footer from './Footer.jsx';
import '../styles/claude-system.css';

const slugify = (text) =>
  (text || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');

const styles = `
  .blogpost-page {
    min-height: 100vh;
    background: var(--bg);
    color: var(--fg);
    padding-bottom: 96px;
  }

  /* Hero */
  .blogpost-hero {
    max-width: 760px;
    margin: 0 auto;
    padding: 80px 32px 56px;
    text-align: center;
  }

  .blogpost-hero-meta {
    display: inline-flex;
    gap: 12px;
    align-items: center;
    margin-bottom: 24px;
  }

  .blogpost-tag {
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 3px 10px;
    border-radius: 999px;
    opacity: 0.9;
  }

  .blogpost-date {
    font-size: 12.5px;
    color: var(--fg-faint);
    font-family: 'JetBrains Mono', monospace;
  }

  .blogpost-h1 {
    font-size: clamp(2rem, 4.5vw, 2.8rem);
    font-weight: 700;
    line-height: 1.15;
    letter-spacing: -0.02em;
    color: var(--fg);
    margin: 0 0 24px;
  }

  .blogpost-lead {
    font-size: 17px;
    line-height: 1.7;
    color: var(--fg-dim);
    font-weight: 300;
    max-width: 640px;
    margin: 0 auto;
  }

  /* Layout */
  .blogpost-body {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 32px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 64px;
    align-items: start;
  }

  .blogpost-content {
    max-width: 760px;
    width: 100%;
  }

  /* Default content typography */
  .blogpost-content h2 {
    font-size: clamp(1.5rem, 3vw, 1.9rem);
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: -0.01em;
    color: var(--fg);
    margin: 56px 0 20px;
    scroll-margin-top: 90px;
  }

  .blogpost-content h2:first-child { margin-top: 0; }

  .blogpost-content h3 {
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 1.35;
    color: var(--fg);
    margin: 32px 0 14px;
  }

  .blogpost-content p {
    font-size: 16px;
    line-height: 1.75;
    color: var(--fg-dim);
    font-weight: 400;
    margin: 0 0 18px;
  }

  .blogpost-content p strong { color: var(--fg); font-weight: 600; }

  .blogpost-content a {
    color: var(--accent);
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 3px;
  }

  .blogpost-content ul,
  .blogpost-content ol {
    margin: 0 0 22px;
    padding-left: 22px;
    color: var(--fg-dim);
    font-size: 16px;
    line-height: 1.75;
  }

  .blogpost-content li { margin-bottom: 8px; }

  .blogpost-content blockquote {
    margin: 32px 0;
    padding: 20px 24px;
    border-left: 3px solid var(--accent);
    background: var(--bg-elev);
    border-radius: 0 10px 10px 0;
    font-size: 17px;
    line-height: 1.6;
    color: var(--fg);
  }

  .blogpost-content blockquote p {
    color: var(--fg);
    margin: 0 0 8px;
  }

  .blogpost-content blockquote p:last-child { margin: 0; }

  .blogpost-content hr {
    border: 0;
    border-top: 1px solid var(--border);
    margin: 40px 0;
  }

  /* Helpers — flat cards reusable inside blog content */
  .blogpost-card {
    background: var(--bg-elev);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 22px 24px;
    margin: 16px 0;
  }

  .blogpost-card-title {
    font-size: 16px;
    font-weight: 600;
    color: var(--fg);
    margin: 0 0 8px;
  }

  .blogpost-card-body {
    font-size: 15px;
    line-height: 1.7;
    color: var(--fg-dim);
    margin: 0;
  }

  .blogpost-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    margin: 32px 0;
  }

  .blogpost-stat {
    background: var(--bg-elev);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 22px 22px 24px;
  }

  .blogpost-stat-num {
    font-size: 32px;
    font-weight: 700;
    color: var(--accent);
    line-height: 1;
    margin: 0 0 10px;
  }

  .blogpost-stat-label {
    font-size: 13px;
    line-height: 1.6;
    color: var(--fg-dim);
    margin: 0;
  }

  .blogpost-pullquote {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    color: var(--accent);
    margin: 28px 0;
  }

  /* Simple flat table */
  .blogpost-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 24px 0;
    font-size: 14px;
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
  }

  .blogpost-content thead { background: var(--bg-elev); }

  .blogpost-content th {
    text-align: left;
    padding: 12px 16px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--fg-dim);
    border-bottom: 1px solid var(--border);
  }

  .blogpost-content td {
    padding: 14px 16px;
    color: var(--fg-dim);
    border-bottom: 1px solid var(--border);
    vertical-align: top;
  }

  .blogpost-content tr:last-child td { border-bottom: 0; }

  /* TOC sidebar */
  .blogpost-toc {
    position: sticky;
    top: 90px;
    align-self: start;
    font-size: 13px;
  }

  .blogpost-toc-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--fg-faint);
    margin: 0 0 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--border);
  }

  .blogpost-toc-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .blogpost-toc-item { margin-bottom: 4px; }

  .blogpost-toc-link {
    display: block;
    color: var(--fg-faint);
    text-decoration: none;
    font-size: 13px;
    line-height: 1.45;
    padding: 6px 0 6px 14px;
    border-left: 2px solid var(--border);
    transition: color 0.2s, border-color 0.2s;
  }

  .blogpost-toc-link:hover {
    color: var(--fg-dim);
  }

  .blogpost-toc-link.is-active {
    color: var(--accent);
    border-left-color: var(--accent);
  }

  /* Author footer — flat, centered, vertical stack */
  .blogpost-author {
    margin: 140px 0 0;
    padding: 0;
    background: none;
    border: 0;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
  }

  .blogpost-author-kicker {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--fg-faint);
    margin: 0;
  }

  .blogpost-author-name {
    font-size: 20px;
    font-weight: 700;
    color: var(--fg);
    margin: 0;
    letter-spacing: -0.01em;
  }

  .blogpost-author-avatar {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    background: var(--bg-chrome);
    margin-top: 4px;
  }

  .blogpost-author-fallback {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background: var(--accent);
    color: var(--btn-fg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.02em;
    margin-top: 4px;
  }

  /* CTA after author */
  .blogpost-cta {
    margin: 40px 0 0;
    text-align: center;
  }

  /* Responsive */
  @media (max-width: 1024px) {
    .blogpost-body {
      grid-template-columns: 1fr;
      gap: 32px;
    }
    .blogpost-toc { display: none; }
  }

  @media (max-width: 640px) {
    .blogpost-hero { padding: 56px 20px 40px; }
    .blogpost-body { padding: 0 20px; }
    .blogpost-content h2 { margin-top: 40px; }
    .blogpost-author { margin-top: 96px; }
  }
`;

export default function BlogPostLayout({ tag, date, title, lead, children }) {
  const contentRef = useRef(null);
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const root = contentRef.current;
    if (!root) return;
    const headings = Array.from(root.querySelectorAll('h2'));
    const items = headings.map((h, idx) => {
      const slug = slugify(h.textContent) || `section-${idx}`;
      h.id = slug;
      return { id: slug, text: h.textContent };
    });
    setToc(items);
  }, [children]);

  useEffect(() => {
    if (toc.length === 0) return;
    const elements = toc
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          visible.sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top
          );
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-90px 0px -65% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [toc]);

  return (
    <>
      <ClaudeNavbar />
      <main className="blogpost-page">
        <style>{styles}</style>

        <header className="blogpost-hero">
          {(tag || date) && (
            <div className="blogpost-hero-meta">
              {tag && <span className="blogpost-tag">{tag}</span>}
              {date && <span className="blogpost-date">{date}</span>}
            </div>
          )}
          <h1 className="blogpost-h1">{title}</h1>
          {lead && <p className="blogpost-lead">{lead}</p>}
        </header>

        <div className="blogpost-body">
          <article className="blogpost-content" ref={contentRef}>
            {children}
          </article>

          {toc.length > 0 && (
            <nav className="blogpost-toc" aria-label="Tabla de contenidos">
              <p className="blogpost-toc-title">En este artículo</p>
              <ul className="blogpost-toc-list">
                {toc.map((item) => (
                  <li key={item.id} className="blogpost-toc-item">
                    <a
                      href={`#${item.id}`}
                      className={`blogpost-toc-link${activeId === item.id ? ' is-active' : ''}`}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {/* Author — fuera del grid para que el TOC se libere antes */}
        <aside className="blogpost-author">
          <p className="blogpost-author-kicker">Escrito por</p>
          <p className="blogpost-author-name">Giuliano Scortichini</p>
          {imgError ? (
            <div className="blogpost-author-fallback" aria-hidden="true">GS</div>
          ) : (
            <img
              className="blogpost-author-avatar"
              src="/assets/giuliano.jpg"
              alt="Giuliano Scortichini"
              onError={() => setImgError(true)}
            />
          )}
        </aside>
      </main>
      <Footer />
    </>
  );
}
