import useDocumentMeta from '../hooks/useDocumentMeta.js';

const styles = `
  .legal-page {
    background: #000000;
    color: #FFFFFF;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    padding: 48px 24px 120px;
  }
  .legal-page-container {
    max-width: 800px;
    margin: 0 auto;
  }

  .legal-page-eyebrow {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #38FEDA;
    margin: 0 0 18px;
  }
  .legal-page-h1 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: clamp(2.25rem, 4.5vw, 2.8rem);
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    margin: 0 0 14px;
  }
  .legal-page-meta {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.55);
    margin: 0 0 32px;
  }
  .legal-page-meta strong { color: rgba(255, 255, 255, 0.78); font-weight: 600; }

  .legal-page-lead {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.82);
    margin: 0 0 40px;
  }
  .legal-page-lead strong { color: #FFFFFF; font-weight: 600; }

  .legal-page-section { margin: 0 0 40px; }
  .legal-page-section:last-child { margin-bottom: 0; }

  .legal-page-h2 {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 700;
    font-size: 22px;
    line-height: 1.3;
    color: #38FEDA;
    margin: 0 0 18px;
    letter-spacing: -0.005em;
  }

  .legal-page-p {
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 300;
    font-size: 17px;
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.78);
    margin: 0 0 16px;
  }
  .legal-page-p:last-child { margin-bottom: 0; }
  .legal-page-p strong { color: #FFFFFF; font-weight: 600; }
  .legal-page-p em { color: rgba(255, 255, 255, 0.85); font-style: italic; }
  .legal-page-p a {
    color: #38FEDA;
    text-decoration: none;
    transition: color 150ms ease;
  }
  .legal-page-p a:hover { color: #5affe3; }

  .legal-page-divider {
    height: 1px;
    background: rgba(56, 254, 218, 0.14);
    border: 0;
    margin: 0 0 40px;
  }

  .legal-page-contact-link {
    display: inline-block;
    font-family: Poppins, Helvetica, Arial, sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #38FEDA;
    text-decoration: none;
    margin-top: 8px;
    transition: color 150ms ease;
  }
  .legal-page-contact-link:hover { color: #5affe3; }

  @media (max-width: 640px) {
    .legal-page { padding: 32px 16px 88px; }
    .legal-page-h2 { font-size: 20px; }
  }
`;

export default function PrivacyPolicyPage() {
  useDocumentMeta({
    title: 'Política de Privacidad | RankAgile',
    description:
      'Política de Privacidad de RankAgile: qué datos recopilamos, con quién los compartimos, cuánto tiempo los conservamos y qué derechos tenés sobre ellos.',
  });

  return (
    <main className="legal-page">
      <style>{styles}</style>
      <article className="legal-page-container">
        <header>
          <p className="legal-page-eyebrow">Legales</p>
          <h1 className="legal-page-h1">Política de Privacidad</h1>
          <p className="legal-page-lead">
            Esta política describe qué datos personales recopilamos en{' '}
            <strong>RankAgile</strong>, cómo los usamos y qué derechos tenés
            sobre ellos.
          </p>
        </header>

        <hr className="legal-page-divider" />

        <section className="legal-page-section">
          <h2 className="legal-page-h2">¿Quiénes somos?</h2>
          <p className="legal-page-p">
            <strong>Nuestro sitio web:</strong>{' '}
            <a href="/">rankagile.com</a>
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Comentarios</h2>
          <p className="legal-page-p">
            Cuando los visitantes dejan comentarios en el sitio web de{' '}
            <strong>RankAgile</strong>, recopilamos los datos que se
            muestran en el formulario de comentarios, así como la dirección
            IP del visitante y la cadena del agente de usuario del navegador,
            con el fin de ayudar a la detección de spam.
          </p>
          <p className="legal-page-p">
            Una cadena anonimizada creada a partir de tu dirección de correo
            electrónico (también llamada <em>hash</em>) puede ser
            proporcionada al servicio Gravatar para comprobar si lo estás
            utilizando. La política de privacidad del servicio Gravatar está
            disponible en{' '}
            <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer">
              https://automattic.com/privacy/
            </a>
            . Una vez aprobado tu comentario, la imagen de tu perfil será
            visible públicamente en el contexto del mismo.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Medios</h2>
          <p className="legal-page-p">
            Si subís imágenes al sitio web de <strong>RankAgile</strong>,
            debés evitar subir imágenes que incluyan datos de ubicación
            incrustados (EXIF GPS). Los visitantes del sitio pueden descargar
            y extraer cualquier dato de ubicación de las imágenes publicadas
            en el sitio web.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Cookies</h2>
          <p className="legal-page-p">
            Si dejás un comentario en nuestro sitio, podés optar por guardar
            tu nombre, dirección de correo electrónico y sitio web en
            cookies. Esto es para tu comodidad, de modo que no tengas que
            volver a completar tus datos cuando dejés otro comentario. Estas
            cookies tendrán una duración de un año.
          </p>
          <p className="legal-page-p">
            Si visitás nuestra página de inicio de sesión, se establecerá
            una cookie temporal para determinar si tu navegador acepta
            cookies. Esta cookie no contiene datos personales y se elimina
            al cerrar el navegador.
          </p>
          <p className="legal-page-p">
            Cuando iniciás sesión, también configuramos varias cookies para
            guardar tu información de acceso y tus preferencias de
            visualización de pantalla. Las cookies de inicio de sesión duran
            dos días y las cookies de opciones de pantalla duran un año. Si
            seleccionás &ldquo;Recordarme&rdquo;, tu sesión permanecerá
            activa durante dos semanas. Al cerrar sesión, las cookies de
            inicio de sesión se eliminarán.
          </p>
          <p className="legal-page-p">
            Si editás o publicás un artículo, se guardará una cookie
            adicional en tu navegador. Esta cookie no incluye datos
            personales y solo indica el ID del artículo editado. Caduca
            después de 1 día.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Contenido incrustado de otros sitios web</h2>
          <p className="legal-page-p">
            Los artículos de este sitio pueden incluir contenido incrustado
            (por ejemplo, vídeos, imágenes o artículos). El contenido
            incrustado de otros sitios web se comporta de la misma manera
            que si el visitante hubiera accedido directamente a ese otro
            sitio.
          </p>
          <p className="legal-page-p">
            Estos sitios web pueden recopilar datos sobre vos, utilizar
            cookies, incorporar seguimiento adicional de terceros y
            supervisar tu interacción con ese contenido incrustado,
            incluyendo el seguimiento de tu interacción si tenés una cuenta
            y has iniciado sesión en ese sitio web.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Con quién compartimos tus datos</h2>
          <p className="legal-page-p">
            Si solicitás un restablecimiento de contraseña, tu dirección IP
            será incluida en el correo electrónico de restablecimiento por
            motivos de seguridad.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Cuánto tiempo conservamos tus datos</h2>
          <p className="legal-page-p">
            Si dejás un comentario, el comentario y sus metadatos se
            conservan indefinidamente. Esto permite reconocer y aprobar
            automáticamente comentarios posteriores, en lugar de mantenerlos
            en una cola de moderación.
          </p>
          <p className="legal-page-p">
            Para los usuarios que se registren en el sitio web de{' '}
            <strong>RankAgile</strong> (si los hubiera), también almacenamos
            la información personal que proporcionen en su perfil de
            usuario. Todos los usuarios pueden ver, editar o eliminar su
            información personal en cualquier momento (excepto el nombre de
            usuario). Los administradores del sitio también pueden ver y
            editar dicha información.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Qué derechos tenés sobre tus datos</h2>
          <p className="legal-page-p">
            Si tenés una cuenta en este sitio o has dejado comentarios,
            podés solicitar un archivo exportado de los datos personales
            que conservamos sobre vos, incluidos los datos que nos hayas
            proporcionado. También podés solicitar la eliminación de
            cualquier dato personal que conservemos sobre vos. Esto no
            incluye los datos que estamos obligados a conservar con fines
            administrativos, legales o de seguridad.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Dónde se envían tus datos</h2>
          <p className="legal-page-p">
            Los comentarios de los visitantes pueden ser revisados mediante
            un servicio automático de detección de spam.
          </p>
        </section>

        <section className="legal-page-section">
          <h2 className="legal-page-h2">Contacto</h2>
          <p className="legal-page-p">
            Si tenés preguntas sobre esta Política de Privacidad o sobre
            cómo manejamos tus datos, podés contactarnos en:
          </p>
          <a className="legal-page-contact-link" href="mailto:contacto@rankagile.com">
            contacto@rankagile.com
          </a>
        </section>
      </article>
    </main>
  );
}
