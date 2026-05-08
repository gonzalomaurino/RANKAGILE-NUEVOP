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

    const onChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }));
    };

    const onSubmit = (event) => {
        event.preventDefault();
        alert('Gracias, te contactamos en menos de 24h.');
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
                                <h2>Crea tu cuenta</h2>
                                <p>Introduce tus datos para recibir tu analisis gratuito.</p>
                            </div>

                            <div className="social-row">
                                <button type="button" className="social-btn">
                                    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                                    </svg>
                                    Continuar con Google
                                </button>
                            </div>

                            <div className="divider-or">O</div>

                            <div className="row-2">
                                <div>
                                    <label className="field-label" htmlFor="fn">Nombre</label>
                                    <input className="input" id="fn" type="text" placeholder="ej. Natalia" value={form.firstName} onChange={onChange('firstName')} required />
                                </div>
                                <div>
                                    <label className="field-label" htmlFor="ln">Apellido</label>
                                    <input className="input" id="ln" type="text" placeholder="ej. Ruiz" value={form.lastName} onChange={onChange('lastName')} required />
                                </div>
                            </div>

                            <div>
                                <label className="field-label" htmlFor="em">Email de trabajo</label>
                                <input className="input" id="em" type="email" placeholder="natalia@marca.com" value={form.email} onChange={onChange('email')} required />
                            </div>

                            <div>
                                <label className="field-label" htmlFor="web">Sitio web</label>
                                <input className="input" id="web" type="text" placeholder="marca.com" value={form.web} onChange={onChange('web')} required />
                            </div>

                            <button type="submit" className="btn-pill filled block">
                                Solicitar analisis gratuito
                                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>

                        </form>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
