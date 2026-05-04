import { useState } from 'react';
import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import ClaudeFooter from '../components/ClaudeFooter.jsx';
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
        budget: '€2K - €5K',
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
                            <h1 className="left-title">Empecemos con <span className="grad">tres pasos simples</span></h1>
                            <p className="left-sub">Completa tus datos, agenda una llamada de diagnostico de 30 minutos y recibe un plan GEO accionable.</p>
                        </div>
                        <div className="steps">
                            <div className="step active">
                                <span className="step-num">1</span>
                                <p className="step-title">Cuentanos sobre tu marca</p>
                            </div>
                            <div className="step">
                                <span className="step-num">2</span>
                                <p className="step-title">Agenda tu diagnostico</p>
                            </div>
                            <div className="step">
                                <span className="step-num">3</span>
                                <p className="step-title">Recibe tu plan GEO</p>
                            </div>
                        </div>
                    </aside>

                    <section className="right">
                        <form className="form-wrap" onSubmit={onSubmit}>
                            <div className="form-head">
                                <h2>Crea tu cuenta</h2>
                                <p>Introduce tus datos para recibir tu analisis gratuito.</p>
                            </div>

                            <div className="social-row">
                                <button type="button" className="social-btn">Google</button>
                                <button type="button" className="social-btn">LinkedIn</button>
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

                            <div className="row-2">
                                <div>
                                    <label className="field-label" htmlFor="web">Sitio web</label>
                                    <input className="input" id="web" type="text" placeholder="marca.com" value={form.web} onChange={onChange('web')} required />
                                </div>
                                <div>
                                    <label className="field-label" htmlFor="budget">Presupuesto mensual</label>
                                    <select className="select" id="budget" value={form.budget} onChange={onChange('budget')}>
                                        <option>€2K - €5K</option>
                                        <option>€5K - €10K</option>
                                        <option>€10K - €25K</option>
                                        <option>€25K+</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="btn-pill filled block">
                                Solicitar analisis gratuito
                                <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                            </button>

                            <p className="form-foot">Ya eres cliente? <a href="#">Accede a tu dashboard</a></p>
                        </form>
                    </section>
                </div>
            </div>
            <ClaudeFooter />
        </>
    );
}
