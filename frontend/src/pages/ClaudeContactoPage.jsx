import useDocumentMeta from '../hooks/useDocumentMeta.js';
import ClaudeNavbar from '../components/ClaudeNavbar.jsx';
import Footer from '../components/Footer.jsx';
import ContactForm from '../components/ContactForm.jsx';
import '../styles/claude-system.css';
import '../styles/claude-contacto.css';

export default function ClaudeContactoPage() {
    useDocumentMeta({
        title: 'Contacto | RankAgile — Agencia SEO & GEO',
        description: 'Hablemos sobre tu proyecto SEO o GEO. Contanos en qué estás trabajando y te respondemos en 48h. Sin compromiso.',
    });

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
                            <p className="left-sub">Completá el formulario en tres pasos y te respondemos en menos de 24h con un análisis personalizado de tu proyecto.</p>
                        </div>
                    </aside>

                    <section className="right">
                        <ContactForm />
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
}
