import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ClaudeHomePage from './pages/rankagile-app.jsx';
import QuienesSomosPage from './pages/QuienesSomosPage.jsx';
import ClaudeContactoPage from './pages/ClaudeContactoPage.jsx';
import GeoPage from './pages/GeoPage.jsx';
import ServiciosSeoPage from './pages/ServiciosSeoPage.jsx';
import ServicioSeoCompletoPage from './pages/ServicioSeoCompletoPage.jsx';
import AuditoriaTecnicaSeoPage from './pages/AuditoriaTecnicaSeoPage.jsx';
import ServicioSeoHibridoPage from './pages/ServicioSeoHibridoPage.jsx';
import SeoConsultoriaAplicadaPage from './pages/SeoConsultoriaAplicadaPage.jsx';
import SeoAnalyticsPage from './pages/SeoAnalyticsPage.jsx';
import ClaudeAnalisisPage from './pages/ClaudeAnalisisPage.jsx';
import BlogsPage from './pages/BlogsPage.jsx';
import BrandingDigitalPage from './pages/BrandingDigitalPage.jsx';
import ZeroClickSearchPage from './pages/ZeroClickSearchPage.jsx';
import PageRankFuncionaPage from './pages/PageRankFuncionaPage.jsx';
import CuantoCuestaGeoPage from './pages/CuantoCuestaGeoPage.jsx';
import PorQueNoAparezcoEnChatgptPage from './pages/PorQueNoAparezcoEnChatgptPage.jsx';
import SeoVsGeoVsAeoPage from './pages/SeoVsGeoVsAeoPage.jsx';
import AgenciaSeoInternacionalPage from './pages/AgenciaSeoInternacionalPage.jsx';
import SeoParaEmpresasPage from './pages/SeoParaEmpresasPage.jsx';
import CookiesPolicyPage from './pages/CookiesPolicyPage.jsx';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.jsx';
import DashboardPowerBiPage from './pages/DashboardPowerBiPage.jsx';
import QueEsSeoPage from './pages/QueEsSeoPage.jsx';
import SeoYSemPage from './pages/SeoYSemPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import PreviewPages from './pages/PreviewPages.jsx';
import NewQuienesSomosPage from './pages-new/QuienesSomosPage.jsx';
import NewGeoPage from './pages-new/GeoPage.jsx';
import NewServicioSeoCompletoPage from './pages-new/ServicioSeoCompletoPage.jsx';
import NewAuditoriaTecnicaSeoPage from './pages-new/AuditoriaTecnicaSeoPage.jsx';
import NewServicioSeoHibridoPage from './pages-new/ServicioSeoHibridoPage.jsx';
import NewSeoConsultoriaAplicadaPage from './pages-new/SeoConsultoriaAplicadaPage.jsx';
import NewSeoAnalyticsPage from './pages-new/SeoAnalyticsPage.jsx';
import NewBlogsPage from './pages-new/BlogsPage.jsx';
import NewPrivacyPolicyPage from './pages-new/PrivacyPolicyPage.jsx';
import NewCookiesPolicyPage from './pages-new/CookiesPolicyPage.jsx';

function AppShell() {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Routes>
        <Route path="/quienes-somos" element={<QuienesSomosPage />} />
        <Route path="/quienes-somos/" element={<QuienesSomosPage />} />
        <Route path="/geo-generative-engine-optimization" element={<GeoPage />} />
        <Route path="/geo-generative-engine-optimization/" element={<GeoPage />} />
        <Route path="/geo" element={<GeoPage />} />
        <Route path="/geo/" element={<GeoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web" element={<ServiciosSeoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/" element={<ServiciosSeoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/servicio-seo-completo" element={<ServicioSeoCompletoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/servicio-seo-completo/" element={<ServicioSeoCompletoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/auditoria-tecnica-seo" element={<AuditoriaTecnicaSeoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/auditoria-tecnica-seo/" element={<AuditoriaTecnicaSeoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/servicio-seo-hibrido" element={<ServicioSeoHibridoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/servicio-seo-hibrido/" element={<ServicioSeoHibridoPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/seo-consultoria-aplicada" element={<SeoConsultoriaAplicadaPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/seo-consultoria-aplicada/" element={<SeoConsultoriaAplicadaPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/seo-analytics" element={<SeoAnalyticsPage />} />
        <Route path="/servicios-seo-para-posicionamiento-web/seo-analytics/" element={<SeoAnalyticsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/" element={<BlogsPage />} />
        <Route path="/branding-digital" element={<BrandingDigitalPage />} />
        <Route path="/branding-digital/" element={<BrandingDigitalPage />} />
        <Route path="/zero-click-search" element={<ZeroClickSearchPage />} />
        <Route path="/zero-click-search/" element={<ZeroClickSearchPage />} />
        <Route path="/como-funciona-el-algoritmo-pagerank-de-google" element={<PageRankFuncionaPage />} />
        <Route path="/como-funciona-el-algoritmo-pagerank-de-google/" element={<PageRankFuncionaPage />} />
        <Route path="/como-es-el-algoritmo-pagerank-de-google" element={<PageRankFuncionaPage />} />
        <Route path="/como-es-el-algoritmo-pagerank-de-google/" element={<PageRankFuncionaPage />} />
        <Route path="/cuanto-cuesta-geo" element={<CuantoCuestaGeoPage />} />
        <Route path="/cuanto-cuesta-geo/" element={<CuantoCuestaGeoPage />} />
        <Route path="/por-que-no-aparezco-en-chatgpt" element={<PorQueNoAparezcoEnChatgptPage />} />
        <Route path="/por-que-no-aparezco-en-chatgpt/" element={<PorQueNoAparezcoEnChatgptPage />} />
        <Route path="/seo-vs-geo-vs-aeo" element={<SeoVsGeoVsAeoPage />} />
        <Route path="/seo-vs-geo-vs-aeo/" element={<SeoVsGeoVsAeoPage />} />
        <Route path="/agencia-seo-internacional-rankagile" element={<AgenciaSeoInternacionalPage />} />
        <Route path="/agencia-seo-internacional-rankagile/" element={<AgenciaSeoInternacionalPage />} />
        <Route path="/seo-para-empresas" element={<SeoParaEmpresasPage />} />
        <Route path="/seo-para-empresas/" element={<SeoParaEmpresasPage />} />
        <Route path="/politica-de-cookies" element={<CookiesPolicyPage />} />
        <Route path="/politica-de-cookies/" element={<CookiesPolicyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy/" element={<PrivacyPolicyPage />} />
        <Route path="/dashboard-seo-en-power-bi-para-agencias" element={<DashboardPowerBiPage />} />
        <Route path="/dashboard-seo-en-power-bi-para-agencias/" element={<DashboardPowerBiPage />} />
        <Route path="/seo-que-es-y-para-que-sirve" element={<QueEsSeoPage />} />
        <Route path="/seo-que-es-y-para-que-sirve/" element={<QueEsSeoPage />} />
        <Route path="/seo-y-sem-en-marketing-digital" element={<SeoYSemPage />} />
        <Route path="/seo-y-sem-en-marketing-digital/" element={<SeoYSemPage />} />

        {/* Redirects legacy WordPress → /blogs */}
        <Route path="/category" element={<Navigate to="/blogs" replace />} />
        <Route path="/category/*" element={<Navigate to="/blogs" replace />} />
        <Route path="/author" element={<Navigate to="/blogs" replace />} />
        <Route path="/author/*" element={<Navigate to="/blogs" replace />} />
        <Route path="/page" element={<Navigate to="/blogs" replace />} />
        <Route path="/page/*" element={<Navigate to="/blogs" replace />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClaudeHomePage />} />
        <Route path="/contacto" element={<ClaudeContactoPage />} />
        <Route path="/contacto/" element={<ClaudeContactoPage />} />
        <Route path="/analisis-seo-gratuito" element={<ClaudeAnalisisPage />} />
        <Route path="/analisis-seo-gratuito/" element={<ClaudeAnalisisPage />} />
        <Route path="/preview" element={<PreviewPages />} />
        <Route path="/preview/quienes-somos" element={<NewQuienesSomosPage />} />
        <Route path="/preview/geo" element={<NewGeoPage />} />
        <Route path="/preview/seo-completo" element={<NewServicioSeoCompletoPage />} />
        <Route path="/preview/auditoria-tecnica" element={<NewAuditoriaTecnicaSeoPage />} />
        <Route path="/preview/seo-hibrido" element={<NewServicioSeoHibridoPage />} />
        <Route path="/preview/seo-consultoria" element={<NewSeoConsultoriaAplicadaPage />} />
        <Route path="/preview/seo-analytics" element={<NewSeoAnalyticsPage />} />
        <Route path="/preview/blogs" element={<NewBlogsPage />} />
        <Route path="/preview/privacidad" element={<NewPrivacyPolicyPage />} />
        <Route path="/preview/cookies" element={<NewCookiesPolicyPage />} />
        <Route path="*" element={<AppShell />} />
      </Routes>
    </BrowserRouter>
  );
}
