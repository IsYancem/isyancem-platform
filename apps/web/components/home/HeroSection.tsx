export default function HeroSection() {
  return (
    <header className="hero wrap" id="inicio" data-screen-label="Hero">
      <div className="hero-grid">
        <div className="hero-left">
          <span className="eyebrow reveal">Desarrollador Full Stack</span>

          <h1 className="display reveal d1">
            Construyo soluciones
            <br />
            que <span className="em">elevan</span> operaciones.
          </h1>

          <p className="lead reveal d2">
            Especializado en sistemas industriales, aplicaciones en tiempo real,
            integraciones y automatización de procesos complejos.
          </p>

          <div className="hero-cta reveal d3">
            <a className="btn btn-primary" href="#proyectos">
              Ver proyectos <span className="ar">→</span>
            </a>
            <a className="btn btn-ghost" href="/cv.pdf" download>
              Descargar CV <span className="ar">↓</span>
            </a>
          </div>

          <div className="reveal d4">
            <div className="stack-label">Tecnologías principales</div>
            <div className="stack-row">
              <span className="chip">Flutter</span>
              <span className="chip">NestJS</span>
              <span className="chip">Next.js</span>
              <span className="chip">Docker</span>
              <span className="chip">PostgreSQL</span>
              <span className="chip">SQL Server</span>
            </div>
          </div>
        </div>

        <div className="hero-right reveal d2">
          <div className="emblem">
            <div className="halo" />
            <div className="ring r1" />
            <div className="ring r2" />
            <div className="ring r3" />
            <span className="orb o1" />
            <span className="orb o2" />
            <span className="orb o3" />

            <div className="emblem-core">
              <image-slot
                id="hero-logo"
                class="logo-slot"
                shape="rounded"
                radius="6"
                fit="contain"
                placeholder="Suelta tu logo (PNG/SVG)"
              />
            </div>
          </div>

          <div className="wordmark">
            <div className="name">ISYANCEM</div>
            <div className="brand-tag">
              <span>Vision</span>
              <span>Precision</span>
              <span>Impact</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}