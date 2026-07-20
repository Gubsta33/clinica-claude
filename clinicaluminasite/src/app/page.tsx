import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { treatments } from "@/data/treatments";
import { specialists } from "@/data/specialists";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Floating from "@/components/motion/Floating";
import Magnetic from "@/components/motion/Magnetic";
import Parallax from "@/components/motion/Parallax";
import Marquee from "@/components/motion/Marquee";
import CountUp from "@/components/motion/CountUp";
import SectionHeading from "@/components/ui/SectionHeading";
import TreatmentCard from "@/components/ui/TreatmentCard";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import CtaBanner from "@/components/ui/CtaBanner";

const trustItems = [
  "Produtos com registro ANVISA",
  "Protocolos com respaldo científico",
  "Avaliação individual obrigatória",
  "Ambiente com biossegurança",
  "Acompanhamento pós-procedimento",
  "Equipe habilitada e registrada",
];

const benefits = [
  {
    title: "Resultados naturais",
    text: "Planejamentos personalizados para respeitar suas características — realçar, nunca transformar.",
  },
  {
    title: "Tecnologia avançada",
    text: "Equipamentos e protocolos modernos para tratamentos mais precisos, confortáveis e seguros.",
  },
  {
    title: "Acompanhamento próximo",
    text: "Atendimento cuidadoso antes, durante e após cada procedimento, com revisões incluídas.",
  },
];

export default function HomePage() {
  const featured = specialists[0];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="container-site pt-24 md:pt-28" aria-label="Apresentação">
        <div className="relative overflow-hidden rounded-[var(--radius-shell)]">
          <div className="pearl-gradient absolute inset-0" aria-hidden="true" />
          <Image
            src="/images/hero.webp"
            alt="Campo onírico de flores de lavanda sob céu perolado, com formas de pérola e vidro translúcido"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-dark/25"
            aria-hidden="true"
          />

          {/* Orbes decorativos flutuantes */}
          <Floating
            className="pointer-events-none absolute left-[8%] top-[18%] hidden h-20 w-20 rounded-full bg-white/30 backdrop-blur-md md:block"
            amplitude={18}
            duration={6400}
          />
          <Floating
            className="pointer-events-none absolute right-[10%] top-[30%] hidden h-12 w-12 rounded-full bg-soft-lilac/60 backdrop-blur-sm md:block"
            amplitude={14}
            duration={5200}
            delay={800}
          />
          <Floating
            className="pointer-events-none absolute bottom-[24%] right-[22%] hidden h-7 w-7 rounded-full bg-accent/50 md:block"
            amplitude={10}
            duration={4600}
            delay={400}
          />

          <div className="relative flex min-h-[86vh] flex-col items-center justify-center px-5 py-24 text-center md:min-h-[78vh]">
            <Reveal y={18} duration={800}>
              <p className="mx-auto inline-flex items-center gap-2 rounded-full bg-surface/70 px-5 py-2.5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-dark backdrop-blur-md">
                <Sparkles size={13} className="text-primary-deep" aria-hidden="true" />
                Estética avançada e resultados naturais
              </p>
            </Reveal>
            <SplitHeading
              text="Realce sua beleza sem deixar de ser você."
              as="h1"
              immediate
              delay={250}
              className="mt-7 max-w-4xl text-[2.7rem] leading-[1.05] text-dark sm:text-6xl md:text-7xl lg:text-[5.2rem]"
            />
            <Reveal delay={900} y={24}>
              <p className="mx-auto mt-6 max-w-xl text-base text-dark/75 md:text-lg">
                Tratamentos personalizados, tecnologia avançada e acompanhamento
                profissional para resultados elegantes e naturais.
              </p>
            </Reveal>
            <Reveal delay={1100} y={24}>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
                <Magnetic>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark !px-9"
                  >
                    Agendar avaliação
                  </a>
                </Magnetic>
                <Link href="/tratamentos" className="btn btn-light !px-9">
                  Conhecer tratamentos
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Faixa de confiança ───────────────────────────────── */}
      <section className="mt-14 md:mt-20" aria-label="Nossos compromissos">
        <Reveal y={20}>
          <div className="hairline border-b border-dark/9 py-7">
            <Marquee>
              {trustItems.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 whitespace-nowrap text-sm font-semibold text-muted"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </Marquee>
          </div>
        </Reveal>
      </section>

      {/* ── Introdução da clínica ────────────────────────────── */}
      <section className="container-site mt-24 md:mt-32" aria-label="Sobre a clínica">
        <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_1fr]">
          <SectionHeading
            eyebrow="A Clínica"
            title="Cuidado estético que começa pela sua individualidade."
          />
          <div>
            <Reveal delay={200} y={26}>
              <p className="text-muted md:text-lg">
                Na {site.name}, cada plano de tratamento nasce de uma avaliação
                honesta — do que a sua pele precisa, do que o seu rosto pede e
                do que faz sentido para a sua rotina. Tecnologia e técnica
                importam; escuta importa ainda mais.
              </p>
            </Reveal>
            <Reveal delay={340} y={26}>
              <Link href="/clinica" className="btn btn-ghost mt-7">
                Conhecer a clínica
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* ── Benefícios (3 cards no estilo da referência) ───── */}
        <Reveal staggerChildren staggerDelay={140} className="mt-14 grid gap-5 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-[var(--radius-card)] bg-soft-lilac p-8">
            <div className="pearl-gradient absolute inset-x-0 bottom-0 top-1/2" aria-hidden="true" />
            <Image
              src="/images/escultura-contorno.webp"
              alt=""
              width={520}
              height={400}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="absolute bottom-0 right-0 h-1/2 w-full object-cover object-center opacity-90 [mask-image:linear-gradient(to_top,black_65%,transparent)]"
              aria-hidden="true"
            />
            <div className="relative flex min-h-[19rem] flex-col">
              <h3 className="font-display text-3xl text-dark">{benefits[0].title}</h3>
              <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-dark/70">
                {benefits[0].text}
              </p>
            </div>
          </div>
          {benefits.slice(1).map((b) => (
            <div key={b.title} className="dark-panel flex min-h-[19rem] flex-col rounded-[var(--radius-card)] p-8">
              <h3 className="font-display text-3xl">{b.title}</h3>
              <p className="mt-auto pt-10 text-sm leading-relaxed text-white/70">{b.text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* ── Tratamentos ──────────────────────────────────────── */}
      <section className="container-site mt-24 md:mt-32" aria-label="Tratamentos">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Tratamentos"
            title="Tratamentos pensados para você."
            text="Do primeiro cuidado com a pele aos protocolos mais avançados — cada tratamento tem sua própria página, com indicações, etapas e respostas às dúvidas mais comuns."
          />
          <Reveal y={20}>
            <Link href="/tratamentos" className="btn btn-ghost mb-1">
              Ver todos
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <Reveal y={44}>
            <TreatmentCard treatment={treatments[0]} large />
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {treatments.slice(1, 3).map((t, i) => (
              <Reveal key={t.slug} y={44} delay={i * 120}>
                <TreatmentCard treatment={t} />
              </Reveal>
            ))}
            <Reveal y={44} delay={240} className="sm:col-span-2">
              <div className="dark-panel flex h-full min-h-[9rem] items-center justify-between gap-4 rounded-[var(--radius-card)] p-7">
                <div>
                  <p className="font-display text-2xl">Não sabe por onde começar?</p>
                  <p className="mt-1 text-sm text-white/65">
                    A avaliação define o melhor caminho para você.
                  </p>
                </div>
                <a
                  href={whatsappLink("Olá! Gostaria de uma avaliação para saber qual tratamento é indicado para mim.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Agendar avaliação pelo WhatsApp"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-dark transition-transform duration-300 hover:scale-105"
                >
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.slice(3).map((t, i) => (
            <Reveal key={t.slug} y={44} delay={i * 90}>
              <TreatmentCard treatment={t} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Tecnologia (split como na referência) ────────────── */}
      <section className="container-site mt-24 md:mt-32" aria-label="Tecnologia">
        <div className="card-shell overflow-hidden rounded-[var(--radius-shell)]">
          <div className="grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">
              <SectionHeading
                eyebrow="Tecnologia"
                title="Tecnologia e sensibilidade trabalhando juntas."
                text="Equipamentos são ferramentas — o resultado vem do método. Cada tecnologia da clínica passa por validação criteriosa de segurança e eficácia antes de chegar às salas de atendimento, e cada parâmetro é registrado e ajustado à resposta da sua pele."
              />
              <Reveal delay={300} y={24}>
                <div className="mt-9 grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-display text-4xl text-dark md:text-5xl">
                      <CountUp value={7} suffix="+" />
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      Tecnologias
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl text-dark md:text-5xl">
                      <CountUp value={3} />
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      Especialistas
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-4xl text-dark md:text-5xl">
                      <CountUp value={100} suffix="%" />
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted">
                      Planos individuais
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={420} y={24}>
                <Link href="/clinica#tecnologia" className="btn btn-dark mt-10 self-start">
                  Conhecer nossa estrutura
                </Link>
              </Reveal>
            </div>
            <div className="relative min-h-[20rem] overflow-hidden lg:min-h-[34rem]">
              <Parallax className="absolute inset-[-8%]">
                <Image
                  src="/images/clinica-pavilhao.webp"
                  alt="Pavilhão conceitual da clínica cercado por elementos botânicos suaves"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
          </div>
        </div>
      </section>

      {/* ── Especialista em destaque ─────────────────────────── */}
      <section className="container-site mt-24 md:mt-32" aria-label="Especialistas">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal y={40} scale={0.97}>
            <div className="relative overflow-hidden rounded-[var(--radius-shell)]">
              <div className="pearl-gradient aspect-[3/4] w-full" aria-hidden="true" />
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-[var(--radius-card)] bg-surface/85 p-5 backdrop-blur-md">
                <p className="font-display text-xl text-dark">{featured.name}</p>
                <p className="text-sm text-primary-deep">{featured.role}</p>
                <p className="text-xs text-muted">{featured.registration}</p>
              </div>
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Especialistas"
              title="Conhecimento técnico com atendimento humano."
              text={featured.short}
            />
            <Reveal delay={250} staggerChildren className="mt-8 space-y-3">
              {featured.credentials.slice(0, 3).map((c) => (
                <div key={c} className="flex items-start gap-3 rounded-2xl bg-surface px-5 py-4 shadow-card">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <p className="text-sm text-dark/80">{c}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={420} y={24}>
              <Link href="/especialistas" className="btn btn-dark mt-9">
                Conhecer especialistas
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Resultados / metodologia ─────────────────────────── */}
      <section className="container-site mt-24 md:mt-32" aria-label="Resultados">
        <div className="dark-panel overflow-hidden rounded-[var(--radius-shell)] px-6 py-14 md:px-14 md:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <SectionHeading
                onDark
                eyebrow="Resultados"
                title="Resultados que preservam sua identidade."
                text="Não trabalhamos com promessas — trabalhamos com método. Cada tratamento é documentado com fotografias padronizadas e reavaliações periódicas, e os resultados são acompanhados com a mesma seriedade com que são planejados."
              />
              <Reveal delay={300} y={24}>
                <Link href="/resultados" className="btn btn-on-dark mt-9">
                  Ver como conduzimos
                </Link>
              </Reveal>
            </div>
            <Reveal staggerChildren staggerDelay={130} className="space-y-3.5">
              {[
                ["01", "Avaliação criteriosa", "Análise completa, expectativas alinhadas e plano transparente."],
                ["02", "Execução técnica", "Procedimentos com produtos registrados e técnica documentada."],
                ["03", "Registro padronizado", "Fotografias comparáveis em cada etapa da evolução."],
                ["04", "Revisão e refinamento", "Retornos incluídos para ajustes finos e acompanhamento."],
              ].map(([n, t, d]) => (
                <div key={n} className="flex gap-5 rounded-[var(--radius-card)] bg-white/[0.06] p-6 backdrop-blur-sm">
                  <span className="font-display text-2xl text-accent">{n}</span>
                  <div>
                    <p className="font-semibold text-white">{t}</p>
                    <p className="mt-1 text-sm text-white/60">{d}</p>
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Depoimentos ──────────────────────────────────────── */}
      <section className="container-site mt-24 md:mt-32" aria-label="Depoimentos">
        <SectionHeading
          eyebrow="Depoimentos"
          title="Experiências de quem escolheu se cuidar."
          align="center"
        />
        <Reveal y={40} className="mt-12">
          <TestimonialCarousel />
        </Reveal>
        <Reveal y={16}>
          <p className="mt-6 text-center text-xs text-muted">
            Depoimentos ilustrativos. Resultados e experiências variam de pessoa para pessoa.
          </p>
        </Reveal>
      </section>

      {/* ── CTA final ────────────────────────────────────────── */}
      <CtaBanner />
    </>
  );
}
