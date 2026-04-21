import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useSpaNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest('a[href]');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href) return;

      // Skip external links, mailto, tel, hash-only, and asset links
      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        href.startsWith('/wp-content/') ||
        href.startsWith('/wp-includes/') ||
        href.endsWith('.xml') ||
        href.endsWith('.txt')
      ) {
        return;
      }

      // Any other internal path — handle via SPA router
      if (href.startsWith('/')) {
        e.preventDefault();
        navigate(href);
        window.scrollTo(0, 0);
      }
    }

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [navigate]);
}
