export default function ProjectsSection() {
  return (
    <section className="section wrap" id="proyectos" data-screen-label="Proyectos">
      <div className="sec-head">
        <div>
          <span className="eyebrow reveal">Proyectos destacados</span>
          <h2 className="reveal d1">
            Soluciones reales
            <br />
            para problemas reales.
          </h2>
        </div>

        <a className="link-more reveal d2" href="#">
          Ver todos los proyectos <span className="ar">→</span>
        </a>
      </div>

      <div className="projects-grid">
        <article className="card feat reveal">
          <div className="shot">
            <span className="badge">Destacado</span>

            <image-slot
              id="proj-gateflow"
              class="slot"
              shape="rect"
              fit="cover"
              placeholder="Captura GateFlow OS"
            />

            <div className="shot-ph">
              <div className="bx" />
              Captura GateFlow OS
            </div>
          </div>

          <div className="body">
            <div className="idx">01 / Sistema industrial</div>
            <h3>GateFlow OS</h3>
            <p className="desc">
              Sistema inteligente de gestión portuaria con RFID, OCR, básculas,
              dashboard en tiempo real y API de kiosko. Orquesta el flujo
              completo de entrada y salida de carga.
            </p>

            <div className="tags">
              <span className="tag">NestJS</span>
              <span className="tag">Flutter</span>
              <span className="tag">WebSocket</span>
              <span className="tag">PostgreSQL</span>
            </div>

            <a className="go" href="#">
              Ver proyecto <span className="ar">→</span>
            </a>
          </div>
        </article>

        <article className="card reveal d1">
          <div className="shot">
            <image-slot
              id="proj-monitor"
              class="slot"
              shape="rect"
              fit="cover"
              placeholder="Captura Dashboard"
            />

            <div className="shot-ph">
              <div className="bx" />
              Industrial Dashboard
            </div>
          </div>

          <div className="body">
            <div className="idx">02 / Tiempo real</div>
            <h3>Industrial Monitor Dashboard</h3>
            <p className="desc">
              Dashboard en tiempo real para monitoreo de dispositivos, eventos y
              estados de conexión industrial.
            </p>

            <div className="tags">
              <span className="tag">Next.js</span>
              <span className="tag">WebSocket</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Docker</span>
            </div>

            <a className="go" href="#">
              Ver proyecto <span className="ar">→</span>
            </a>
          </div>
        </article>

        <article className="card reveal d2">
          <div className="shot">
            <image-slot
              id="proj-api"
              class="slot"
              shape="rect"
              fit="cover"
              placeholder="Captura API"
            />

            <div className="shot-ph">
              <div className="bx" />
              API Orchestrator
            </div>
          </div>

          <div className="body">
            <div className="idx">03 / Backend</div>
            <h3>API Orchestrator Template</h3>
            <p className="desc">
              Plantilla backend modular para orquestar servicios, SPs, logs,
              auditoría y manejo de errores.
            </p>

            <div className="tags">
              <span className="tag">NestJS</span>
              <span className="tag">TypeScript</span>
              <span className="tag">Swagger</span>
              <span className="tag">Docker</span>
            </div>

            <a className="go" href="#">
              Ver proyecto <span className="ar">→</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}