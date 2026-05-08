const ArrowUpRight = ({ size = 14 }) => (
    <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

export default function ConsultoriaGeoCtaSection() {
    return (
        <section style={{ padding: '40px 0 60px' }}>
            <div className="cta-band">
                <div className="aurora"></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <span className="eyebrow centered">empieza hoy</span>
                    <h2 className="display" style={{ marginTop: 18, maxWidth: 720, marginInline: 'auto' }}>
                        Agenda una sesión de diagnóstico
                    </h2>
                    <p style={{ color: 'var(--fg-dim)', fontSize: 17, maxWidth: 560, margin: '22px auto 0' }}>
                        Conversamos 45 minutos sobre tus desafíos actuales y evaluamos si la
                        consultoría es el camino adecuado. Te compartimos insights accionables
                        desde la primera sesión — sin compromiso.
                    </p>
                    <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <a className="btn-pill" href="/contacto/">Hablar con un especialista <ArrowUpRight /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
