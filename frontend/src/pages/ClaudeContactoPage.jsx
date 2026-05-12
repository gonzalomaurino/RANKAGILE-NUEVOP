import { useState } from 'react';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import '../styles/claude-system.css';
import '../styles/claude-contacto.css';

export default function ClaudeContactoPage() {
    useDocumentMeta({
        title: 'RankAgile - Contacto',
        description: 'Contacta con RankAgile para recibir un plan GEO accionable.',
    });

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        web: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const onChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        setErrorMsg('');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...form, source: 'contacto' }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
            alert('Gracias, te contactamos en menos de 24h.');
            setForm({ firstName: '', lastName: '', email: '', web: '' });
        } catch (err) {
            setErrorMsg(err.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <ClaudeNavbar />
            <div className="page">
                <div className="split">
                    <aside className="left">
                        <div className="aurora-bg" />
                        <div className="left-top">
                            <span className="eyebrow">hablemos</span>
                            <h1 className="left-title display">Empecemos con<br /><span className="grad">tres pasos<br />simples</span></h1>
                            <p className="left-sub">Completa tus datos, agenda una llamada de diagnostico de 30 minutos y recibe un plan GEO accionable.</p>
                        </div>
                    </aside>

                    <section className="right">
                        <form className="form-wrap" onSubmit={onSubmit}>
                            <div className="form-head">
                                <h2>Hablemos de tu proyecto</h2>
                                <p>Introduce tus datos para recibir tu analisis gratuito.</p>
                            </div>

                            <div className="row-2">
                                <div>
                                    <label className="field-label" htmlFor="fn">Nombre</label>
                                    <input className="input" id="fn" type="text" placeholder="Tu nombre" value={form.firstName} onChange={onChange('firstName')} required />
                                </div>
                                <div>
                                    <label className="field-label" htmlFor="ln">Apellido</label>
                                    <input className="input" id="ln" type="text" placeholder="Tu apellido" value={form.lastName} onChange={onChange('lastName')} required />
                                </div>
                            </div>

                            <div>
                                <label className="field-label" htmlFor="em">Email de trabajo</label>
                                <input className="input" id="em" type="email" placeholder="correo@gmail.com" value={form.email} onChange={onChange('email')} required />
                            </div>

                            <div>
                                <label className="field-label" htmlFor="web">Sitio web</label>
                                <input className="input" id="web" type="text" placeholder="Marca" value={form.web} onChange={onChange('web')} required />
                            </div>

                            <button type="submit" className="btn-pill filled block" disabled={submitting}>
                                {submitting ? 'Enviando…' : 'Enviar'}
                                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>
                            {errorMsg && <p style={{ color: '#ef4444', fontSize: 13, margin: '4px 0 0' }}>{errorMsg}</p>}

                        </form>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
