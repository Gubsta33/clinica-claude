"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Send } from "lucide-react";
import { treatments } from "@/data/treatments";
import { site } from "@/data/site";

const schema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome completo.")
    .max(120, "Nome muito longo."),
  phone: z
    .string()
    .min(10, "Informe um telefone com DDD.")
    .max(20, "Telefone inválido.")
    .regex(/^[\d\s()+-]+$/, "Use apenas números, espaços e parênteses."),
  email: z.string().email("Informe um e-mail válido.").or(z.literal("")),
  treatment: z.string().min(1, "Selecione um tratamento ou 'Ainda não sei'."),
  message: z.string().max(600, "Mensagem muito longa.").optional(),
  consent: z.literal(true, {
    message: "É necessário autorizar o contato para enviar.",
  }),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", treatment: "" },
  });

  const onSubmit = (data: FormData) => {
    const lines = [
      `Olá! Vim pelo site da ${site.name}.`,
      `Nome: ${data.name}`,
      `Telefone: ${data.phone}`,
      data.email ? `E-mail: ${data.email}` : null,
      `Tratamento de interesse: ${data.treatment}`,
      data.message ? `Mensagem: ${data.message}` : null,
    ].filter(Boolean);
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  if (sent) {
    return (
      <div className="card-shell flex flex-col items-center px-8 py-16 text-center">
        <CheckCircle2 size={44} className="text-primary-deep" aria-hidden="true" />
        <h3 className="mt-5 font-display text-3xl text-dark">Quase lá!</h3>
        <p className="mt-3 max-w-sm text-muted">
          Abrimos o WhatsApp com a sua mensagem pronta. É só enviar — nossa
          equipe responde em horário comercial.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="btn btn-ghost mt-8"
        >
          Preencher novamente
        </button>
      </div>
    );
  }

  const inputClass = (hasError: boolean) =>
    `w-full rounded-2xl border bg-surface px-5 py-4 text-[0.95rem] text-dark placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none ${
      hasError ? "border-red-400" : "border-dark/10"
    }`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-dark">
            Nome*
          </label>
          <input
            id="name"
            autoComplete="name"
            placeholder="Seu nome completo"
            aria-invalid={!!errors.name}
            className={inputClass(!!errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-dark">
            WhatsApp / Telefone*
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(11) 99999-0000"
            aria-invalid={!!errors.phone}
            className={inputClass(!!errors.phone)}
            {...register("phone")}
          />
          {errors.phone && (
            <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-dark">
          E-mail <span className="font-normal text-muted">(opcional)</span>
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="voce@email.com"
          aria-invalid={!!errors.email}
          className={inputClass(!!errors.email)}
          {...register("email")}
        />
        {errors.email && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="treatment" className="mb-1.5 block text-sm font-semibold text-dark">
          Tratamento de interesse*
        </label>
        <select
          id="treatment"
          aria-invalid={!!errors.treatment}
          className={inputClass(!!errors.treatment)}
          {...register("treatment")}
        >
          <option value="">Selecione…</option>
          {treatments.map((t) => (
            <option key={t.slug} value={t.name}>
              {t.name}
            </option>
          ))}
          <option value="Ainda não sei">Ainda não sei — quero uma avaliação</option>
        </select>
        {errors.treatment && (
          <p role="alert" className="mt-1.5 text-xs font-medium text-red-500">
            {errors.treatment.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-dark">
          Mensagem <span className="font-normal text-muted">(opcional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Conte brevemente o que você busca…"
          aria-invalid={!!errors.message}
          className={`${inputClass(!!errors.message)} resize-none`}
          {...register("message")}
        />
      </div>

      <div className="flex items-start gap-3 rounded-2xl bg-soft-lilac/50 px-5 py-4">
        <input
          id="consent"
          type="checkbox"
          aria-invalid={!!errors.consent}
          className="mt-1 h-4 w-4 shrink-0 accent-[#7a5c9c]"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-xs leading-relaxed text-muted">
          Autorizo o contato da {site.name} pelos canais informados e declaro
          estar ciente da{" "}
          <a href="/politica-de-privacidade" className="font-semibold text-primary-deep underline">
            Política de Privacidade
          </a>
          , conforme a LGPD (Lei nº 13.709/2018).*
        </label>
      </div>
      {errors.consent && (
        <p role="alert" className="text-xs font-medium text-red-500">
          {errors.consent.message}
        </p>
      )}

      <button type="submit" disabled={isSubmitting} className="btn btn-dark w-full sm:w-auto">
        <Send size={16} aria-hidden="true" />
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
