import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Treatment } from "@/data/treatments";

interface TreatmentCardProps {
  treatment: Treatment;
  /** Card grande (destaque no grid editorial) */
  large?: boolean;
  priority?: boolean;
}

export default function TreatmentCard({
  treatment,
  large = false,
  priority = false,
}: TreatmentCardProps) {
  return (
    <Link
      href={`/tratamentos/${treatment.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-card transition-shadow duration-500 hover:shadow-soft"
    >
      <div
        className={`pearl-gradient relative w-full overflow-hidden ${
          large ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"
        }`}
      >
        <Image
          src={treatment.image}
          alt={treatment.imageAlt}
          fill
          sizes={large ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
          priority={priority}
          className="img-zoom object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-surface/85 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-dark backdrop-blur-sm">
          {treatment.category}
        </span>
      </div>
      <div className="flex flex-1 items-start justify-between gap-4 p-6 md:p-7">
        <div>
          <h3 className={`font-display text-dark ${large ? "text-3xl" : "text-2xl"}`}>
            {treatment.cardTitle}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
            {treatment.summary}
          </p>
        </div>
        <span
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dark/10 text-dark transition-all duration-500 group-hover:bg-dark group-hover:text-white"
          aria-hidden="true"
        >
          <ArrowUpRight size={17} />
        </span>
      </div>
    </Link>
  );
}
