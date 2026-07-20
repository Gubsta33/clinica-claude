"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";
import { animate, stagger, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Deslocamento vertical inicial em px */
  y?: number;
  /** Escala inicial (ex.: 0.96 para um leve zoom-in) */
  scale?: number;
  delay?: number;
  duration?: number;
  /** Anima os filhos diretos em cascata em vez do contêiner */
  staggerChildren?: boolean;
  staggerDelay?: number;
  as?: "div" | "section" | "span" | "ul" | "li" | "article" | "figure";
}

export default function Reveal({
  children,
  className,
  style,
  y = 36,
  scale,
  delay = 0,
  duration = 950,
  staggerChildren = false,
  staggerDelay = 110,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets: Element[] = staggerChildren
      ? Array.from(el.children)
      : [el];
    if (targets.length === 0) return;

    utils.set(targets, {
      opacity: 0,
      translateY: y,
      ...(scale ? { scale } : {}),
    });

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        animate(targets, {
          opacity: [0, 1],
          translateY: [y, 0],
          ...(scale ? { scale: [scale, 1] } : {}),
          duration,
          delay: staggerChildren ? stagger(staggerDelay, { start: delay }) : delay,
          ease: "out(4)",
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  );
}
