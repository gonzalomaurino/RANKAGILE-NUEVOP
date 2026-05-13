import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
        <Route path="/preview/quienes-somos" element={<QuienesSomosPage />} />
        <Route path="/preview/geo" element={<GeoPage />} />
        <Route path="/preview/seo-completo" element={<ServicioSeoCompletoPage />} />
        <Route path="/preview/auditoria-tecnica" element={<AuditoriaTecnicaSeoPage />} />
        <Route path="/preview/seo-hibrido" element={<ServicioSeoHibridoPage />} />
        <Route path="/preview/seo-consultoria" element={<SeoConsultoriaAplicadaPage />} />
        <Route path="/preview/seo-analytics" element={<SeoAnalyticsPage />} />
        <Route path="/preview/blogs" element={<BlogsPage />} />
        <Route path="/preview/privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/preview/cookies" element={<CookiesPolicyPage />} />

        {/* Blog posts */}
        <Route path="/como-funciona-el-algoritmo-pagerank-de-google" element={<PageRankFuncionaPage />} />
        <Route path="/como-funciona-el-algoritmo-pagerank-de-google/" element={<PageRankFuncionaPage />} />
        <Route path="/agencia-seo-internacional-rankagile" element={<AgenciaSeoInternacionalPage />} />
        <Route path="/agencia-seo-internacional-rankagile/" element={<AgenciaSeoInternacionalPage />} />
        <Route path="/branding-digital" element={<BrandingDigitalPage />} />
        <Route path="/branding-digital/" element={<BrandingDigitalPage />} />
        <Route path="/zero-click-search" element={<ZeroClickSearchPage />} />
        <Route path="/zero-click-search/" element={<ZeroClickSearchPage />} />
        <Route path="/geo" element={<GeoBlogPage />} />
        <Route path="/geo/" element={<GeoBlogPage />} />
        <Route path="/seo-para-empresas" element={<SeoParaEmpresasPage />} />
        <Route path="/seo-para-empresas/" element={<SeoParaEmpresasPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
