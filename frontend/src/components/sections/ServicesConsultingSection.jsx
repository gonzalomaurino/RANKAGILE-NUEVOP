const IconClipboard = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="8" y="3" width="8" height="4" rx="1" />
    <path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2" />
    <path d="M9 13h6M9 17h4" />
  </svg>
);
const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
const IconPulse = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12h4l2-6 4 12 2-6h6" />
  </svg>
);

export default function ServicesConsultingSection() {
  return (
    <section className="svc-section">
      <span className="svc-eyebrow">Especialistas en SEO</span>
      <h2 className="svc-h2">Consultoría SEO Internacional</h2>
      <p className="svc-p">
        A diferencia de un proyecto integral, <a href="/">nuestra</a>{' '}
        <strong>Consultoría SEO Internacional</strong> está diseñada para
        empresas que ya cuentan con un equipo de ejecución o desarrollo,
        pero necesitan una{' '}
        <strong>dirección estratégica clara y validada</strong>. En un
        entorno donde la IA cambia las reglas del juego cada semana, nuestro
        servicio actúa como una brújula de alta precisión para evitar
        esfuerzos en vano y maximizar el impacto de cada acción.
      </p>
      <p className="svc-p">
        Es el servicio ideal para quienes buscan{' '}
        <strong>
          soluciones a problemas específicos, auditorías profundas o una
          hoja de ruta técnica
        </strong>{' '}
        que garantice que su inversión digital va por el camino correcto.
      </p>
      <a className="svc-btn" href="/servicios-seo-para-posicionamiento-web/seo-consultoria-aplicada/">
        Nuestro proceso
      </a>

      <div className="svc-grid-3">
        <article className="svc-card">
          <div className="svc-card-icon"><IconClipboard /></div>
          <h3 className="svc-card-title">Auditorías Diagnósticas</h3>
          <ul className="svc-card-list">
            <li>Análisis exhaustivo de tu sitio para identificar bloqueos técnicos, penalizaciones o pérdidas de tráfico que están frenando tu crecimiento.</li>
          </ul>
        </article>
        <article className="svc-card">
          <div className="svc-card-icon"><IconShield /></div>
          <h3 className="svc-card-title">Acompañamiento y Soporte Técnico</h3>
          <ul className="svc-card-list">
            <li>Supervisamos la implementación de nuestras recomendaciones, asegurando que el equipo de desarrollo o diseño ejecute las mejoras sin errores.</li>
          </ul>
        </article>
        <article className="svc-card">
          <div className="svc-card-icon"><IconPulse /></div>
          <h3 className="svc-card-title">Análisis de Rendimiento</h3>
          <ul className="svc-card-list">
            <li>Definimos las métricas reales que impactan en tu negocio, enseñándote a interpretar los datos para tomar decisiones basadas en resultados, no en suposiciones.</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
