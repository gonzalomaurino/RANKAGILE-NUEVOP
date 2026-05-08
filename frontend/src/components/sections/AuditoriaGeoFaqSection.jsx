const faqs = [
    { q: '¿Cuanto tarda la auditoria?', a: '7-14 dias dependiendo del tamaño del sitio. Sitios pequeños (<1K paginas): 7 dias. Medianos (1K-10K): 10 dias. Grandes (>10K): 14 dias.' },
    { q: '¿Necesito acceso tecnico al sitio?', a: 'No para la auditoria inicial. Minimo: GSC + GA4. Ideal: + acceso a CMS/codigo para validacion post-fix o analisis de server logs.' },
    { q: '¿Incluye implementacion de fixes?', a: 'La auditoria entrega el diagnostico + roadmap. La implementacion se puede contratar por separado o tu equipo puede ejecutar internamente con nuestro roadmap.' },
    { q: '¿Que recibo exactamente?', a: 'Informe PDF ejecutivo (30-50 pags), roadmap tecnico priorizado en spreadsheet, crawl data exportable y sesion de presentacion + Q&A (60 min).' },
    { q: '¿Funciona para mi CMS/framework?', a: 'Si. WordPress, Shopify, Webflow, Next.js, Gatsby, custom stacks. Tenemos experiencia auditando todo tipo de arquitecturas, incluyendo headless/JAMstack.' },
    { q: '¿Con que frecuencia deberia auditar?', a: 'Anualmente como minimo. Cada vez que hagas cambios tecnicos mayores (migracion, redesign, cambio de CMS). O si detectas caidas inexplicables de trafico.' },
];

export default function AuditoriaGeoFaqSection() {
    return (
        <section className="geo-page-section">
            <span className="geo-page-eyebrow">Preguntas frecuentes</span>
            <h2 className="geo-page-h2">Lo que suelen preguntarnos</h2>
            <div className="geo-page-faq">
                {faqs.map((faq, index) => (
                    <details key={index}>
                        <summary>{faq.q}</summary>
                        <p className="geo-page-faq-body">{faq.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
