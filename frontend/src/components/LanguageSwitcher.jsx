import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ES_TO_EN = {
  '/': '/en/',
  '/contacto': '/en/contacto',
  '/analisis-seo-gratuito': '/en/analisis-seo-gratuito',
  '/quienes-somos': '/en/quienes-somos',
  '/servicios/geo': '/en/servicios/geo',
  '/seo-completo': '/en/seo-completo',
  '/auditoria-tecnica': '/en/auditoria-tecnica',
  '/seo-hibrido': '/en/seo-hibrido',
  '/seo-consultoria': '/en/seo-consultoria',
  '/seo-analytics': '/en/seo-analytics',
  '/blog': '/en/blog',
  '/privacidad': '/en/privacidad',
  '/cookies': '/en/cookies',
  '/cuanto-cuesta-geo': '/en/cuanto-cuesta-geo',
  '/por-que-no-aparezco-en-chatgpt': '/en/por-que-no-aparezco-en-chatgpt',
  '/seo-vs-geo-vs-aeo': '/en/seo-vs-geo-vs-aeo',
  '/blog/como-funciona-el-algoritmo-pagerank-de-google': '/en/blog/como-funciona-el-algoritmo-pagerank-de-google',
  '/blog/agencia-seo-internacional-rankagile': '/en/blog/agencia-seo-internacional-rankagile',
  '/blog/branding-digital': '/en/blog/branding-digital',
  '/blog/zero-click-search': '/en/blog/zero-click-search',
  '/blog/geo': '/en/blog/geo',
  '/blog/seo-para-empresas': '/en/blog/seo-para-empresas',
  '/blog/seo-que-es-y-para-que-sirve': '/en/blog/seo-que-es-y-para-que-sirve',
  '/blog/seo-y-sem-en-marketing-digital': '/en/blog/seo-y-sem-en-marketing-digital',
  '/blog/dashboard-seo-en-power-bi-para-agencias': '/en/blog/dashboard-seo-en-power-bi-para-agencias',
};

function getAlternatePath(pathname, currentLang) {
  if (currentLang === 'en') {
    const esPath = pathname.replace(/^\/en/, '') || '/';
    return esPath;
  }
  return ES_TO_EN[pathname] || `/en${pathname}`;
}

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();
  const isEN = i18n.language === 'en';
  const alternatePath = getAlternatePath(pathname, isEN ? 'en' : 'es');

  return (
    <a href={alternatePath} className="lang-switcher" aria-label={isEN ? 'Ver en Español' : 'View in English'}>
      {isEN ? 'ES' : 'EN'}
    </a>
  );
}

export { getAlternatePath };
