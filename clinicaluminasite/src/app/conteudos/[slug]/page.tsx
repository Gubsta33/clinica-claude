import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { articles, getArticle } from "@/data/articles";
import { getSpecialist } from "@/data/specialists";
import { site } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import ArticleCard from "@/components/ui/ArticleCard";
import CtaBanner from "@/components/ui/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/conteudos/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const author = getSpecialist(article.authorSlug);
  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 3);
  const formatted = new Date(`${article.date}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${site.url}${article.image}`,
    datePublished: article.date,
    inLanguage: "pt-BR",
    author: author
      ? { "@type": "Person", name: author.name, url: `${site.url}/especialistas/${author.slug}` }
      : { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />

      <article className="container-site pt-32 md:pt-40">
        <div className="mx-auto max-w-3xl">
          <Reveal y={16}>
            <Link
              href="/conteudos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-deep"
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Todos os conteúdos
            </Link>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-muted">
              {article.category} · {formatted} · {article.readingTime} de leitura
            </p>
          </Reveal>
          <SplitHeading
            text={article.title}
            as="h1"
            immediate
            delay={200}
            className="mt-4 text-4xl text-dark md:text-[3.2rem] md:leading-[1.08]"
          />
          {author ? (
            <Reveal y={18} delay={400}>
              <Link
                href={`/especialistas/${author.slug}`}
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-surface py-2 pl-2 pr-5 shadow-card"
              >
                <span className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image src={author.image} alt="" fill sizes="36px" className="object-cover object-top" />
                </span>
                <span className="text-sm">
                  <span className="font-bold text-dark">{author.name}</span>
                  <span className="text-muted"> · {author.role}</span>
                </span>
              </Link>
            </Reveal>
          ) : null}
        </div>

        <Reveal y={40} scale={0.98} className="mx-auto mt-12 max-w-5xl">
          <div className="pearl-gradient relative aspect-[16/8] overflow-hidden rounded-[var(--radius-shell)]">
            <Image
              src={article.image}
              alt={article.imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div className="prose-clinic mx-auto mt-14 max-w-3xl">
          {article.sections.map((section, i) => (
            <Reveal key={i} y={28}>
              <section>
                {section.heading ? <h2 className="font-display text-dark">{section.heading}</h2> : null}
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </Reveal>
          ))}
          <Reveal y={20}>
            <p className="mt-10 rounded-2xl bg-soft-lilac/60 px-6 py-5 text-sm leading-relaxed text-dark/75">
              Este conteúdo tem caráter informativo e não substitui avaliação
              profissional individual. Indicações, contraindicações e resultados
              variam caso a caso.
            </p>
          </Reveal>
        </div>
      </article>

      <section className="container-site mt-20 md:mt-28" aria-label="Outros artigos">
        <h2 className="font-display text-3xl text-dark md:text-4xl">Continue lendo</h2>
        <Reveal staggerChildren staggerDelay={120} className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </Reveal>
      </section>

      <CtaBanner />
    </>
  );
}
