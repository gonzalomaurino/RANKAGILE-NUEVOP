import { useEffect, useMemo, useState } from 'react';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/claude-system.css';
import '../styles/claude-analisis.css';

const RING_RADIUS = 52;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

const CATEGORIES = [
    { name: 'Rendimiento', value: 75, tone: 'warn' },
    { name: 'Estructura de Pagina', value: 100, tone: 'good' },
    { name: 'Encabezados', value: 100, tone: 'good' },
    { name: 'Optimizacion de Imagenes', value: 80, tone: 'good' },
    { name: 'Enlaces Internos', value: 70, tone: 'warn' },
    { name: 'Enlaces Externos', value: 60, tone: 'warn' },
];

export default function ClaudeAnalisisPage() {
    useDocumentMeta({
        title: 'RankAgile - Analisis SEO Gratuito',
        description: 'Evalua tu sitio en GEO + SEO clasico en segundos.',
    });

    const [url, setUrl] = useState('rankagile.com');
    const [score, setScore] = useState(0);
    const [runId, setRunId] = useState(0);
    const [activeTab, setActiveTab] = useState('resumen');

    useEffect(() => {
        const target = 85;
        let frame = 0;
        const start = performance.now();
        const duration = 1200;

        const tick = (now) => {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            setScore(Math.round(target * eased));
            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [runId]);

    const dashOffset = useMemo(() => RING_CIRCUMFERENCE - (RING_CIRCUMFERENCE * score) / 100, [score]);

    return (
        <>
            <ClaudeNavbar />
            <div className="page">
                <main className="main">
                    <section className="hero-card">
                        <div className="aurora-bg" />
                        <div className="hero-card-inner">
                            <span className="eyebrow">analisis seo gratuito</span>
                            <h1>Evalua tu sitio en <span className="grad">GEO + SEO clasico</span> en 30 segundos.</h1>
                            <p>Introduce la URL de tu dominio. Radiografiamos rendimiento, estructura, visibilidad en IA y oportunidades.</p>
                            <form className="url-pill" onSubmit={(e) => { e.preventDefault(); setRunId((v) => v + 1); }}>
                                <svg className="globe" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                                <input value={url} onChange={(e) => setUrl(e.target.value)} type="text" placeholder="https://tu-dominio.com" />
                                <span className="country">ES</span>
                                <button type="submit" className="btn-pill filled">
                                    Analizar
                                    <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                                </button>
                            </form>
                        </div>
                    </section>

                    <nav className="tabs">
                        {['seo', 'geo', 'resumen', 'rendimiento', 'mobile'].map((tab) => (
                            <button key={tab} className={`tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                                {tab === 'seo' && 'SEO On-Page'}
                                {tab === 'geo' && <>GEO <span className="dot" /></>}
                                {tab === 'resumen' && 'Resumen'}
                                {tab === 'rendimiento' && 'Rendimiento'}
                                {tab === 'mobile' && 'Mobile'}
                            </button>
                        ))}
                    </nav>

                    <section className="report-card">
                        <div className="score">
                            <div className="score-head">PUNTUACION GLOBAL</div>
                            <div className="score-ring-wrap">
                                <div className="score-ring">
                                    <svg viewBox="0 0 120 120">
                                        <circle className="track" cx="60" cy="60" r="52" />
                                        <circle className="bar" cx="60" cy="60" r="52" strokeDasharray={RING_CIRCUMFERENCE} strokeDashoffset={dashOffset} />
                                    </svg>
                                    <div className="num">
                                        <span className="val">{score}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="score-mini">
                                <div className="score-mini-item"><div className="v good">A+</div><div className="l">ACCESIBILIDAD</div></div>
                                <div className="score-mini-item"><div className="v warn">B</div><div className="l">VELOCIDAD</div></div>
                            </div>
                        </div>

                        <div className="cats">
                            <div className="cats-head">
                                <h3>Categorias SEO</h3>
                                <span className="domain">{url}</span>
                            </div>
                            <div className="cat-list">
                                {CATEGORIES.map((cat, idx) => (
                                    <div className="cat" key={cat.name}>
                                        <span className="cat-name">{cat.name}</span>
                                        <div className="cat-bar"><div className={`cat-bar-fill ${cat.tone}`} style={{ width: `${Math.max(0, cat.value - Math.max(0, 12 - idx * 2))}%` }} /></div>
                                        <span className="cat-val">{cat.value}%</span>
                                    </div>
                                ))}
                            </div>
                            <div className="cat-footer">
                                <span className="cat-footer-hint"><b>12 oportunidades</b> detectadas · <b>4 criticas</b></span>
                                <a href="/contacto" className="btn-pill">
                                    Recibir informe completo
                                    <svg className="arrow" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
