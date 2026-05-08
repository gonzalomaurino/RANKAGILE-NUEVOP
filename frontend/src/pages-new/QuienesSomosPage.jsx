import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import GeoCtaFinalSection from '../components/sections/GeoCtaFinalSection.jsx';
import '../styles/claude-system.css';
import '../styles/claude-home.css';
import '../styles/claude-about.css';

export default function QuienesSomosPage() {
    useDocumentMeta({
        title: 'Quienes somos | RankAgile',
        description:
            'En RankAgile somos especialistas en SEO y crecimiento digital. Ayudamos a empresas a posicionarse en Google y ChatGPT.',
    });

    return (
        <>
            <ClaudeNavbar />

            <header className="hero" id="top">
                <div className="aurora"></div>
                <div className="hero-grid"></div>
                <div className="hero-inner">
                    <span className="eyebrow centered">Conoce el equipo</span>
                    <h1 className="display about-display">
                        Quienes somos en <span className="grad">RankAgile</span>
                    </h1>
                    <p className="hero-sub">
                        <strong>RankAgile</strong> es una empresa en crecimiento especializada
                        en productos digitales de nicho, con enfoque internacional y un
                        equipo de profesionales. Desarrollamos estrategias orientadas al
                        posicionamiento en buscadores y en entornos de inteligencia
                        artificial, combinando analisis, tecnologia y ejecucion para escalar
                        marcas en mercados competitivos.
                    </p>
                    <div className="hero-cta">
                        <a className="btn-pill" href="/contacto/">Trabajemos juntos</a>
                    </div>
                </div>
            </header>

            <section className="block about-block">
                <div className="section-head">
                    <span className="eyebrow">mision y vision</span>
                    <h2 className="display about-display-tight">Lo que guia nuestro trabajo</h2>
                    <p className="lead">
                        Somos un equipo enfocado en resultados medibles y en construir presencia
                        de marca en buscadores y motores generativos.
                    </p>
                </div>

                <div className="services-grid">
                    <div className="svc-card">
                        <div>
                            <div className="svc-card-num">01 / mision</div>
                            <h4>Mision</h4>
                            <p>
                                Ayudar a marcas y proyectos digitales a posicionarse, crecer en
                                buscadores y entornos de inteligencia artificial, mediante
                                estrategias agiles y desarrolladas por un equipo profesional con
                                enfoque internacional.
                            </p>
                        </div>
                        <span className="svc-card-arrow">IMPACTO REAL</span>
                    </div>
                    <div className="svc-card">
                        <div>
                            <div className="svc-card-num">02 / vision</div>
                            <h4>Vision</h4>
                            <p>
                                Ser una referencia global en posicionamiento digital orientado a
                                inteligencia artificial, liderando la evolucion del SEO tradicional
                                hacia nuevos modelos de busqueda y descubrimiento de contenido.
                            </p>
                        </div>
                        <span className="svc-card-arrow">LARGO PLAZO</span>
                    </div>
                </div>
            </section>

            <section className="block about-block">
                <div className="section-head">
                    <span className="eyebrow">presentacion</span>
                    <h2 className="display about-display-tight">Conoce como trabajamos</h2>
                    <p className="lead">
                        Un vistazo rapido a nuestro enfoque y a la forma en que construimos
                        estrategias de crecimiento sostenibles.
                    </p>
                </div>

                <div className="vignette">
                    <div className="vignette-left">
                        <span className="eyebrow">video</span>
                        <h3>Nuestra vision en 2 minutos</h3>
                        <p>
                            Conoce al equipo, nuestro enfoque internacional y la metodologia que
                            aplicamos para mejorar visibilidad organica y presencia en LLMs.
                        </p>
                        <a className="btn-ghost" href="/contacto/">Hablemos de tu proyecto</a>
                    </div>
                    <div className="vignette-right about-vignette-media">
                        <iframe
                            className="about-video-frame"
                            src="https://www.youtube.com/embed/x0ct7avdZwM"
                            title="Video de Presentacion RankAgile"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>
            </section>

            <GeoCtaFinalSection />

            <Footer />
        </>
    );
}
