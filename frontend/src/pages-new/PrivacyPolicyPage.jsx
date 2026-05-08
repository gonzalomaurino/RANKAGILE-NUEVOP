import useDocumentMeta from '../hooks/useDocumentMeta.js';
import LegalPageLayout from '../components/LegalPageLayout.jsx';

export default function PrivacyPolicyPage() {
  useDocumentMeta({
    title: 'Política de Privacidad | RankAgile',
    description:
      'Política de Privacidad de RankAgile: qué datos recopilamos, con quién los compartimos, cuánto tiempo los conservamos y qué derechos tenés sobre ellos.',
  });

  return (
    <LegalPageLayout
      title="Política de Privacidad"
      lead={<>Esta política describe qué datos personales recopilamos en <strong>RankAgile</strong>, cómo los usamos y qué derechos tenés sobre ellos.</>}
    >
      <h2>¿Quiénes somos?</h2>
      <p><strong>Nuestro sitio web:</strong> <a href="/">rankagile.com</a></p>

      <h2>Comentarios</h2>
      <p>
        Cuando los visitantes dejan comentarios en el sitio web de <strong>RankAgile</strong>, recopilamos los datos que se muestran en el formulario de comentarios, así como la dirección IP del visitante y la cadena del agente de usuario del navegador, con el fin de ayudar a la detección de spam.
      </p>
      <p>
        Una cadena anonimizada creada a partir de tu dirección de correo electrónico (también llamada <em>hash</em>) puede ser proporcionada al servicio Gravatar para comprobar si lo estás utilizando. La política de privacidad del servicio Gravatar está disponible en{' '}
        <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer">https://automattic.com/privacy/</a>. Una vez aprobado tu comentario, la imagen de tu perfil será visible públicamente en el contexto del mismo.
      </p>

      <h2>Medios</h2>
      <p>
        Si subís imágenes al sitio web de <strong>RankAgile</strong>, debés evitar subir imágenes que incluyan datos de ubicación incrustados (EXIF GPS). Los visitantes del sitio pueden descargar y extraer cualquier dato de ubicación de las imágenes publicadas en el sitio web.
      </p>

      <h2>Cookies</h2>
      <p>
        Si dejás un comentario en nuestro sitio, podés optar por guardar tu nombre, dirección de correo electrónico y sitio web en cookies. Esto es para tu comodidad, de modo que no tengas que volver a completar tus datos cuando dejés otro comentario. Estas cookies tendrán una duración de un año.
      </p>
      <p>
        Si visitás nuestra página de inicio de sesión, se establecerá una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.
      </p>
      <p>
        Cuando iniciás sesión, también configuramos varias cookies para guardar tu información de acceso y tus preferencias de visualización de pantalla. Las cookies de inicio de sesión duran dos días y las cookies de opciones de pantalla duran un año. Si seleccionás "Recordarme", tu sesión permanecerá activa durante dos semanas. Al cerrar sesión, las cookies de inicio de sesión se eliminarán.
      </p>
      <p>
        Si editás o publicás un artículo, se guardará una cookie adicional en tu navegador. Esta cookie no incluye datos personales y solo indica el ID del artículo editado. Caduca después de 1 día.
      </p>

      <h2>Contenido incrustado de otros sitios web</h2>
      <p>
        Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes o artículos). El contenido incrustado de otros sitios web se comporta de la misma manera que si el visitante hubiera accedido directamente a ese otro sitio.
      </p>
      <p>
        Estos sitios web pueden recopilar datos sobre vos, utilizar cookies, incorporar seguimiento adicional de terceros y supervisar tu interacción con ese contenido incrustado, incluyendo el seguimiento de tu interacción si tenés una cuenta y has iniciado sesión en ese sitio web.
      </p>

      <h2>Con quién compartimos tus datos</h2>
      <p>
        Si solicitás un restablecimiento de contraseña, tu dirección IP será incluida en el correo electrónico de restablecimiento por motivos de seguridad.
      </p>

      <h2>Cuánto tiempo conservamos tus datos</h2>
      <p>
        Si dejás un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto permite reconocer y aprobar automáticamente comentarios posteriores, en lugar de mantenerlos en una cola de moderación.
      </p>
      <p>
        Para los usuarios que se registren en el sitio web de <strong>RankAgile</strong> (si los hubiera), también almacenamos la información personal que proporcionen en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto el nombre de usuario). Los administradores del sitio también pueden ver y editar dicha información.
      </p>

      <h2>Qué derechos tenés sobre tus datos</h2>
      <p>
        Si tenés una cuenta en este sitio o has dejado comentarios, podés solicitar un archivo exportado de los datos personales que conservamos sobre vos, incluidos los datos que nos hayas proporcionado. También podés solicitar la eliminación de cualquier dato personal que conservemos sobre vos. Esto no incluye los datos que estamos obligados a conservar con fines administrativos, legales o de seguridad.
      </p>

      <h2>Dónde se envían tus datos</h2>
      <p>Los comentarios de los visitantes pueden ser revisados mediante un servicio automático de detección de spam.</p>

      <h2>Contacto</h2>
      <p>Si tenés preguntas sobre esta Política de Privacidad o sobre cómo manejamos tus datos, podés contactarnos en:</p>
      <a className="legal-contact-link" href="mailto:contacto@rankagile.com">contacto@rankagile.com</a>
    </LegalPageLayout>
  );
}
