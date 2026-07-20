"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { animate, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

interface FloatingProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Amplitude vertical em px */
  amplitude?: number;
  /** Rotação máxima em graus */
  rotate?: number;
  duration?: number;
  delay?: number;
}

/** Elemento decorativo com flutuação orgânica contínua (loop anime.js). */
export default function Floating({
  children,
  className,
  style,
  amplitude = 14,
  rotate = 4,
  duration = 5200,
  delay = 0,
}: FloatingProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    utils.set(el, { translateY: -amplitude / 2 });
    const anim = animate(el, {
      translateY: [-amplitude / 2, amplitude / 2],
      rotate: [-rotate / 2, rotate / 2],
      duration,
      delay,
      loop: true,
      alternate: true,
      ease: "inOutSine",
    });
    return () => {
      anim.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={ref} className={className} style={style} aria-hidden="true">
      {children}
    </div>
  );
}
