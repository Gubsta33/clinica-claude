import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Camera, FileCheck2, RefreshCcw, ScanFace } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Resultados — como conduzimos e documentamos cada caso",
  description:
    "Na Clínica Lúmina, resultados são acompanhados com método: fotografia padronizada, reavaliações periódicas e casos reais apresentados apenas com autorização.",
  alternates: { canonical: "/resultados" },
};

const method = [
  {
    icon: ScanFace,
    title: "Avaliação e linha de base",
    text: "Todo tratamento começa com registro fotográfico padronizado — mesmo ângulo, mesma luz, mesma distância. É a régua honesta de qualquer evolução.",
  },
  {
    icon: FileCheck2,
    title: "Plano documentado",
    text: "Produtos, lotes, doses e parâmetros registrados em prontuário eletrônico. Cada decisão pode ser auditada e explicada.",
  },
  {
    icon: Camera,
    title: "Evolução comparável",
    text: "Novos registros a cada etapa, comparados lado a lado com a linha de base. Você enxerga a evolução com os próprios olhos.",
  },
  {
    icon: RefreshCcw,
    title: "Revisão e refinamento",
    text: "Retornos incluídos no protocolo para ajustes finos. Resultado bom é resultado revisado.",
  },
];

export default function ResultsPage() {
  return (
    <>
      <section className="container-site pt-32 md:pt-40">
        <SectionHeading
          as="h1"
          eyebrow="Resultados"
          title="Resultados que preservam sua identidade."
          text="Você não vai encontrar aqui montagens milagrosas nem promessas de transformação. Por respeito à legislação sanitária e — principalmente — a você, apresentamos casos reais apenas presencialmente, com autorização expressa de cada paciente."
        />
      </section>

      {/* Filosofia */}
      <section className="container-site mt-16 md:mt-20">
        <div className="card-shell overflow-hidden rounded-[var(--radius-shell)]">
          <div className="grid lg:grid-cols-2">
            <div className="relative min-h-[18rem] overflow-hidden lg:min-h-[28rem]">
              <Parallax className="absolute inset-[-8%]">
                <Image
                  src="/images/escultura-contorno.webp"
                  alt="Escultura perolada abstrata inspirada em contornos faciais naturais"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Parallax>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14">
              <SectionHeading
                eyebrow="Nossa filosofia"
                title="O melhor elogio é 'você está ótima', não 'o que você fez?'"
                text="Buscamos o resultado que devolve descanso e equilíbrio ao rosto sem denunciar procedimento algum. Isso significa doses conservadoras, evolução em etapas e a coragem de dizer 'por enquanto, nada' quando é o melhor para você."
              />
              <Reveal delay={300} y={22}>
                <Link href="/tratamentos" className="btn btn-dark mt-8 self-start">
                  Conhecer os tratamentos
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="container-site mt-20 md:mt-28">
        <SectionHeading
          eyebrow="Método"
          title="Como acompanhamos cada evolução."
          align="center"
        />
        <Reveal staggerChildren staggerDelay={130} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {method.map((m) => (
            <div key={m.title} className="card-shell p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-lilac text-primary-deep">
                <m.icon size={22} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-dark">{m.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{m.text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Transparência */}
      <section className="container-site mt-20 md:mt-28">
        <Reveal y={36}>
          <div className="dark-panel rounded-[var(--radius-shell)] px-6 py-14 text-center md:px-16">
            <h2 className="mx-auto max-w-2xl font-display text-3xl text-white md:text-4xl">
              Por que não publicamos antes e depois no site?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Imagens de antes e depois na internet são facilmente tiradas de
              contexto e criam expectativas que podem não se aplicar ao seu
              caso. Seguimos as diretrizes éticas dos conselhos profissionais:
              casos reais são apresentados na consulta, com autorização de cada
              paciente, e sempre acompanhados do contexto clínico completo.
              Resultados variam de pessoa para pessoa.
            </p>
          </div>
        </Reveal>
      </section>

      <CtaBanner
        headline="Quer ver o que é possível para o seu caso?"
        text="Agende uma avaliação. Levamos casos semelhantes ao seu para a conversa — com contexto, honestidade e zero promessas vazias."
      />
    </>
  );
}
