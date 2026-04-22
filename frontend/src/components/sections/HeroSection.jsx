export default function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-container">
        <span className="home-eyebrow is-center">Posicionamiento Web</span>
        <h1 className="home-h1">
          Agencia SEO internacional experta en SEO para IA (GEO) y motores
          generativos
        </h1>
        <p className="home-hero-sub">
          Hacé que tu empresa aparezca en{' '}
          <span className="home-accent">Google</span>,{' '}
          <span className="home-accent">ChatGPT</span> e{' '}
          <span className="home-accent">IA</span> con una estrategia{' '}
          <span className="home-accent">SEO</span> orientada a resultados
          reales, para atraer clientes, ganar visibilidad, autoridad y escalar
          tu marca.
        </p>
        <div className="home-hero-cta">
          <a className="home-btn" href="#form">Recibir propuesta</a>
        </div>
      </div>
    </section>
  );
}
