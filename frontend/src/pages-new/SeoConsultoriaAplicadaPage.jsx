import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import ConsultoriaGeoMethodologySection from '../components/sections/ConsultoriaGeoMethodologySection.jsx';
import ConsultoriaGeoContextSection from '../components/sections/ConsultoriaGeoContextSection.jsx';
import ConsultoriaGeoTimelineSection from '../components/sections/ConsultoriaGeoTimelineSection.jsx';
import ConsultoriaGeoFeaturesSection from '../components/sections/ConsultoriaGeoFeaturesSection.jsx';
import ConsultoriaGeoFaqSection from '../components/sections/ConsultoriaGeoFaqSection.jsx';
import ConsultoriaGeoCtaSection from '../components/sections/ConsultoriaGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function SeoConsultoriaAplicadaPage() {
    useDocumentMeta({
        title: 'Consultoría SEO Aplicada | RankAgile',
        description:
            'Consultoría SEO aplicada para mejorar tu posicionamiento con estrategias prácticas, análisis experto y acompañamiento enfocado en resultados.',
    });

    return (
        <>
            <ClaudeNavbar />
            <main className="geo-page">
                <section className="geo-page-section geo-intro">
                    <div className="aurora" />
                    <div className="geo-intro-content">
                        <span className="geo-page-eyebrow">Estrategia Direccionada · RankAgile</span>
                        <h1 className="display geo-title">
                            SEO <span className="grad">Consultoría</span> Aplicada
                        </h1>
                        <p className="geo-page-p">
                            Asesoría estratégica personalizada para resolver desafíos complejos.
                            Guiamos a tu equipo en la toma de decisiones críticas para maximizar
                            el rendimiento orgánico.
                        </p>
                        <ul className="geo-page-list">
                            <li>Diagnóstico estratégico inicial</li>
                            <li>Roadmap SEO personalizado</li>
                            <li>Sesiones mensuales de consultoría</li>
                            <li>Revisión y validación técnica</li>
                            <li>Capacitación de equipos internos</li>
                        </ul>
                        <div style={{ marginTop: 24 }}>
                            <a className="geo-page-btn" href="/contacto/">Agenda una sesión de diagnóstico</a>
                        </div>
                    </div>
                </section>
                <ConsultoriaGeoMethodologySection />
                <ConsultoriaGeoContextSection />
                <ConsultoriaGeoTimelineSection />
                <ConsultoriaGeoFeaturesSection />
                <ConsultoriaGeoFaqSection />
                <ConsultoriaGeoCtaSection />
            </main>
            <Footer />
        </>
    );
}
