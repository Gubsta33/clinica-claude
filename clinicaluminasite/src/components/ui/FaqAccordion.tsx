"use client";

import { useRef, useState } from "react";
import { animate } from "animejs";
import { ChevronDown } from "lucide-react";
import { prefersReducedMotion } from "@/lib/motion";

interface FaqAccordionProps {
  items: { q: string; a: string }[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggle = (index: number) => {
    const next = openIndex === index ? -1 : index;
    const reduced = prefersReducedMotion();

    panelRefs.current.forEach((panel, i) => {
      if (!panel) return;
      const shouldOpen = i === next;
      const isOpen = i === openIndex;
      if (shouldOpen === isOpen) return;
      if (reduced) {
        panel.style.height = shouldOpen ? "auto" : "0px";
        return;
      }
      if (shouldOpen) {
        panel.style.height = "0px";
        animate(panel, {
          height: `${panel.scrollHeight}px`,
          duration: 480,
          ease: "out(3)",
          onComplete: () => {
            panel.style.height = "auto";
          },
        });
      } else {
        panel.style.height = `${panel.scrollHeight}px`;
        requestAnimationFrame(() =>
          animate(panel, { height: "0px", duration: 420, ease: "out(3)" })
        );
      }
    });

    setOpenIndex(next);
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={i} className="card-shell overflow-hidden !shadow-none border border-dark/8">
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              id={`faq-trigger-${i}`}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-dark">{item.q}</span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-dark/10 transition-transform duration-500 ${
                  open ? "rotate-180 bg-soft-lilac" : ""
                }`}
                aria-hidden="true"
              >
                <ChevronDown size={16} />
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              style={{ height: i === 0 ? "auto" : 0, overflow: "hidden" }}
            >
              <p className="px-6 pb-6 text-sm leading-relaxed text-muted md:text-base">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
