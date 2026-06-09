"use client";

import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "../page.module.css";

const menuItems = [
  { id: "inicio", label: "Inicio" },
  { id: "stack", label: "Stack" },
  { id: "proyectos", label: "Proyectos" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "blog", label: "Blog" },
  { id: "contacto", label: "Contacto" },
] as const;

type MenuItem = (typeof menuItems)[number];

const defaultSection: MenuItem = menuItems[0];
const navbarOffset = 118;

export function Navbar() {
  const [activeSection, setActiveSection] = useState(defaultSection.id);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection: MenuItem = defaultSection;

      for (const item of menuItems) {
        const element = document.getElementById(item.id);

        if (!element) {
          continue;
        }

        const rect = element.getBoundingClientRect();

        if (rect.top <= navbarOffset) {
          currentSection = item;
        }
      }

      setActiveSection(currentSection.id);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (sectionId: MenuItem["id"]) => {
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);

    if (!element) {
      return;
    }

    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.brand}
        onClick={() => handleMenuClick("inicio")}
        aria-label="Ir al inicio"
      >
        <Image
          src="/assets/brand/isyancem-logo.png"
          alt="ISYANCEM"
          width={54}
          height={54}
          priority
          className={styles.brandImage}
        />

        <span>ISYANCEM</span>
      </button>

      <nav className={styles.nav} aria-label="Menú principal">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activeSection === item.id ? styles.active : undefined}
            onClick={() => handleMenuClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button
        type="button"
        className={styles.talkButton}
        onClick={() => handleMenuClick("contacto")}
      >
        <MessageCircle size={16} />
        Hablemos
      </button>
    </header>
  );
}