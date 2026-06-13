export default function ContactSection() {
  return (
    <section className="section wrap" id="contacto" data-screen-label="Contacto">
      <div className="contact reveal">
        <div className="contact-grid">
          <div>
            <span className="eyebrow">Hablemos</span>
            <h2 style={{ marginTop: 18 }}>¿Tienes un proyecto en mente?</h2>
            <p className="sub">
              Construyamos algo increíble juntos. Cuéntame el reto y diseñemos
              la solución.
            </p>
          </div>

          <div className="chan">
            <div className="item">
              <div className="l">Email</div>
              <a href="mailto:isyancem.dev@gmail.com">
                isyancem.dev@gmail.com
              </a>
            </div>

            <div className="item">
              <div className="l">WhatsApp</div>
              <a href="https://wa.me/593991234567" target="_blank">
                +593 99 123 4567
              </a>
            </div>
          </div>

          <div>
            <a className="btn btn-primary" href="mailto:isyancem.dev@gmail.com">
              Hablemos <span className="ar">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}