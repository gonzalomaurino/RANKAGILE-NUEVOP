import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const servicesSubmenu = [
  { label: 'SEO Completo', to: '/servicios-seo-para-posicionamiento-web/servicio-seo-completo/' },
  { label: 'Auditoría Técnica', to: '/servicios-seo-para-posicionamiento-web/auditoria-tecnica-seo/' },
  { label: 'SEO Híbrido', to: '/servicios-seo-para-posicionamiento-web/servicio-seo-hibrido/' },
  { label: 'SEO Consultoría', to: '/servicios-seo-para-posicionamiento-web/seo-consultoria-aplicada/' },
  { label: 'SEO Analytics', to: '/servicios-seo-para-posicionamiento-web/seo-analytics/' },
  { label: 'Análisis SEO Gratuito', to: '/analisis-seo-gratuito/' },
];

const styles = `
  .ra-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: rgba(2, 2, 9, 0.92);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(56, 254, 218, 0.12);
    transition: transform 300ms ease;
    font-family: Poppins, Helvetica, Arial, sans-serif;
  }
  .ra-header.is-hidden { transform: translateY(-100%); }

  .ra-header-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  .ra-header-logo {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    flex: 0 0 auto;
  }
  .ra-header-logo img {
    display: block;
    height: 40px;
    width: auto;
  }

  .ra-header-nav {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ra-header-nav-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .ra-header-nav-item { position: relative; }
  .ra-header-nav-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.82);
    padding: 10px 14px;
    border-radius: 10px;
    text-decoration: none;
    transition: color 150ms ease, background 150ms ease;
    white-space: nowrap;
    background: transparent;
    border: 0;
    cursor: pointer;
    font-family: inherit;
  }
  .ra-header-nav-link:hover,
  .ra-header-nav-link.is-active {
    color: #38FEDA;
    background: rgba(56, 254, 218, 0.07);
  }
  .ra-header-chevron {
    width: 10px;
    height: 10px;
    border-right: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(45deg) translateY(-2px);
    transition: transform 200ms ease;
  }
  .ra-header-nav-item:hover .ra-header-chevron,
  .ra-header-nav-item.is-open .ra-header-chevron {
    transform: rotate(-135deg) translateY(2px);
  }

  .ra-header-submenu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    min-width: 260px;
    background: rgba(10, 10, 15, 0.98);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    padding: 8px;
    list-style: none;
    margin: 0;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-4px);
    transition: opacity 180ms ease, transform 180ms ease, visibility 180ms ease;
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6);
  }
  .ra-header-nav-item:hover > .ra-header-submenu,
  .ra-header-nav-item:focus-within > .ra-header-submenu {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .ra-header-submenu li { display: block; }
  .ra-header-submenu a {
    display: block;
    padding: 10px 14px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.82);
    text-decoration: none;
    border-radius: 8px;
    transition: color 150ms ease, background 150ms ease;
  }
  .ra-header-submenu a:hover,
  .ra-header-submenu a.is-active {
    color: #38FEDA;
    background: rgba(56, 254, 218, 0.07);
  }

  .ra-header-cta {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #0A0A0A;
    background: #38FEDA;
    border: 0;
    border-radius: 999px;
    padding: 11px 22px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 150ms ease, background 150ms ease;
    white-space: nowrap;
  }
  .ra-header-cta:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  .ra-header-burger {
    display: none;
    width: 42px;
    height: 42px;
    background: transparent;
    border: 1px solid rgba(56, 254, 218, 0.35);
    border-radius: 10px;
    cursor: pointer;
    padding: 0;
    position: relative;
  }
  .ra-header-burger span {
    position: absolute;
    left: 10px;
    right: 10px;
    height: 2px;
    background: #38FEDA;
    border-radius: 2px;
    transition: transform 200ms ease, opacity 200ms ease, top 200ms ease;
  }
  .ra-header-burger span:nth-child(1) { top: 14px; }
  .ra-header-burger span:nth-child(2) { top: 20px; }
  .ra-header-burger span:nth-child(3) { top: 26px; }
  .ra-header-burger.is-open span:nth-child(1) { top: 20px; transform: rotate(45deg); }
  .ra-header-burger.is-open span:nth-child(2) { opacity: 0; }
  .ra-header-burger.is-open span:nth-child(3) { top: 20px; transform: rotate(-45deg); }

  /* Mobile drawer */
  .ra-header-drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: min(380px, 100%);
    height: 100vh;
    background: #050510;
    border-left: 1px solid rgba(56, 254, 218, 0.18);
    transform: translateX(100%);
    transition: transform 300ms ease;
    z-index: 9998;
    padding: 96px 24px 32px;
    overflow-y: auto;
  }
  .ra-header-drawer.is-open { transform: translateX(0); }
  .ra-header-drawer-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .ra-header-drawer-link {
    display: block;
    padding: 14px 16px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.88);
    text-decoration: none;
    border-radius: 10px;
    transition: color 150ms ease, background 150ms ease;
  }
  .ra-header-drawer-link:hover,
  .ra-header-drawer-link.is-active {
    color: #38FEDA;
    background: rgba(56, 254, 218, 0.07);
  }
  .ra-header-drawer-group-label {
    padding: 14px 16px 8px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 8px 0 0;
  }
  .ra-header-drawer-sub {
    list-style: none;
    margin: 0;
    padding: 0 0 0 8px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .ra-header-drawer-sub a {
    display: block;
    padding: 12px 16px;
    font-size: 14.5px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.72);
    text-decoration: none;
    border-radius: 10px;
    transition: color 150ms ease, background 150ms ease;
  }
  .ra-header-drawer-sub a:hover,
  .ra-header-drawer-sub a.is-active {
    color: #38FEDA;
    background: rgba(56, 254, 218, 0.07);
  }
  .ra-header-drawer-cta {
    margin-top: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #0A0A0A;
    background: #38FEDA;
    border-radius: 999px;
    padding: 14px 28px;
    text-decoration: none;
    transition: transform 150ms ease, background 150ms ease;
  }
  .ra-header-drawer-cta:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  .ra-header-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    opacity: 0;
    visibility: hidden;
    transition: opacity 240ms ease, visibility 240ms ease;
    z-index: 9997;
  }
  .ra-header-backdrop.is-open {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 980px) {
    .ra-header-nav { display: none; }
    .ra-header-cta { display: none; }
    .ra-header-burger { display: inline-flex; align-items: center; justify-content: center; }
  }
  @media (min-width: 981px) {
    .ra-header-drawer,
    .ra-header-backdrop { display: none; }
  }
`;

function isActive(pathname, to) {
  const clean = to.replace(/\/$/, '') || '/';
  const p = pathname.replace(/\/$/, '') || '/';
  return p === clean;
}

export default function Header() {
  const [visible, setVisible] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const headerRef = useRef(null);
  const lastY = useRef(0);
  const { pathname } = useLocation();

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y < 10) setVisible(true);
      else if (delta > 5) setVisible(false);
      else if (delta < -5) setVisible(true);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Header spacer (push content below fixed header)
  useEffect(() => {
    const setSpacer = () => {
      const h = headerRef.current?.offsetHeight || 0;
      document.body.style.paddingTop = `${h}px`;
    };
    setSpacer();
    window.addEventListener('resize', setSpacer);
    return () => {
      window.removeEventListener('resize', setSpacer);
      document.body.style.paddingTop = '';
    };
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <style>{styles}</style>
      <header
        ref={headerRef}
        className={`ra-header${visible ? '' : ' is-hidden'}`}
      >
        <div className="ra-header-inner">
          <Link to="/" className="ra-header-logo" aria-label="RankAgile · Inicio">
            <img
              src="/wp-content/uploads/2025/12/rank-agile-black.svg"
              alt="RankAgile"
              width="188"
              height="108"
            />
          </Link>

          <nav className="ra-header-nav" aria-label="Navegación principal">
            <ul className="ra-header-nav-list">
              <li className="ra-header-nav-item">
                <Link
                  to="/geo-generative-engine-optimization/"
                  className={`ra-header-nav-link${isActive(pathname, '/geo-generative-engine-optimization/') ? ' is-active' : ''}`}
                >
                  GEO
                </Link>
              </li>
              <li className="ra-header-nav-item">
                <Link
                  to="/quienes-somos/"
                  className={`ra-header-nav-link${isActive(pathname, '/quienes-somos/') ? ' is-active' : ''}`}
                >
                  Quiénes somos
                </Link>
              </li>
              <li className="ra-header-nav-item">
                <Link
                  to="/contacto/"
                  className={`ra-header-nav-link${isActive(pathname, '/contacto/') ? ' is-active' : ''}`}
                >
                  Contacto
                </Link>
              </li>
              <li className="ra-header-nav-item">
                <Link
                  to="/servicios-seo-para-posicionamiento-web/"
                  className="ra-header-nav-link"
                  aria-haspopup="true"
                >
                  Servicios SEO
                  <span className="ra-header-chevron" aria-hidden="true" />
                </Link>
                <ul className="ra-header-submenu" role="menu">
                  {servicesSubmenu.map((s) => (
                    <li key={s.to} role="none">
                      <Link
                        to={s.to}
                        role="menuitem"
                        className={isActive(pathname, s.to) ? 'is-active' : ''}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="ra-header-nav-item">
                <Link
                  to="/blogs/"
                  className={`ra-header-nav-link${isActive(pathname, '/blogs/') ? ' is-active' : ''}`}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>

          <Link to="/analisis-seo-gratuito/" className="ra-header-cta">
            Análisis SEO Gratuito
          </Link>

          <button
            type="button"
            className={`ra-header-burger${drawerOpen ? ' is-open' : ''}`}
            aria-label={drawerOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`ra-header-backdrop${drawerOpen ? ' is-open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />
      <aside className={`ra-header-drawer${drawerOpen ? ' is-open' : ''}`} aria-label="Menú móvil">
        <ul className="ra-header-drawer-list">
          <li><Link to="/geo-generative-engine-optimization/" className={`ra-header-drawer-link${isActive(pathname, '/geo-generative-engine-optimization/') ? ' is-active' : ''}`}>GEO</Link></li>
          <li><Link to="/quienes-somos/" className={`ra-header-drawer-link${isActive(pathname, '/quienes-somos/') ? ' is-active' : ''}`}>Quiénes somos</Link></li>
          <li><Link to="/contacto/" className={`ra-header-drawer-link${isActive(pathname, '/contacto/') ? ' is-active' : ''}`}>Contacto</Link></li>
          <li><Link to="/servicios-seo-para-posicionamiento-web/" className={`ra-header-drawer-link${isActive(pathname, '/servicios-seo-para-posicionamiento-web/') ? ' is-active' : ''}`}>Servicios SEO</Link></li>
          <li>
            <p className="ra-header-drawer-group-label">Servicios</p>
            <ul className="ra-header-drawer-sub">
              {servicesSubmenu.map((s) => (
                <li key={s.to}>
                  <Link to={s.to} className={isActive(pathname, s.to) ? 'is-active' : ''}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li><Link to="/blogs/" className={`ra-header-drawer-link${isActive(pathname, '/blogs/') ? ' is-active' : ''}`}>Blogs</Link></li>
        </ul>
        <Link to="/analisis-seo-gratuito/" className="ra-header-drawer-cta">
          Análisis SEO Gratuito
        </Link>
      </aside>
    </>
  );
}
