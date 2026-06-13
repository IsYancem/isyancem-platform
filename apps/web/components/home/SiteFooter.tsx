export default function SiteFooter() {
  return (
    <footer id="blog">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <div className="wm">ISYANCEM</div>
            <div className="brand-tag">Vision · Precision · Impact</div>
          </div>

          <div className="foot-nav">
            <div className="foot-col">
              <h4>Navegación</h4>
              <a href="#inicio">Inicio</a>
              <a href="#proyectos">Proyectos</a>
              <a href="#sobre-mi">Sobre mí</a>
              <a href="#contacto">Contacto</a>
            </div>

            <div className="foot-col">
              <h4>Recursos</h4>
              <a href="#">Blog</a>
              <a href="#stack">Stack</a>
              <a href="/cv.pdf" download>
                Descargar CV
              </a>
            </div>

            <div className="foot-col">
              <h4>Contacto</h4>
              <a href="mailto:isyancem.dev@gmail.com">
                isyancem.dev@gmail.com
              </a>
              <a href="https://wa.me/593991234567" target="_blank">
                +593 99 123 4567
              </a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <div className="cp">
            © <span id="year">2026</span> ISYANCEM. Todos los derechos
            reservados.
          </div>

          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">X</a>
            <a href="mailto:isyancem.dev@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
}