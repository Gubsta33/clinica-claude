import { site, whatsappLink } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import SplitHeading from "@/components/motion/SplitHeading";
import Magnetic from "@/components/motion/Magnetic";
import Floating from "@/components/motion/Floating";

interface CtaBannerProps {
  headline?: string;
  text?: string;
  cta?: string;
  message?: string;
}

export default function CtaBanner({
  headline = "Seu próximo cuidado pode começar hoje.",
  text = "Converse com nossa equipe e encontre o tratamento mais adequado para você. A avaliação é o primeiro passo — e é sempre honesta.",
  cta = "Agendar pelo WhatsApp",
  message,
}: CtaBannerProps) {
  return (
    <section className="container-site mt-24 md:mt-32" aria-label="Agendar avaliação">
      <div className="dark-panel relative overflow-hidden rounded-[var(--radius-shell)] px-6 py-16 text-center md:px-16 md:py-24">
        <Floating
          className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
          amplitude={22}
          duration={7000}
        />
        <Floating
          className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-accent/15 blur-3xl"
          amplitude={26}
          duration={8600}
          delay={600}
        />
        <div className="relative mx-auto max-w-2xl">
          <Reveal y={16}>
            <p className="eyebrow !text-secondary justify-center">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {site.name} · {site.city}/{site.uf}
            </p>
          </Reveal>
          <SplitHeading
            text={headline}
            as="h2"
            className="mt-4 text-4xl text-white md:text-5xl"
          />
          <Reveal delay={200} y={22}>
            <p className="mt-5 text-white/70 md:text-lg">{text}</p>
          </Reveal>
          <Reveal delay={340} y={22}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Magnetic>
                <a
                  href={whatsappLink(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-on-dark"
                >
                  {cta}
                </a>
              </Magnetic>
              <a href="/contato" className="btn border border-white/25 text-white hover:bg-white/10">
                Outros canais de contato
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
