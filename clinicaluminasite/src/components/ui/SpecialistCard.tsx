import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Specialist } from "@/data/specialists";

export default function SpecialistCard({ specialist }: { specialist: Specialist }) {
  return (
    <Link
      href={`/especialistas/${specialist.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-card transition-shadow duration-500 hover:shadow-soft"
    >
      <div className="pearl-gradient relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={specialist.image}
          alt={specialist.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="img-zoom object-cover object-top"
        />
      </div>
      <div className="flex flex-1 items-start justify-between gap-3 p-6">
        <div>
          <h3 className="font-display text-2xl text-dark">{specialist.name}</h3>
          <p className="mt-1 text-sm font-semibold text-primary-deep">{specialist.role}</p>
          <p className="mt-1 text-xs text-muted">{specialist.registration}</p>
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
