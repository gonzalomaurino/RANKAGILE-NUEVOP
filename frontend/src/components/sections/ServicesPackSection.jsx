const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
const IconChart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3v18h18" />
    <path d="m7 15 4-4 3 3 5-6" />
  </svg>
);
const IconLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1" />
    <path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1" />
  </svg>
);

export default function ServicesPackSection() {
  return (
    <section className="svc-section">
      <span className="svc-eyebrow">SEO Pack</span>
      <h2 className="svc-h2">Servicio SEO Completo</h2>
      <p className="svc-p">
        Entendemos el <a href="https://agenciaseo.com.ar/" target="_blank" rel="noopener">SEO</a>{' '}
        como un proyecto de <strong>ingeniería de datos</strong>. En un
        entorno dominado por la <strong>Inteligencia Artificial</strong>, no
        solo optimizamos para buscadores, sino para los nuevos modelos de
        respuesta (SGE). Combinamos análisis predictivo con visión de
        negocio para convertir tu web en un activo que lidere su sector y
        genere crecimiento escalable.
      </p>
      <p className="svc-p">
        Es un <strong>Servicio Integral</strong> orientado a resultados
        medibles. Alineamos estrategia, ejecución y optimización continua
        para eliminar ineficiencias, mejorar el posicionamiento en
        buscadores y convertir tu sitio web en un activo digital rentable,
        escalable y preparado para el futuro de las búsquedas.
      </p>
      <a className="svc-btn" href="/servicios-seo-para-posicionamiento-web/servicio-seo-completo/">
        Nuestro proceso
      </a>

      <div className="svc-grid-3">
        <article className="svc-card">
          <div className="svc-card-icon"><IconSearch /></div>
          <h3 className="svc-card-title">Investigación y SEO Técnico</h3>
          <ul className="svc-card-list">
            <li><b>Optimización de Core Web Vitals:</b> experiencia de usuario y velocidad, factores críticos para el ranking moderno.</li>
            <li><b>Arquitectura de Datos y Marcado Schema:</b> algoritmos de IA para la comprensión profunda de tu catálogo de servicios.</li>
            <li><b>Salud del Sitio:</b> eliminamos errores de rastreo e indexación que frenan tu crecimiento.</li>
          </ul>
        </article>
        <article className="svc-card">
          <div className="svc-card-icon"><IconChart /></div>
          <h3 className="svc-card-title">Estrategia de Contenidos e Intelligence Search</h3>
          <ul className="svc-card-list">
            <li><b>Keyword Intelligence con IA:</b> herramientas IA para identificar nichos de oportunidad antes que tu competencia.</li>
            <li><b>Optimización de la Intención de Búsqueda:</b> alineamos cada pieza de contenido con las etapas Tofu, Mofu, Bofu.</li>
            <li><b>Experiencia, Autoridad y Confiabilidad:</b> reforzamos la autoridad de tu marca para que Google te priorice como fuente oficial.</li>
          </ul>
        </article>
        <article className="svc-card">
          <div className="svc-card-icon"><IconLink /></div>
          <h3 className="svc-card-title">Link Building, análisis de datos y Conversión</h3>
          <ul className="svc-card-list">
            <li>Link Building de Alta Calidad.</li>
            <li><b>Atribución y Modelado de Datos:</b> paneles en tiempo real para entender de dónde vienen tus clientes y cómo interactúan con tu web.</li>
            <li><b>Optimización del ROI:</b> ajustamos constantemente la estrategia para reducir el costo de adquisición de leads y maximizar las oportunidades comerciales.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
