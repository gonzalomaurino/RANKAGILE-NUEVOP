const Check = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const bullets = [
    'Crawl completo con herramientas enterprise',
    'Analisis profundo con GSC, GA4 y PageSpeed',
    'Priorizacion por impacto vs esfuerzo',
    'Roadmap tecnico accionable',
];

export default function AuditoriaGeoProcessSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Nuestro proceso</span>
            <div className="vignette" style={{ gridTemplateColumns: '1fr' }}>
                <div className="vignette-left geo-center">
                    <h2 className="geo-page-h2">Como trabajamos la auditoria</h2>
                    <p className="geo-page-p">
                        Ejecutamos una auditoria tecnica completa con foco en impacto real,
                        priorizacion y un plan accionable para tu equipo.
                    </p>
                    <ul className="vignette-bullets">
                        {bullets.map((item) => (
                            <li key={item}>
                                <Check />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <a className="btn-ghost" href="/contacto/">Hablar con un especialista</a>
                </div>
            </div>
        </section>
    );
}
