import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { treatments, getTreatment } from "@/data/treatments";
import { getSpecialist } from "@/data/specialists";
import { site, whatsappLink } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import Magnetic from "@/components/motion/Magnetic";
import SectionHeading from "@/components/ui/SectionHeading";
import SplitHeading from "@/components/motion/SplitHeading";
import TreatmentCard from "@/components/ui/TreatmentCard";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBanner from "@/components/ui/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return {
    title: `${treatment.name} em ${site.city}`,
    description: treatment.summary,
    alternates: { canonical: `/tratamentos/${treatment.slug}` },
    openGraph: {
      title: `${treatment.name} | ${site.name}`,
      description: treatment.summary,
      images: [{ url: treatment.image }],
    },
  };
}

export default async function TreatmentPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) notFound();

  const specialist = getSpecialist(treatment.specialistSlug);
  const related = treatment.related
    .map((s) => getTreatment(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: treatment.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* Hero do tratamento */}
      <section className="container-site pt-24 md:pt-28">
        <div className="relative overflow-hidden rounded-[var(--radius-shell)]">
          <div className="pearl-gradient absolute inset-0" aria-hidden="true" />
          <Parallax className="absolute inset-[-6%]">
            <Image
              src={treatment.image}
              alt={treatment.imageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/10 to-transparent" aria-hidden="true" />
          <div className="relative flex min-h-[62vh] flex-col justify-end p-6 pb-10 md:p-14">
            <Reveal y={16}>
              <p className="eyebrow !text-secondary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {treatment.category} · {site.name}
              </p>
            </Reveal>
            <SplitHeading
              text={treatment.name}
              as="h1"
              immediate
              delay={150}
              className="mt-3 max-w-3xl text-5xl text-white md:text-7xl"
            />
            <Reveal delay={500} y={20}>
              <p className="mt-4 max-w-xl text-white/85 md:text-lg">{treatment.headline}</p>
            </Reveal>
            <Reveal delay={650} y={20}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <a
                    href={whatsappLink(`Olá! Gostaria de agendar uma avaliação para ${treatment.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-on-dark"
                  >
                    Agendar avaliação
                  </a>
                </Magnetic>
                {treatment.facts.map((f) => (
                  <span
                    key={f.label}
                    className="rounded-full border border-white/25 px-4 py-2.5 text-xs font-semibold text-white/90 backdrop-blur-sm"
                  >
                    {f.label}: {f.value}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Introdução + para quem */}
      <section className="container-site mt-20 md:mt-28">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Sobre o tratamento" title="O que é e como pensamos este cuidado." />
            <Reveal delay={200} staggerChildren className="mt-7 space-y-5">
              {treatment.intro.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted md:text-lg">{p}</p>
              ))}
            </Reveal>
          </div>
          <Reveal y={40} className="lg:mt-20">
            <div className="card-shell p-8">
              <h3 className="font-display text-2xl text-dark">Para quem é indicado</h3>
              <ul className="mt-5 space-y-3.5">
                {treatment.forWho.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <Check size={17} className="mt-0.5 shrink-0 text-primary-deep" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl bg-soft-lilac/60 px-4 py-3 text-xs leading-relaxed text-dark/70">
                A indicação definitiva é sempre individual e confirmada em
                avaliação presencial com nossos especialistas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Benefícios */}
      <section className="container-site mt-20 md:mt-28">
        <SectionHeading eyebrow="Benefícios" title="Por que este tratamento faz diferença." />
        <Reveal staggerChildren staggerDelay={130} className="mt-10 grid gap-5 md:grid-cols-3">
          {treatment.benefits.map((b, i) => (
            <div
              key={b.title}
              className={`rounded-[var(--radius-card)] p-8 ${
                i === 0 ? "dark-panel" : "card-shell"
              }`}
            >
              <p className={`font-display text-4xl ${i === 0 ? "text-accent" : "text-secondary"}`}>
                0{i + 1}
              </p>
              <h3 className={`mt-4 font-display text-2xl ${i === 0 ? "text-white" : "text-dark"}`}>
                {b.title}
              </h3>
              <p className={`mt-2.5 text-sm leading-relaxed ${i === 0 ? "text-white/70" : "text-muted"}`}>
                {b.text}
              </p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Como funciona */}
      <section className="container-site mt-20 md:mt-28">
        <div className="dark-panel rounded-[var(--radius-shell)] px-6 py-14 md:px-14 md:py-18">
          <SectionHeading onDark eyebrow="Etapas" title="Como o procedimento acontece." />
          <Reveal staggerChildren staggerDelay={120} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {treatment.steps.map((s, i) => (
              <div key={s.title} className="rounded-[var(--radius-card)] bg-white/[0.06] p-7 backdrop-blur-sm">
                <span className="font-display text-3xl text-accent">0{i + 1}</span>
                <h3 className="mt-4 font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{s.text}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Cuidados */}
      <section className="container-site mt-20 md:mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <SectionHeading
            eyebrow="Cuidados"
            title="O que esperar antes e depois."
            text="Cuidados simples fazem diferença real no resultado. Você recebe todas as orientações por escrito após a consulta — aqui vai um resumo."
          />
          <Reveal staggerChildren className="grid gap-5 sm:grid-cols-2">
            {treatment.care.map((c) => (
              <div key={c.title} className="card-shell p-7">
                <h3 className="font-display text-xl text-dark">{c.title}</h3>
                <ul className="mt-4 space-y-3">
                  {c.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Especialista responsável */}
      {specialist ? (
        <section className="container-site mt-20 md:mt-28">
          <Reveal y={40}>
            <div className="card-shell overflow-hidden">
              <div className="grid md:grid-cols-[0.9fr_2fr]">
                <div className="pearl-gradient relative min-h-[16rem]">
                  <Image
                    src={specialist.image}
                    alt={specialist.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:p-12">
                  <p className="eyebrow">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    Especialista responsável
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-dark">{specialist.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-primary-deep">
                    {specialist.role} · {specialist.registration}
                  </p>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {specialist.short}
                  </p>
                  <Link
                    href={`/especialistas/${specialist.slug}`}
                    className="btn btn-ghost mt-7 self-start"
                  >
                    Ver perfil completo
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      ) : null}

      {/* FAQ */}
      <section className="container-site mt-20 md:mt-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <SectionHeading
            eyebrow="Dúvidas frequentes"
            title="Perguntas que ouvimos todos os dias."
            text="Não encontrou a sua? Fale com a gente pelo WhatsApp — respondemos sem compromisso."
          />
          <Reveal y={36}>
            <FaqAccordion items={treatment.faqs} />
          </Reveal>
        </div>
      </section>

      {/* Relacionados */}
      {related.length > 0 ? (
        <section className="container-site mt-20 md:mt-28" aria-label="Tratamentos relacionados">
          <SectionHeading eyebrow="Continue explorando" title="Tratamentos relacionados." />
          <Reveal staggerChildren staggerDelay={120} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </Reveal>
        </section>
      ) : null}

      <CtaBanner
        headline={`Pronta para conversar sobre ${treatment.cardTitle.toLowerCase()}?`}
        text="Agende sua avaliação. Sem pressa, sem pressão — só um plano honesto para o seu caso."
        message={`Olá! Gostaria de agendar uma avaliação para ${treatment.name}.`}
      />
    </>
  );
}
