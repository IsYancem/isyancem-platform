import Image from "next/image";
import {
  ArrowDownToLine,
  ArrowRight,
  Boxes,
  Code2,
  Mail,
  MessageCircle,
  Rocket,
  UsersRound,
  X,
} from "lucide-react";
import { Navbar } from "./components/Navbar";
import styles from "./page.module.css";
import { SpaceCursor } from "./components/SpaceCursor";

const technologies = [
  "Flutter",
  "NestJS",
  "Next.js",
  "Docker",
  "PostgreSQL",
];

const projects = [
  {
    title: "GateFlow OS",
    description:
      "Sistema inteligente de gestión portuaria con RFID, OCR, báscula, dashboard en tiempo real y API de kiosko.",
    tags: ["NestJS", "Flutter", "WebSocket", "PostgreSQL"],
    featured: true,
    variant: "truck",
  },
  {
    title: "Industrial Monitor Dashboard",
    description:
      "Dashboard en tiempo real para monitoreo de dispositivos, eventos y estados de conexión industrial.",
    tags: ["Next.js", "WebSocket", "PostgreSQL", "Docker"],
    featured: false,
    variant: "dashboard",
  },
  {
    title: "API Orchestrator Template",
    description:
      "Plantilla backend modular para orquestar servicios, SPs, logs, auditoría y manejo de errores.",
    tags: ["NestJS", "TypeScript", "Swagger", "Docker"],
    featured: false,
    variant: "code",
  },
];

export default function Home() {
  return (
    <main className={styles.page}>
      <SpaceCursor />

      <div className={styles.backgroundGrid} />

      <div className={styles.spaceBackground} aria-hidden="true">
        <span className={styles.nebulaOne} />
        <span className={styles.nebulaTwo} />
        <span className={styles.nebulaThree} />
        <span className={styles.cometOne} />
        <span className={styles.cometTwo} />
      </div>

      <Navbar />

      <section id="inicio" className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Desarrollador Full Stack</p>

          <h1>
            Construyo soluciones <br />
            que <span>elevan</span> operaciones.
          </h1>

          <p className={styles.heroDescription}>
            Especializado en sistemas industriales, aplicaciones en tiempo real,
            integraciones y automatización de procesos complejos.
          </p>

          <div className={styles.heroActions}>
            <a href="#proyectos" className={styles.primaryButton}>
              Ver proyectos
              <ArrowRight size={18} />
            </a>

            <a href="/cv.pdf" className={styles.secondaryButton}>
              Descargar CV
              <ArrowDownToLine size={18} />
            </a>
          </div>

          <div id="stack" className={styles.techSection}>
            <p>Tecnologías principales</p>

            <div className={styles.techList}>
              {technologies.map((tech) => (
                <div key={tech} className={styles.techIcon} title={tech}>
                  {renderTechIcon(tech)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.radar}>
            <div className={styles.radarLine} />

            <div className={styles.heroLogoWrapper}>
              <div className={styles.heroLogoGlow} />

              <Image
                src="/assets/brand/isyancem-logo-full.png"
                alt="Logo oficial de ISYANCEM"
                width={420}
                height={420}
                priority
                className={styles.heroLogo}
              />
            </div>
          </div>

          <h2>ISYANCEM</h2>
          <p>Vision · Precision · Impact</p>
        </div>
      </section>

      <section className={styles.stats}>
        <article>
          <Code2 size={38} />
          <div>
            <strong>4+</strong>
            <span>Años de experiencia</span>
          </div>
        </article>

        <article>
          <Boxes size={38} />
          <div>
            <strong>15+</strong>
            <span>Proyectos completados</span>
          </div>
        </article>

        <article>
          <UsersRound size={38} />
          <div>
            <strong>8+</strong>
            <span>Tecnologías dominadas</span>
          </div>
        </article>

        <article>
          <Rocket size={38} />
          <div>
            <strong>100%</strong>
            <span>Compromiso</span>
          </div>
        </article>
      </section>

      <section id="proyectos" className={styles.projectsSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Proyectos destacados</p>
            <h2>Soluciones reales para problemas reales.</h2>
          </div>

          <a href="#proyectos">
            Ver todos los proyectos
            <ArrowRight size={16} />
          </a>
        </div>

        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article key={project.title} className={styles.projectCard}>
              <div className={styles.projectImage}>
                {project.featured && (
                  <span className={styles.featuredBadge}>Destacado</span>
                )}

                {project.variant === "truck" && <TruckMockup />}
                {project.variant === "dashboard" && <DashboardMockup />}
                {project.variant === "code" && <CodeMockup />}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a className={styles.projectLink} href="#contacto">
                Ver proyecto
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className={styles.aboutSection}>
        <div className={styles.aboutText}>
          <p className={styles.eyebrow}>Sobre mí</p>

          <h2>
            Apasionado por la tecnología <br />
            y la mejora continua.
          </h2>

          <p>
            Me especializo en crear sistemas robustos, escalables y eficientes.
            Me gusta entender procesos complejos y transformarlos en soluciones
            simples, confiables y de alto impacto.
          </p>

          <a href="#contacto" className={styles.secondaryGreenButton}>
            Conoce más sobre mí
            <ArrowRight size={17} />
          </a>
        </div>

        <div className={styles.codeBlock}>
          <pre>{`const developer = {
  name: 'Abraham Yance',
  stack: ['Flutter', 'NestJS', 'Next.js', 'SQL Server'],
  focus: [
    'Sistemas Industriales & Integraciones',
    'Automatización & Tiempo Real'
  ],
  passion: 'Construir soluciones que elevan operaciones',
  goal: 'Crear productos digitales de alto impacto',
};

while (true) {
  build();
  improve();
  impact();
}`}</pre>
        </div>
      </section>

      <section id="blog" className={styles.blogSection}>
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>Blog</p>
            <h2>Ideas, notas técnicas y aprendizajes.</h2>
          </div>
        </div>

        <div className={styles.blogGrid}>
          <article className={styles.blogCard}>
            <span>Arquitectura</span>
            <h3>Cómo diseño orquestadores backend robustos</h3>
            <p>
              Una mirada práctica a flujos transaccionales, logs, servicios
              externos y control de errores.
            </p>
          </article>

          <article className={styles.blogCard}>
            <span>Frontend</span>
            <h3>Interfaces industriales con experiencia moderna</h3>
            <p>
              Cómo llevar sistemas operativos complejos a pantallas simples,
              elegantes y fáciles de usar.
            </p>
          </article>

          <article className={styles.blogCard}>
            <span>Tiempo real</span>
            <h3>Monitoreo de dispositivos con WebSocket</h3>
            <p>
              Estrategias para visualizar estados, reconexiones y eventos en
              vivo dentro de una aplicación.
            </p>
          </article>
        </div>
      </section>

      <section id="contacto" className={styles.contactCard}>
        <div className={styles.contactBrand}>
          <div className={styles.contactLogo}>
            <span />
          </div>

          <div>
            <h2>¿Tienes un proyecto en mente?</h2>
            <p>Hablemos y construyamos algo increíble juntos.</p>
          </div>
        </div>

        <div className={styles.contactItem}>
          <Mail size={32} />
          <div>
            <strong>Email</strong>
            <span>isyancem.dev@gmail.com</span>
          </div>
        </div>

        <div className={styles.contactItem}>
          <MessageCircle size={32} />
          <div>
            <strong>WhatsApp</strong>
            <span>+593 99 123 4567</span>
          </div>
        </div>

        <a href="mailto:isyancem.dev@gmail.com" className={styles.primaryButton}>
          Hablemos
          <ArrowRight size={18} />
        </a>
      </section>

      <footer className={styles.footer}>
        <p>© 2024 ISYANCEM. Todos los derechos reservados.</p>

        <div className={styles.socials}>
          <a href="#" aria-label="GitHub">
            <span className={styles.socialText}>GH</span>
          </a>

          <a href="#" aria-label="LinkedIn">
            <span className={styles.socialText}>in</span>
          </a>

          <a href="#" aria-label="X">
            <X size={20} />
          </a>

          <a href="mailto:isyancem.dev@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </footer>
    </main>
  );
}

function renderTechIcon(tech: string) {
  if (tech === "Flutter") {
    return <span className={styles.flutterIcon}>F</span>;
  }

  if (tech === "NestJS") {
    return <span className={styles.nestIcon}>N</span>;
  }

  if (tech === "Next.js") {
    return <span className={styles.nextIcon}>N</span>;
  }

  if (tech === "Docker") {
    return <span className={styles.dockerIcon}>D</span>;
  }

  return <span className={styles.postgresIcon}>P</span>;
}

function TruckMockup() {
  return (
    <div className={styles.truckMockup}>
      <div className={styles.mockSidebar}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.truckScene}>
        <div className={styles.truckCab} />
        <div className={styles.truckTrailer} />
        <div className={styles.truckWheelOne} />
        <div className={styles.truckWheelTwo} />
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className={styles.dashboardMockup}>
      <div className={styles.mockSidebar}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.dashboardContent}>
        <div className={styles.chartLarge} />
        <div className={styles.chartCircle} />
        <div className={styles.chartSmall} />
        <div className={styles.chartBars} />
      </div>
    </div>
  );
}

function CodeMockup() {
  return (
    <div className={styles.codeMockup}>
      <div className={styles.fileTree}>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <pre>{`async function run() {
  await step('validate');
  await step('orchestrate');
  await step('audit');

  return ok(result);
}`}</pre>
    </div>
  );
}