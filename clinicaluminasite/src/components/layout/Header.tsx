"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { animate, stagger, utils } from "animejs";
import { Menu, X, Sparkles } from "lucide-react";
import { nav, whatsappLink } from "@/data/site";
import Logo from "@/components/layout/Logo";
import { prefersReducedMotion } from "@/lib/motion";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fecha o menu ao navegar
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Trava o scroll e anima os links quando o menu abre
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (open && overlayRef.current && !prefersReducedMotion()) {
      const links = overlayRef.current.querySelectorAll("[data-menu-item]");
      utils.set(links, { opacity: 0, translateY: 26 });
      animate(links, {
        opacity: [0, 1],
        translateY: [26, 0],
        duration: 650,
        delay: stagger(60, { start: 120 }),
        ease: "out(4)",
      });
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-site pt-3 md:pt-4">
        <div
          className={`flex items-center justify-between gap-4 rounded-full px-4 py-2.5 pl-5 transition-all duration-500 md:px-6 md:py-3 ${
            scrolled || open
              ? "bg-surface/90 shadow-soft backdrop-blur-xl"
              : "bg-surface/60 backdrop-blur-md"
          }`}
        >
          <Link href="/" aria-label="Lúmina Estética — página inicial" className="shrink-0">
            <Logo />
          </Link>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-3.5 py-2 text-[0.86rem] font-medium transition-colors duration-300 xl:px-4 ${
                      isActive(item.href)
                        ? "bg-soft-lilac text-dark"
                        : "text-muted hover:bg-soft-lilac/60 hover:text-dark"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark hidden !px-6 !py-3 text-sm sm:inline-flex"
            >
              <Sparkles size={15} aria-hidden="true" />
              Agendar avaliação
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 bg-surface text-dark lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile em tela cheia */}
      <div
        id="menu-mobile"
        ref={overlayRef}
        className={`fixed inset-0 -z-10 flex flex-col bg-bg pt-28 transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav aria-label="Navegação móvel" className="container-site flex-1">
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href} data-menu-item>
                <Link
                  href={item.href}
                  className={`block rounded-2xl px-4 py-3.5 font-display text-3xl transition-colors ${
                    isActive(item.href) ? "bg-soft-lilac text-dark" : "text-dark/80"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="container-site pb-10" data-menu-item>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark w-full"
          >
            Agendar avaliação pelo WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
