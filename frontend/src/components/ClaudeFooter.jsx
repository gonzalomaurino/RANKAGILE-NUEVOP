export default function ClaudeFooter() {
    return (
        <footer className="foot" id="contacto">
            <div className="foot-inner">
                <div className="foot-brand">
                    <img src="/claude/assets/rankagile-logo.png" alt="RankAgile" style={{ height: 28, filter: 'var(--logo-filter)' }} />
                    <p>Agencia SEO internacional especializada en posicionamiento para IA generativa.</p>
                    <p>📍 Cordoba, Argentina</p>
                </div>
                <div>
                    <h6>Servicios</h6>
                    <ul>
                        <li><a href="/servicios-seo-para-posicionamiento-web">SEO para IA (GEO)</a></li>
                        <li><a href="/servicios-seo-para-posicionamiento-web">SEO Tecnico</a></li>
                        <li><a href="/servicios-seo-para-posicionamiento-web">SEO de Contenidos</a></li>
                        <li><a href="/servicios-seo-para-posicionamiento-web">SEO Local</a></li>
                        <li><a href="/servicios-seo-para-posicionamiento-web">SEO Internacional</a></li>
                    </ul>
                </div>
                <div>
                    <h6>Agencia</h6>
                    <ul>
                        <li><a href="/#metodologia">Metodologia</a></li>
                        <li><a href="/#casos">Casos de exito</a></li>
                        <li><a href="/quienes-somos">Equipo</a></li>
                        <li><a href="/blogs">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h6>Contacto</h6>
                    <ul>
                        <li><a href="mailto:hola@rankagile.com">hola@rankagile.com</a></li>
                        <li><a href="/contacto">+54 000 000 0000</a></li>
                        <li><a href="/contacto">Calle, Ciudad</a></li>
                    </ul>
                </div>
            </div>
            <div className="foot-base">
                <span>© 2026 RANKAGILE · TODOS LOS DERECHOS RESERVADOS</span>
                <span>GEO · SEO · LLMO - V2026.04</span>
            </div>
        </footer>
    );
}
