const features = [
  { title: '✓ Crawlability e Indexación', body: 'Robots.txt, sitemap XML, directivas noindex/nofollow, errores de crawl, budget optimization, arquitectura de información y profundidad de páginas.' },
  { title: '✓ Core Web Vitals y Performance', body: 'LCP, FID, CLS, TTFB, velocidad de carga móvil/desktop, optimización de recursos, lazy loading, critical rendering path.' },
  { title: '✓ Arquitectura Web y URLs', body: 'Estructura de URLs, jerarquía de sitio, internal linking, breadcrumbs, paginación, parámetros URL, canonicalización.' },
  { title: '✓ JavaScript y Rendering', body: 'Client-side rendering issues, JavaScript bloqueante, frameworks SPA (React/Vue/Angular), hydration, SSR/SSG optimization.' },
  { title: '✓ Schema Markup y Datos Estructurados', body: 'Implementación de Schema.org, JSON-LD, validación de markup, oportunidades de rich snippets, structured data errors.' },
  { title: '✓ Mobile-First y Responsive', body: 'Mobile usability, viewport configuration, touch elements, font sizes, mobile performance, AMP implementation si aplica.' },
  { title: '✓ Seguridad y HTTPS', body: 'Certificados SSL/TLS, mixed content, HSTS, secure cookies, redirects HTTP→HTTPS, security headers.' },
  { title: '✓ Contenido Duplicado y Canonicals', body: 'Detección de contenido duplicado interno/externo, canonical tags, parámetros URL, variantes www/non-www, trailing slashes.' },
  { title: '✓ Hreflang e Internacional', body: 'Implementación hreflang, estructura internacional (ccTLDs, subdirectorios, subdominios), targeting geográfico.' },
  { title: '✓ Log File Analysis', body: 'Análisis de server logs para entender comportamiento de Googlebot, crawl budget usage, páginas descubiertas vs crawleadas.' },
];

export default function AuditoriaFeaturesSection() {
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">Análisis Exhaustivo</span>
        <h2 className="ra-aud-h2">Qué incluye la auditoría</h2>
        <div className="ra-aud-features">
          {features.map((f) => (
            <div key={f.title} className="ra-aud-feature">
              <h4>{f.title}</h4>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
