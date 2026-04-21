export default function ContactInfoSection() {
  return (
    <section className="ct-data-wrap" aria-label="Nuestros datos">
      <h2 className="ct-data-title">Nuestros datos</h2>
      <div className="ct-data-grid">
        <article className="ct-data-card">
          <div className="ct-data-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2"></rect>
              <path d="m3 7 9 6 9-6"></path>
            </svg>
          </div>
          <h3 className="ct-data-h">Email</h3>
          <p className="ct-data-body">
            <a href="mailto:contacto@rankagile.com">contacto@rankagile.com</a>
          </p>
        </article>

        <article className="ct-data-card">
          <div className="ct-data-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12Z"></path>
              <circle cx="12" cy="9" r="2.5"></circle>
            </svg>
          </div>
          <h3 className="ct-data-h">Sedes</h3>
          <p className="ct-data-body">Argentina, Perú, Bolivia</p>
        </article>

        <article className="ct-data-card">
          <div className="ct-data-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"></path>
            </svg>
          </div>
          <h3 className="ct-data-h">Redes</h3>
          <div className="ct-social">
            <a href="#" aria-label="Seguir en Facebook" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4Z"/>
              </svg>
            </a>
            <a href="#" aria-label="Seguir en X" rel="noopener">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.5 3h3l-6.7 7.7L22 21h-6.2l-4.9-6.4L5.3 21H2.3l7.2-8.2L2 3h6.3l4.4 5.9L17.5 3Zm-1.1 16h1.7L7.7 4.9H5.9l10.5 14.1Z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/rankagile/" aria-label="Seguir en LinkedIn" rel="noopener" target="_blank">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.05c.53-.95 1.84-1.95 3.8-1.95 4.07 0 4.82 2.55 4.82 5.87V21h-4v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9.5Z"/>
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
