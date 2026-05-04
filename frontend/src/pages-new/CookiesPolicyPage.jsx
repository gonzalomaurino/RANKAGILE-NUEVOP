import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import ClaudeFooter from '../components/ClaudeFooter.jsx';
import '../styles/claude-system.css';

const styles = `
  .legal-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 48px 24px 120px;
  }
  .legal-page-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .legal-page-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .legal-page-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.25rem, 4.5vw, 2.8rem);
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 14px;
  }
  .legal-page-meta {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.55);
    margin: 0 0 32px;
  }
  .legal-page-meta strong { color: rgba(255, 255, 255, 0.78); font-weight: 600; }

  .legal-page-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 40px;
  }
  .legal-page-lead strong { color: #FFFFFF; font-weight: 600; }

  .legal-page-section { margin: 0 0 40px; }
  .legal-page-section:last-child { margin-bottom: 0; }

  .legal-page-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.3;
    color: #38FEDA;
    margin: 0 0 18px;
    letter-spacing: -0.005em;
  }

  .legal-page-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 16px;
  }
  .legal-page-p:last-child { margin-bottom: 0; }
  .legal-page-p strong { color: #FFFFFF; font-weight: 600; }
  .legal-page-p a {
    color: #38FEDA;
    text-decoration: none;
    transition: color 150ms ease;
  }
  .legal-page-p a:hover { color: #5affe3; }

  .legal-page-subheading {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #FFFFFF;
    margin: 20px 0 8px;
  }

  .legal-page-list {
    list-style: none;
    padding: 0;
    margin: 0 0 16px;
  }
  .legal-page-list li {
    position: relative;
    padding: 6px 0 6px 24px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
  }
  .legal-page-list li::before {
    content: "";
    position: absolute;
    left: 2px;
    top: 16px;
    width: 6px;
    height: 6px;
    border-radius: 999px;
    background: #38FEDA;
  }

  .legal-page-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.14);
    border: 0;
    margin: 0 0 40px;
  }

  .legal-page-contact-link {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #38FEDA;
    text-decoration: none;
    margin-top: 8px;
    transition: color 150ms ease;
  }
  .legal-page-contact-link:hover { color: #5affe3; }

  @media (max-width: 640px) {
    .legal-page { padding: 32px 16px 88px; }
    .legal-page-h2 { font-size: 20px; }
  }
`;

export default function CookiesPolicyPage() {
    useDocumentMeta({
        title: 'Política de Cookies | RankAgile',
        description:
            'Política de Cookies de RankAgile: qué cookies usamos, para qué, y cómo podés gestionarlas desde tu navegador.',
    });

    return (
        <>
            <ClaudeNavbar />
            <main className="legal-page">
                <style>{styles}</style>
                <article className="legal-page-container">
                    <header>
                        <p className="legal-page-eyebrow">Legales</p>
                        <h1 className="legal-page-h1">Política de Cookies</h1>
                        <p className="legal-page-meta">
                            <strong>Última actualización:</strong> 10 de marzo de 2026
                        </p>
                        <p className="legal-page-lead">
                            En <strong>RankAgile</strong> utilizamos cookies y tecnologías
                            similares para mejorar la experiencia de los usuarios, analizar
                            el tráfico del sitio web y ofrecer contenido personalizado. Esta
                            Política de Cookies explica qué son las cookies, cómo las
                            utilizamos y cómo podés gestionarlas.
                        </p>
                    </header>

                    <hr className="legal-page-divider" />

                    <section className="legal-page-section">
                        <h2 className="legal-page-h2">1. ¿Qué son las cookies?</h2>
                        <p className="legal-page-p">
                            Las cookies son pequeños archivos de texto que se almacenan en tu
                            dispositivo (ordenador, tablet o móvil) cuando visitás un sitio
                            web. Estas permiten que el sitio recuerde información sobre tu
                            visita, como tu idioma preferido o configuraciones, lo que puede
                            facilitar tu próxima visita y hacer que el sitio sea más útil
                            para vos.
                        </p>
                    </section>

                    <section className="legal-page-section">
                        <h2 className="legal-page-h2">2. Tipos de cookies que utilizamos</h2>
                        <p className="legal-page-subheading">Cookies necesarias</p>
                        <p className="legal-page-p">
                            Son esenciales para el funcionamiento del sitio web y no pueden
                            desactivarse en nuestros sistemas. Permiten funciones básicas
                            como la navegación o el acceso a áreas seguras del sitio.
                        </p>
                        <p className="legal-page-subheading">Cookies de análisis o rendimiento</p>
                        <p className="legal-page-p">
                            Nos permiten analizar el comportamiento de los usuarios en el
                            sitio para mejorar su funcionamiento y experiencia.
                        </p>
                        <p className="legal-page-p">Ejemplo de herramientas utilizadas:</p>
                        <ul className="legal-page-list">
                            <li>Google Analytics</li>
                        </ul>
                        <p className="legal-page-subheading">Cookies funcionales</p>
                        <p className="legal-page-p">
                            Permiten recordar tus preferencias (como idioma o región) para
                            ofrecer una experiencia más personalizada.
                        </p>
                        <p className="legal-page-subheading">Cookies de marketing</p>
                        <p className="legal-page-p">
                            Se utilizan para mostrar publicidad relevante para los usuarios
                            y medir la efectividad de las campañas de marketing.
                        </p>
                    </section>

                    <section className="legal-page-section">
                        <h2 className="legal-page-h2">3. ¿Cómo podés gestionar las cookies?</h2>
                        <p className="legal-page-p">
                            Cuando visitás nuestro sitio por primera vez, se muestra un
                            banner que te permite:
                        </p>
                        <ul className="legal-page-list">
                            <li>Aceptar todas las cookies</li>
                            <li>Rechazar cookies no esenciales</li>
                        </ul>
                        <p className="legal-page-p">
                            También podés gestionar o eliminar cookies desde la
                            configuración de tu navegador.
                        </p>
                        <p className="legal-page-p">Guías de los navegadores más utilizados:</p>
                        <ul className="legal-page-list">
                            <li>Google Chrome</li>
                            <li>Mozilla Firefox</li>
                            <li>Safari</li>
                            <li>Microsoft Edge</li>
                        </ul>
                        <p className="legal-page-p">
                            Tené en cuenta que desactivar ciertas cookies puede afectar al
                            funcionamiento del sitio.
                        </p>
                    </section>

                    <section className="legal-page-section">
                        <h2 className="legal-page-h2">4. Cookies de terceros</h2>
                        <p className="legal-page-p">
                            Algunas cookies pueden ser instaladas por servicios de terceros
                            que aparecen en nuestras páginas. Estas cookies permiten
                            analizar el tráfico o integrar funcionalidades externas.
                        </p>
                        <p className="legal-page-p">
                            Ejemplos de servicios que pueden utilizar cookies:
                        </p>
                        <ul className="legal-page-list">
                            <li>Google</li>
                            <li>HubSpot</li>
                        </ul>
                        <p className="legal-page-p">
                            Cada proveedor tiene su propia política de privacidad y cookies.
                        </p>
                    </section>

                    <section className="legal-page-section">
                        <h2 className="legal-page-h2">5. Cambios en esta política</h2>
                        <p className="legal-page-p">
                            Podemos actualizar esta Política de Cookies ocasionalmente para
                            reflejar cambios legales o mejoras en nuestros servicios. Te
                            recomendamos revisar esta página periódicamente para estar
                            informado.
                        </p>
                    </section>

                    <section className="legal-page-section">
                        <h2 className="legal-page-h2">6. Contacto</h2>
                        <p className="legal-page-p">
                            Si tenés preguntas sobre esta Política de Cookies o sobre cómo
                            utilizamos tus datos, podés contactarnos en:
                        </p>
                        <a className="legal-page-contact-link" href="mailto:contacto@rankagile.com">
                            contacto@rankagile.com
                        </a>
                    </section>
                </article>
            </main>
            <ClaudeFooter />
        </>
    );
}
