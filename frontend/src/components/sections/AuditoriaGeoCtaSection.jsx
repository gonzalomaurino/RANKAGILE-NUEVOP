const ArrowUpRight = ({ size = 14 }) => (
    <svg className="arrow" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

export default function AuditoriaGeoCtaSection() {
    return (
        <section style={{ padding: '40px 0 60px' }}>
            <div className="cta-band">
                <div className="aurora"></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <span className="eyebrow centered">empieza hoy</span>
                    <h2 className="display" style={{ marginTop: 18, maxWidth: 720, marginInline: 'auto' }}>
                        Solicita tu auditoria tecnica
                    </h2>
                    <p style={{ color: 'var(--fg-dim)', fontSize: 17, maxWidth: 560, margin: '22px auto 0' }}>
                        Conversamos 30 minutos sobre tu sitio y objetivos. Te enviamos
                        propuesta personalizada con alcance, timing y pricing.
                    </p>
                    <div style={{ marginTop: 32, display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                        <a className="btn-pill" href="/contacto/">Hablar con un especialista <ArrowUpRight /></a>
                    </div>
                </div>
            </div>
        </section>
    );
}
