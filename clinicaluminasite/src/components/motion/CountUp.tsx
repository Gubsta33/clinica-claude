"use client";

import { useEffect, useRef } from "react";
import { animate } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

/** Número que conta de 0 até o valor ao entrar na tela. */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 1800,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${value}${suffix}`;
      return;
    }

    const counter = { n: 0 };
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        animate(counter, {
          n: value,
          duration,
          ease: "out(3)",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(counter.n)}${suffix}`;
          },
        });
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
