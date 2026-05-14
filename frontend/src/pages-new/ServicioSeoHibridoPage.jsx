import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import SeoHibridoGeoMethodologySection from '../components/sections/SeoHibridoGeoMethodologySection.jsx';
import SeoHibridoGeoContextSection from '../components/sections/SeoHibridoGeoContextSection.jsx';
import SeoHibridoGeoTimelineSection from '../components/sections/SeoHibridoGeoTimelineSection.jsx';
import SeoHibridoGeoFeaturesSection from '../components/sections/SeoHibridoGeoFeaturesSection.jsx';
import SeoHibridoGeoFaqSection from '../components/sections/SeoHibridoGeoFaqSection.jsx';
import SeoHibridoGeoCtaSection from '../components/sections/SeoHibridoGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function ServicioSeoHibridoPage() {
  useDocumentMeta({
    title: 'SEO Híbrido: Google + Visibilidad en IA | RankAgile',
    description:
      'Combina posicionamiento en Google con presencia en ChatGPT, Gemini y Perplexity. La estrategia SEO+GEO que prepara tu marca para el presente digital.',
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">El Futuro de la Búsqueda</span>
            <h1 className="display geo-title">
              SEO <span className="grad">Híbrido</span> (Google + IA)
            </h1>
            <p className="geo-page-p">
              Optimización avanzada para dominar Google y motores de IA.
              Fusionamos semántica, datos estructurados y visibilidad en entornos
              generativos para el futuro digital.
            </p>
            <ul className="geo-page-list">
              <li>Optimización para ChatGPT, Perplexity, Gemini</li>
              <li>Schema markup avanzado y Knowledge Graph</li>
              <li>Estrategia de contenido semántico</li>
              <li>Entity SEO y contextualización</li>
              <li>Visibilidad en respuestas generativas</li>
            </ul>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href="/contacto/">Hablar con un especialista</a>
            </div>
          </div>
        </section>
        <SeoHibridoGeoMethodologySection />
        <SeoHibridoGeoContextSection />
        <SeoHibridoGeoTimelineSection />
        <SeoHibridoGeoFeaturesSection />
        <SeoHibridoGeoFaqSection />
        <SeoHibridoGeoCtaSection />
      </main>
      <Footer />
    </>
  );
}
