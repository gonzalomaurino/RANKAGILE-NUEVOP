import useDocumentMeta from '../hooks/useDocumentMeta.js';
import BlogHeroSection from '../components/sections/BlogHeroSection.jsx';
import BlogGridSection from '../components/sections/BlogGridSection.jsx';
import BlogPaginationSection from '../components/sections/BlogPaginationSection.jsx';

const styles = `
  .ra-blog-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 96px 24px 120px;
  }
  .ra-blog-container {
    max-width: 1180px;
    margin: 0 auto;
  }

  .ra-blog-hero {
    text-align: center;
    margin-bottom: 64px;
  }
  .ra-blog-eyebrow {
    display: inline-block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .ra-blog-h1 {
    font-weight: 700;
    font-size: clamp(2.5rem, 5vw, 3.2rem);
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0;
  }

  .ra-blog-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-bottom: 56px;
  }

  .ra-blog-card {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: border-color 200ms ease, background 200ms ease, transform 200ms ease;
  }
  .ra-blog-card:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
    transform: translateY(-2px);
  }

  .ra-blog-card-image {
    display: block;
    aspect-ratio: 400 / 284;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.4);
  }
  .ra-blog-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 400ms ease;
  }
  .ra-blog-card:hover .ra-blog-card-image img {
    transform: scale(1.04);
  }

  .ra-blog-card-body {
    padding: 24px 22px 26px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex: 1;
  }

  .ra-blog-card-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 1.3;
    margin: 0;
    color: #FFFFFF;
  }
  .ra-blog-card-title a {
    color: inherit;
    text-decoration: none;
    transition: color 150ms ease;
  }
  .ra-blog-card-title a:hover {
    color: #38FEDA;
  }

  .ra-blog-card-meta {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
  }
  .ra-blog-card-meta a {
    color: #38FEDA;
    text-decoration: none;
    transition: color 150ms ease;
  }
  .ra-blog-card-meta a:hover {
    color: #5affe3;
  }

  .ra-blog-card-excerpt {
    font-weight: 300;
    font-size: 14.5px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
    flex: 1;
  }

  .ra-blog-card-link {
    align-self: flex-start;
    font-weight: 600;
    font-size: 14px;
    color: #38FEDA;
    text-decoration: none;
    letter-spacing: 0.02em;
    margin-top: 6px;
    transition: color 150ms ease, transform 150ms ease;
  }
  .ra-blog-card-link:hover {
    color: #5affe3;
    transform: translateX(2px);
  }

  .ra-blog-pagination {
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
  }
  .ra-blog-page-prev,
  .ra-blog-page-next {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #0A0A0A;
    background: #38FEDA;
    border: 0;
    border-radius: 999px;
    padding: 14px 28px;
    text-decoration: none;
    cursor: pointer;
    transition: transform 150ms ease, background 150ms ease;
  }
  .ra-blog-page-prev:hover,
  .ra-blog-page-next:hover {
    background: #5affe3;
    transform: translateY(-1px);
  }

  @media (max-width: 960px) {
    .ra-blog-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 640px) {
    .ra-blog-page { padding: 64px 16px 88px; }
    .ra-blog-grid { grid-template-columns: 1fr; gap: 22px; }
    .ra-blog-hero { margin-bottom: 40px; }
  }
`;

export default function BlogsPage() {
  useDocumentMeta({
    title: 'Blogs: Descubre las Novedades SEO | RankAgile',
    description:
      'Descubrí en el blog de RankAgile las últimas estrategias de SEO, marketing digital y posicionamiento web. Contenidos prácticos para crecer.',
  });

  return (
    <main className="ra-blog-page">
      <style>{styles}</style>
      <div className="ra-blog-container">
        <BlogHeroSection />
        <BlogGridSection />
        <BlogPaginationSection />
      </div>
    </main>
  );
}
