import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, Microscope, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/data/site";
import { specialists } from "@/data/specialists";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecialistCard from "@/components/ui/SpecialistCard";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "A Clínica — nossa história, estrutura e valores",
  description:
    "Conheça a Clínica Lúmina: um espaço de estética avançada em São Paulo que une credibilidade médica, tecnologia validada e atendimento humano.",
  alternates: { canonical: "/clinica" },
};

const values = [
  {
    icon: Sparkles,
    title: "Naturalidade",
    text: "Procedimento bom é o que ninguém percebe. Realçamos o que você tem — não substituímos.",
  },
  {
    icon: Microscope,
    title: "Ciência",
    text: "Só entram na clínica técnicas e tecnologias com evidência e registro. Modismos ficam do lado de fora.",
  },
  {
    icon: HeartHandshake,
    title: "Honestidade",
    text: "Dizemos não quando é não. Expectativas realistas são parte do nosso protocolo, não um detalhe.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança",
    text: "Biossegurança rigorosa, produtos rastreados e equipe treinada para prevenir e conduzir intercorrências.",
  },
];

export default function ClinicPage() {
  return (
    <>
      {/* Hero interno */}
      <section className="container-site pt-24 md:pt-28">
        <div className="relative overflow-hidden rounded-[var(--radius-shell)]">
          <div className="pearl-gradient absolute inset-0" aria-hidden="true" />
          <Parallax className="absolute inset-[-6%]">
            <Image
              src="/images/clinica-interior.webp"
              alt="Recepção da clínica em tons marfim com curvas suaves, detalhes dourados e luz natural difusa"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-t from-dark/55 via-dark/10 to-transparent" aria-hidden="true" />
          <div className="relative flex min-h-[58vh] flex-col justify-end p-6 pb-10 md:p-14">
            <SectionHeading
              as="h1"
              onDark
              eyebrow={`${site.city} · ${site.uf}`}
              title="Um espaço pensado para você chegar respirando fundo."
            />
          </div>
        </div>
      </section>

      {/* História */}
      <section className="container-site mt-20 md:mt-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Nossa história" title="Nascemos de um incômodo com os exageros." />
            <Reveal delay={200} staggerChildren className="mt-7 space-y-5">
              <p className="leading-relaxed text-muted md:text-lg">
                A {site.name} nasceu da convicção de que estética avançada não
                precisa — e não deve — apagar identidades. Em um mercado que por
                anos celebrou o excesso, escolhemos o caminho mais difícil e mais
                bonito: o da naturalidade tecnicamente impecável.
              </p>
              <p className="leading-relaxed text-muted md:text-lg">
                Reunimos uma equipe multidisciplinar — dermatologia, biomedicina
                estética e fisioterapia dermatofuncional — em torno de um método
                único: avaliação criteriosa, plano em etapas, documentação
                fotográfica padronizada e revisões incluídas em todos os
                protocolos.
              </p>
              <p className="leading-relaxed text-muted md:text-lg">
                O resultado é uma clínica onde a tecnologia está a serviço da
                escuta, e onde cada decisão — do produto ao parâmetro do
                equipamento — pode ser explicada, porque foi pensada.
              </p>
            </Reveal>
          </div>
          <Reveal y={40} scale={0.97}>
            <div className="dark-panel flex h-full flex-col justify-between rounded-[var(--radius-shell)] p-10">
              <p className="font-display text-3xl leading-snug text-white md:text-4xl">
                “{site.tagline}”
              </p>
              <div className="mt-12 space-y-6">
                {[
                  ["Missão", "Cuidar da autoestima com técnica, ciência e verdade."],
                  ["Visão", "Ser referência em estética natural e segura na cidade."],
                ].map(([t, d]) => (
                  <div key={t}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">{t}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-white/70">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Valores */}
      <section className="container-site mt-20 md:mt-28" aria-label="Valores">
        <SectionHeading eyebrow="Valores" title="O que guia cada decisão da clínica." align="center" />
        <Reveal staggerChildren staggerDelay={120} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card-shell p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-lilac text-primary-deep">
                <v.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-dark">{v.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{v.text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Estrutura e tecnologia */}
      <section id="tecnologia" className="container-site mt-20 md:mt-28 scroll-mt-28">
        <div className="card-shell overflow-hidden rounded-[var(--radius-shell)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[32rem]">
              <Parallax className="absolute inset-[-8%]">
                <Image
                  src="/images/tecnologia.webp"
                  alt="Sala de tecnologia da clínica com equipamento moderno em ambiente acolhedor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14">
              <SectionHeading
                eyebrow="Estrutura e tecnologia"
                title="Arquitetura que acolhe, tecnologia que entrega."
                text="Salas amplas com iluminação natural, climatização individual e isolamento acústico. No andar das tecnologias, equipamentos de laser, radiofrequência e ultrassom validados pela equipe técnica — cada um com protocolo próprio, registrado e auditável."
              />
              <Reveal delay={280} staggerChildren className="mt-8 space-y-3">
                {[
                  "Salas de procedimento com padrão cirúrgico de biossegurança",
                  "Produtos rastreados do lote à aplicação",
                  "Protocolos de emergência e equipe treinada regularmente",
                  "Prontuário eletrônico com registro fotográfico padronizado",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-bg px-5 py-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    <p className="text-sm text-dark/80">{item}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="container-site mt-20 md:mt-28" aria-label="Equipe">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Equipe"
            title="Quem cuida de você."
            text="Três especialidades, um método. Conheça quem conduz cada área da clínica."
          />
          <Reveal y={20}>
            <Link href="/especialistas" className="btn btn-ghost mb-1">
              Ver perfis completos
            </Link>
          </Reveal>
        </div>
        <Reveal staggerChildren staggerDelay={140} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((s) => (
            <SpecialistCard key={s.slug} specialist={s} />
          ))}
        </Reveal>
      </section>

      <CtaBanner
        headline="Venha conhecer a clínica pessoalmente."
        text="Agende uma visita ou uma avaliação. Vai ser um prazer receber você."
      />
    </>
  );
}
