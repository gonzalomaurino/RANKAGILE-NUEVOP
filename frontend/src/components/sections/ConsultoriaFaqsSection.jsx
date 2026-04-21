const faqs = [
  { q: '¿Con qué frecuencia nos reunimos?', a: 'Sesiones mensuales de 90 minutos como estándar. En proyectos de alta complejidad o migraciones técnicas, podemos aumentar la frecuencia temporalmente.' },
  { q: '¿Cuál es la duración mínima?', a: 'Recomendamos mínimo 3 meses para proyectos puntuales, 6-12 meses para transformaciones estratégicas. No hay permanencia forzada — puedes cancelar con 30 días de aviso.' },
  { q: '¿Necesito conocimientos técnicos previos?', a: 'No. Adaptamos el lenguaje según tu perfil (CEO, CMO, Product Manager, CTO). Explicamos conceptos técnicos de forma accesible sin perder rigurosidad.' },
  { q: '¿Qué pasa si necesitamos soporte urgente?', a: 'Incluimos acceso directo vía Slack/email para consultas entre sesiones. Respondemos en <24h hábiles para validaciones técnicas urgentes (migraciones, caídas de tráfico).' },
  { q: '¿Hacen la implementación ustedes?', a: 'No ejecutamos directamente. Nuestro rol es estratégico: diseñamos el plan, priorizamos acciones y validamos que tu equipo implemente correctamente.' },
  { q: '¿Pueden capacitar a nuestro equipo?', a: 'Sí. Incluimos workshops y sesiones de formación para marketing, producto y desarrollo. Transferimos conocimiento para construir capacidad interna sostenible.' },
];

export default function ConsultoriaFaqsSection() {
  return (
    <section className="ra-cons-section">
      <div className="ra-cons-container">
        <span className="ra-cons-eyebrow">Preguntas Frecuentes</span>
        <h2 className="ra-cons-h2">Lo que suelen preguntarnos</h2>
        <div className="ra-cons-faqs">
          {faqs.map((f) => (
            <div key={f.q} className="ra-cons-faq">
              <h4>{f.q}</h4>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
