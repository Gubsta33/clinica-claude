import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { GraduationCap, Stethoscope } from "lucide-react";
import { specialists, getSpecialist } from "@/data/specialists";
import { getTreatment } from "@/data/treatments";
import { site, whatsappLink } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/ui/TreatmentCard";
import CtaBanner from "@/components/ui/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return specialists.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialist = getSpecialist(slug);
  if (!specialist) return {};
  return {
    title: `${specialist.name} — ${specialist.role}`,
    description: specialist.short,
    alternates: { canonical: `/especialistas/${specialist.slug}` },
  };
}

export default async function SpecialistPage({ params }: PageProps) {
  const { slug } = await params;
  const specialist = getSpecialist(slug);
  if (!specialist) notFound();

  const related = specialist.treatments
    .map((s) => getTreatment(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: specialist.name,
    jobTitle: specialist.role,
    description: specialist.short,
    image: `${site.url}${specialist.image}`,
    worksFor: { "@type": "MedicalBusiness", name: site.name, url: site.url },
    knowsAbout: specialist.specialties,
  };

  return (
    <>
      <JsonLd data={personJsonLd} />

      <section className="container-site pt-32 md:pt-40">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
          <Reveal y={40} scale={0.97}>
            <div className="relative overflow-hidden rounded-[var(--radius-shell)]">
              <div className="pearl-gradient aspect-[3/4] w-full" aria-hidden="true" />
              <Image
                src={specialist.image}
                alt={specialist.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-top"
              />
            </div>
          </Reveal>

          <div>
            <SectionHeading
              as="h1"
              eyebrow={specialist.role}
              title={specialist.name}
              text={specialist.short}
            />
            <Reveal delay={150} y={18}>
              <p className="mt-3 inline-block rounded-full bg-soft-lilac px-4 py-2 text-xs font-bold tracking-wide text-dark">
                {specialist.registration}
              </p>
            </Reveal>
            <Reveal delay={250} staggerChildren className="mt-8 space-y-5">
              {specialist.bio.map((p, i) => (
                <p key={i} className="leading-relaxed text-muted md:text-lg">{p}</p>
              ))}
            </Reveal>
            <Reveal delay={380} y={22}>
              <Magnetic>
                <a
                  href={whatsappLink(`Olá! Gostaria de agendar uma avaliação com ${specialist.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark mt-9"
                >
                  Agendar com {specialist.name.split(" ")[0]} {specialist.name.split(" ")[1]}
                </a>
              </Magnetic>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-site mt-20 md:mt-28">
        <Reveal staggerChildren staggerDelay={140} className="grid gap-5 md:grid-cols-2">
          <div className="card-shell p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-lilac text-primary-deep">
              <GraduationCap size={22} aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-2xl text-dark">Formação e credenciais</h2>
            <ul className="mt-5 space-y-3">
              {specialist.credentials.map((c) => (
                <li key={c} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="dark-panel rounded-[var(--radius-card)] p-9">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-secondary">
              <Stethoscope size={22} aria-hidden="true" />
            </span>
            <h2 className="mt-5 font-display text-2xl text-white">Áreas de atuação</h2>
            <ul className="mt-5 space-y-3">
              {specialist.specialties.map((s) => (
                <li key={s} className="flex gap-2.5 text-sm leading-relaxed text-white/70">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {related.length > 0 ? (
        <section className="container-site mt-20 md:mt-28" aria-label="Tratamentos conduzidos">
          <SectionHeading
            eyebrow="Tratamentos"
            title={`Tratamentos conduzidos por ${specialist.name.split(" ")[0]} ${specialist.name.split(" ")[1]}.`}
          />
          <Reveal staggerChildren staggerDelay={120} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <TreatmentCard key={t.slug} treatment={t} />
            ))}
          </Reveal>
        </section>
      ) : null}

      <CtaBanner />
    </>
  );
}
