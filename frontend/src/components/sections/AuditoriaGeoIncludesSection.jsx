const features = [
    {
        title: 'Crawlability e Indexacion',
        body: 'Robots.txt, sitemap XML, directivas noindex/nofollow, errores de crawl, budget optimization, arquitectura de informacion y profundidad de paginas.',
    },
    {
        title: 'Core Web Vitals y Performance',
        body: 'LCP, FID, CLS, TTFB, velocidad de carga movil/desktop, optimizacion de recursos, lazy loading, critical rendering path.',
    },
    {
        title: 'Arquitectura Web y URLs',
        body: 'Estructura de URLs, jerarquia de sitio, internal linking, breadcrumbs, paginacion, parametros URL, canonicalizacion.',
    },
    {
        title: 'JavaScript y Rendering',
        body: 'Client-side rendering issues, JavaScript bloqueante, frameworks SPA (React/Vue/Angular), hydration, SSR/SSG optimization.',
    },
    {
        title: 'Schema Markup y Datos Estructurados',
        body: 'Implementacion de Schema.org, JSON-LD, validacion de markup, oportunidades de rich snippets, structured data errors.',
    },
    {
        title: 'Mobile-First y Responsive',
        body: 'Mobile usability, viewport configuration, touch elements, font sizes, mobile performance, AMP implementation si aplica.',
    },
    {
        title: 'Seguridad y HTTPS',
        body: 'Certificados SSL/TLS, mixed content, HSTS, secure cookies, redirects HTTP->HTTPS, security headers.',
    },
    {
        title: 'Contenido Duplicado y Canonicals',
        body: 'Deteccion de contenido duplicado interno/externo, canonical tags, parametros URL, variantes www/non-www, trailing slashes.',
    },
    {
        title: 'Hreflang e Internacional',
        body: 'Implementacion hreflang, estructura internacional (ccTLDs, subdirectorios, subdominios), targeting geografico.',
    },
    {
        title: 'Log File Analysis',
        body: 'Analisis de server logs para entender comportamiento de Googlebot, crawl budget usage, paginas descubiertas vs crawleadas.',
    },
];

export default function AuditoriaGeoIncludesSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Analisis exhaustivo</span>
            <h2 className="geo-page-h2">Que incluye la auditoria</h2>
            <div className="geo-accordion-grid">
                {features.map((feature) => (
                    <details key={feature.title} className="geo-accordion-card">
                        <summary>
                            <span className="geo-accordion-title">{feature.title}</span>
                            <span className="geo-accordion-icon">+</span>
                        </summary>
                        <p className="geo-accordion-body">{feature.body}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
