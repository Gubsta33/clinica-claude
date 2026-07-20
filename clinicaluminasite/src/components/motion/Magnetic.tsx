"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate } from "animejs";
import { isFinePointer, prefersReducedMotion } from "@/lib/motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Intensidade da atração (0–1) */
  strength?: number;
}

/** Envolve um botão/link com efeito magnético sutil no desktop. */
export default function Magnetic({
  children,
  className,
  strength = 0.28,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion() || !isFinePointer()) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      animate(el, {
        translateX: dx * strength,
        translateY: dy * strength,
        duration: 380,
        ease: "out(3)",
      });
    };
    const onLeave = () => {
      animate(el, {
        translateX: 0,
        translateY: 0,
        duration: 750,
        ease: "outElastic(1, .45)",
      });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className ?? "inline-block"}>
      {children}
    </div>
  );
}
