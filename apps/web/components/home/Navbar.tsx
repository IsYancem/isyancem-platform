export default function Navbar() {
  return (
    <div className="nav-outer" id="navOuter">
      <nav className="nav" id="nav">
        <a className="brand" href="#inicio">
          <span className="mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L14.6 11 L12 22 L9.4 11 Z" fill="#fff" />
              <path
                d="M12 6 L13 11 L12 17 L11 11 Z"
                fill="var(--accent-light)"
              />
            </svg>
          </span>
          <span className="wm">ISYANCEM</span>
        </a>

        <ul className="nav-links">
          <li>
            <a href="#inicio" className="active">
              Inicio
            </a>
          </li>
          <li>
            <a href="#stack">Stack</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
        </ul>

        <a className="nav-cta" href="#contacto">
          <span className="dot" />
          Hablemos
        </a>

        <button className="menu-btn" id="menuBtn" aria-label="Menú">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </nav>
    </div>
  );
}