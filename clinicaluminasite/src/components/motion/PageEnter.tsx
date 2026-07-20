"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

/** Transição de entrada de página (montada a cada navegação via template.tsx). */
export default function PageEnter({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    utils.set(el, { opacity: 0, translateY: 18 });
    const anim = animate(el, {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 700,
      ease: "out(3)",
    });
    return () => {
      anim.cancel();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
