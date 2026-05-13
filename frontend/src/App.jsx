import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useGTMPageTracking } from './hooks/useGTMPageTracking';

import ClaudeHomePage from './pages/rankagile-app.jsx';
import ClaudeContactoPage from './pages/ClaudeContactoPage.jsx';
import ClaudeAnalisisPage from './pages/ClaudeAnalisisPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Service / landing pages (pages-new)
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

// Blog posts (using BlogPostLayout)
import PageRankFuncionaPage from './pages/PageRankFuncionaPage.jsx';
import AgenciaSeoInternacionalPage from './pages/AgenciaSeoInternacionalPage.jsx';
import BrandingDigitalPage from './pages/BrandingDigitalPage.jsx';
import ZeroClickSearchPage from './pages/ZeroClickSearchPage.jsx';
import GeoBlogPage from './pages/GeoPage.jsx';
import SeoParaEmpresasPage from './pages/SeoParaEmpresasPage.jsx';

// Cluster GEO — páginas migradas desde SEO archive
import CuantoCuestaGeoPage from './pages/CuantoCuestaGeoPage.jsx';
import PorQueNoAparezcoEnChatGPTPage from './pages/PorQueNoAparezcoEnChatGPTPage.jsx';
import SeoVsGeoVsAeoPage from './pages/SeoVsGeoVsAeoPage.jsx';

// Cluster SEO — páginas migradas desde SEO archive
import QueEsSeoPage from './pages/QueEsSeoPage.jsx';
import SeoYSemPage from './pages/SeoYSemPage.jsx';
import DashboardPowerBiPage from './pages/DashboardPowerBiPage.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/** Registra cada cambio de ruta como page_view en GTM/GA4. No renderiza nada. */
function GTMPageTracker() {
  useGTMPageTracking();
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <GTMPageTracker />
      <Routes>
        {/* Core */}
        <Route path="/" element={<ClaudeHomePage />} />
        <Route path="/contacto" element={<ClaudeContactoPage />} />
        <Route path="/contacto/" element={<ClaudeContactoPage />} />
        <Route path="/analisis-seo-gratuito" element={<ClaudeAnalisisPage />} />
        <Route path="/analisis-seo-gratuito/" element={<ClaudeAnalisisPage />} />

        {/* Service / landing pages */}
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
        <Route path="/servicios/geo" element={<GeoPage />} />
        <Route path="/seo-completo" element={<ServicioSeoCompletoPage />} />
        <Route path="/auditoria-tecnica" element={<AuditoriaTecnicaSeoPage />} />
        <Route path="/seo-hibrido" element={<ServicioSeoHibridoPage />} />
        <Route path="/seo-consultoria" element={<SeoConsultoriaAplicadaPage />} />
        <Route path="/seo-analytics" element={<SeoAnalyticsPage />} />
        <Route path="/blog" element={<BlogsPage />} />
        <Route path="/privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/cookies" element={<CookiesPolicyPage />} />

        {/* Redirects 301 desde URLs viejas con /preview/ */}
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

        {/* Cluster GEO */}
        <Route path="/cuanto-cuesta-geo" element={<CuantoCuestaGeoPage />} />
        <Route path="/por-que-no-aparezco-en-chatgpt" element={<PorQueNoAparezcoEnChatGPTPage />} />
        <Route path="/seo-vs-geo-vs-aeo" element={<SeoVsGeoVsAeoPage />} />

        {/* Redirect legacy: /agencia-geo → /servicios/geo */}
        <Route path="/agencia-geo" element={<Navigate to="/servicios/geo" replace />} />
        <Route path="/agencia-geo/" element={<Navigate to="/servicios/geo" replace />} />

        {/* Blog posts — canonical URLs under /blog/ */}
        <Route path="/blog/como-funciona-el-algoritmo-pagerank-de-google" element={<PageRankFuncionaPage />} />
        <Route path="/blog/agencia-seo-internacional-rankagile" element={<AgenciaSeoInternacionalPage />} />
        <Route path="/blog/branding-digital" element={<BrandingDigitalPage />} />
        <Route path="/blog/zero-click-search" element={<ZeroClickSearchPage />} />
        <Route path="/blog/geo" element={<GeoBlogPage />} />
        <Route path="/blog/seo-para-empresas" element={<SeoParaEmpresasPage />} />
        <Route path="/blog/seo-que-es-y-para-que-sirve" element={<QueEsSeoPage />} />
        <Route path="/blog/seo-y-sem-en-marketing-digital" element={<SeoYSemPage />} />
        <Route path="/blog/dashboard-seo-en-power-bi-para-agencias" element={<DashboardPowerBiPage />} />

        {/* Redirects desde URLs antiguas de blog sin prefijo /blog/ */}
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

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
