import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

const SERVICE_KEYS = [
    { slug: 'seoCompleto',        href: '/seo-completo' },
    { slug: 'auditoriaTecnica',   href: '/auditoria-tecnica' },
    { slug: 'seoHibrido',         href: '/seo-hibrido' },
    { slug: 'seoConsultoria',     href: '/seo-consultoria' },
    { slug: 'seoAnalytics',       href: '/seo-analytics' },
    { slug: 'analisisSeoGratuito',href: '/analisis-seo-gratuito' },
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

function RankAgileLogo({ theme }) {
    const main = theme === 'light' ? '#141416' : '#F4F2EA';
    const accent = theme === 'light' ? '#0FB89A' : '#38FEDA';
    return (
        <svg viewBox="100 170 710 525" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="RankAgile">
            <path fillRule="evenodd" clipRule="evenodd" d="M300.329 177.062C298.407 177.09 296.493 177.149 294.589 177.241C296.493 177.149 298.407 177.09 300.329 177.062Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M443.395 442.279L443.393 557.832H462.478L672.71 288.072L672.932 239.56L612.536 239.663L443.395 442.279ZM739.519 286.998L738.655 176.941L612.536 177.147L576.861 219.628L694.066 219.424L694.847 321.355L739.519 286.998Z" fill={accent} />
            <path fillRule="evenodd" clipRule="evenodd" d="M761.797 558.802L612.451 403.2L566.214 462.791L655.366 558.802H761.797Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M371.81 356.957H443.393V258.256C415.787 209.924 363.355 177.239 303.171 177.048L302.977 177.047C302.865 177.047 302.753 177.047 302.639 177.047C301.867 177.047 301.098 177.052 300.329 177.062C301.098 177.052 301.867 177.046 302.639 177.046L220.652 176.786L104.285 176.415L166.54 250.617L180.231 266.937H296.287H301.101C301.612 266.926 302.125 266.921 302.64 266.921C303.154 266.921 303.668 266.926 304.179 266.937C342.341 267.746 373.025 298.525 373.025 336.377C373.025 342.924 372.107 349.26 370.391 355.265L371.81 356.957H369.883H255.754L296.544 405.576L362.629 484.347L424.281 557.832H443.393V442.28L433.202 430.132L371.81 356.957Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M124 662.417V684.976H136.834V672.968H166.934L179.139 684.976H195.955L181.849 671.132C184.097 670.202 185.986 668.941 187.566 667.509C191.972 663.495 193.244 658.476 193.244 653.923C193.244 650.692 192.615 647.179 190.726 644.021C187.412 638.5 181.053 634.632 171.828 634.632H124V645.171H136.834H171.752C174.36 645.171 176.274 645.857 177.854 647.289C179.703 648.978 180.411 651.303 180.411 653.776C180.411 656.285 179.703 658.586 177.854 660.263C176.235 661.769 174.36 662.417 171.752 662.417H136.834H124Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M285.381 684.976L251.658 634.632H235.896L202.173 684.976H216.767L226.595 670.343L243.424 645.171H244.169L260.953 670.343L270.774 684.976H285.381Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M349.628 684.976H360.805V634.632H347.971V669.59L302.776 634.632H291.561V684.976H304.395V650.483L349.628 684.976Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M397.547 665.11L421.853 684.976H439.89L409.404 659.798L439.89 634.632H421.853L397.547 654.534H383.583V634.632H370.748V684.976H383.583V665.11H397.547Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M563.823 684.976L530.1 634.632H514.337L480.614 684.976H495.208L505.036 670.343L521.866 645.171H522.611L539.394 670.343L549.216 684.976H563.823Z" fill={accent} />
            <path fillRule="evenodd" clipRule="evenodd" d="M620.876 665.257V674.437H592.124C587.641 674.437 584.185 673.176 581.436 670.631C578.237 667.693 577.107 663.788 577.107 659.725C577.107 655.746 578.237 651.842 581.397 648.904C584.185 646.395 587.602 645.171 592.124 645.171H632.965V634.632H592.047C580.151 634.632 571.981 639.859 567.69 646.934C565.21 651.083 564.35 655.612 564.35 659.945C564.35 664.217 565.21 668.697 567.664 672.785C571.981 679.884 580.228 684.976 592.047 684.976H633.632V654.706H587.718V665.257H620.876Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M643.575 634.632V684.976H656.41V634.632H643.575Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M679.251 674.437V634.632H666.34V684.976H728.583V674.437H679.251Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M804.315 634.632V645.171H738.526V634.632H804.315Z" fill={main} />
            <path fillRule="evenodd" clipRule="evenodd" d="M738.526 684.976H804.315V674.438H751.36V665.074H791.738V654.535H751.36H738.526V684.976Z" fill={main} />
        </svg>
    );
}

export default function ClaudeNavbar({ isHome = false }) {
    const { t, i18n } = useTranslation();
    const isEN = i18n.language === 'en';

    const [megaOpen, setMegaOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('ra-theme') || 'dark');
    const navRef = useRef(null);
    const lastScrollY = useRef(0);
    const scrollTicking = useRef(false);
    const closeTimeout = useRef(null);

    const prefix = isEN ? '/en' : '';
    const homeHref = isEN ? '/en/' : '/';
    const geoHref = `${prefix}/servicios/geo`;
    const aboutHref = `${prefix}/quienes-somos`;
    const contactHref = `${prefix}/contacto`;
    const blogHref = `${prefix}/blog`;
    const analysisHref = `${prefix}/analisis-seo-gratuito`;

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('ra-theme', theme);
    }, [theme]);

    useEffect(() => {
        document.body.classList.toggle('nav-mega-open', megaOpen);
        return () => document.body.classList.remove('nav-mega-open');
    }, [megaOpen]);

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

    const sectionHref = (sectionId) => (isHome ? `#${sectionId}` : `${homeHref}#${sectionId}`);

    const handleServicesEnter = () => {
        if (closeTimeout.current) { clearTimeout(closeTimeout.current); closeTimeout.current = null; }
        setMegaOpen(true);
    };
    const handleServicesLeave = () => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        closeTimeout.current = setTimeout(() => setMegaOpen(false), 120);
    };

    const serviceHref = (key) => {
        const paths = {
            seoCompleto: '/seo-completo',
            auditoriaTecnica: '/auditoria-tecnica',
            seoHibrido: '/seo-hibrido',
            seoConsultoria: '/seo-consultoria',
            seoAnalytics: '/seo-analytics',
            analisisSeoGratuito: '/analisis-seo-gratuito',
        };
        return `${prefix}${paths[key]}`;
    };

    return (
        <nav className={`nav ${isHidden && !megaOpen ? 'nav--hidden' : ''}`} ref={navRef}>
            <div className="nav-inner">
                <a className="nav-logo" href={homeHref} aria-label="RankAgile">
                    <RankAgileLogo theme={theme} />
                </a>

                <div className="nav-links">
                    <a className="nav-link" href={geoHref}>{t('nav.geo')}</a>
                    <a className="nav-link" href={aboutHref}>{t('nav.about')}</a>
                    <a className="nav-link" href={contactHref}>{t('nav.contact')}</a>
                    <div className="nav-services" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
                        <button
                            className="nav-link"
                            aria-expanded={megaOpen}
                            onClick={(event) => { event.stopPropagation(); setMegaOpen((prev) => !prev); }}
                        >
                            {t('nav.servicesLabel')} <ChevDown />
                        </button>
                        <div className="mega" data-open={megaOpen}>
                            <div className="mega-inner">
                                <div className="mega-aside">
                                    <div className="mega-aside-title">{t('nav.megaTitle')}</div>
                                    <p className="mega-aside-text">{t('nav.megaDesc')}</p>
                                    <a className="btn-ghost" href={sectionHref('servicios')}>{t('nav.megaSeeAll')} <ArrowUpRight size={12} /></a>
                                </div>
                                <div className="mega-grid">
                                    {SERVICE_KEYS.map(({ slug }) => (
                                        <a key={slug} className="mega-item" href={serviceHref(slug)} onClick={() => setMegaOpen(false)}>
                                            <span className="mega-item-title"><span className="dot" />{t(`nav.services.${slug}.title`)}</span>
                                            <span className="mega-item-desc">{t(`nav.services.${slug}.desc`)}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    {!isEN && <a className="nav-link" href={blogHref}>{t('nav.blog')}</a>}
                </div>

                <div className="nav-scroll">
                    <div className="nav-scroll-inner">
                        <button className="nav-scroll-item">{t('nav.geo')}</button>
                        <button className="nav-scroll-item">{t('nav.about')}</button>
                        <button className="nav-scroll-item">{t('nav.contact')}</button>
                        <button className="nav-scroll-item">{t('nav.servicesLabel')}</button>
                        {SERVICE_KEYS.map(({ slug }) => (
                            <button key={slug} className="nav-scroll-item">{t(`nav.services.${slug}.title`)}</button>
                        ))}
                        <button className="nav-scroll-item">{t('nav.blog')}</button>
                    </div>
                </div>

                <div className="nav-right">
                    <LanguageSwitcher />
                    <button className="theme-toggle" onClick={() => setTheme((curr) => (curr === 'dark' ? 'light' : 'dark'))} aria-label={t('nav.themeToggle')}>
                        <Sun />
                        <Moon />
                    </button>
                    <a className="btn-pill" href={analysisHref}>
                        {t('nav.cta')} <ArrowUpRight />
                    </a>
                </div>
            </div>
        </nav>
    );
}
