import { useState } from 'react';

const testimonials = [
  {
    quote: 'El enfoque estratégico y basado en datos nos permitió aumentar el tráfico orgánico calificado y detectar oportunidades que antes no estábamos aprovechando.',
    author: 'María Teresa Marín',
  },
  {
    quote: 'Logramos mejorar la visibilidad de nuestro sitio en búsquedas clave y ordenar la estrategia SEO con foco en resultados reales. El trabajo fue claro, medible y alineado a nuestros objetivos comerciales.',
    author: 'Hugo Roberto Vélez',
  },
  {
    quote: 'Destaco la claridad en el análisis, la planificación y el seguimiento. No solo optimizaron el sitio, sino que nos ayudaron a entender cómo escalar nuestra presencia online.',
    author: 'Robert Campozano',
  },
];

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const current = testimonials[idx];

  return (
    <section className="home-section">
      <div className="home-container home-narrow">
        <blockquote className="home-testimonial" aria-live="polite">
          <span className="home-testimonial-mark" aria-hidden="true">&ldquo;</span>
          <p className="home-testimonial-quote">{current.quote}</p>
          <footer className="home-testimonial-author">— {current.author}</footer>
        </blockquote>
        <div className="home-testimonial-controls">
          <button
            type="button"
            className="home-testimonial-btn"
            onClick={prev}
            aria-label="Testimonio anterior"
          >
            ←
          </button>
          <div className="home-testimonial-dots" role="tablist">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                role="tab"
                aria-selected={i === idx}
                aria-label={`Testimonio ${i + 1}`}
                className={`home-testimonial-dot${i === idx ? ' is-active' : ''}`}
                onClick={() => setIdx(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="home-testimonial-btn"
            onClick={next}
            aria-label="Siguiente testimonio"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
