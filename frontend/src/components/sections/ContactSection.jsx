import { useState } from 'react';
import { api } from '../../services/api.js';

export default function ContactSection() {
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', url: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | ok | err
  const [message, setMessage] = useState('');

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'loading') return;
    setStatus('loading');
    setMessage('');
    try {
      await api.post('/contact', form);
      setStatus('ok');
      setMessage('¡Gracias! Recibimos tu mensaje y te vamos a contactar a la brevedad.');
      setForm({ nombre: '', email: '', empresa: '', url: '' });
    } catch (err) {
      setStatus('err');
      setMessage('No pudimos enviar tu mensaje. Probá de nuevo en unos minutos.');
    }
  };

  return (
    <section className="home-section" id="form">
      <div className="home-container">
        <div className="home-contact-grid">
          {/* Form */}
          <div className="home-card home-contact-card">
            <h2 className="home-contact-title">Contactanos</h2>
            <form className="home-form" onSubmit={onSubmit} noValidate>
              <label className="home-field">
                <span className="home-label">Nombre y apellido</span>
                <input
                  className="home-input"
                  type="text"
                  name="nombre"
                  placeholder="Nombre y apellido"
                  value={form.nombre}
                  onChange={onChange}
                  required
                />
              </label>
              <label className="home-field">
                <span className="home-label">Correo Electrónico</span>
                <input
                  className="home-input"
                  type="email"
                  name="email"
                  placeholder="Correo Electrónico"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </label>
              <label className="home-field">
                <span className="home-label">Empresa</span>
                <input
                  className="home-input"
                  type="text"
                  name="empresa"
                  placeholder="Empresa"
                  value={form.empresa}
                  onChange={onChange}
                />
              </label>
              <label className="home-field">
                <span className="home-label">URL Web</span>
                <textarea
                  className="home-textarea"
                  name="url"
                  placeholder="URL Web"
                  value={form.url}
                  onChange={onChange}
                />
              </label>
              <button
                type="submit"
                className="home-btn home-form-btn"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando…' : 'Enviar'}
              </button>
              {status === 'ok' && (
                <p className="home-feedback is-ok" role="status">{message}</p>
              )}
              {status === 'err' && (
                <p className="home-feedback is-err" role="alert">{message}</p>
              )}
            </form>
          </div>

          {/* Right side */}
          <div className="home-contact-right">
            <h2 className="home-h2">
              <a href="/contacto/" className="home-link-underline">
                Hablemos de tu proyecto.
              </a>
            </h2>
            <p className="home-p">
              Completá el formulario y nos contactamos con vos a la brevedad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
