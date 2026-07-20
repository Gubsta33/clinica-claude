import type { Metadata } from "next";
import { articles } from "@/data/articles";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ArticleCard from "@/components/ui/ArticleCard";
import CtaBanner from "@/components/ui/CtaBanner";

export const metadata: Metadata = {
  title: "Conteúdos — artigos sobre estética, pele e autocuidado",
  description:
    "Artigos escritos pela equipe da Clínica Lúmina: harmonização facial, bioestimuladores, skincare clínico, tecnologias a laser e mais — sem sensacionalismo.",
  alternates: { canonical: "/conteudos" },
};

export default function ArticlesPage() {
  return (
    <>
      <section className="container-site pt-32 md:pt-40">
        <SectionHeading
          as="h1"
          eyebrow="Conteúdos"
          title="Informação de qualidade também é cuidado."
          text="Artigos escritos pela nossa equipe para você entender os tratamentos antes de decidir — com ciência, contexto e zero sensacionalismo."
        />
        <Reveal staggerChildren staggerDelay={130} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </Reveal>
      </section>
      <CtaBanner
        headline="Ficou com alguma dúvida pelo caminho?"
        text="Nossa equipe responde suas perguntas pelo WhatsApp — mesmo antes de você agendar qualquer coisa."
        cta="Perguntar pelo WhatsApp"
      />
    </>
  );
}
