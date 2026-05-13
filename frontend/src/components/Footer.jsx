import { Link } from 'react-router-dom';

const styles = `
  .ra-footer {
    background: #010101;
    color: rgba(255, 255, 255, 0.72);
    font-family: Poppins, Helvetica, Arial, sans-serif;
    border-top: 1px solid rgba(56, 254, 218, 0.12);
    padding: 72px 24px 32px;
  }
  .ra-footer-inner {
    max-width: 1180px;
    margin: 0 auto;
  }
  .ra-footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px;
    padding-bottom: 48px;
  }

  /* Logo SVG — color controlado por currentColor */
  .ra-footer-brand > a {
    display: inline-block;
    line-height: 0;
  }
  /* ↓ Cambiá este height para ajustar el tamaño del logo */
  .ra-footer-brand svg {
    display: block;
    height: 80px;
    width: auto;
    color: #38FEDA;
  }

  .ra-footer-tagline {
    font-size: 13px;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.02em;
    color: rgba(255, 255, 255, 0.5);
    margin: 20px 0 24px;
  }

  .ra-footer-social {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 10px;
  }
  .ra-footer-social a {
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid rgba(56, 254, 218, 0.35);
    background: rgba(56, 254, 218, 0.06);
    color: #FFFFFF;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background 150ms ease, border-color 150ms ease, transform 150ms ease;
  }
  .ra-footer-social a:hover {
    background: rgba(56, 254, 218, 0.16);
    border-color: #38FEDA;
    transform: translateY(-1px);
  }
  .ra-footer-social svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }

  .ra-footer-col-title {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .ra-footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .ra-footer-list a,
  .ra-footer-list span {
    font-size: 14px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 150ms ease;
  }
  .ra-footer-list a:hover {
    color: #38FEDA;
  }

  .ra-footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding-top: 24px;
    text-align: center;
  }
  .ra-footer-copyright {
    font-size: 11px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.28);
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0;
  }

  /* ===== Light mode ===== */
  html[data-theme="light"] .ra-footer {
    background: #dedad2;
    color: rgba(14, 14, 16, 0.92);
    border-top: 1px solid rgba(8, 184, 154, 0.2);
  }
  html[data-theme="light"] .ra-footer-brand svg {
    color: #08B89A;
  }
  html[data-theme="light"] .ra-footer-tagline {
    color: rgba(14, 14, 16, 0.72);
  }
  html[data-theme="light"] .ra-footer-social a {
    border: 1px solid rgba(8, 184, 154, 0.4);
    background: rgba(8, 184, 154, 0.08);
    color: #0e0e10;
  }
  html[data-theme="light"] .ra-footer-social a:hover {
    background: rgba(8, 184, 154, 0.2);
    border-color: #08B89A;
  }
  html[data-theme="light"] .ra-footer-col-title {
    color: #06927a;
  }
  html[data-theme="light"] .ra-footer-list a,
  html[data-theme="light"] .ra-footer-list span {
    color: rgba(14, 14, 16, 0.82);
  }
  html[data-theme="light"] .ra-footer-list a:hover {
    color: #06927a;
  }
  html[data-theme="light"] .ra-footer-bottom {
    border-top: 1px solid rgba(14, 14, 16, 0.12);
  }
  html[data-theme="light"] .ra-footer-copyright {
    color: rgba(14, 14, 16, 0.55);
  }

  @media (max-width: 860px) {
    .ra-footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    .ra-footer-brand { grid-column: 1 / -1; }
  }
  @media (max-width: 540px) {
    .ra-footer { padding: 56px 20px 24px; }
    .ra-footer-grid { grid-template-columns: 1fr; gap: 36px; }
  }
`;

function FooterLogo() {
  return (
    <svg viewBox="100 170 670 400" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="RankAgile">
      <path fillRule="evenodd" clipRule="evenodd" d="M443.395 442.279L443.393 557.832H462.478L672.71 288.072L672.932 239.56L612.536 239.663L443.395 442.279ZM739.519 286.998L738.655 176.941L612.536 177.147L576.861 219.628L694.066 219.424L694.847 321.355L739.519 286.998Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M761.797 558.802L612.451 403.2L566.214 462.791L655.366 558.802H761.797Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M371.81 356.957H443.393V258.256C415.787 209.924 363.355 177.239 303.171 177.048L302.977 177.047C302.865 177.047 302.753 177.047 302.639 177.047C301.867 177.047 301.098 177.052 300.329 177.062C301.098 177.052 301.867 177.046 302.639 177.046L220.652 176.786L104.285 176.415L166.54 250.617L180.231 266.937H296.287H301.101C301.612 266.926 302.125 266.921 302.64 266.921C303.154 266.921 303.668 266.926 304.179 266.937C342.341 267.746 373.025 298.525 373.025 336.377C373.025 342.924 372.107 349.26 370.391 355.265L371.81 356.957H369.883H255.754L296.544 405.576L362.629 484.347L424.281 557.832H443.393V442.28L433.202 430.132L371.81 356.957Z" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="ra-footer">
      <style>{styles}</style>
      <div className="ra-footer-inner">
        <div className="ra-footer-grid">
          {/* Brand */}
          <div className="ra-footer-brand">
            <Link to="/" aria-label="RankAgile · Inicio">
              <FooterLogo />
            </Link>
            <p className="ra-footer-tagline">
              Posicionamiento inteligente.
              <br />
              Resultados que escalan.
            </p>
            <ul className="ra-footer-social" aria-label="Redes sociales">
              <li>
                <a
                  href="https://www.linkedin.com/company/rankagile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a RankAgile en LinkedIn"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.05c.53-.95 1.84-1.95 3.8-1.95 4.07 0 4.82 2.55 4.82 5.87V21h-4v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9.5Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" aria-label="Seguir a RankAgile en YouTube" rel="noopener">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5a3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5ZM9.7 15.3V8.7l6.3 3.3-6.3 3.3Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/rank.agile/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a RankAgile en Instagram"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.42.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.42 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.42 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.23.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.42-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.05-.42-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.42-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.23-.42C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.67 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.71 2.13-1.38.67-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.71-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84Zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4Zm6.41-11.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44Z" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61589002543912"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Seguir a RankAgile en Facebook"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.412c0-3.025 1.792-4.696 4.533-4.696 1.313 0 2.686.235 2.686.235v2.967h-1.514c-1.49 0-1.955.93-1.955 1.884v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="ra-footer-col-title">Empresa</p>
            <ul className="ra-footer-list">
              <li><Link to="/quienes-somos">Sobre nosotros</Link></li>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
              <li><Link to="/cookies">Política de Cookies</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <p className="ra-footer-col-title">Servicios</p>
            <ul className="ra-footer-list">
              <li><Link to="/servicios/geo">GEO</Link></li>
              <li><Link to="/seo-completo">SEO Completo</Link></li>
              <li><Link to="/auditoria-tecnica">Auditoría Técnica</Link></li>
              <li><Link to="/seo-hibrido">SEO Híbrido</Link></li>
              <li><Link to="/seo-consultoria">Consultoría SEO</Link></li>
              <li><Link to="/analisis-seo-gratuito">Análisis SEO Gratuito</Link></li>
            </ul>
          </div>

          {/* Sedes */}
          <div>
            <p className="ra-footer-col-title">Sedes</p>
            <ul className="ra-footer-list">
              <li><span>Argentina</span></li>
              <li><span>Perú</span></li>
              <li><span>Bolivia</span></li>
            </ul>
          </div>
        </div>

        <div className="ra-footer-bottom">
          <p className="ra-footer-copyright">
            © 2026 RankAgile · Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
