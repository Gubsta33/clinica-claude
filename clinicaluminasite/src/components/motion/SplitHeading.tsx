"use client";

import { useEffect, useRef, type ElementType } from "react";
import { animate, stagger, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

interface SplitHeadingProps {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Anima imediatamente (hero) em vez de aguardar o scroll */
  immediate?: boolean;
}

/**
 * Título com revelação palavra a palavra por máscara.
 * As palavras são separadas no render (SSR-safe) e animadas com anime.js.
 */
export default function SplitHeading({
  text,
  as: Tag = "h2",
  className,
  delay = 0,
  immediate = false,
}: SplitHeadingProps) {
  const ref = useRef<HTMLElement | null>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const targets = el.querySelectorAll<HTMLElement>(".split-word");
    if (targets.length === 0) return;

    utils.set(targets, { translateY: "112%", rotate: "2.5deg", opacity: 0 });

    const play = () =>
      animate(targets, {
        translateY: ["112%", "0%"],
        rotate: ["2.5deg", "0deg"],
        opacity: [0, 1],
        duration: 1100,
        delay: stagger(70, { start: delay }),
        ease: "out(5)",
      });

    if (immediate) {
      play();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        play();
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Tag ref={ref as any} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden="true">
          <span className="split-mask">
            <span className="split-word">{word}</span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
