import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import GeoDefinitionSection from '../components/sections/GeoDefinitionSection.jsx';
import GeoContextSection from '../components/sections/GeoContextSection.jsx';
import GeoComparisonSection from '../components/sections/GeoComparisonSection.jsx';
import GeoBenefitsSection from '../components/sections/GeoBenefitsSection.jsx';
import GeoMethodologySection from '../components/sections/GeoMethodologySection.jsx';
import GeoFaqSection from '../components/sections/GeoFaqSection.jsx';
import GeoRelatedSection from '../components/sections/GeoRelatedSection.jsx';
import GeoCtaFinalSection from '../components/sections/GeoCtaFinalSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function GeoPage() {
  useDocumentMeta({
    title: 'GEO (AI Search Optimization) para Empresas | RankAgile',
    description:
      'Posicionamos tu marca dentro de las respuestas de ChatGPT, Gemini y Perplexity con GEO — la estrategia de AI Search Optimization que lidera RankAgile.',
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <div className="aurora" />
          <div className="geo-intro-content">
            <span className="geo-page-eyebrow">GEO · RankAgile</span>
            <h1 className="display geo-title">
              <span className="grad">GEO</span>: La Nueva Disciplina que Decide si tu Empresa Existe en la IA
            </h1>
            <p className="geo-page-p">
              GEO — Generative Engine Optimization — es el conjunto de estrategias
              tecnicas y de contenido que posiciona tu marca dentro de las
              respuestas generadas por motores de IA. No es el futuro del SEO.
              <span className="accent"> Es el presente.</span>
            </p>
            <div style={{ marginTop: 24 }}>
              <a className="geo-page-btn" href="/contacto/">Quiero posicionar en la IA</a>
            </div>
          </div>
        </section>
        <GeoDefinitionSection />
        <GeoContextSection />
        <GeoComparisonSection />
        <GeoBenefitsSection />
        <GeoMethodologySection />
        <GeoFaqSection />
        <GeoRelatedSection />
        <GeoCtaFinalSection />
      </main>
      <Footer />
    </>
  );
}
