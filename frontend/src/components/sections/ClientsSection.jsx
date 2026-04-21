const clients = [
  { href: 'https://veraligne.com/', img: '/wp-content/uploads/2026/04/Group-20.png', name: 'Veraligne' },
  { href: 'https://digitalaxios.com/', img: '/wp-content/uploads/2026/04/Group-18.png', name: 'Digital Axios' },
  { href: 'https://winwindream.com/inicio/', img: '/wp-content/uploads/2026/04/Frame-12-3.png', name: 'WinWin Dream' },
  { href: 'https://humaniainitiative.com/', img: '/wp-content/uploads/2026/04/Group-14.png', name: 'Humania Initiative' },
  { href: 'https://habisite.com/', img: '/wp-content/uploads/2026/04/Group-15.png', name: 'Habisite' },
  { href: 'https://interrealcapital.com/', img: '/wp-content/uploads/2026/04/Frame-11-1.png', name: 'Interreal Capital' },
];

export default function ClientsSection() {
  return (
    <section className="home-section">
      <div className="home-container">
        <div className="home-center-stack">
          <span className="home-eyebrow is-center">Confianza y transparencia</span>
          <h2 className="home-h2 is-center">
            Empresas que ya confían en{' '}
            <span className="home-accent">RankAgile</span>
          </h2>
        </div>
        <div className="home-clients-grid">
          {clients.map((c) => (
            <a
              key={c.name}
              className="home-client-logo"
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.name}
            >
              <img src={c.img} alt={c.name} loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
        <p className="home-clients-caption">
          De <span className="home-accent">cero</span> a posicionamiento en
          mercados competitivos
        </p>
      </div>
    </section>
  );
}
