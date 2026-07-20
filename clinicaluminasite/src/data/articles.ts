export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readingTime: string;
  image: string;
  imageAlt: string;
  authorSlug: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: "harmonizacao-facial-naturalidade",
    title: "Harmonização facial: por que naturalidade é o novo padrão",
    excerpt:
      "O excesso saiu de cena. Entenda como a harmonização facial moderna trabalha com doses conservadoras, etapas e proporções — e por que menos é quase sempre mais.",
    category: "Face",
    date: "2026-06-10",
    readingTime: "6 min",
    image: "/images/escultura-contorno.webp",
    imageAlt: "Escultura perolada abstrata inspirada em contornos faciais",
    authorSlug: "dra-marina-duarte",
    sections: [
      {
        paragraphs: [
          "Durante alguns anos, a estética facial viveu uma era de exageros: lábios muito além da proporção, malares projetados demais, rostos que pareciam variações uns dos outros. Esse ciclo está se fechando — e o que o substitui é mais exigente tecnicamente: a naturalidade.",
          "Parecer natural depois de um procedimento não é ausência de trabalho; é trabalho invisível. Exige leitura precisa das proporções de cada rosto, escolha criteriosa de produtos e, principalmente, a disciplina de fazer menos do que seria possível.",
        ],
      },
      {
        heading: "O que muda na prática",
        paragraphs: [
          "Em um planejamento conservador, o rosto é avaliado como um sistema: a projeção do mento conversa com o ângulo da mandíbula, que conversa com o malar, que sustenta a região dos olhos. Tratar um ponto isolado sem essa leitura é o caminho mais curto para o resultado artificial.",
          "Por isso os planos são divididos em etapas. Entre uma sessão e outra, o rosto se acomoda, o olhar do profissional se recalibra e as decisões seguintes são tomadas sobre o resultado real — não sobre projeções.",
        ],
      },
      {
        heading: "Perguntas que valem a pena fazer na avaliação",
        paragraphs: [
          "Uma boa consulta de harmonização deve deixar claras as respostas para algumas perguntas:",
        ],
        list: [
          "O que exatamente será tratado e por quê?",
          "Qual o produto utilizado e qual seu registro na ANVISA?",
          "O que acontece se eu não gostar do resultado?",
          "Qual é o plano de revisão e acompanhamento?",
        ],
      },
      {
        paragraphs: [
          "Se as respostas vierem com pressa ou com promessas absolutas, desconfie. Resultados em estética são individuais e nenhum profissional sério garante efeitos idênticos aos de outra pessoa.",
        ],
      },
    ],
  },
  {
    slug: "bioestimuladores-como-a-pele-responde",
    title: "Bioestimuladores de colágeno: como a pele responde ao tempo",
    excerpt:
      "A partir dos 25 anos, a produção de colágeno cai de forma constante. Veja como os bioestimuladores agem nessa curva — e o que esperar (de verdade) do tratamento.",
    category: "Pele",
    date: "2026-05-22",
    readingTime: "7 min",
    image: "/images/tratamento-bioestimulador-de-colageno.webp",
    imageAlt: "Escultura orgânica perolada emergindo de água serena entre flores",
    authorSlug: "dra-camila-rocha",
    sections: [
      {
        paragraphs: [
          "O colágeno é a proteína que dá estrutura à pele — o 'colchão' que sustenta firmeza e espessura. Sua produção atinge o pico no fim da adolescência e, a partir dos 25 anos, cai em ritmo de aproximadamente 1% ao ano. É uma perda silenciosa: por muito tempo, nada aparece. Até que aparece.",
          "Flacidez no terço inferior do rosto, pele mais fina, contornos menos definidos: esses sinais costumam se tornar visíveis quando a perda acumulada já é significativa. Os bioestimuladores de colágeno foram desenvolvidos para agir exatamente nessa curva.",
        ],
      },
      {
        heading: "Como funciona o estímulo",
        paragraphs: [
          "Bioestimuladores são substâncias injetáveis que provocam uma resposta biológica controlada: ao serem aplicadas, ativam os fibroblastos — as células que fabricam colágeno. Nas semanas seguintes, a pele responde produzindo novas fibras na região tratada.",
          "O resultado não é imediato nem volumoso: é estrutural. A partir de 30 dias, com evolução até 90 dias por sessão, a pele ganha firmeza e espessura de dentro para fora. É um efeito que fotografias padronizadas capturam bem — e que o espelho entrega aos poucos.",
        ],
      },
      {
        heading: "Expectativas realistas",
        paragraphs: [
          "É importante dizer com clareza o que o tratamento não faz: não substitui cirurgia em flacidez avançada, não emagrece e não muda traços. O que ele faz — melhorar a qualidade estrutural da pele — depende do grau de flacidez, da idade e da resposta individual de cada organismo.",
          "Por isso o protocolo começa sempre por uma avaliação criteriosa. Número de sessões, produto, diluição e regiões são decisões técnicas, tomadas caso a caso.",
        ],
      },
    ],
  },
  {
    slug: "skincare-clinico-avaliacao-profissional",
    title: "Skincare clínico: por que a avaliação profissional muda tudo",
    excerpt:
      "Prateleiras cheias e resultados de menos? A diferença entre uma rotina genérica e um plano de skincare clínico está no diagnóstico — não na quantidade de produtos.",
    category: "Pele",
    date: "2026-04-15",
    readingTime: "5 min",
    image: "/images/pele-macro.webp",
    imageAlt: "Macro de pele saudável com gotículas de hidratação",
    authorSlug: "dra-marina-duarte",
    sections: [
      {
        paragraphs: [
          "Nunca houve tanta informação sobre skincare — e nunca foi tão fácil errar. Ácidos potentes vendidos sem orientação, rotinas de dez passos copiadas de outras peles, ativos incompatíveis usados na mesma noite: o resultado costuma ser uma barreira cutânea agredida e uma pele que 'não responde a nada'.",
          "O skincare clínico parte do caminho oposto: primeiro o diagnóstico, depois a rotina.",
        ],
      },
      {
        heading: "O que é avaliado em um diagnóstico de pele",
        paragraphs: [
          "Em consulta, a pele é analisada com luz ampliada e o histórico completo entra na equação:",
        ],
        list: [
          "Tipo e estado atual da pele (que são coisas diferentes)",
          "Sensibilidades, alergias e histórico de reações",
          "Rotina atual — o que mantém, o que sai, o que falta",
          "Fatores de estilo de vida: sono, sol, estresse, alimentação",
        ],
      },
      {
        heading: "Menos produtos, mais resultado",
        paragraphs: [
          "Um plano clínico bem construído costuma ter menos passos do que se imagina: higienização adequada, tratamento-alvo, hidratação e proteção solar consistente. A sofisticação está na escolha de cada ativo para cada pele — e nos ajustes feitos ao longo das reavaliações.",
          "A rotina de casa também potencializa os procedimentos de consultório: peles bem cuidadas respondem melhor a peelings, lasers e injetáveis, com menos intercorrências e resultados mais duradouros.",
        ],
      },
    ],
  },
  {
    slug: "laser-primeira-sessao",
    title: "Tecnologias a laser: o que esperar da primeira sessão",
    excerpt:
      "Do teste de fototipo ao pós-imediato: um guia honesto sobre como funciona uma primeira sessão de laser — e por que a fotoproteção é metade do tratamento.",
    category: "Tecnologia",
    date: "2026-03-08",
    readingTime: "6 min",
    image: "/images/tratamento-laser.webp",
    imageAlt: "Feixe de luz suave atravessando formas de vidro translúcido",
    authorSlug: "dr-andre-sales",
    sections: [
      {
        paragraphs: [
          "Poucas palavras carregam tanta expectativa — e tanta confusão — quanto 'laser'. Sob esse nome convivem tecnologias muito diferentes entre si: lasers ablativos e não ablativos, luz intensa pulsada, dispositivos fracionados. Cada um com alvos, sensações e cuidados próprios.",
          "O que todos têm em comum é a lógica: um comprimento de onda específico é absorvido por um alvo específico da pele — pigmento, hemoglobina, água — e converte luz em energia térmica de forma controlada.",
        ],
      },
      {
        heading: "Antes da primeira sessão",
        paragraphs: [
          "Toda primeira sessão começa antes dela: na avaliação, definimos o fototipo (a classificação da sua cor de pele), a queixa principal e a tecnologia adequada. Em muitos casos, fazemos um teste de parâmetros em uma pequena área e observamos a resposta por alguns dias.",
          "Bronzeamento recente é o principal motivo de adiamento — pele bronzeada compete com o alvo do laser e aumenta o risco de manchas. Por isso pedimos 4 semanas sem sol intenso antes de iniciar.",
        ],
      },
      {
        heading: "Durante e depois",
        paragraphs: [
          "Durante a sessão, a maioria das tecnologias trabalha com resfriamento ativo: a sensação varia de aquecimento leve a pequenos estalos, bem tolerados. Vermelhidão nas primeiras horas é esperada e faz parte da resposta.",
          "O pós é simples e inegociável: protetor solar FPS 50+ todos os dias, sem exceção. Em tratamentos de manchas, pequenas crostas escurecidas podem se formar e caem sozinhas — não devem ser removidas manualmente.",
          "Os resultados aparecem ao longo do programa de sessões, com estímulo de colágeno que continua agindo por meses após a última aplicação.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
