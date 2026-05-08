import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import AuditoriaGeoIncludesSection from '../components/sections/AuditoriaGeoIncludesSection.jsx';
import AuditoriaGeoProcessSection from '../components/sections/AuditoriaGeoProcessSection.jsx';
import AuditoriaGeoDifferenceSection from '../components/sections/AuditoriaGeoDifferenceSection.jsx';
import AuditoriaGeoAudienceSection from '../components/sections/AuditoriaGeoAudienceSection.jsx';
import AuditoriaGeoFaqSection from '../components/sections/AuditoriaGeoFaqSection.jsx';
import AuditoriaGeoCtaSection from '../components/sections/AuditoriaGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function AuditoriaTecnicaSeoPage() {
  useDocumentMeta({
    title: 'Auditoría Técnica SEO | RankAgile',
    description:
      'Auditoría técnica SEO para detectar errores, mejorar la indexación y optimizar el rendimiento de tu web en Google.',
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">Auditoria Tecnica · RankAgile</span>
            <h1 className="display geo-title">Auditoria Tecnica Profesional</h1>
            <p className="geo-page-p">
              Analisis profundo de arquitectura, indexacion y Core Web Vitals.
              Optimizamos la base tecnica de tu sitio para garantizar un rastreo
              eficiente y carga ultra rapida.
            </p>
            <ul className="geo-page-list">
              <li>Analisis de arquitectura web</li>
              <li>Core Web Vitals y performance</li>
              <li>Indexacion y crawlability</li>
              <li>Schema markup y datos estructurados</li>
              <li>Roadmap tecnico priorizado</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href="/contacto/">Hablar con un especialista</a>
            </div>
          </div>
        </section>
        <AuditoriaGeoIncludesSection />
        <AuditoriaGeoProcessSection />
        <AuditoriaGeoDifferenceSection />
        <AuditoriaGeoAudienceSection />
        <AuditoriaGeoFaqSection />
        <AuditoriaGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
