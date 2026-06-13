export default function AboutSection() {
  return (
    <section className="section wrap about" id="sobre-mi" data-screen-label="Sobre mí">
      <div className="about-grid">
        <div>
          <span className="eyebrow reveal">Sobre mí</span>

          <h2 className="reveal d1" style={{ marginTop: 20 }}>
            Apasionado por la tecnología y la mejora continua.
          </h2>

          <p className="reveal d2">
            Me especializo en crear sistemas robustos, escalables y eficientes.
            Me gusta entender procesos complejos y transformarlos en soluciones
            simples, confiables y de alto impacto.
          </p>

          <div className="reveal d3">
            <a className="btn btn-ghost" href="#">
              Conoce más sobre mí <span className="ar">→</span>
            </a>
          </div>
        </div>

        <div className="code reveal d2">
          <div className="code-bar">
            <span className="d r" />
            <span className="d y" />
            <span className="d g" />
            <span className="fn">developer.ts</span>
          </div>

          <pre>{`const developer = {
  name: 'Abraham Yance',
  stack: ['Flutter', 'NestJS', 'Next.js', 'SQL Server'],
  focus: ['Sistemas Industriales',
          'Automatización & Tiempo Real'],
  passion: 'Construir soluciones que elevan operaciones',
};

while (true) {
  build(); improve(); impact();
}`}</pre>
        </div>
      </div>
    </section>
  );
}