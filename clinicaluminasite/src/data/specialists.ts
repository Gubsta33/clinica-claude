export interface Specialist {
  slug: string;
  name: string;
  role: string;
  registration: string;
  image: string;
  imageAlt: string;
  short: string;
  bio: string[];
  credentials: string[];
  specialties: string[];
  treatments: string[];
}

/**
 * Equipe fictícia de demonstração — substitua por profissionais reais,
 * com fotos autorizadas e registros verdadeiros, antes de publicar.
 */
export const specialists: Specialist[] = [
  {
    slug: "dra-marina-duarte",
    name: "Dra. Marina Duarte",
    role: "Dermatologista · Diretora clínica",
    registration: "CRM-SP 000.000 · RQE 00000",
    image: "/images/especialista-marina-duarte.webp",
    imageAlt: "Retrato profissional da Dra. Marina Duarte em ambiente clínico claro",
    short:
      "Especialista em estética facial avançada, une rigor dermatológico e olhar estético em planos de tratamento conservadores.",
    bio: [
      "Fundadora e diretora clínica da Lúmina, a Dra. Marina construiu sua carreira sobre uma convicção: procedimento bom é aquele que ninguém percebe — apenas o quanto a pessoa parece bem. Formada em Medicina com residência em Dermatologia, dedicou os últimos anos ao estudo da anatomia facial aplicada a procedimentos injetáveis.",
      "É responsável pelos protocolos de harmonização facial e toxina botulínica da clínica e pela formação contínua da equipe. Na consulta, é conhecida pela franqueza: diz não com a mesma tranquilidade com que propõe alternativas.",
    ],
    credentials: [
      "Graduação em Medicina — instituição a definir",
      "Residência em Dermatologia — instituição a definir",
      "Título de especialista pela Sociedade Brasileira de Dermatologia",
      "Formação avançada em anatomia facial aplicada a injetáveis",
    ],
    specialties: [
      "Harmonização facial",
      "Toxina botulínica",
      "Diagnóstico e tratamento clínico da pele",
      "Planejamento facial em etapas",
    ],
    treatments: ["harmonizacao-facial", "botox", "limpeza-de-pele"],
  },
  {
    slug: "dra-camila-rocha",
    name: "Dra. Camila Rocha",
    role: "Biomédica esteta",
    registration: "CRBM-SP 00.000",
    image: "/images/especialista-camila-rocha.webp",
    imageAlt: "Retrato profissional da Dra. Camila Rocha sorrindo em consultório",
    short:
      "Referência em bioestimuladores e preenchimentos, com técnica precisa e um olhar minucioso para proporções.",
    bio: [
      "Biomédica com habilitação em estética avançada, a Dra. Camila é responsável pelos protocolos de bioestimuladores de colágeno e preenchimento facial da clínica. Sua abordagem parte sempre da estrutura: entender o que sustenta cada rosto antes de decidir o que tratar.",
      "Perfeccionista assumida, fotografa e documenta cada etapa dos tratamentos para calibrar resultados com precisão. Acredita que a confiança se constrói com informação — suas consultas terminam quando não resta nenhuma dúvida.",
    ],
    credentials: [
      "Graduação em Biomedicina — instituição a definir",
      "Habilitação em Biomedicina Estética",
      "Formação avançada em bioestimuladores de colágeno",
      "Formação em intercorrências e segurança em procedimentos injetáveis",
    ],
    specialties: [
      "Bioestimuladores de colágeno",
      "Preenchimento facial",
      "Skinboosters e hidratação injetável",
      "Protocolos corporais injetáveis",
    ],
    treatments: ["bioestimulador-de-colageno", "preenchimento", "estetica-corporal"],
  },
  {
    slug: "dr-andre-sales",
    name: "Dr. André Sales",
    role: "Fisioterapeuta dermatofuncional",
    registration: "CREFITO-3 000.000-F",
    image: "/images/especialista-andre-sales.webp",
    imageAlt: "Retrato profissional do Dr. André Sales em ambiente clínico moderno",
    short:
      "Especialista em tecnologias e estética corporal, conduz os protocolos de laser e os programas de contorno corporal da clínica.",
    bio: [
      "Fisioterapeuta com especialização em dermatofuncional, o Dr. André lidera a área de tecnologias da Lúmina — dos lasers de rejuvenescimento aos protocolos corporais combinados. Seu foco é método: parâmetros documentados, medições padronizadas e metas realistas por etapa.",
      "Estuda continuamente as tecnologias que a clínica avalia incorporar e é o responsável por validar segurança e protocolos antes de qualquer equipamento chegar às salas de atendimento.",
    ],
    credentials: [
      "Graduação em Fisioterapia — instituição a definir",
      "Especialização em Fisioterapia Dermatofuncional",
      "Certificações em tecnologias de laser e radiofrequência",
      "Formação em avaliação corporal e composição física",
    ],
    specialties: [
      "Tecnologias a laser",
      "Radiofrequência e ultrassom",
      "Contorno corporal",
      "Recuperação pós-procedimento",
    ],
    treatments: ["laser", "estetica-corporal", "limpeza-de-pele"],
  },
];

export function getSpecialist(slug: string): Specialist | undefined {
  return specialists.find((s) => s.slug === slug);
}
