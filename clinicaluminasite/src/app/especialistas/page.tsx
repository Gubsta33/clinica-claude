import type { Metadata } from "next";
import { specialists } from "@/data/specialists";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpecialistCard from "@/components/ui/SpecialistCard";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Especialistas — equipe multidisciplinar",
  description:
    "Conheça os especialistas da Clínica Lúmina: dermatologia, biomedicina estética e fisioterapia dermatofuncional trabalhando com um único método.",
  alternates: { canonical: "/especialistas" },
};

export default function SpecialistsPage() {
  return (
    <>
      <section className="container-site pt-32 md:pt-40">
        <SectionHeading
          as="h1"
          eyebrow="Especialistas"
          title="Três especialidades. Um método. Nenhum atalho."
          text="Cada área da clínica é conduzida por um profissional habilitado e registrado no seu conselho de classe. Trabalhamos em equipe: casos são discutidos em conjunto e planos complexos passam por mais de um olhar."
        />
        <Reveal staggerChildren staggerDelay={140} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialists.map((s) => (
            <SpecialistCard key={s.slug} specialist={s} />
          ))}
        </Reveal>
      </section>
      <CtaBanner
        headline="Quer saber quem vai cuidar do seu caso?"
        text="Na avaliação, você conhece o especialista responsável pela sua queixa e recebe um plano com nome, técnica e cronograma."
      />
    </>
  );
}
