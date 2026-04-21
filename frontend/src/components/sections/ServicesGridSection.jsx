const services = [
  {
    icon: '/wp-content/uploads/2025/12/Augmented-Reality_Icon-@2x-18.png',
    title: 'Servicio SEO Completo',
    body: 'Estrategia integral diseñada para escalar tu visibilidad. Gestionamos contenido, técnica y autoridad para que tu marca lidere los resultados de búsqueda hoy mismo.',
    href: '/servicios-seo-para-posicionamiento-web/servicio-seo-completo/',
  },
  {
    icon: '/wp-content/uploads/2025/12/Augmented-Reality_Icon-@2x-23.png',
    title: 'SEO Consultoría',
    body: 'Asesoría estratégica personalizada para resolver desafíos complejos. Guiamos a tu equipo en la toma de decisiones críticas para maximizar el rendimiento orgánico.',
    href: '/servicios-seo-para-posicionamiento-web/seo-consultoria-aplicada/',
  },
  {
    icon: '/wp-content/uploads/2025/12/Augmented-Reality_Icon-@2x-3.png',
    title: 'Análisis SEO Gratuito',
    body: 'Diagnóstico instantáneo para detectar errores y oportunidades. Evaluamos tu web para ofrecerte una hoja de ruta clara que potencie tu posicionamiento rápidamente.',
    href: '/analisis-seo-gratuito/',
  },
  {
    icon: '/wp-content/uploads/2026/01/Augmented-Reality_Icon-@2x-20.png',
    title: 'SEO Híbrido (Google + IA)',
    body: 'Optimización avanzada para dominar Google y motores de IA. Fusionamos semántica, datos estructurados y visibilidad en entornos generativos para el futuro digital.',
    href: '/servicios-seo-para-posicionamiento-web/servicio-seo-hibrido/',
  },
  {
    icon: '/wp-content/uploads/2026/01/Augmented-Reality_Icon-@2x-2.png',
    title: 'Dashboard de Inteligencia de Datos (SEO Analytics)',
    body: 'Visualización de métricas clave en tiempo real. Transformamos datos complejos en decisiones estratégicas claras para medir tu retorno de inversión real.',
    href: '/servicios-seo-para-posicionamiento-web/seo-analytics/',
  },
  {
    icon: '/wp-content/uploads/2026/01/Augmented-Reality_Icon-@2x-7.png',
    title: 'Auditoría Técnica Profesional',
    body: 'Análisis profundo de arquitectura, indexación y Core Web Vitals. Optimizamos la base técnica de tu sitio para garantizar un rastreo eficiente y carga ultra rápida.',
    href: '/servicios-seo-para-posicionamiento-web/auditoria-tecnica-seo/',
  },
];

export default function ServicesGridSection() {
  return (
    <section className="home-section">
      <div className="home-container">
        <h2 className="home-h2 is-center">Nuestros servicios de SEO</h2>
        <div className="home-services-grid">
          {services.map((s) => (
            <article key={s.title} className="home-card home-service-card">
              <div className="home-service-icon">
                <img src={s.icon} alt="" loading="lazy" decoding="async" />
              </div>
              <h3 className="home-service-title">{s.title}</h3>
              <p className="home-service-body">{s.body}</p>
              <a className="home-link-arrow" href={s.href}>
                Ver detalles del servicio →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
