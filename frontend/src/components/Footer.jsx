import { Link } from 'react-router-dom';

const styles = `
  .ra-footer {
    background: #05050a;
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

  .ra-footer-brand svg {
    display: block;
    width: 180px;
    max-width: 100%;
    height: auto;
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

  @media (max-width: 860px) {
    .ra-footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    .ra-footer-brand { grid-column: 1 / -1; }
  }
  @media (max-width: 540px) {
    .ra-footer { padding: 56px 20px 24px; }
    .ra-footer-grid { grid-template-columns: 1fr; gap: 36px; }
  }
`;

export default function Footer() {
  return (
    <footer className="ra-footer">
      <style>{styles}</style>
      <div className="ra-footer-inner">
        <div className="ra-footer-grid">
          {/* Brand */}
          <div className="ra-footer-brand">
            <Link to="/" aria-label="RankAgile · Inicio">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 634.85 361.35" role="img" aria-label="RankAgile">
                <g fill="#38feda">
                  <path d="M47.95,49.79h41.7c43.27,0,50.24,50.95,20.21,66.61l12.81,33.02h-22.91l-10.96-28.46h-19.5v28.46h-21.35V49.79ZM69.3,71.14v28.46h20.35c23.06,0,22.77-28.46,0-28.46h-20.35Z" />
                  <path d="M154.26,111.98c25.05,0,25.05,37.43,0,37.43s-25.05-37.43,0-37.43ZM201.09,149.41h-21.35v-49.81h-44.12v-21.35h65.47v71.16Z" />
                  <path d="M206.78,78.25h21.35v10.39c3.84-7.11,13.52-11.81,23.77-11.81,14.66,0,30.31,9.96,30.31,36.72v35.86h-21.49v-35.58c0-12.38-7.97-18.22-15.94-18.22s-16.65,6.26-16.65,18.22v35.58h-21.35v-71.16Z" />
                  <path d="M287.9,49.79h21.35v48.96l19.21-20.49h29.17l-33.87,36.29,33.87,34.87h-29.74l-18.64-19.07v19.07h-21.35V49.79Z" />
                  <path d="M330.75,198.85l-25.76,72.15h-22.63l35.44-99.62h25.76l35.58,99.62h-22.63l-25.76-72.15Z" />
                  <path d="M412.3,198.28h45.54v21.35h-11.53c9.68,22.34-1.71,54.08-34.02,54.08-49.81,0-49.81-75.43,0-75.43ZM449.3,273.71c0,25.33-18.22,37.86-36.29,37.86s-36.43-12.53-36.43-37.86h21.49c0,10.82,7.4,16.08,14.94,16.08s14.8-5.27,14.8-16.08h21.49ZM412.3,219.63c-21.2,0-21.49,32.73,0,32.73s21.35-32.73,0-32.73Z" />
                  <path d="M463.53,199.85h21.35v71.16h-21.35v-71.16ZM474.49,175.51c13.95,0,13.95,20.78,0,20.78s-13.95-20.78,0-20.78Z" />
                  <path d="M490.72,171.38h21.35v99.62h-21.35v-99.62Z" />
                  <path d="M555.19,198.28c28.46,0,35.58,27.75,33.16,44.69h-46.96c2.13,5.26,7.11,9.39,14.66,9.39,3.56,0,7.97-1.14,12.1-5.12l15.09,15.37c-8.26,8.4-18.36,11.1-27.18,11.1-49.81,0-48.1-75.43-.85-75.43ZM568.71,228.74c-2.13-6.26-7.4-9.11-12.81-9.11-5.84,0-11.81,3.13-14.37,9.11h27.18Z" />
                  <polygon points="319.17 271 330.75 241 338.38 271 319.17 271" />
                </g>
              </svg>
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
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="ra-footer-col-title">Empresa</p>
            <ul className="ra-footer-list">
              <li><Link to="/quienes-somos/">Sobre nosotros</Link></li>
              <li><Link to="/privacy-policy/">Política de Privacidad</Link></li>
              <li><Link to="/politica-de-cookies/">Política de Cookies</Link></li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <p className="ra-footer-col-title">Servicios</p>
            <ul className="ra-footer-list">
              <li><Link to="/servicios-seo-para-posicionamiento-web/">Proyecto SEO</Link></li>
              <li><Link to="/servicios-seo-para-posicionamiento-web/seo-consultoria-aplicada/">Consultoría SEO</Link></li>
              <li><Link to="/analisis-seo-gratuito/">Análisis SEO</Link></li>
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
