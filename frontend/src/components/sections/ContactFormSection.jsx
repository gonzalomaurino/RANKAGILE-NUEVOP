import { useState } from 'react';
import { api } from '../../services/api.js';

export default function ContactFormSection() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    empresa: '',
    url: '',
  });
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
    <div className="ct-form-card" id="form">
      <h2 className="ct-form-title">Contáctanos</h2>
      <form className="ct-form" onSubmit={onSubmit} noValidate>
        <div className="ct-field">
          <label className="ct-label" htmlFor="ct-nombre">Nombre y apellido</label>
          <input
            id="ct-nombre"
            className="ct-input"
            type="text"
            name="nombre"
            placeholder="Nombre y apellido"
            value={form.nombre}
            onChange={onChange}
            required
          />
        </div>
        <div className="ct-field">
          <label className="ct-label" htmlFor="ct-email">Correo Electrónico</label>
          <input
            id="ct-email"
            className="ct-input"
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="ct-field">
          <label className="ct-label" htmlFor="ct-empresa">Empresa</label>
          <input
            id="ct-empresa"
            className="ct-input"
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={form.empresa}
            onChange={onChange}
          />
        </div>
        <div className="ct-field">
          <label className="ct-label" htmlFor="ct-url">URL Web</label>
          <textarea
            id="ct-url"
            className="ct-textarea"
            name="url"
            placeholder="URL Web"
            value={form.url}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="ct-btn"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Enviando…' : 'Enviar'}
        </button>
        {status === 'ok' && (
          <p className="ct-feedback is-ok" role="status">{message}</p>
        )}
        {status === 'err' && (
          <p className="ct-feedback is-err" role="alert">{message}</p>
        )}
      </form>
    </div>
  );
}
