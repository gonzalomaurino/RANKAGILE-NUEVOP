import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import ClaudeFooter from '../components/ClaudeFooter.jsx';
import GeoDefinitionSection from '../components/sections/GeoDefinitionSection.jsx';
import GeoContextSection from '../components/sections/GeoContextSection.jsx';
import GeoComparisonSection from '../components/sections/GeoComparisonSection.jsx';
import GeoBenefitsSection from '../components/sections/GeoBenefitsSection.jsx';
import GeoMethodologySection from '../components/sections/GeoMethodologySection.jsx';
import GeoFaqSection from '../components/sections/GeoFaqSection.jsx';
import GeoRelatedSection from '../components/sections/GeoRelatedSection.jsx';
import GeoCtaFinalSection from '../components/sections/GeoCtaFinalSection.jsx';
import ClaudeContactSection from '../components/sections/ClaudeContactSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function GeoPage() {
  useDocumentMeta({
    title: 'GEO: Generative Engine Optimization para Empresas | RankAgile',
    description:
      'GEO (Generative Engine Optimization) es la estrategia que posiciona tu empresa en ChatGPT, Gemini y Perplexity. Descubrí la metodología RankAgile y empezá a existir donde tus clientes ya buscan.',
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="geo-page">
        <section className="geo-page-section geo-intro">
          <span className="geo-page-eyebrow">GEO · RankAgile</span>
          <h1 className="display geo-title">
            <span className="grad">GEO</span>: La Nueva Disciplina que Decide si tu Empresa Existe en la IA
          </h1>
          <p className="geo-lead">
            GEO posiciona tu marca dentro de respuestas generativas y evita que
            competidores capturen la conversacion antes del primer contacto.
          </p>
          <p className="geo-page-p">
            GEO — Generative Engine Optimization — es el conjunto de estrategias
            tecnicas y de contenido que posiciona tu marca dentro de las
            respuestas generadas por motores de IA. No es el futuro del SEO.
            <span className="accent"> Es el presente.</span>
          </p>
          <ul className="vignette-bullets">
            <li>Visibilidad directa en respuestas de IA, no solo enlaces.</li>
            <li>Autoridad semantica y citaciones en fuentes clave.</li>
            <li>Arquitectura de datos que impulsa SEO, AEO y LLMO.</li>
          </ul>
          <div style={{ marginTop: 24 }}>
            <a className="geo-page-btn" href="/contacto/">Quiero posicionar en la IA</a>
          </div>
        </section>
        <GeoDefinitionSection />
        <GeoContextSection />
        <GeoComparisonSection />
        <GeoBenefitsSection />
        <GeoMethodologySection />
        <GeoFaqSection />
        <GeoRelatedSection />
        <ClaudeContactSection />
        <GeoCtaFinalSection />
      </main>
      <ClaudeFooter />
    </>
  );
}
