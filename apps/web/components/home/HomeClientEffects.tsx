"use client";

import { useEffect } from "react";

export default function HomeClientEffects() {
  useEffect(() => {
    const probe = document.createElement("div");

    probe.style.cssText =
      "position:fixed;left:-9999px;top:0;width:4px;height:4px;opacity:0;transition:opacity .05s linear";

    document.documentElement.appendChild(probe);

    void probe.offsetWidth;

    probe.style.opacity = "1";

    const probeTimeout = window.setTimeout(() => {
      const advanced = parseFloat(getComputedStyle(probe).opacity) > 0.5;

      probe.remove();

      if (!advanced) {
        document.documentElement.classList.add("no-motion");

        document.querySelectorAll(".reveal").forEach((el) => {
          el.classList.add("in");
        });

        document.querySelectorAll<HTMLElement>(".stat[data-num]").forEach((el) => {
          const value = el.querySelector<HTMLElement>(".val");
          if (value) value.textContent = el.dataset.num ?? "0";
        });
      }
    }, 200);

    const year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());

    const navOuter = document.getElementById("navOuter");
    const nav = document.getElementById("nav");
    const menuBtn = document.getElementById("menuBtn");

    const onWindowScroll = () => {
      navOuter?.classList.toggle("scrolled", window.scrollY > 24);
    };

    window.addEventListener("scroll", onWindowScroll, { passive: true });

    const onMenuClick = () => {
      nav?.classList.toggle("open");
    };

    menuBtn?.addEventListener("click", onMenuClick);

    const navLinks = Array.from(document.querySelectorAll(".nav-links a"));

    const closeMenu = () => {
      nav?.classList.remove("open");
    };

    navLinks.forEach((link) => link.addEventListener("click", closeMenu));

    const cursorGlow = document.getElementById("cursorGlow");

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let rafId = 0;

    const onMouseMove = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const loop = () => {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;

      if (cursorGlow) {
        cursorGlow.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      }

      rafId = window.requestAnimationFrame(loop);
    };

    loop();

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

    const runCount = (el: HTMLElement) => {
      if (el.dataset.counted) return;

      el.dataset.counted = "1";

      const target = Number(el.dataset.num ?? "0");
      const valEl = el.querySelector<HTMLElement>(".val");

      if (!valEl) return;

      const duration = 1500;
      const start = performance.now();

      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        valEl.textContent = String(Math.round(easeOut(progress) * target));

        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      };

      window.requestAnimationFrame(tick);
    };

    const checkReveals = () => {
      const trigger = window.innerHeight * 0.92;

      revealEls.forEach((el) => {
        if (el.classList.contains("in")) return;

        const rect = el.getBoundingClientRect();

        if (rect.top < trigger && rect.bottom > 0) {
          el.classList.add("in");

          if (el.matches(".stat[data-num]")) {
            runCount(el);
          }
        }
      });
    };

    const sectionIds = ["inicio", "stack", "proyectos", "sobre-mi", "contacto"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const navMap: Record<string, Element> = {};

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href?.startsWith("#")) return;

      navMap[href.slice(1)] = link;
    });

    const checkSpy = () => {
      const line = window.innerHeight * 0.35;
      let current = sections[0]?.id;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= line) {
          current = section.id;
        }
      });

      Object.entries(navMap).forEach(([id, link]) => {
        link.classList.toggle("active", id === current);
      });
    };

    let ticking = false;

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        checkReveals();
        checkSpy();
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    checkReveals();
    checkSpy();

    const revealRaf = window.requestAnimationFrame(() => {
      checkReveals();
      checkSpy();
    });

    const finalTimeout = window.setTimeout(() => {
      checkReveals();
      checkSpy();
    }, 400);

    const syncSlots = () => {
      document.querySelectorAll("image-slot").forEach((slot) => {
        const parent = slot.parentElement;
        const placeholder = parent?.querySelector<HTMLElement>(".shot-ph");

        if (!placeholder) return;

        const shadow = (slot as HTMLElement & { shadowRoot: ShadowRoot | null })
          .shadowRoot;

        const image = shadow?.querySelector("img");

        placeholder.style.opacity = image?.getAttribute("src") ? "0" : "1";
      });
    };

    const slotInterval = window.setInterval(syncSlots, 800);

    return () => {
      window.clearTimeout(probeTimeout);
      window.clearTimeout(finalTimeout);
      window.cancelAnimationFrame(rafId);
      window.cancelAnimationFrame(revealRaf);

      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      menuBtn?.removeEventListener("click", onMenuClick);
      navLinks.forEach((link) => link.removeEventListener("click", closeMenu));

      window.clearInterval(slotInterval);
    };
  }, []);

  return null;
}