"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, utils } from "animejs";
import { prefersReducedMotion } from "@/lib/motion";

const STORAGE_KEY = "lumina-consent-v1";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      /* armazenamento indisponível — não exibe */
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!visible || !el || prefersReducedMotion()) return;
    utils.set(el, { opacity: 0, translateY: 40 });
    animate(el, {
      opacity: [0, 1],
      translateY: [40, 0],
      duration: 700,
      delay: 900,
      ease: "out(4)",
    });
  }, [visible]);

  const decide = (value: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignora */
    }
    const el = ref.current;
    if (el && !prefersReducedMotion()) {
      animate(el, {
        opacity: 0,
        translateY: 30,
        duration: 380,
        ease: "in(3)",
        onComplete: () => setVisible(false),
      });
    } else {
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Aviso de privacidade"
      className="fixed bottom-5 left-5 right-5 z-50 max-w-sm rounded-[var(--radius-card)] bg-dark p-6 text-white shadow-soft sm:right-auto"
    >
      <p className="text-sm font-semibold">Privacidade em primeiro lugar</p>
      <p className="mt-2 text-xs leading-relaxed text-white/70">
        Usamos cookies essenciais e, com o seu consentimento, cookies de
        análise para melhorar sua experiência. Saiba mais na nossa{" "}
        <Link href="/politica-de-privacidade" className="underline">
          Política de Privacidade
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="btn btn-on-dark flex-1 !px-4 !py-2.5 !text-xs"
        >
          Aceitar
        </button>
        <button
          type="button"
          onClick={() => decide("rejected")}
          className="btn flex-1 border border-white/25 !px-4 !py-2.5 !text-xs text-white hover:bg-white/10"
        >
          Somente essenciais
        </button>
      </div>
    </div>
  );
}
