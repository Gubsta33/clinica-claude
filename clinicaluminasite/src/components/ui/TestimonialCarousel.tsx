"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { animate } from "animejs";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { prefersReducedMotion } from "@/lib/motion";

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  const goTo = useCallback(
    (next: number) => {
      const clamped = ((next % total) + total) % total;
      setIndex(clamped);
      const track = trackRef.current;
      if (!track) return;
      if (prefersReducedMotion()) {
        track.style.transform = `translateX(-${clamped * 100}%)`;
        return;
      }
      animate(track, {
        translateX: `-${clamped * 100}%`,
        duration: 850,
        ease: "inOut(3)",
      });
    },
    [total]
  );

  // Auto-avanço pausado em hover/foco
  useEffect(() => {
    if (prefersReducedMotion()) return;
    timerRef.current = setInterval(() => {
      setIndex((current) => {
        const next = (current + 1) % total;
        const track = trackRef.current;
        if (track) {
          animate(track, {
            translateX: `-${next * 100}%`,
            duration: 850,
            ease: "inOut(3)",
          });
        }
        return next;
      });
    }, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [total]);

  const pause = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onFocusCapture={pause}
      aria-roledescription="carrossel"
      aria-label="Depoimentos de pacientes"
    >
      <div className="overflow-hidden rounded-[var(--radius-card)]">
        <div ref={trackRef} className="flex" style={{ willChange: "transform" }}>
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="card-shell mr-0 w-full shrink-0 px-7 py-10 md:px-14 md:py-14"
              aria-hidden={i !== index}
            >
              <Quote size={34} className="text-secondary" aria-hidden="true" />
              <blockquote className="mt-5 max-w-3xl font-display text-xl leading-snug text-dark md:text-[1.7rem]">
                “{t.text}”
              </blockquote>
              <figcaption className="mt-7 text-sm">
                <span className="font-bold text-dark">{t.name}</span>
                <span className="text-muted"> · {t.treatment}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-0.5" role="tablist" aria-label="Selecionar depoimento">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Depoimento ${i + 1}`}
              onClick={() => goTo(i)}
              className="group/dot flex h-8 min-w-7 items-center justify-center"
            >
              <span
                aria-hidden="true"
                className={`h-2 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-8 bg-primary-deep"
                    : "w-2 bg-dark/15 group-hover/dot:bg-dark/30"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Depoimento anterior"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 bg-surface text-dark transition-colors hover:bg-dark hover:text-white"
          >
            <ArrowLeft size={17} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo depoimento"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 bg-surface text-dark transition-colors hover:bg-dark hover:text-white"
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
    </div>
  );
}
