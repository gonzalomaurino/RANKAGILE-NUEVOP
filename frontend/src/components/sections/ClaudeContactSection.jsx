import { useState } from 'react';
import { api } from '../../services/api.js';

export default function ClaudeContactSection() {
    const [form, setForm] = useState({ nombre: '', email: '', empresa: '', url: '' });
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const onChange = (e) => {
        setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (status === 'loading') return;
        setStatus('loading');
        setMessage('');
        try {
            await api.post('/contact', form);
            setStatus('ok');
            setMessage('Gracias! Recibimos tu mensaje y te vamos a contactar a la brevedad.');
            setForm({ nombre: '', email: '', empresa: '', url: '' });
        } catch (err) {
            setStatus('err');
            setMessage('No pudimos enviar tu mensaje. Proba de nuevo en unos minutos.');
        }
    };

    return (
        <section className="geo-page-section" id="form">
            <div className="contact-grid">
                <div className="contact-card">
                    <h2 className="contact-title">Contactanos</h2>
                    <form className="contact-form" onSubmit={onSubmit} noValidate>
                        <label className="contact-field">
                            <span className="contact-label">Nombre y apellido</span>
                            <input
                                className="contact-input"
                                type="text"
                                name="nombre"
                                placeholder="Nombre y apellido"
                                value={form.nombre}
                                onChange={onChange}
                                required
                            />
                        </label>
                        <label className="contact-field">
                            <span className="contact-label">Correo Electronico</span>
                            <input
                                className="contact-input"
                                type="email"
                                name="email"
                                placeholder="Correo Electronico"
                                value={form.email}
                                onChange={onChange}
                                required
                            />
                        </label>
                        <label className="contact-field">
                            <span className="contact-label">Empresa</span>
                            <input
                                className="contact-input"
                                type="text"
                                name="empresa"
                                placeholder="Empresa"
                                value={form.empresa}
                                onChange={onChange}
                            />
                        </label>
                        <label className="contact-field">
                            <span className="contact-label">URL Web</span>
                            <textarea
                                className="contact-textarea"
                                name="url"
                                placeholder="URL Web"
                                value={form.url}
                                onChange={onChange}
                            />
                        </label>
                        <button
                            type="submit"
                            className="btn-pill contact-form-btn"
                            disabled={status === 'loading'}
                        >
                            {status === 'loading' ? 'Enviando...' : 'Enviar'}
                        </button>
                        {status === 'ok' && (
                            <p className="contact-feedback is-ok" role="status">{message}</p>
                        )}
                        {status === 'err' && (
                            <p className="contact-feedback is-err" role="alert">{message}</p>
                        )}
                    </form>
                </div>

                <div className="contact-side">
                    <h2 className="geo-page-h2">
                        <a className="contact-link" href="/contacto/">Hablemos de tu proyecto.</a>
                    </h2>
                    <p className="geo-page-p">
                        Completa el formulario y nos contactamos con vos a la brevedad.
                    </p>
                </div>
            </div>
        </section>
    );
}
