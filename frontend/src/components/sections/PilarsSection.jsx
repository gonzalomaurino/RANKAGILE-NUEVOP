const pilars = [
  {
    title: 'Autoridad Temática Profunda',
    body: 'Los sistemas de IA priorizan fuentes que demuestran dominio exhaustivo del tema. No basta con un artículo superficial: se requiere una arquitectura de contenido que cubra el tema desde múltiples ángulos, niveles de profundidad y casos de uso reales. El topical authority es aún más crítico en GEO (Generative Engine Optimization) que en SEO tradicional, porque las IA buscan la fuente más completa antes de sintetizar respuestas.',
  },
  {
    title: 'SEO On Page Estratégico',
    body: 'La optimización de contenido va más allá de incluir keywords: requiere estructura semántica impecable con headings jerarquizados (H1-H6), meta descripciones persuasivas, URLs descriptivas, imágenes optimizadas con alt text relevante, y enlaces internos que distribuyan autoridad estratégicamente. Las IA analizan la relevancia contextual, la densidad semántica y la experiencia del usuario. Un contenido bien optimizado facilita que tanto Google como motores de IA comprendan y clasifiquen tu expertise temática.',
  },
  {
    title: 'SEO Técnico Profesional',
    body: 'La infraestructura técnica determina si tu contenido puede ser rastreado, indexado y priorizado. Core Web Vitals optimizados (LCP, FID, CLS), arquitectura mobile-first, datos estructurados con Schema Markup, sitemap XML actualizado, velocidad de carga superior, seguridad HTTPS y navegación sin errores 404 son fundamentales. Las IA penalizan sitios lentos o con experiencia deficiente. Un sitio técnicamente sólido garantiza que tu autoridad temática sea accesible y procesable por algoritmos avanzados.',
  },
  {
    title: 'Link Building de Calidad',
    body: 'La autoridad de dominio se construye con enlaces entrantes desde sitios relevantes y confiables. No se trata de cantidad sino de calidad: backlinks desde medios reconocidos, blogs especializados del sector, directorios profesionales y menciones editoriales orgánicas transmiten señales de confiabilidad que Google y las IA interpretan como validación externa. Una estrategia de link building consistente posiciona tu marca como referente, aumentando las probabilidades de ser citado tanto en resultados tradicionales como en respuestas generativas.',
  },
];

export default function PilarsSection() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-center-stack">
          <h2 className="home-h2 is-center">
            Ingeniería SEO: Los{' '}
            <span className="home-accent">pilares de tu visibilidad</span>{' '}
            digital
          </h2>
          <p className="home-p is-center home-narrow-text">
            No existe una fórmula única, pero sí un conjunto de principios
            estratégicos que aumentan exponencialmente tus probabilidades de
            aparecer en las respuestas de ChatGPT, Perplexity, Gemini y otros
            motores de IA.
          </p>
        </div>
        <div className="home-pilars-grid">
          {pilars.map((p) => (
            <article key={p.title} className="home-pilar">
              <h3 className="home-pilar-title">{p.title}</h3>
              <p className="home-pilar-body">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
