/**
 * Identidade e contatos da clínica.
 * Todos os dados de contato são placeholders — substitua pelos dados reais
 * em um único lugar e o site inteiro é atualizado.
 */
export const site = {
  name: "Clínica Lúmina",
  legalName: "Clínica Lúmina Estética Avançada Ltda.",
  tagline: "Tecnologia, cuidado e naturalidade em cada detalhe.",
  description:
    "Clínica de estética avançada em São Paulo. Harmonização facial, toxina botulínica, bioestimuladores, laser e estética corporal com planejamento individual e resultados naturais.",
  url: "https://www.clinicalumina.com.br",
  city: "São Paulo",
  uf: "SP",
  address: {
    street: "Av. Exemplo, 1234 — Cj. 56",
    neighborhood: "Jardins",
    city: "São Paulo",
    uf: "SP",
    zip: "01400-000",
  },
  phone: "+55 11 3000-0000",
  whatsapp: "5511999990000",
  email: "contato@clinicalumina.com.br",
  instagram: "https://www.instagram.com/clinicalumina",
  hours: [
    { days: "Segunda a sexta", time: "9h às 19h" },
    { days: "Sábado", time: "9h às 14h" },
    { days: "Domingo", time: "Fechado" },
  ],
  registrations: [
    "Responsável técnica: Dra. Marina Duarte — CRM-SP 000.000 · RQE 00000",
    "Vigilância Sanitária: CEVS 000000000-000-000000-0-0",
  ],
} as const;

export function whatsappLink(message?: string): string {
  const text = encodeURIComponent(
    message ??
      "Olá! Visitei o site da Clínica Lúmina e gostaria de agendar uma avaliação."
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export const nav = [
  { label: "Início", href: "/" },
  { label: "A Clínica", href: "/clinica" },
  { label: "Tratamentos", href: "/tratamentos" },
  { label: "Especialistas", href: "/especialistas" },
  { label: "Resultados", href: "/resultados" },
  { label: "Conteúdos", href: "/conteudos" },
  { label: "Contato", href: "/contato" },
] as const;
