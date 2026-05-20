import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useGTMPageTracking } from './hooks/useGTMPageTracking';
import { useHreflang } from './hooks/useHreflang.js';

import ClaudeHomePage from './pages/rankagile-app.jsx';
import ClaudeContactoPage from './pages/ClaudeContactoPage.jsx';
import ClaudeAnalisisPage from './pages/ClaudeAnalisisPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import QuienesSomosPage from './pages-new/QuienesSomosPage.jsx';
import GeoPage from './pages-new/GeoPage.jsx';
import ServicioSeoCompletoPage from './pages-new/ServicioSeoCompletoPage.jsx';
import AuditoriaTecnicaSeoPage from './pages-new/AuditoriaTecnicaSeoPage.jsx';
import ServicioSeoHibridoPage from './pages-new/ServicioSeoHibridoPage.jsx';
import SeoConsultoriaAplicadaPage from './pages-new/SeoConsultoriaAplicadaPage.jsx';
import SeoAnalyticsPage from './pages-new/SeoAnalyticsPage.jsx';
import BlogsPage from './pages-new/BlogsPage.jsx';
import PrivacyPolicyPage from './pages-new/PrivacyPolicyPage.jsx';
import CookiesPolicyPage from './pages-new/CookiesPolicyPage.jsx';

import PageRankFuncionaPage from './pages/PageRankFuncionaPage.jsx';
import AgenciaSeoInternacionalPage from './pages/AgenciaSeoInternacionalPage.jsx';
import BrandingDigitalPage from './pages/BrandingDigitalPage.jsx';
import ZeroClickSearchPage from './pages/ZeroClickSearchPage.jsx';
import GeoBlogPage from './pages/GeoPage.jsx';
import SeoParaEmpresasPage from './pages/SeoParaEmpresasPage.jsx';

import CuantoCuestaGeoPage from './pages/CuantoCuestaGeoPage.jsx';
import PorQueNoAparezcoEnChatGPTPage from './pages/PorQueNoAparezcoEnChatGPTPage.jsx';
import SeoVsGeoVsAeoPage from './pages/SeoVsGeoVsAeoPage.jsx';

import QueEsSeoPage from './pages/QueEsSeoPage.jsx';
import SeoYSemPage from './pages/SeoYSemPage.jsx';
import DashboardPowerBiPage from './pages/DashboardPowerBiPage.jsx';

import SeoTecnicoPage from './pages/SeoTecnicoPage.jsx';
import OnPageSeoPage from './pages/OnPageSeoPage.jsx';
import LinkBuildingPage from './pages/LinkBuildingPage.jsx';
import EEATPage from './pages/EEATPage.jsx';
import ComoAparecerEnMotoresDeIAPage from './pages/ComoAparecerEnMotoresDeIAPage.jsx';
import CitabilidadLLMsPage from './pages/CitabilidadLLMsPage.jsx';
import KnowledgePanelPage from './pages/KnowledgePanelPage.jsx';
import WikipediaWikidataMarcasPage from './pages/WikipediaWikidataMarcasPage.jsx';
import SchemaMarkupGeoPage from './pages/SchemaMarkupGeoPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function GTMPageTracker() {
  useGTMPageTracking();
  return null;
}

/** Sets i18n language based on whether the URL starts with /en */
function LangSync({ lang }) {
  const { i18n } = useTranslation();
  const { pathname } = useLocation();

  useEffect(() => {
    if (i18n.language !== lang) i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang, i18n]);

  useHreflang(lang);
  return null;
}

/** Wraps a page component with the Spanish language context */
function Es({ children }) {
  return (
    <>
      <LangSync lang="es" />
      {children}
    </>
  );
}

/** Wraps a page component with the English language context */
function En({ children }) {
  return (
    <>
      <LangSync lang="en" />
      {children}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GTMPageTracker />
      <Routes>

        {/* ══ SPANISH (base, no prefix) ══════════════════════════════════════ */}

        {/* Core */}
        <Route path="/" element={<Es><ClaudeHomePage /></Es>} />
        <Route path="/contacto" element={<Es><ClaudeContactoPage /></Es>} />
        <Route path="/contacto/" element={<Es><ClaudeContactoPage /></Es>} />
        <Route path="/analisis-seo-gratuito" element={<Es><ClaudeAnalisisPage /></Es>} />
        <Route path="/analisis-seo-gratuito/" element={<Es><ClaudeAnalisisPage /></Es>} />

        {/* Service / landing pages */}
        <Route path="/quienes-somos" element={<Es><QuienesSomosPage /></Es>} />
        <Route path="/servicios/geo" element={<Es><GeoPage /></Es>} />
        <Route path="/seo-completo" element={<Es><ServicioSeoCompletoPage /></Es>} />
        <Route path="/auditoria-tecnica" element={<Es><AuditoriaTecnicaSeoPage /></Es>} />
        <Route path="/seo-hibrido" element={<Es><ServicioSeoHibridoPage /></Es>} />
        <Route path="/seo-consultoria" element={<Es><SeoConsultoriaAplicadaPage /></Es>} />
        <Route path="/seo-analytics" element={<Es><SeoAnalyticsPage /></Es>} />
        <Route path="/blog" element={<Es><BlogsPage /></Es>} />
        <Route path="/privacidad" element={<Es><PrivacyPolicyPage /></Es>} />
        <Route path="/cookies" element={<Es><CookiesPolicyPage /></Es>} />

        {/* Cluster GEO — old root URLs redirect to /blog/* */}
        <Route path="/cuanto-cuesta-geo" element={<Navigate to="/blog/cuanto-cuesta-geo" replace />} />
        <Route path="/por-que-no-aparezco-en-chatgpt" element={<Navigate to="/blog/por-que-no-aparezco-en-chatgpt" replace />} />
        <Route path="/seo-vs-geo-vs-aeo" element={<Navigate to="/blog/seo-vs-geo-vs-aeo" replace />} />

        {/* Blog posts */}
        <Route path="/blog/como-funciona-el-algoritmo-pagerank-de-google" element={<Es><PageRankFuncionaPage /></Es>} />
        <Route path="/blog/agencia-seo-internacional-rankagile" element={<Es><AgenciaSeoInternacionalPage /></Es>} />
        <Route path="/blog/branding-digital" element={<Es><BrandingDigitalPage /></Es>} />
        <Route path="/blog/zero-click-search" element={<Es><ZeroClickSearchPage /></Es>} />
        <Route path="/blog/geo" element={<Es><GeoBlogPage /></Es>} />
        <Route path="/blog/seo-para-empresas" element={<Es><SeoParaEmpresasPage /></Es>} />
        <Route path="/blog/seo-que-es-y-para-que-sirve" element={<Es><QueEsSeoPage /></Es>} />
        <Route path="/blog/seo-y-sem-en-marketing-digital" element={<Es><SeoYSemPage /></Es>} />
        <Route path="/blog/dashboard-seo-en-power-bi-para-agencias" element={<Es><DashboardPowerBiPage /></Es>} />
        {/* Cluster GEO — moved to /blog/* */}
        <Route path="/blog/cuanto-cuesta-geo" element={<Es><CuantoCuestaGeoPage /></Es>} />
        <Route path="/blog/por-que-no-aparezco-en-chatgpt" element={<Es><PorQueNoAparezcoEnChatGPTPage /></Es>} />
        <Route path="/blog/seo-vs-geo-vs-aeo" element={<Es><SeoVsGeoVsAeoPage /></Es>} />
        {/* SEO pillar satellites */}
        <Route path="/blog/seo-tecnico-que-es" element={<Es><SeoTecnicoPage /></Es>} />
        <Route path="/blog/que-es-on-page-seo" element={<Es><OnPageSeoPage /></Es>} />
        <Route path="/blog/que-es-link-building" element={<Es><LinkBuildingPage /></Es>} />
        <Route path="/blog/que-es-eeat-google" element={<Es><EEATPage /></Es>} />
        {/* IA visibility pillar + satellites */}
        <Route path="/blog/como-aparecer-en-motores-de-ia" element={<Es><ComoAparecerEnMotoresDeIAPage /></Es>} />
        <Route path="/blog/citabilidad-llms-como-medirla" element={<Es><CitabilidadLLMsPage /></Es>} />
        <Route path="/blog/knowledge-panel-google-como-conseguirlo" element={<Es><KnowledgePanelPage /></Es>} />
        <Route path="/blog/wikipedia-wikidata-marcas" element={<Es><WikipediaWikidataMarcasPage /></Es>} />
        <Route path="/blog/schema-markup-para-geo" element={<Es><SchemaMarkupGeoPage /></Es>} />

        {/* Redirects legacy /preview/ */}
        <Route path="/preview/quienes-somos" element={<Navigate to="/quienes-somos" replace />} />
        <Route path="/preview/geo" element={<Navigate to="/servicios/geo" replace />} />
        <Route path="/preview/seo-completo" element={<Navigate to="/seo-completo" replace />} />
        <Route path="/preview/auditoria-tecnica" element={<Navigate to="/auditoria-tecnica" replace />} />
        <Route path="/preview/seo-hibrido" element={<Navigate to="/seo-hibrido" replace />} />
        <Route path="/preview/seo-consultoria" element={<Navigate to="/seo-consultoria" replace />} />
        <Route path="/preview/seo-analytics" element={<Navigate to="/seo-analytics" replace />} />
        <Route path="/preview/blogs" element={<Navigate to="/blog" replace />} />
        <Route path="/preview/privacidad" element={<Navigate to="/privacidad" replace />} />
        <Route path="/preview/cookies" element={<Navigate to="/cookies" replace />} />

        {/* Redirects /agencia-geo */}
        <Route path="/agencia-geo" element={<Navigate to="/servicios/geo" replace />} />
        <Route path="/agencia-geo/" element={<Navigate to="/servicios/geo" replace />} />

        {/* Redirects blog sin prefijo */}
        <Route path="/como-funciona-el-algoritmo-pagerank-de-google" element={<Navigate to="/blog/como-funciona-el-algoritmo-pagerank-de-google" replace />} />
        <Route path="/como-funciona-el-algoritmo-pagerank-de-google/" element={<Navigate to="/blog/como-funciona-el-algoritmo-pagerank-de-google" replace />} />
        <Route path="/agencia-seo-internacional-rankagile" element={<Navigate to="/blog/agencia-seo-internacional-rankagile" replace />} />
        <Route path="/agencia-seo-internacional-rankagile/" element={<Navigate to="/blog/agencia-seo-internacional-rankagile" replace />} />
        <Route path="/branding-digital" element={<Navigate to="/blog/branding-digital" replace />} />
        <Route path="/branding-digital/" element={<Navigate to="/blog/branding-digital" replace />} />
        <Route path="/zero-click-search" element={<Navigate to="/blog/zero-click-search" replace />} />
        <Route path="/zero-click-search/" element={<Navigate to="/blog/zero-click-search" replace />} />
        <Route path="/geo" element={<Navigate to="/blog/geo" replace />} />
        <Route path="/geo/" element={<Navigate to="/blog/geo" replace />} />
        <Route path="/seo-para-empresas" element={<Navigate to="/blog/seo-para-empresas" replace />} />
        <Route path="/seo-para-empresas/" element={<Navigate to="/blog/seo-para-empresas" replace />} />
        <Route path="/seo-que-es-y-para-que-sirve" element={<Navigate to="/blog/seo-que-es-y-para-que-sirve" replace />} />
        <Route path="/seo-y-sem-en-marketing-digital" element={<Navigate to="/blog/seo-y-sem-en-marketing-digital" replace />} />
        <Route path="/dashboard-seo-en-power-bi-para-agencias" element={<Navigate to="/blog/dashboard-seo-en-power-bi-para-agencias" replace />} />

        {/* ══ ENGLISH (/en prefix) ═══════════════════════════════════════════ */}

        {/* Core */}
        <Route path="/en/" element={<En><ClaudeHomePage /></En>} />
        <Route path="/en" element={<Navigate to="/en/" replace />} />
        <Route path="/en/contacto" element={<En><ClaudeContactoPage /></En>} />
        <Route path="/en/contacto/" element={<En><ClaudeContactoPage /></En>} />
        <Route path="/en/analisis-seo-gratuito" element={<En><ClaudeAnalisisPage /></En>} />
        <Route path="/en/analisis-seo-gratuito/" element={<En><ClaudeAnalisisPage /></En>} />

        {/* Service / landing pages */}
        <Route path="/en/quienes-somos" element={<En><QuienesSomosPage /></En>} />
        <Route path="/en/servicios/geo" element={<En><GeoPage /></En>} />
        <Route path="/en/seo-completo" element={<En><ServicioSeoCompletoPage /></En>} />
        <Route path="/en/auditoria-tecnica" element={<En><AuditoriaTecnicaSeoPage /></En>} />
        <Route path="/en/seo-hibrido" element={<En><ServicioSeoHibridoPage /></En>} />
        <Route path="/en/seo-consultoria" element={<En><SeoConsultoriaAplicadaPage /></En>} />
        <Route path="/en/seo-analytics" element={<En><SeoAnalyticsPage /></En>} />
        <Route path="/en/blog" element={<Navigate to="/blog" replace />} />
        <Route path="/en/privacidad" element={<En><PrivacyPolicyPage /></En>} />
        <Route path="/en/cookies" element={<En><CookiesPolicyPage /></En>} />

        {/* Cluster GEO — old EN root URLs redirect to Spanish /blog/* */}
        <Route path="/en/cuanto-cuesta-geo" element={<Navigate to="/blog/cuanto-cuesta-geo" replace />} />
        <Route path="/en/por-que-no-aparezco-en-chatgpt" element={<Navigate to="/blog/por-que-no-aparezco-en-chatgpt" replace />} />
        <Route path="/en/seo-vs-geo-vs-aeo" element={<Navigate to="/blog/seo-vs-geo-vs-aeo" replace />} />

        {/* Blog posts — redirect /en/blog/* to Spanish equivalents */}
        <Route path="/en/blog/como-funciona-el-algoritmo-pagerank-de-google" element={<Navigate to="/blog/como-funciona-el-algoritmo-pagerank-de-google" replace />} />
        <Route path="/en/blog/agencia-seo-internacional-rankagile" element={<Navigate to="/blog/agencia-seo-internacional-rankagile" replace />} />
        <Route path="/en/blog/branding-digital" element={<Navigate to="/blog/branding-digital" replace />} />
        <Route path="/en/blog/zero-click-search" element={<Navigate to="/blog/zero-click-search" replace />} />
        <Route path="/en/blog/geo" element={<Navigate to="/blog/geo" replace />} />
        <Route path="/en/blog/seo-para-empresas" element={<Navigate to="/blog/seo-para-empresas" replace />} />
        <Route path="/en/blog/seo-que-es-y-para-que-sirve" element={<Navigate to="/blog/seo-que-es-y-para-que-sirve" replace />} />
        <Route path="/en/blog/seo-y-sem-en-marketing-digital" element={<Navigate to="/blog/seo-y-sem-en-marketing-digital" replace />} />
        <Route path="/en/blog/dashboard-seo-en-power-bi-para-agencias" element={<Navigate to="/blog/dashboard-seo-en-power-bi-para-agencias" replace />} />
        <Route path="/en/blog/cuanto-cuesta-geo" element={<Navigate to="/blog/cuanto-cuesta-geo" replace />} />
        <Route path="/en/blog/por-que-no-aparezco-en-chatgpt" element={<Navigate to="/blog/por-que-no-aparezco-en-chatgpt" replace />} />
        <Route path="/en/blog/seo-vs-geo-vs-aeo" element={<Navigate to="/blog/seo-vs-geo-vs-aeo" replace />} />
        <Route path="/en/blog/seo-tecnico-que-es" element={<Navigate to="/blog/seo-tecnico-que-es" replace />} />
        <Route path="/en/blog/que-es-on-page-seo" element={<Navigate to="/blog/que-es-on-page-seo" replace />} />
        <Route path="/en/blog/que-es-link-building" element={<Navigate to="/blog/que-es-link-building" replace />} />
        <Route path="/en/blog/que-es-eeat-google" element={<Navigate to="/blog/que-es-eeat-google" replace />} />
        <Route path="/en/blog/como-aparecer-en-motores-de-ia" element={<Navigate to="/blog/como-aparecer-en-motores-de-ia" replace />} />
        <Route path="/en/blog/citabilidad-llms-como-medirla" element={<Navigate to="/blog/citabilidad-llms-como-medirla" replace />} />
        <Route path="/en/blog/knowledge-panel-google-como-conseguirlo" element={<Navigate to="/blog/knowledge-panel-google-como-conseguirlo" replace />} />
        <Route path="/en/blog/wikipedia-wikidata-marcas" element={<Navigate to="/blog/wikipedia-wikidata-marcas" replace />} />
        <Route path="/en/blog/schema-markup-para-geo" element={<Navigate to="/blog/schema-markup-para-geo" replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
