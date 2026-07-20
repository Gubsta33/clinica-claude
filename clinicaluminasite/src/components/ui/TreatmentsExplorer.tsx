"use client";

import { useRef, useState } from "react";
import { animate, stagger, utils } from "animejs";
import { treatments, type TreatmentCategory } from "@/data/treatments";
import TreatmentCard from "@/components/ui/TreatmentCard";
import { prefersReducedMotion } from "@/lib/motion";

const categories: ("Todos" | TreatmentCategory)[] = [
  "Todos",
  "Face",
  "Pele",
  "Corpo",
  "Tecnologia",
];

export default function TreatmentsExplorer() {
  const [active, setActive] = useState<(typeof categories)[number]>("Todos");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    active === "Todos" ? treatments : treatments.filter((t) => t.category === active);

  const select = (cat: (typeof categories)[number]) => {
    if (cat === active) return;
    setActive(cat);
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;
    requestAnimationFrame(() => {
      const cards = grid.querySelectorAll("[data-card]");
      utils.set(cards, { opacity: 0, translateY: 28, scale: 0.97 });
      animate(cards, {
        opacity: [0, 1],
        translateY: [28, 0],
        scale: [0.97, 1],
        duration: 620,
        delay: stagger(70),
        ease: "out(4)",
      });
    });
  };

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Filtrar tratamentos por categoria"
        className="flex flex-wrap gap-2"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            role="tab"
            aria-selected={active === cat}
            onClick={() => select(cat)}
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
              active === cat
                ? "bg-dark text-white"
                : "bg-surface text-muted shadow-card hover:text-dark"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div ref={gridRef} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <div key={t.slug} data-card>
            <TreatmentCard treatment={t} />
          </div>
        ))}
      </div>
    </div>
  );
}
