import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import ClaudeFooter from '../components/ClaudeFooter.jsx';
import '../styles/claude-system.css';

const styles = `
  .preview-page {
    min-height: 100vh;
    padding: 64px 24px 120px;
    background: #000000;
    color: #FFFFFF;
  }
  .preview-container {
    max-width: 980px;
    margin: 0 auto;
  }
  .preview-title {
    font-size: clamp(2.2rem, 4vw, 2.8rem);
    font-weight: 700;
    margin: 0 0 12px;
  }
  .preview-lead {
    color: rgba(255, 255, 255, 0.78);
    font-size: 17px;
    line-height: 1.6;
    margin: 0 0 32px;
  }
  .preview-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 14px;
  }
  .preview-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(56, 254, 218, 0.24);
    background: rgba(56, 254, 218, 0.04);
    border-radius: 14px;
    padding: 16px 20px;
    color: #FFFFFF;
    text-decoration: none;
    transition: border-color 150ms ease, background 150ms ease, transform 150ms ease;
  }
  .preview-link:hover {
    border-color: rgba(56, 254, 218, 0.5);
    background: rgba(56, 254, 218, 0.08);
    transform: translateY(-1px);
  }
  .preview-name {
    font-weight: 600;
  }
  .preview-path {
    font-size: 13px;
    color: rgba(255, 255, 255, 0.6);
  }
`;

const PAGES = [
    { name: 'Quienes Somos', path: '/preview/quienes-somos' },
    { name: 'GEO', path: '/preview/geo' },
    { name: 'SEO Completo', path: '/preview/seo-completo' },
    { name: 'Auditoria Tecnica', path: '/preview/auditoria-tecnica' },
    { name: 'SEO Hibrido', path: '/preview/seo-hibrido' },
    { name: 'SEO Consultoria', path: '/preview/seo-consultoria' },
    { name: 'SEO Analytics', path: '/preview/seo-analytics' },
    { name: 'Blogs', path: '/preview/blogs' },
    { name: 'Privacidad', path: '/preview/privacidad' },
    { name: 'Cookies', path: '/preview/cookies' },
];

export default function PreviewPages() {
    return (
        <>
            <ClaudeNavbar />
            <main className="preview-page">
                <style>{styles}</style>
                <div className="preview-container">
                    <h1 className="preview-title">Preview de paginas nuevas</h1>
                    <p className="preview-lead">
                        Accede a cada pagina nueva sin cambiar rutas oficiales. Estas rutas
                        son solo para revision.
                    </p>
                    <ul className="preview-list">
                        {PAGES.map((page) => (
                            <li key={page.path}>
                                <a className="preview-link" href={page.path}>
                                    <span className="preview-name">{page.name}</span>
                                    <span className="preview-path">{page.path}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <ClaudeFooter />
        </>
    );
}
