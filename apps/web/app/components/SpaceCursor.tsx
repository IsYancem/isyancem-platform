"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

export function SpaceCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactiveElement = target?.closest(
        "a, button, input, textarea, select, [role='button']",
      );

      setPosition({ x: event.clientX, y: event.clientY });
      setIsPointer(Boolean(interactiveElement));
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, []);

  return (
    <div
      className={`${styles.spaceCursor} ${
        isPointer ? styles.spaceCursorPointer : ""
      } ${isVisible ? styles.spaceCursorVisible : ""}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      <span className={styles.cursorTrail} />
      <span className={styles.cursorRocket}>
        <span className={styles.cursorRocketBody} />
        <span className={styles.cursorRocketWingLeft} />
        <span className={styles.cursorRocketWingRight} />
        <span className={styles.cursorRocketFlame} />
      </span>
      <span className={styles.cursorDot} />
    </div>
  );
}