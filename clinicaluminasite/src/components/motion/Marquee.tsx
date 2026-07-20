"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  /** Duração de um ciclo completo em ms */
  duration?: number;
}

/** Faixa infinita horizontal animada com anime.js (conteúdo duplicado). */
export default function Marquee({
  children,
  className,
  duration = 26000,
}: MarqueeProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const anim = animate(track, {
      translateX: ["0%", "-50%"],
      duration,
      loop: true,
      ease: "linear",
    });
    return () => {
      anim.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div ref={trackRef} className="marquee-track">
        <div className="flex shrink-0 items-center gap-14">{children}</div>
        <div className="flex shrink-0 items-center gap-14" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
