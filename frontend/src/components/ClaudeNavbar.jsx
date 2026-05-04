import { useEffect, useRef, useState } from 'react';

const SERVICES = [
    { slug: 'geo', title: 'SEO para IA (GEO)', desc: 'Aparece en ChatGPT, Gemini, Claude y Perplexity cuando tus clientes preguntan.' },
    { slug: 'tecnico', title: 'SEO Tecnico', desc: 'Core Web Vitals, schema, indexacion y arquitectura para rendimiento extremo.' },
    { slug: 'contenido', title: 'SEO de Contenidos', desc: 'Estrategia editorial basada en intencion real y respuestas optimizadas para LLMs.' },
    { slug: 'local', title: 'SEO Local', desc: 'Domina busquedas geo-localizadas, Maps y menciones en respuestas generativas.' },
    { slug: 'ecommerce', title: 'SEO eCommerce', desc: 'Ficha de producto, feed optimizado y canibalizacion controlada.' },
    { slug: 'linkbuilding', title: 'Linkbuilding', desc: 'Enlaces editoriales relevantes, con metricas y reporting transparente.' },
    { slug: 'auditoria', title: 'Auditoria SEO', desc: 'Diagnostico de 250+ puntos con roadmap priorizado por impacto.' },
    { slug: 'consultoria', title: 'Consultoria SEO', desc: 'Equipo senior embebido con tu in-house. Estrategia y ejecucion.' },
    { slug: 'internacional', title: 'SEO Internacional', desc: 'Hreflang, mercados y arquitecturas multi-region sin friccion.' },
];

function ArrowUpRight({ size = 14 }) {
    return (
        <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
        </svg>
    );
}

function ChevDown() {
    return (
        <svg className="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
        </svg>
    );
}

function Sun() {
    return (
        <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
    );
}

function Moon() {
    return (
        <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

export default function ClaudeNavbar({ isHome = false }) {
    const [megaOpen, setMegaOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('ra-theme') || 'dark');
    const navRef = useRef(null);
    const lastScrollY = useRef(0);
    const scrollTicking = useRef(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('ra-theme', theme);
    }, [theme]);

    useEffect(() => {
        const onClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMegaOpen(false);
            }
        };
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    useEffect(() => {
        lastScrollY.current = window.scrollY;

        const updateVisibility = () => {
            const currentY = window.scrollY;
            const delta = currentY - lastScrollY.current;
            if (Math.abs(delta) > 6) {
                setIsHidden(delta > 0 && currentY > 80);
                lastScrollY.current = currentY;
            }
            scrollTicking.current = false;
        };

        const onScroll = () => {
            if (!scrollTicking.current) {
                scrollTicking.current = true;
                window.requestAnimationFrame(updateVisibility);
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const sectionHref = (sectionId) => (isHome ? `#${sectionId}` : `/#${sectionId}`);

    return (
        <nav className={`nav ${isHidden && !megaOpen ? 'nav--hidden' : ''}`} ref={navRef}>
            <div className="nav-inner">
                <a className="nav-logo" href="/" aria-label="RankAgile">
                    <img src="/claude/assets/rankagile-logo.png" alt="RankAgile" />
                </a>

                <div className="nav-links">
                    <a className="nav-link" href={sectionHref('metodologia')}>Metodologia</a>
                    <button className="nav-link" aria-expanded={megaOpen} onClick={(event) => { event.stopPropagation(); setMegaOpen((prev) => !prev); }}>
                        Servicios <ChevDown />
                    </button>
                    <a className="nav-link" href={sectionHref('casos')}>Casos</a>
                    <a className="nav-link" href="/blogs">Recursos</a>
                    <a className="nav-link" href="/quienes-somos">Agencia</a>
                    <a className="nav-link" href="/contacto">Contacto</a>
                </div>

                <div className="nav-scroll">
                    <div className="nav-scroll-inner">
                        <button className="nav-scroll-item active">Inicio</button>
                        {SERVICES.map((service) => (
                            <button key={service.slug} className="nav-scroll-item">{service.title}</button>
                        ))}
                        <button className="nav-scroll-item">Casos</button>
                        <button className="nav-scroll-item">Agencia</button>
                        <button className="nav-scroll-item">Contacto</button>
                    </div>
                </div>

                <div className="nav-right">
                    <button className="theme-toggle" onClick={() => setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))} aria-label="Cambiar tema">
                        <Sun />
                        <Moon />
                    </button>
                    <a className="btn-pill" href="/analisis-seo-gratuito">
                        Analisis SEO Gratuito <ArrowUpRight />
                    </a>
                </div>
            </div>

            <div className="mega" data-open={megaOpen}>
                <div className="mega-inner">
                    <div className="mega-aside">
                        <div className="mega-aside-title">Servicios</div>
                        <p className="mega-aside-text">Nueve servicios especializados, un enfoque: ganar visibilidad donde tus clientes ya estan buscando.</p>
                        <a className="btn-ghost" href={sectionHref('servicios')}>Ver todos <ArrowUpRight size={12} /></a>
                    </div>
                    <div className="mega-grid">
                        {SERVICES.map((service) => (
                            <button key={service.slug} className="mega-item" onClick={() => setMegaOpen(false)}>
                                <span className="mega-item-title"><span className="dot" />{service.title}</span>
                                <span className="mega-item-desc">{service.desc}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
