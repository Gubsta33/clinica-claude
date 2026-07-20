import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/ui/CtaBanner";
import TreatmentsExplorer from "@/components/ui/TreatmentsExplorer";

export const metadata: Metadata = {
  title: "Tratamentos estéticos faciais, corporais e tecnologias",
  description:
    "Conheça os tratamentos da Clínica Lúmina: harmonização facial, toxina botulínica, preenchimento, bioestimulador de colágeno, protocolos de pele, laser e estética corporal.",
  alternates: { canonical: "/tratamentos" },
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="container-site pt-32 md:pt-40" aria-label="Tratamentos">
        <SectionHeading
          as="h1"
          eyebrow="Tratamentos"
          title="Cada tratamento, um plano. Cada plano, uma pessoa."
          text="Explore os tratamentos por categoria. Cada página traz indicações, benefícios, etapas do procedimento, cuidados e respostas às dúvidas mais frequentes — para você chegar à avaliação já bem informada."
        />
        <TreatmentsExplorer />
      </section>
      <CtaBanner
        headline="Em dúvida sobre qual tratamento é para você?"
        text="É exatamente para isso que existe a avaliação. Nossa equipe analisa o seu caso e monta um plano honesto — às vezes com menos procedimentos do que você imagina."
      />
    </>
  );
}
