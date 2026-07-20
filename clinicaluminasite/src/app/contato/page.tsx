import type { Metadata } from "next";
import Image from "next/image";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contato e agendamento",
  description:
    "Agende sua avaliação na Clínica Lúmina: WhatsApp, telefone, e-mail e formulário. Endereço, horários de atendimento e localização.",
  alternates: { canonical: "/contato" },
};

export default function ContactPage() {
  return (
    <>
      <section className="container-site pt-32 md:pt-40">
        <SectionHeading
          as="h1"
          eyebrow="Contato"
          title="Vamos conversar sobre o seu próximo cuidado?"
          text="Preencha o formulário e a mensagem chega pronta no nosso WhatsApp — ou, se preferir, fale direto pelos canais ao lado. Respondemos em horário comercial."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <Reveal y={36}>
            <div className="card-shell p-7 md:p-10">
              <h2 className="font-display text-2xl text-dark">Formulário de agendamento</h2>
              <p className="mt-2 text-sm text-muted">Campos marcados com * são obrigatórios.</p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-5">
            <Reveal staggerChildren staggerDelay={120} className="space-y-5">
              <div className="dark-panel rounded-[var(--radius-card)] p-8">
                <h2 className="font-display text-2xl">Canais diretos</h2>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                    >
                      <Phone size={17} className="text-secondary" aria-hidden="true" />
                      WhatsApp: {site.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${site.email}`}
                      className="flex items-center gap-3 text-white/80 transition-colors hover:text-white"
                    >
                      <Mail size={17} className="text-secondary" aria-hidden="true" />
                      {site.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-white/80">
                    <MapPin size={17} className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                    <span>
                      {site.address.street} — {site.address.neighborhood},{" "}
                      {site.address.city}/{site.address.uf}, CEP {site.address.zip}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card-shell p-8">
                <h2 className="flex items-center gap-2.5 font-display text-2xl text-dark">
                  <Clock size={20} className="text-primary-deep" aria-hidden="true" />
                  Horários
                </h2>
                <ul className="mt-5 space-y-2.5">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex items-center justify-between gap-4 text-sm">
                      <span className="font-semibold text-dark">{h.days}</span>
                      <span className="text-muted">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="overflow-hidden rounded-[var(--radius-card)] shadow-card">
                <div className="pearl-gradient relative aspect-[4/3]">
                  <Image
                    src="/images/clinica-interior.webp"
                    alt="Ambiente interno da clínica"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="container-site mt-16 md:mt-20" aria-label="Localização no mapa">
        <Reveal y={30}>
          <div className="overflow-hidden rounded-[var(--radius-shell)] shadow-card">
            <iframe
              title={`Mapa — ${site.name}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${site.address.street}, ${site.address.neighborhood}, ${site.address.city} - ${site.address.uf}`
              )}&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
        <p className="mt-4 text-center text-xs text-muted">
          Ao interagir com o mapa, dados podem ser compartilhados com o Google
          conforme a política de privacidade deles.
        </p>
      </section>
    </>
  );
}
