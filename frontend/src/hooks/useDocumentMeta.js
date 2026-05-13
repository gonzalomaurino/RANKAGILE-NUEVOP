import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://rankagile.com';

export default function useDocumentMeta({ title, description, canonical }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    // ── description ──────────────────────────────────────────────
    let metaEl = null;
    let prevDescription = null;
    let createdMeta = false;

    if (description) {
      metaEl = document.querySelector('meta[name="description"]');
      if (!metaEl) {
        metaEl = document.createElement('meta');
        metaEl.setAttribute('name', 'description');
        document.head.appendChild(metaEl);
        createdMeta = true;
      } else {
        prevDescription = metaEl.getAttribute('content');
      }
      metaEl.setAttribute('content', description);
    }

    // ── canonical ─────────────────────────────────────────────────
    // Normalize: strip trailing slash except on root "/"
    const normalizedPath = pathname.length > 1
      ? pathname.replace(/\/$/, '')
      : pathname;
    const canonicalHref = canonical || (BASE_URL + normalizedPath);

    let linkEl = document.querySelector('link[rel="canonical"]');
    let prevCanonical = null;
    let createdLink = false;

    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.setAttribute('rel', 'canonical');
      document.head.appendChild(linkEl);
      createdLink = true;
    } else {
      prevCanonical = linkEl.getAttribute('href');
    }
    linkEl.setAttribute('href', canonicalHref);

    return () => {
      document.title = prevTitle;
      if (metaEl) {
        if (createdMeta) {
          metaEl.remove();
        } else if (prevDescription !== null) {
          metaEl.setAttribute('content', prevDescription);
        }
      }
      if (linkEl) {
        if (createdLink) {
          linkEl.remove();
        } else if (prevCanonical !== null) {
          linkEl.setAttribute('href', prevCanonical);
        }
      }
    };
  }, [title, description, canonical, pathname]);
}
