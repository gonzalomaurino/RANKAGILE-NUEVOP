import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import AnalyticsGeoFeaturesSection from '../components/sections/AnalyticsGeoFeaturesSection.jsx';
import AnalyticsGeoMetricsSection from '../components/sections/AnalyticsGeoMetricsSection.jsx';
import AnalyticsGeoContextSection from '../components/sections/AnalyticsGeoContextSection.jsx';
import AnalyticsGeoFaqSection from '../components/sections/AnalyticsGeoFaqSection.jsx';
import AnalyticsGeoCtaSection from '../components/sections/AnalyticsGeoCtaSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-geo.css';

export default function SeoAnalyticsPage() {
    useDocumentMeta({
        title: 'SEO Analytics | RankAgile',
        description:
            'SEO analytics para analizar datos, medir resultados y optimizar tu estrategia SEO con decisiones basadas en información real.',
    });

    return (
        <>
            <ClaudeNavbar />
            <main className="geo-page">
                <section className="geo-page-section geo-intro">
                    <div className="aurora" />
                    <div className="geo-intro-content">
                        <span className="geo-page-eyebrow">Inteligencia de Datos · RankAgile</span>
                        <h1 className="display geo-title">
                            Dashboard SEO <span className="grad">Analytics</span>
                        </h1>
                        <p className="geo-page-p">
                            Visualización de métricas clave en tiempo real. Transformamos datos
                            complejos en decisiones estratégicas claras para medir tu retorno de
                            inversión real.
                        </p>
                        <ul className="geo-page-list">
                            <li>Todas tus métricas SEO en un solo lugar</li>
                            <li>Tráfico cualificado y revenue atribuido a SEO</li>
                            <li>Análisis predictivo y forecasting</li>
                            <li>Alertas inteligentes ante cambios críticos</li>
                            <li>Reportes automáticos white-label</li>
                        </ul>
                        <div style={{ marginTop: 24 }}>
                            <a className="geo-page-btn" href="/contacto/">Agenda tu demo personalizada</a>
                        </div>
                    </div>
                </section>
                <AnalyticsGeoFeaturesSection />
                <AnalyticsGeoMetricsSection />
                <AnalyticsGeoContextSection />
                <AnalyticsGeoFaqSection />
                <AnalyticsGeoCtaSection />
            </main>
            <Footer />
        </>
    );
}
