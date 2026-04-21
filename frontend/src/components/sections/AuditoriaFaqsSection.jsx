const faqs = [
  { q: '¿Cuánto tarda la auditoría?', a: '7-14 días dependiendo del tamaño del sitio. Sitios pequeños (<1K páginas): 7 días. Medianos (1K-10K): 10 días. Grandes (>10K): 14 días.' },
  { q: '¿Necesito acceso técnico al sitio?', a: 'No para la auditoría inicial. Mínimo: GSC + GA4. Ideal: + acceso a CMS/código para validación post-fix o análisis de server logs.' },
  { q: '¿Incluye implementación de fixes?', a: 'La auditoría entrega el diagnóstico + roadmap. La implementación se puede contratar por separado o tu equipo puede ejecutar internamente con nuestro roadmap.' },
  { q: '¿Qué recibo exactamente?', a: 'Informe PDF ejecutivo (30-50 págs), roadmap técnico priorizado en spreadsheet, crawl data exportable y sesión de presentación + Q&A (60 min).' },
  { q: '¿Funciona para mi CMS/framework?', a: 'Sí. WordPress, Shopify, Webflow, Next.js, Gatsby, custom stacks. Tenemos experiencia auditando todo tipo de arquitecturas, incluyendo headless/JAMstack.' },
  { q: '¿Con qué frecuencia debería auditar?', a: 'Anualmente como mínimo. Cada vez que hagas cambios técnicos mayores (migración, redesign, cambio de CMS). O si detectás caídas inexplicables de tráfico.' },
];

export default function AuditoriaFaqsSection() {
  return (
    <section className="ra-aud-section">
      <div className="ra-aud-container">
        <span className="ra-aud-eyebrow">Preguntas Frecuentes</span>
        <h2 className="ra-aud-h2">Lo que suelen preguntarnos</h2>
        <div className="ra-aud-faqs">
          {faqs.map((f) => (
            <div key={f.q} className="ra-aud-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
