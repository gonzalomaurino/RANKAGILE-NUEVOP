const faqs = [
  { q: '¿Qué diferencia este servicio de la consultoría?', a: 'El Servicio SEO Completo es hands-on: nosotros ejecutamos toda la estrategia. La consultoría es estratégica: te guiamos para que tu equipo interno implemente las acciones.' },
  { q: '¿Necesito invertir en contenido aparte?', a: 'El servicio incluye estrategia y optimización de contenido existente. Si requerís creación extensiva de contenido nuevo, podemos coordinar redactores especializados bajo presupuesto adicional.' },
  { q: '¿Trabajan con mi CMS actual?', a: 'Sí. Trabajamos con WordPress, Shopify, Webflow, custom frameworks y cualquier CMS con acceso programático.' },
  { q: '¿Qué reportes recibiré y con qué frecuencia?', a: 'Informe ejecutivo mensual con evolución de rankings, tráfico orgánico, Core Web Vitals, link building, análisis de competencia y próximas acciones. Incluye sesión de revisión si lo requerís.' },
  { q: '¿Puedo pausar o cancelar el servicio?', a: 'Recomendamos mínimo 6 meses para ver resultados sólidos, pero no hay permanencia forzada. Podés cancelar con 30 días de aviso.' },
  { q: '¿Cuánto tarda en verse resultados?', a: 'Mes 1-2: fundamentos técnicos. Mes 3-4: primeros movimientos en rankings. Mes 5-6: crecimiento orgánico medible. Mes 7+: consolidación y escalabilidad.' },
];

export default function SeoCompletoFaqsSection() {
  return (
    <section className="ra-comp-section">
      <div className="ra-comp-container">
        <span className="ra-comp-eyebrow">Preguntas Frecuentes</span>
        <h2 className="ra-comp-h2">Lo que suelen preguntarnos</h2>
        <div className="ra-comp-faqs">
          {faqs.map((f) => (
            <div key={f.q} className="ra-comp-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
