import { useEffect, useState, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';

const errorStyles = `
  .static-404 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    background: #000000;
    color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 24px;
    text-align: center;
    box-sizing: border-box;
  }
  .static-404-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .static-404-title {
    font-weight: 700;
    font-size: clamp(2rem, 5vw, 2.8rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 16px;
  }
  .static-404-text {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    max-width: 480px;
    margin: 0 0 32px;
  }
  .static-404-btn {
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
  .static-404-btn:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }
`;

export default function StaticPage() {
  const { pathname } = useLocation();
  const [html, setHtml] = useState('');
  const [pageStyles, setPageStyles] = useState('');
  const [error, setError] = useState(false);
  const linkRefs = useRef([]);

  useEffect(() => {
    let cancelled = false;
    setError(false);
    setHtml('');

    // Capture current head state to restore on cleanup
    const prevTitle = document.title;
    let metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl ? metaEl.getAttribute('content') : null;
    let createdMeta = false;

    // Clean up previously injected <link> tags
    linkRefs.current.forEach((el) => el.remove());
    linkRefs.current = [];

    // Pages are stored under /_pages/ to avoid Vite serving them as raw HTML
    const pagePath = `/_pages${pathname}index.html`;
    fetch(pagePath)
      .then((r) => {
        if (!r.ok) throw new Error(`Page not found: ${r.status}`);
        return r.text();
      })
      .then((text) => {
        if (cancelled) return;

        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');

        // Extract main content
        const mainContent = doc.querySelector(
          '#main-content .et_builder_inner_content'
        );
        if (mainContent) {
          setHtml(mainContent.innerHTML);
        }

        // Update document title from the page's <title> tag
        const titleEl = doc.querySelector('title');
        if (titleEl && titleEl.textContent) {
          document.title = titleEl.textContent;
        }

        // Update meta description from the page's <meta name="description">
        const descTag = doc.querySelector('meta[name="description"]');
        const descContent = descTag ? descTag.getAttribute('content') : null;
        if (descContent) {
          if (!metaEl) {
            metaEl = document.createElement('meta');
            metaEl.setAttribute('name', 'description');
            document.head.appendChild(metaEl);
            createdMeta = true;
          }
          metaEl.setAttribute('content', descContent);
        }

        // Collect ALL inline <style> blocks (they contain Divi design rules)
        let styles = '';
        doc.querySelectorAll('style').forEach((s) => {
          styles += s.textContent + '\n';
        });
        setPageStyles(styles);

        // Load external page-specific CSS files and Google Fonts
        doc.querySelectorAll('link[rel="stylesheet"], link[rel="preload"][as="style"]').forEach((link) => {
          const href = link.getAttribute('href') || '';
          if (href.includes('/wp-content/') || href.includes('fonts.googleapis.com')) {
            const el = document.createElement('link');
            el.rel = 'stylesheet';
            el.href = href;
            document.head.appendChild(el);
            linkRefs.current.push(el);
          }
        });
      })
      .catch(() => {
        if (cancelled) return;
        setError(true);
      });

    return () => {
      cancelled = true;
      document.title = prevTitle;
      if (metaEl) {
        if (createdMeta) {
          metaEl.remove();
        } else if (prevDescription !== null) {
          metaEl.setAttribute('content', prevDescription);
        }
      }
      linkRefs.current.forEach((el) => el.remove());
      linkRefs.current = [];
    };
  }, [pathname]);

  if (error) {
    return (
      <div className="static-404">
        <style>{errorStyles}</style>
        <span className="static-404-eyebrow">Error 404</span>
        <h1 className="static-404-title">Página no encontrada</h1>
        <p className="static-404-text">
          La página que buscás no existe o fue movida. Volvé al inicio para
          seguir explorando RankAgile.
        </p>
        <Link to="/" className="static-404-btn">Volver al inicio</Link>
      </div>
    );
  }

  if (!html) {
    return null;
  }

  return (
    <>
      {pageStyles && <style dangerouslySetInnerHTML={{ __html: pageStyles }} />}
      <style dangerouslySetInnerHTML={{ __html: `
        .et-l--post > .et_builder_inner_content > .et_pb_section {
          background-image: none !important;
          border: 0 !important;
        }
        .et-l--post > .et_builder_inner_content > .et_pb_section > .et_pb_row {
          border: 0 !important;
          background-color: transparent !important;
        }
        .et-l--post .et_pb_text_0 {
          background-color: transparent !important;
          border: 0 !important;
          border-radius: 0 !important;
          width: auto !important;
          padding: 0 !important;
          margin-top: 0 !important;
          overflow: visible !important;
        }
      ` }} />
      <div className="et-l et-l--post">
        <div
          className="et_builder_inner_content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </>
  );
}
