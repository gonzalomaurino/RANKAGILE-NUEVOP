import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import SeoCompletoGeoContextSection from '../components/sections/SeoCompletoGeoContextSection.jsx';
import SeoCompletoGeoBenefitsSection from '../components/sections/SeoCompletoGeoBenefitsSection.jsx';
import SeoCompletoGeoMethodologySection from '../components/sections/SeoCompletoGeoMethodologySection.jsx';
import SeoCompletoGeoTimelineSection from '../components/sections/SeoCompletoGeoTimelineSection.jsx';
import SeoCompletoGeoFaqSection from '../components/sections/SeoCompletoGeoFaqSection.jsx';
import SeoCompletoGeoCtaSection from '../components/sections/SeoCompletoGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function ServicioSeoCompletoPage() {
  useDocumentMeta({
    title: 'SEO Completo para Empresas: Técnico, Contenido y GEO | RankAgile',
    description:
      'Servicio SEO integral: auditoría técnica, estrategia de contenidos, link building y visibilidad en IA. Resultados medibles en 3–6 meses.',
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">SEO Completo · RankAgile</span>
            <h1 className="display geo-title">
              Servicio <span className="grad">SEO Completo</span> para escalar tu visibilidad organica
            </h1>
            <p className="geo-page-p">
              Estrategia integral diseñada para escalar tu visibilidad orgánica.
              Gestionamos contenido, técnica y autoridad para que tu marca lidere
              los resultados de búsqueda hoy mismo.
            </p>
            <ul className="geo-page-list">
              <li>Auditoría técnica profunda.</li>
              <li>Keyword research estratégico.</li>
              <li>Optimización on-page continua.</li>
              <li>Link building de autoridad.</li>
              <li>Monitoreo y reporting avanzado.</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href="/contacto/">Hablar con un especialista</a>
            </div>
          </div>
        </section>
        <SeoCompletoGeoMethodologySection />
        <SeoCompletoGeoContextSection />
        <SeoCompletoGeoTimelineSection />
        <SeoCompletoGeoBenefitsSection />
        <SeoCompletoGeoFaqSection />
        <SeoCompletoGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
