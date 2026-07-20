import Link from "next/link";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";
import { treatments } from "@/data/treatments";
import Logo from "@/components/layout/Logo";

export default function Footer() {
  return (
    <footer className="mt-24">
      <div className="container-site pb-6">
        <div className="dark-panel rounded-[var(--radius-shell)] px-6 py-14 md:px-14 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <Logo onDark />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
                {site.tagline} Estética avançada com planejamento individual e
                resultados naturais em {site.city}/{site.uf}.
              </p>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da clínica"
                className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-secondary hover:text-secondary"
              >
                <Instagram size={18} />
              </a>
            </div>

            <nav aria-label="Tratamentos no rodapé">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Tratamentos
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                {treatments.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/tratamentos/${t.slug}`}
                      className="text-white/70 transition-colors hover:text-white"
                    >
                      {t.cardTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Institucional no rodapé">
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                A clínica
              </h2>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li><Link href="/clinica" className="text-white/70 hover:text-white">Sobre nós</Link></li>
                <li><Link href="/especialistas" className="text-white/70 hover:text-white">Especialistas</Link></li>
                <li><Link href="/resultados" className="text-white/70 hover:text-white">Resultados</Link></li>
                <li><Link href="/conteudos" className="text-white/70 hover:text-white">Conteúdos</Link></li>
                <li><Link href="/contato" className="text-white/70 hover:text-white">Contato</Link></li>
                <li><Link href="/politica-de-privacidade" className="text-white/70 hover:text-white">Política de privacidade</Link></li>
              </ul>
            </nav>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">
                Contato
              </h2>
              <ul className="mt-5 space-y-3.5 text-sm text-white/70">
                <li className="flex gap-2.5">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-secondary" aria-hidden="true" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.neighborhood}, {site.address.city}/{site.address.uf}
                    <br />
                    CEP {site.address.zip}
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone size={16} className="shrink-0 text-secondary" aria-hidden="true" />
                  <a href={`tel:${site.phone.replace(/\D/g, "")}`} className="hover:text-white">
                    {site.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail size={16} className="shrink-0 text-secondary" aria-hidden="true" />
                  <a href={`mailto:${site.email}`} className="hover:text-white">
                    {site.email}
                  </a>
                </li>
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-on-dark mt-6 !px-6 !py-3 text-sm"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-14 border-t border-white/10 pt-7">
            <ul className="space-y-1 text-[0.72rem] leading-relaxed text-white/40">
              {site.registrations.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-2 text-[0.72rem] text-white/40 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} {site.legalName} Todos os direitos
                reservados.
              </p>
              <p>
                Os resultados dos tratamentos variam de pessoa para pessoa.
                Imagens meramente ilustrativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
