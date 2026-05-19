import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAlternatePath } from '../components/LanguageSwitcher.jsx';

const BASE_URL = 'https://rankagile.com';

export function useHreflang(currentLang) {
  const { pathname } = useLocation();

  useEffect(() => {
    const alternatePath = getAlternatePath(pathname, currentLang);
    const esPath = currentLang === 'en' ? alternatePath : pathname;
    const enPath = currentLang === 'en' ? pathname : alternatePath;

    const setOrCreate = (rel, hreflang, href) => {
      let el = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'alternate');
        el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', `${BASE_URL}${href}`);
    };

    setOrCreate('alternate', 'es', esPath);
    setOrCreate('alternate', 'en', enPath);
    setOrCreate('alternate', 'x-default', esPath);
  }, [pathname, currentLang]);
}
