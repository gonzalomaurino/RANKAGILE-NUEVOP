import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/claude-system.css';

// ─── Data ────────────────────────────────────────────────
const POSTS = [
  {
    href: '/blog/dashboard-seo-en-power-bi-para-agencias',
    image: '/assets/DashboardPowerBI.png',
    alt: 'Dashboard SEO en Power BI',
    title: 'Dashboard SEO en Power BI para Agencias',
    tag: 'SEO Analytics',
    date: 'Mar 2026',
    excerpt:
      'Cómo centralizar datos de GSC, GA4 y herramientas de ranking en un único panel de Power BI. Módulos clave, métricas DAX y arquitectura de datos para agencias que reportan a clientes.',
  },
  {
    href: '/blog/seo-y-sem-en-marketing-digital',
    image: '/assets/SeoYSem.png',
    alt: 'SEO y SEM en Marketing Digital',
    title: 'SEO y SEM en Marketing Digital: Diferencias y Estrategia',
    tag: 'SEO · SEM',
    date: 'Feb 2026',
    excerpt:
      'El debate SEO vs SEM es una trampa. Las empresas que dominan los resultados de búsqueda operan ambos canales de forma sincronizada, usando datos de Google Ads para acelerar decisiones de SEO.',
  },
  {
    href: '/blog/seo-que-es-y-para-que-sirve',
    image: '/assets/QueEsSEO.png',
    alt: 'Qué es SEO',
    title: 'SEO: Qué es y para qué sirve — Guía Completa 2026',
    tag: 'SEO',
    date: 'Ene 2026',
    excerpt:
      'El SEO no es una táctica de marketing: es la infraestructura que determina si tu sitio existe para Google o no. Guía completa con los tres pilares, errores frecuentes y cómo aplicarlo.',
  },
  {
    href: '/blog/como-funciona-el-algoritmo-pagerank-de-google',
    image: '/assets/PageRank.png',
    alt: 'PageRank',
    title: '¿Cómo funciona el algoritmo PageRank de Google?',
    tag: 'SEO Técnico',
    date: '31 Mar 2026',
    excerpt:
      'PageRank no es una métrica del pasado. Es la arquitectura de confianza sobre la que Google construyó su hegemonía de búsqueda. Entender cómo fluye la autoridad entre dominios es la diferencia entre optimizar contenido y construir posicionamiento sostenible.',
  },
  {
    href: '/blog/agencia-seo-internacional-rankagile',
    image: '/assets/RankAgileBlog.png',
    alt: 'Agencia SEO Internacional: RankAgile',
    title: 'Agencia SEO Internacional: RankAgile',
    tag: 'SEO',
    date: '27 Mar 2026',
    excerpt:
      'Descubrí cómo una agencia SEO internacional como RankAgile puede ayudarte a posicionar tu negocio en múltiples países, atraer tráfico global y escalar de forma estratégica con una metodología que ya probamos en más de 20 mercados.',
  },
  {
    href: '/blog/branding-digital',
    image: '/assets/BrandingDigital.png',
    alt: 'Branding Digital',
    title: 'Branding Digital: Construí una marca que escala',
    tag: 'Branding',
    date: '18 Mar 2026',
    excerpt:
      'El branding ya no es solo una cuestión de diseño, sino de estrategia, coherencia y conexión auténtica con la audiencia. Una marca sólida combina identidad visual, narrativa clara y presencia digital que convierte visitas en clientes.',
  },
  {
    href: '/blog/zero-click-search',
    image: '/assets/ZeroClick.png',
    alt: 'Zero-Click Search',
    title: 'Zero-Click Search: Cómo adaptarte a las búsquedas sin clic',
    tag: 'GEO',
    date: '12 Mar 2026',
    excerpt:
      'El Zero-Click Search está redefiniendo las reglas del SEO. Las búsquedas sin clic impactan directamente en tu tráfico orgánico. Estas son las estrategias que aplicamos para convertir tu contenido en la respuesta directa de Google y los motores de IA.',
  },
  {
    href: '/blog/geo',
    image: '/assets/GEO.png',
    alt: 'GEO: Generative Engine Optimization',
    title: 'GEO: Generative Engine Optimization',
    tag: 'GEO',
    date: '3 Mar 2026',
    excerpt:
      'El Generative Engine Optimization redefine la visibilidad digital. Analizamos métricas de citación, relevancia semántica y datos estructurados para que los motores de IA —ChatGPT, Gemini, Perplexity— citen tu marca como referencia en su nicho.',
  },
  {
    href: '/blog/seo-para-empresas',
    image: '/assets/SEO Empresas.png',
    alt: 'SEO Para Empresas',
    title: 'SEO Para Empresas: Escalá tu visibilidad online',
    tag: 'SEO',
    date: '25 Feb 2026',
    excerpt:
      'Descubrí cómo el SEO para empresas puede transformar tu negocio mejorando tu presencia digital y atrayendo clientes potenciales cualificados. Estrategias personalizadas para negocios que buscan crecer de forma sostenible.',
  },
];

// ─── Icon ────────────────────────────────────────────────
const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ─── Styles ──────────────────────────────────────────────
const styles = `
  .blog-page {
    min-height: 100vh;
    padding-bottom: 100px;
  }

  /* Hero */
  .blog-hero {
    max-width: 720px;
    margin: 0 auto;
    padding: 80px 32px 56px;
    text-align: center;
  }

  /* Post list */
  .blog-list {
    max-width: 780px;
    margin: 0 auto;
    padding: 0 32px;
    border-top: 1px solid var(--border);
  }

  /* Each post: vertical stack */
  .blog-post {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 52px 0;
    border-bottom: 1px solid var(--border);
  }

  /* Text block */
  .blog-post-content {
    display: flex;
    flex-direction: column;
  }

  .blog-post-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .blog-post-tag {
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 3px 10px;
    border-radius: 999px;
    opacity: 0.9;
  }

  .blog-post-date {
    font-size: 12.5px;
    color: var(--fg-faint);
    font-family: 'JetBrains Mono', monospace;
  }

  .blog-post-title {
    font-size: clamp(1.35rem, 2.5vw, 1.9rem);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: var(--fg);
    text-decoration: none;
    display: block;
    margin-bottom: 14px;
    transition: color 0.2s;
  }

  .blog-post-title:hover {
    color: var(--accent);
  }

  .blog-post-excerpt {
    font-size: 15px;
    color: var(--fg-dim);
    line-height: 1.7;
    margin: 0 0 22px;
  }

  .blog-post-link {
    font-size: 13px;
    font-weight: 600;
    color: var(--accent);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: gap 0.2s ease;
  }

  .blog-post-link:hover {
    gap: 13px;
  }

  /* Image — full width, below the text */
  .blog-post-img {
    display: block;
    border-radius: 16px;
    overflow: hidden;
    aspect-ratio: 16 / 7;
    background: var(--bg-elev);
    width: 100%;
  }

  .blog-post-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* Responsive */
  @media (max-width: 760px) {
    .blog-hero { padding: 56px 20px 40px; }
    .blog-list  { padding: 0 20px; }
    .blog-post  { padding: 40px 0; gap: 20px; }
    .blog-post-title { font-size: 1.3rem; }
    .blog-post-img { aspect-ratio: 16 / 9; }
  }

  @media (max-width: 480px) {
    .blog-post-excerpt { font-size: 14px; }
  }
`;

// ─── Page ─────────────────────────────────────────────────
export default function BlogsPage() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: t('blog.meta.title'),
    description: t('blog.meta.description'),
  });

  return (
    <>
      <ClaudeNavbar />
      <main className="blog-page">
        <style>{styles}</style>

        {/* Hero */}
        <section className="blog-hero">
          <span className="eyebrow centered">{t('blog.eyebrow')}</span>
          <h1 className="display" style={{ marginTop: 16 }}>{t('blog.h1')}</h1>
        </section>

        {/* Post list */}
        <div className="blog-list">
          {POSTS.map((post) => (
            <article key={post.href} className="blog-post">

              {/* Text */}
              <div className="blog-post-content">
                <div className="blog-post-meta">
                  <span className="blog-post-tag">{post.tag}</span>
                  <span className="blog-post-date">{post.date}</span>
                </div>
                <Link to={post.href} className="blog-post-title">
                  {post.title}
                </Link>
                <p className="blog-post-excerpt">{post.excerpt}</p>
                <Link to={post.href} className="blog-post-link">
                  {t('blog.readMore')} <ArrowRight />
                </Link>
              </div>

              {/* Image — below the text, full width */}
              <Link to={post.href} className="blog-post-img" tabIndex={-1} aria-hidden="true">
                <img src={post.image} alt={post.alt} loading="lazy" decoding="async" />
              </Link>

            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
