import { useState } from 'react';

const faqs = [
  {
    q: '¿Qué diferencia este servicio de la consultoría?',
    a: 'Una agencia SEO internacional se encarga de posicionar un sitio web en distintos países e idiomas, adaptando tanto el contenido como la estructura técnica para cada mercado. Esto incluye investigación de keywords locales, optimización técnica, contenido multilingüe y estrategias de link building global.',
  },
  {
    q: '¿Cuál es la diferencia entre SEO local e internacional?',
    a: 'El SEO local se enfoca en posicionar un negocio en una ubicación específica, mientras que el SEO internacional busca visibilidad en múltiples países o regiones. El SEO internacional requiere una estrategia más compleja que incluye idioma, cultura, competencia y estructura técnica global.',
  },
  {
    q: '¿Qué es hreflang y por qué es importante?',
    a: 'El SEO local se enfoca en posicionar un negocio en una ubicación específica, mientras que el SEO internacional busca visibilidad en múltiples países o regiones. El SEO internacional requiere una estrategia más compleja que incluye idioma, cultura, competencia y estructura técnica global.',
  },
  {
    q: '¿Cómo funciona el SEO internacional?',
    a: 'El SEO internacional funciona adaptando una web para diferentes países o idiomas mediante estrategias como el uso de etiquetas hreflang, estructuras URL específicas y contenido localizado. El objetivo es que los motores de búsqueda muestren la versión correcta del sitio a cada usuario según su ubicación o idioma.',
  },
  {
    q: '¿Cuánto cuesta el SEO internacional?',
    a: 'El costo del SEO internacional varía según la cantidad de países, idiomas y la competencia de cada mercado. Generalmente es una inversión mayor que el SEO local, pero también ofrece un potencial de crecimiento mucho más amplio.',
  },
  {
    q: '¿Cuánto tiempo tarda en funcionar el SEO internacional?',
    a: 'El SEO internacional suele comenzar a mostrar resultados entre 3 y 6 meses, aunque en mercados competitivos puede tomar más tiempo. Es una estrategia de crecimiento progresivo y sostenible.',
  },
];

const styles = `
  .seo-int-mm {
    padding: 72px 24px;
  }
  .seo-int-mm-inner {
    max-width: 1180px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: start;
  }

  .seo-int-mm-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1.2;
    color: #FFFFFF;
    margin: 0 0 24px;
  }
  .seo-int-mm-h2 .seo-int-accent {
    color: #38FEDA;
  }
  .seo-int-mm-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 18px;
  }
  .seo-int-mm-p:last-child {
    margin-bottom: 0;
  }

  .seo-int-faq-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: #38FEDA;
    margin: 0 0 20px;
  }
  .seo-int-faq-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .seo-int-faq-item {
    background: rgba(56, 254, 218, 0.04);
    border: 1px solid rgba(56, 254, 218, 0.2);
    border-radius: 12px;
    overflow: hidden;
    transition: border-color 200ms ease, background 200ms ease;
  }
  .seo-int-faq-item:hover {
    border-color: rgba(56, 254, 218, 0.45);
    background: rgba(56, 254, 218, 0.07);
  }
  .seo-int-faq-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    background: transparent;
    border: 0;
    text-align: left;
    padding: 18px 20px;
    cursor: pointer;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 15px;
    line-height: 1.4;
    color: #FFFFFF;
    letter-spacing: 0.01em;
  }
  .seo-int-faq-icon {
    flex: 0 0 auto;
    width: 22px;
    height: 22px;
    border-radius: 999px;
    border: 1px solid rgba(56, 254, 218, 0.45);
    color: #38FEDA;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    transition: transform 200ms ease;
  }
  .seo-int-faq-item.is-open .seo-int-faq-icon {
    transform: rotate(45deg);
  }
  .seo-int-faq-panel {
    padding: 0 20px 18px;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 14.5px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
    margin: 0;
  }

  @media (max-width: 960px) {
    .seo-int-mm-inner { grid-template-columns: 1fr; gap: 40px; }
  }
  @media (max-width: 640px) {
    .seo-int-mm { padding: 56px 16px; }
    .seo-int-mm-h2 { font-size: 32px; }
  }
`;

export default function SeoIntMultimodalFaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="seo-int-mm">
      <style>{styles}</style>
      <div className="seo-int-mm-inner">
        <div>
          <h2 className="seo-int-mm-h2">
            El Futuro es <span className="seo-int-accent">Multimodal</span>
          </h2>
          <p className="seo-int-mm-p">
            Los algoritmos de búsqueda están evolucionando hacia sistemas multimodales
            que integran texto, voz, imagen y video en un único contexto de
            relevancia. RankAgile está pionerando estrategias de optimización para
            estos nuevos paradigmas.
          </p>
          <p className="seo-int-mm-p">
            Nuestro equipo de research está trabajando en protocolos de optimización
            para SGE (Search Generative Experience), preparando a nuestros clientes
            para la era post-SERP tradicional donde las respuestas generadas por IA
            reemplazan los enlaces orgánicos.
          </p>
          <p className="seo-int-mm-p">
            La visibilidad del futuro no se mide en rankings, sino en citaciones,
            referencias contextuales y presencia en los knowledge graphs de los LLMs.
            Estamos construyendo esa presencia hoy.
          </p>
        </div>

        <div>
          <span className="seo-int-faq-eyebrow">Preguntas Frecuentes</span>
          <div className="seo-int-faq-list">
            {faqs.map((f, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={f.q}
                  className={`seo-int-faq-item${isOpen ? ' is-open' : ''}`}
                >
                  <button
                    type="button"
                    className="seo-int-faq-btn"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIdx(isOpen ? -1 : i)}
                  >
                    <span>{f.q}</span>
                    <span className="seo-int-faq-icon" aria-hidden="true">+</span>
                  </button>
                  {isOpen && <p className="seo-int-faq-panel">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
