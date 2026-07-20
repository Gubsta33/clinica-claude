"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Deslocamento máximo em % da altura do elemento */
  strength?: number;
}

/** Parallax sutil no scroll (anime.js utils + rAF). */
export default function Parallax({
  children,
  className,
  strength = 7,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      if (rect.bottom < -100 || rect.top > vh + 100) return;
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      utils.set(el, { translateY: `${(-progress * strength).toFixed(2)}%` });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}
