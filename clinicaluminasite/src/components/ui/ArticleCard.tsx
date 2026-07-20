import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/data/articles";

export default function ArticleCard({ article }: { article: Article }) {
  const date = new Date(`${article.date}T12:00:00`);
  const formatted = date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/conteudos/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-card transition-shadow duration-500 hover:shadow-soft"
    >
      <div className="pearl-gradient relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="img-zoom object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-surface/85 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-dark backdrop-blur-sm">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-xs text-muted">
          {formatted} · {article.readingTime} de leitura
        </p>
        <h3 className="mt-2.5 font-display text-[1.45rem] leading-tight text-dark">
          {article.title}
        </h3>
        <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <span className="mt-auto flex items-center gap-1.5 pt-5 text-sm font-bold text-primary-deep">
          Ler artigo
          <ArrowUpRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
