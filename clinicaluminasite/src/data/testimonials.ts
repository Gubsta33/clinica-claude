export interface Testimonial {
  name: string;
  treatment: string;
  text: string;
}

/**
 * Depoimentos ilustrativos de demonstração — substitua por depoimentos
 * reais e autorizados por escrito antes de publicar.
 */
export const testimonials: Testimonial[] = [
  {
    name: "Fernanda A.",
    treatment: "Harmonização facial",
    text: "O que mais me impressionou foi a honestidade. Saí da avaliação com um plano em etapas e a sensação de que ninguém queria me vender nada — queriam me explicar. O resultado é exatamente o que pedi: ninguém percebe, todo mundo comenta que estou descansada.",
  },
  {
    name: "Juliana M.",
    treatment: "Bioestimulador de colágeno",
    text: "Tinha medo de ficar artificial e fui tranquilizada desde a primeira conversa. Três meses depois, a firmeza da minha pele mudou de verdade — nas fotos de acompanhamento a diferença é nítida. Atendimento impecável do início ao fim.",
  },
  {
    name: "Patrícia L.",
    treatment: "Toxina botulínica",
    text: "Primeira vez que faço botox e continuo com a minha expressão. A revisão de 15 dias fez toda a diferença: um ajuste fino e ficou perfeito. A clínica é linda, mas o que me conquistou foi o cuidado com cada detalhe do processo.",
  },
  {
    name: "Renata C.",
    treatment: "Tratamentos para pele",
    text: "Cheguei com a pele sensibilizada por excesso de ácidos e saí com um plano simples que funcionou. Em dois meses de protocolo, minha pele voltou a ter viço. Aprendi mais sobre a minha pele nas consultas do que em anos de internet.",
  },
  {
    name: "Marcos T.",
    treatment: "Estética corporal",
    text: "Gostei do acompanhamento com medidas e fotos — dá para ver a evolução com dados, sem achismo. As metas foram realistas desde o começo e o resultado veio dentro do que foi combinado.",
  },
];
