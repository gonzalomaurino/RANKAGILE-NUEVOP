const posts = [
  {
    href: '/como-funciona-el-algoritmo-pagerank-de-google/',
    image: '/wp-content/uploads/2026/03/Frame-18.png',
    alt: 'PageRank',
    title: 'PageRank',
    date: 'Mar 31, 2026',
    excerpt:
      'PageRank no es una métrica del pasado. Es la arquitectura de confianza sobre la que Google construyó su hegemonía de búsqueda. Entender cómo fluye la autoridad entre dominios es la diferencia entre optimizar contenido y construir posicionamiento sostenible en m…',
  },
  {
    href: '/agencia-seo-internacional-rankagile/',
    image: '/wp-content/uploads/2026/03/Gemini_Generated_Image_jyt690jyt690jyt6.png',
    alt: 'Agencia SEO Internacional: RankAgile',
    title: 'Agencia SEO Internacional: RankAgile',
    date: 'Mar 27, 2026',
    excerpt:
      'Descubrí cómo una agencia SEO internacional como RankAgile puede ayudarte a posicionar tu negocio en múltiples países, atraer tráfico global y escalar de forma estratégica.',
  },
  {
    href: '/branding-digital/',
    image: '/wp-content/uploads/2026/03/branding-1200.png',
    alt: 'Representación visual de identidad digital y branding formada por partículas de datos e inteligencia artificial.',
    title: 'Branding Digital',
    date: 'Mar 18, 2026',
    excerpt:
      'En el entorno digital actual, el branding ya no es solo una cuestión de diseño, sino de estrategia, coherencia y conexión auténtica con la audiencia. En RankAgile entendemos que una marca sólida se construye combinando identidad visual, narrativa clara y presencia …',
  },
  {
    href: '/zero-click-search/',
    image: '/wp-content/uploads/2026/03/Gemini_Generated_Image_jsskfcjsskfcjssk-1.png',
    alt: 'Ilustración conceptual de una interfaz de inteligencia artificial resolviendo consultas de usuario, representando el fenómeno de Zero-Click Search y la estrategia GEO de RankAgile.',
    title: 'Zero-Click Search',
    date: 'Mar 12, 2026',
    excerpt:
      'El Zero-Click Search está redefiniendo las reglas del SEO. Descubre cómo las búsquedas sin clic impactan en tu visibilidad y qué estrategias aplicamos en RankAgile para convertir tu contenido en la respuesta directa de Google y los motores de IA',
  },
  {
    href: '/geo/',
    image: '/wp-content/uploads/2026/03/GEO.jpg',
    alt: 'Arquitectura de datos y nodos de inteligencia artificial representando la estrategia GEO de RankAgile para posicionamiento en motores generativos.',
    title: 'GEO: Generative Engine Optimization',
    date: 'Mar 3, 2026',
    excerpt:
      'GEO: Optimizando para la Intención, no solo para la Keyword. 📊 El Generative Engine Optimization redefine la visibilidad digital. Analizamos las métricas de citación, la relevancia semántica y el uso de datos estructurados necesarios para que los motores de…',
  },
  {
    href: '/seo-para-empresas/',
    image: '/wp-content/uploads/2026/01/attorney-11.jpg',
    alt: 'SEO Para Empresas',
    title: 'SEO Para Empresas',
    date: 'Feb 25, 2026',
    excerpt:
      'SEO para Empresas: Potencia tu Visibilidad Online Descubre cómo el SEO Para Empresas puede transformar tu negocio, mejorando tu presencia digital y atrayendo más clientes potenciales. Descubre Más Optimización AvanzadaImplementa estrategias de SEO personalizadas para…',
  },
];

export default function BlogGridSection() {
  return (
    <section className="ra-blog-grid">
      {posts.map((p) => (
        <article key={p.href} className="ra-blog-card">
          <a className="ra-blog-card-image" href={p.href}>
            <img src={p.image} alt={p.alt} loading="lazy" decoding="async" />
          </a>
          <div className="ra-blog-card-body">
            <h2 className="ra-blog-card-title">
              <a href={p.href}>{p.title}</a>
            </h2>
            <p className="ra-blog-card-meta">
              <span>{p.date}</span>
              <span aria-hidden="true">·</span>
              <a href="/category/seo/" rel="tag">SEO</a>
            </p>
            <p className="ra-blog-card-excerpt">{p.excerpt}</p>
            <a className="ra-blog-card-link" href={p.href}>Leer más →</a>
          </div>
        </article>
      ))}
    </section>
  );
}
