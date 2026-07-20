export type TreatmentCategory = "Face" | "Pele" | "Corpo" | "Tecnologia";

export interface Treatment {
  slug: string;
  name: string;
  cardTitle: string;
  category: TreatmentCategory;
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  intro: string[];
  forWho: string[];
  benefits: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  care: { title: string; items: string[] }[];
  faqs: { q: string; a: string }[];
  specialistSlug: string;
  related: string[];
  facts: { label: string; value: string }[];
}

export const treatments: Treatment[] = [
  {
    slug: "harmonizacao-facial",
    name: "Harmonização Facial",
    cardTitle: "Harmonização facial",
    category: "Face",
    headline: "Equilíbrio entre os traços, sem apagar quem você é.",
    summary:
      "Planejamento global do rosto que combina diferentes técnicas para realçar pontos fortes e suavizar desequilíbrios — sempre com naturalidade.",
    image: "/images/tratamento-harmonizacao-facial.webp",
    imageAlt:
      "Rosto de mulher com delicadas linhas de luz delineando os contornos faciais",
    intro: [
      "Harmonização facial não é transformar o rosto: é estudá-lo. A partir de uma análise detalhada das proporções, da estrutura óssea e da dinâmica dos músculos, construímos um plano que respeita a sua identidade e valoriza o que já existe de melhor nela.",
      "O plano pode combinar toxina botulínica, preenchedores, bioestimuladores de colágeno e tecnologias de estímulo cutâneo — em etapas, com prioridades claras e sem exageros. Cada rosto pede uma composição diferente, e é isso que uma avaliação criteriosa define.",
    ],
    forWho: [
      "Quem sente o rosto cansado ou desproporcional e busca um resultado discreto",
      "Quem deseja um plano completo, em etapas, em vez de procedimentos isolados",
      "Quem nunca fez procedimentos injetáveis e quer começar com segurança",
      "Quem já fez procedimentos e busca refinamento ou correção de exageros",
    ],
    benefits: [
      {
        title: "Visão global do rosto",
        text: "Em vez de tratar um ponto isolado, o plano considera proporções, perfil e expressão em conjunto.",
      },
      {
        title: "Resultados progressivos",
        text: "As etapas são organizadas por prioridade, permitindo evolução gradual e naturalidade em cada fase.",
      },
      {
        title: "Identidade preservada",
        text: "O objetivo é parecer descansada e equilibrada — nunca 'feita'. Suas características continuam sendo suas.",
      },
    ],
    steps: [
      {
        title: "Avaliação e fotografia técnica",
        text: "Análise das proporções faciais, histórico de saúde e expectativas. Registro fotográfico padronizado para acompanhamento.",
      },
      {
        title: "Plano personalizado",
        text: "Definição das técnicas, produtos e ordem das etapas, com orçamento transparente e cronograma realista.",
      },
      {
        title: "Execução em etapas",
        text: "Procedimentos realizados em sessões espaçadas, com anestesia tópica quando indicada e técnica precisa.",
      },
      {
        title: "Acompanhamento",
        text: "Retornos de revisão para avaliar a integração dos resultados e ajustar detalhes com parcimônia.",
      },
    ],
    care: [
      {
        title: "Antes do procedimento",
        items: [
          "Informe medicamentos em uso, alergias e procedimentos anteriores",
          "Evite anti-inflamatórios e álcool nas 48h anteriores, se orientado",
          "Compareça com a pele limpa, sem maquiagem",
        ],
      },
      {
        title: "Depois do procedimento",
        items: [
          "Evite calor intenso, sol direto e exercícios físicos nas primeiras 24–48h",
          "Não massageie as áreas tratadas, salvo orientação específica",
          "Pequenos inchaços e roxos são esperados e transitórios",
          "Compareça aos retornos de revisão agendados",
        ],
      },
    ],
    faqs: [
      {
        q: "Harmonização facial deixa o rosto artificial?",
        a: "Quando bem indicada e bem executada, não. O aspecto artificial costuma vir de excesso de produto ou de técnica inadequada. Nosso protocolo prioriza doses conservadoras, etapas espaçadas e revisões — é mais fácil acrescentar do que retirar.",
      },
      {
        q: "Quanto tempo duram os resultados?",
        a: "Depende das técnicas combinadas: a toxina botulínica costuma durar de 4 a 6 meses; preenchedores, de 12 a 18 meses; bioestimuladores, até 24 meses. Esses prazos variam de pessoa para pessoa.",
      },
      {
        q: "O procedimento dói?",
        a: "Usamos anestesia tópica e técnicas de conforto. A maioria das pessoas relata apenas desconforto leve e tolera bem as sessões.",
      },
      {
        q: "Em quanto tempo vejo o resultado?",
        a: "Alguns efeitos são imediatos (preenchimento), outros progressivos (toxina em até 15 dias, bioestimuladores em 30 a 90 dias). O plano prevê essa evolução.",
      },
    ],
    specialistSlug: "dra-marina-duarte",
    related: ["botox", "preenchimento", "bioestimulador-de-colageno"],
    facts: [
      { label: "Duração da sessão", value: "45–90 min" },
      { label: "Retorno às atividades", value: "Imediato*" },
      { label: "Plano", value: "Em etapas" },
    ],
  },
  {
    slug: "botox",
    name: "Toxina Botulínica",
    cardTitle: "Toxina botulínica",
    category: "Face",
    headline: "Expressão descansada, movimento preservado.",
    summary:
      "Suavização de linhas de expressão na testa, glabela e ao redor dos olhos, com doses individualizadas para manter a expressividade natural.",
    image: "/images/tratamento-botox.webp",
    imageAlt:
      "Close do rosto sereno de uma mulher com pele de textura natural e iluminação difusa",
    intro: [
      "A toxina botulínica é um dos procedimentos mais estudados da medicina estética. Aplicada em pontos estratégicos, ela reduz a contração excessiva dos músculos responsáveis pelas linhas de expressão — sem paralisar o rosto nem apagar a sua identidade.",
      "Nosso protocolo utiliza doses individualizadas, definidas a partir da análise da sua musculatura em movimento. O objetivo é um resultado que as pessoas percebam como 'você, descansada' — não como um procedimento.",
    ],
    forWho: [
      "Quem incomoda-se com linhas na testa, entre as sobrancelhas ou ao redor dos olhos",
      "Quem busca prevenção da acentuação das linhas de expressão",
      "Quem range os dentes (bruxismo) ou busca ajustes no sorriso gengival, após avaliação",
      "Quem quer um primeiro contato seguro com procedimentos injetáveis",
    ],
    benefits: [
      {
        title: "Naturalidade calibrada",
        text: "Doses conservadoras e pontos de aplicação personalizados preservam a expressividade do rosto.",
      },
      {
        title: "Procedimento rápido",
        text: "A aplicação leva cerca de 20 minutos e permite retorno imediato à rotina, com poucas restrições.",
      },
      {
        title: "Previsibilidade",
        text: "Técnica consolidada, com início de ação gradual e retorno de revisão incluído no protocolo.",
      },
    ],
    steps: [
      {
        title: "Avaliação da mímica facial",
        text: "Analisamos a musculatura em repouso e em movimento para mapear os pontos e as doses adequadas.",
      },
      {
        title: "Aplicação",
        text: "Microinjeções em pontos estratégicos, com agulhas finíssimas e desconforto mínimo.",
      },
      {
        title: "Ação progressiva",
        text: "O efeito começa em 3 a 5 dias e se completa em até 15 dias, de forma gradual e natural.",
      },
      {
        title: "Revisão",
        text: "Retorno em 15 a 21 dias para avaliar a resposta e realizar ajustes finos, se necessários.",
      },
    ],
    care: [
      {
        title: "Antes do procedimento",
        items: [
          "Informe medicamentos, gestação ou amamentação e doenças neuromusculares",
          "Evite álcool e anti-inflamatórios nas 24–48h anteriores, se orientado",
        ],
      },
      {
        title: "Depois do procedimento",
        items: [
          "Permaneça em posição vertical por 4 horas após a aplicação",
          "Não massageie a região tratada no dia do procedimento",
          "Evite exercícios intensos, calor e sauna por 24h",
          "Maquiagem pode ser reaplicada após algumas horas, conforme orientação",
        ],
      },
    ],
    faqs: [
      {
        q: "Vou ficar com o rosto 'congelado'?",
        a: "Não é esse o objetivo. Trabalhamos com doses individualizadas para suavizar as linhas mantendo o movimento natural. Na revisão, ajustes finos garantem o equilíbrio.",
      },
      {
        q: "Quanto tempo dura o efeito?",
        a: "Em média de 4 a 6 meses, variando conforme metabolismo, musculatura e área tratada. Com manutenção regular, os intervalos tendem a se estabilizar.",
      },
      {
        q: "A partir de qual idade é indicada?",
        a: "Não há idade fixa: a indicação depende da avaliação da musculatura e das linhas em formação. O uso preventivo é decidido caso a caso, sempre em consulta.",
      },
      {
        q: "Existe contraindicação?",
        a: "Sim — gestação, amamentação, algumas doenças neuromusculares e alergia aos componentes, entre outras. Por isso a avaliação prévia com um profissional habilitado é indispensável.",
      },
    ],
    specialistSlug: "dra-marina-duarte",
    related: ["harmonizacao-facial", "preenchimento", "bioestimulador-de-colageno"],
    facts: [
      { label: "Duração da sessão", value: "20–30 min" },
      { label: "Efeito completo", value: "Até 15 dias" },
      { label: "Duração média", value: "4–6 meses" },
    ],
  },
  {
    slug: "preenchimento",
    name: "Preenchimento Facial",
    cardTitle: "Preenchimento facial",
    category: "Face",
    headline: "Contornos repostos com precisão e leveza.",
    summary:
      "Ácido hialurônico para repor volumes, redesenhar contornos e hidratar profundamente — em lábios, olheiras, mandíbula, mento e malar.",
    image: "/images/tratamento-preenchimento.webp",
    imageAlt:
      "Flor lilás e esfera de gel translúcido sobre superfície de seda perolada",
    intro: [
      "Com o tempo, o rosto perde volume em pontos estratégicos — e isso muda a forma como a luz o desenha. O preenchimento com ácido hialurônico repõe esse suporte de maneira precisa, devolvendo contornos e frescor sem alterar suas características.",
      "Utilizamos produtos registrados na ANVISA, escolhidos conforme a área e o objetivo: gels mais firmes para estrutura (mandíbula, mento), mais flexíveis para movimento (lábios) e skinboosters para hidratação profunda da pele.",
    ],
    forWho: [
      "Quem percebe perda de volume no malar, têmporas ou lábios",
      "Quem busca definição de contornos como mandíbula e mento",
      "Quem tem olheiras profundas com indicação para preenchimento",
      "Quem busca hidratação profunda da pele com skinbooster",
    ],
    benefits: [
      {
        title: "Resultado imediato",
        text: "A reposição de volume é visível logo após a sessão, com refinamento nas semanas seguintes.",
      },
      {
        title: "Material biocompatível",
        text: "O ácido hialurônico é uma substância naturalmente presente na pele, absorvível e reversível.",
      },
      {
        title: "Precisão por área",
        text: "Cada região recebe o produto e a técnica adequados — cânulas e agulhas conforme a segurança de cada ponto.",
      },
    ],
    steps: [
      {
        title: "Análise de volumetria",
        text: "Estudo dos pontos de sustentação do rosto e definição das áreas prioritárias.",
      },
      {
        title: "Preparo e conforto",
        text: "Anestesia tópica e, na maioria dos produtos, anestésico incorporado ao gel para maior conforto.",
      },
      {
        title: "Aplicação técnica",
        text: "Deposição precisa do produto com agulha ou microcânula, em planos seguros.",
      },
      {
        title: "Revisão em 30 dias",
        text: "Avaliação da integração do produto e ajustes finos quando indicados.",
      },
    ],
    care: [
      {
        title: "Antes do procedimento",
        items: [
          "Evite álcool, anti-inflamatórios e suplementos que aumentem sangramento nas 48h anteriores, se orientado",
          "Informe histórico de herpes labial em caso de preenchimento labial",
        ],
      },
      {
        title: "Depois do procedimento",
        items: [
          "Aplique compressas frias se houver inchaço, conforme orientação",
          "Evite sol, calor intenso e exercícios por 48h",
          "Evite dormir de bruços nas primeiras noites em preenchimentos estruturais",
          "Roxos e assimetrias temporárias podem ocorrer nos primeiros dias",
        ],
      },
    ],
    faqs: [
      {
        q: "Preenchimento estica os lábios ou deixa 'boca de pato'?",
        a: "Não quando a proposta é proporção. Trabalhamos com técnica conservadora, respeitando a anatomia dos seus lábios. Resultados exagerados vêm de excesso de produto — o oposto da nossa filosofia.",
      },
      {
        q: "Quanto tempo dura?",
        a: "Em média de 12 a 18 meses, dependendo da área, do produto e do metabolismo. Áreas de mais movimento, como os lábios, tendem a absorver mais rápido.",
      },
      {
        q: "É reversível?",
        a: "Sim. O ácido hialurônico pode ser dissolvido com hialuronidase por profissional habilitado, o que acrescenta uma camada importante de segurança.",
      },
      {
        q: "Posso fazer junto com outros procedimentos?",
        a: "Frequentemente sim — é a base da harmonização facial. A ordem e o intervalo entre procedimentos são definidos no seu plano individual.",
      },
    ],
    specialistSlug: "dra-camila-rocha",
    related: ["harmonizacao-facial", "botox", "bioestimulador-de-colageno"],
    facts: [
      { label: "Duração da sessão", value: "30–60 min" },
      { label: "Resultado", value: "Imediato" },
      { label: "Duração média", value: "12–18 meses" },
    ],
  },
  {
    slug: "bioestimulador-de-colageno",
    name: "Bioestimulador de Colágeno",
    cardTitle: "Bioestimulador de colágeno",
    category: "Pele",
    headline: "Sua pele produzindo firmeza outra vez.",
    summary:
      "Injetáveis que estimulam a produção natural de colágeno, tratando flacidez e qualidade de pele no rosto, pescoço e corpo — com resultado progressivo.",
    image: "/images/tratamento-bioestimulador-de-colageno.webp",
    imageAlt:
      "Escultura orgânica perolada emergindo de água serena cercada por flores de lavanda",
    intro: [
      "A partir dos 25 anos, a produção de colágeno diminui cerca de 1% ao ano — e é essa perda silenciosa que, com o tempo, se traduz em flacidez e perda de viço. Os bioestimuladores agem na causa: despertam os fibroblastos para que a própria pele volte a produzir colágeno.",
      "Diferente dos preenchedores, o resultado não é volume imediato, e sim uma melhora progressiva da firmeza, espessura e qualidade da pele ao longo de semanas. É o tratamento preferido de quem busca envelhecer com estrutura — sem mudar o rosto.",
    ],
    forWho: [
      "Quem percebe flacidez leve a moderada no rosto, pescoço ou corpo",
      "Quem busca prevenção estrutural a partir dos 30 anos",
      "Quem quer melhorar a qualidade da pele sem adicionar volume",
      "Quem trata regiões como braços, abdômen, glúteos e joelhos",
    ],
    benefits: [
      {
        title: "Resultado que é seu",
        text: "O colágeno produzido é da sua própria pele — o efeito é orgânico, gradual e sem aspecto artificial.",
      },
      {
        title: "Longa duração",
        text: "Os resultados evoluem por meses e podem durar até 2 anos, conforme o protocolo e o organismo.",
      },
      {
        title: "Rosto e corpo",
        text: "Protocolo versátil: trata face, pescoço, colo, braços, abdômen e outras regiões com flacidez.",
      },
    ],
    steps: [
      {
        title: "Avaliação da qualidade de pele",
        text: "Análise do grau de flacidez e da espessura cutânea para definir produto, diluição e número de sessões.",
      },
      {
        title: "Aplicação",
        text: "Produto aplicado em pontos ou vetores estratégicos, com anestesia tópica e técnica confortável.",
      },
      {
        title: "Estímulo progressivo",
        text: "A neocolagênese acontece ao longo de 30 a 90 dias, com melhora contínua da firmeza.",
      },
      {
        title: "Protocolo completo",
        text: "Em geral, 1 a 3 sessões espaçadas, definidas na avaliação, com manutenção anual.",
      },
    ],
    care: [
      {
        title: "Antes do procedimento",
        items: [
          "Informe medicamentos em uso e histórico de queloides ou doenças autoimunes",
          "Evite álcool e anti-inflamatórios nas 48h anteriores, se orientado",
        ],
      },
      {
        title: "Depois do procedimento",
        items: [
          "Massageie a área conforme a orientação específica do produto utilizado",
          "Evite sol intenso e exercícios por 24–48h",
          "Inchaço leve nos primeiros dias é esperado",
        ],
      },
    ],
    faqs: [
      {
        q: "Qual a diferença entre bioestimulador e preenchimento?",
        a: "O preenchimento repõe volume imediatamente onde ele foi aplicado. O bioestimulador não dá volume: ele induz a produção do seu próprio colágeno, melhorando firmeza e qualidade de pele de forma progressiva. Muitos planos combinam os dois.",
      },
      {
        q: "Quando começo a ver resultado?",
        a: "A partir de 30 dias, com evolução até 90 dias após cada sessão. É um tratamento de construção — a comparação fotográfica entre o antes e o depois costuma surpreender.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Em geral de 1 a 3, dependendo do grau de flacidez, da região e do produto. O número exato é definido na avaliação.",
      },
      {
        q: "Funciona no corpo?",
        a: "Sim. Braços, abdômen, glúteos, coxas e joelhos respondem bem ao estímulo, dentro das expectativas corretas definidas em consulta.",
      },
    ],
    specialistSlug: "dra-camila-rocha",
    related: ["harmonizacao-facial", "estetica-corporal", "laser"],
    facts: [
      { label: "Sessões", value: "1–3" },
      { label: "Resultado", value: "30–90 dias" },
      { label: "Duração média", value: "Até 24 meses" },
    ],
  },
  {
    slug: "limpeza-de-pele",
    name: "Tratamentos para Pele",
    cardTitle: "Tratamentos para pele",
    category: "Pele",
    headline: "Saúde da pele como fundamento de tudo.",
    summary:
      "Limpeza de pele profunda, peelings químicos, microagulhamento e skincare clínico — protocolos que devolvem luminosidade, textura e uniformidade.",
    image: "/images/tratamento-limpeza-de-pele.webp",
    imageAlt:
      "Gota d'água suspensa sobre superfície perolada formando ondulações suaves",
    intro: [
      "Nenhum procedimento estético entrega o seu melhor sobre uma pele desequilibrada. Por isso tratamos a pele como fundamento: limpeza profunda, peelings, microagulhamento e um plano de skincare clínico personalizado formam a base de qualquer protocolo da clínica.",
      "Cada pele tem uma história — acne, manchas, poros, sensibilidade, textura. A avaliação identifica as prioridades e organiza um cronograma de sessões e cuidados em casa que evolui com a sua pele.",
    ],
    forWho: [
      "Quem tem acne ativa, cravos ou poros dilatados",
      "Quem busca uniformizar manchas e melasma com acompanhamento",
      "Quem quer melhorar textura, viço e luminosidade",
      "Quem precisa preparar a pele para procedimentos injetáveis ou laser",
    ],
    benefits: [
      {
        title: "Pele funcional",
        text: "Além da estética, os protocolos reequilibram oleosidade, hidratação e barreira cutânea.",
      },
      {
        title: "Planos evolutivos",
        text: "As sessões se ajustam à resposta da sua pele, com reavaliações periódicas documentadas.",
      },
      {
        title: "Cuidado contínuo",
        text: "Prescrição de skincare clínico para casa, potencializando e mantendo os resultados de consultório.",
      },
    ],
    steps: [
      {
        title: "Diagnóstico de pele",
        text: "Avaliação com luz ampliada e histórico completo: rotina atual, sensibilidades e objetivos.",
      },
      {
        title: "Protocolo personalizado",
        text: "Combinação de limpeza profunda, peelings, microagulhamento ou boosters conforme a necessidade.",
      },
      {
        title: "Sessões e reavaliações",
        text: "Cronograma com intervalos adequados a cada técnica e registro fotográfico de evolução.",
      },
      {
        title: "Manutenção em casa",
        text: "Rotina de skincare prescrita e revisada a cada etapa do tratamento.",
      },
    ],
    care: [
      {
        title: "Antes das sessões",
        items: [
          "Suspenda ácidos em casa 3 a 5 dias antes, conforme orientação",
          "Evite exposição solar intensa na semana anterior",
        ],
      },
      {
        title: "Depois das sessões",
        items: [
          "Use protetor solar rigorosamente — é parte do tratamento",
          "Evite maquiagem por 12–24h após procedimentos mais intensos",
          "Descamação leve pode ocorrer após peelings, conforme o protocolo",
        ],
      },
    ],
    faqs: [
      {
        q: "Com que frequência devo fazer limpeza de pele?",
        a: "Depende do seu tipo de pele e da rotina. Em geral, a cada 30 a 60 dias — mas o intervalo ideal é definido no seu diagnóstico.",
      },
      {
        q: "Peeling funciona para melasma?",
        a: "Peelings específicos ajudam no controle do melasma dentro de um plano que inclui proteção solar rigorosa e manutenção em casa. Melasma é condição crônica: falamos em controle e melhora, não em cura.",
      },
      {
        q: "Microagulhamento dói?",
        a: "Utilizamos anestesia tópica e parâmetros ajustados à sua sensibilidade. O desconforto é leve e a recuperação, rápida.",
      },
      {
        q: "Posso tratar acne ativa?",
        a: "Sim — protocolos de limpeza, peelings e tecnologias auxiliam no controle da acne. Casos moderados a graves podem exigir acompanhamento médico conjunto.",
      },
    ],
    specialistSlug: "dra-marina-duarte",
    related: ["laser", "bioestimulador-de-colageno", "harmonizacao-facial"],
    facts: [
      { label: "Duração da sessão", value: "50–80 min" },
      { label: "Frequência", value: "Mensal*" },
      { label: "Downtime", value: "Mínimo" },
    ],
  },
  {
    slug: "laser",
    name: "Tecnologias a Laser",
    cardTitle: "Tecnologias a laser",
    category: "Tecnologia",
    headline: "Precisão de luz para renovar a pele.",
    summary:
      "Lasers e tecnologias de luz para rejuvenescimento, manchas, vasos, cicatrizes de acne e depilação — com protocolos calibrados para cada fototipo.",
    image: "/images/tratamento-laser.webp",
    imageAlt:
      "Feixe de luz suave atravessando formas de vidro translúcido em ambiente lilás",
    intro: [
      "A tecnologia a laser permite tratar a pele com uma precisão que nenhuma outra técnica alcança: comprimentos de onda específicos atingem alvos específicos — pigmento, vasos, água ou folículo — preservando tudo ao redor.",
      "Nossos protocolos são calibrados por fototipo e por indicação, com parâmetros conservadores e progressivos. Da renovação global da pele à depilação definitiva, cada programa começa com uma avaliação e um teste de resposta.",
    ],
    forWho: [
      "Quem busca rejuvenescimento e melhora global da textura da pele",
      "Quem trata manchas solares, sardas ou uniformização do tom",
      "Quem tem cicatrizes de acne com indicação para tecnologia",
      "Quem busca depilação a laser com segurança em diferentes fototipos",
    ],
    benefits: [
      {
        title: "Precisão seletiva",
        text: "A energia atinge apenas o alvo tratado, com máxima preservação da pele saudável ao redor.",
      },
      {
        title: "Protocolos por fototipo",
        text: "Parâmetros ajustados à sua cor de pele e sensibilidade, com teste prévio de resposta.",
      },
      {
        title: "Estímulo duradouro",
        text: "Além do efeito imediato, as sessões estimulam colágeno e renovação celular contínua.",
      },
    ],
    steps: [
      {
        title: "Avaliação e teste",
        text: "Identificação do fototipo, da queixa principal e teste de parâmetros em pequena área quando indicado.",
      },
      {
        title: "Preparo da pele",
        text: "Em alguns protocolos, preparo domiciliar com clareadores ou fotoproteção reforçada.",
      },
      {
        title: "Sessões programadas",
        text: "Aplicação com resfriamento ativo para conforto, em sessões espaçadas conforme a tecnologia.",
      },
      {
        title: "Fotoproteção e manutenção",
        text: "Protetor solar rigoroso entre as sessões e manutenção periódica conforme o caso.",
      },
    ],
    care: [
      {
        title: "Antes das sessões",
        items: [
          "Evite bronzeamento (sol ou autobronzeador) nas 4 semanas anteriores",
          "Suspenda ácidos na área tratada 5 dias antes, conforme orientação",
          "Informe uso de medicamentos fotossensibilizantes",
        ],
      },
      {
        title: "Depois das sessões",
        items: [
          "Use protetor solar FPS 50+ diariamente",
          "Evite calor intenso, piscina e sauna por 48h",
          "Vermelhidão leve nas primeiras horas é esperada",
          "Não descasque manualmente crostas em tratamentos de manchas",
        ],
      },
    ],
    faqs: [
      {
        q: "Laser funciona em pele negra?",
        a: "Sim, com as tecnologias e os parâmetros corretos. Alguns lasers são específicos para fototipos altos. A avaliação define a opção mais segura e eficaz para a sua pele.",
      },
      {
        q: "Quantas sessões são necessárias?",
        a: "Varia com a indicação: manchas localizadas podem responder em 1 a 3 sessões; rejuvenescimento e depilação costumam exigir programas de 4 a 10 sessões.",
      },
      {
        q: "Posso fazer laser no verão?",
        a: "Alguns protocolos sim, com fotoproteção rigorosa; outros são preferencialmente realizados em períodos de menor exposição solar. Planejamos o cronograma junto com você.",
      },
      {
        q: "As sessões doem?",
        a: "A maioria das tecnologias conta com resfriamento ativo na ponteira. A sensação varia de leve aquecimento a pequenos 'elásticos', bem tolerados.",
      },
    ],
    specialistSlug: "dr-andre-sales",
    related: ["limpeza-de-pele", "bioestimulador-de-colageno", "estetica-corporal"],
    facts: [
      { label: "Duração da sessão", value: "20–60 min" },
      { label: "Programa", value: "1–10 sessões" },
      { label: "Downtime", value: "0–3 dias" },
    ],
  },
  {
    slug: "estetica-corporal",
    name: "Estética Corporal",
    cardTitle: "Estética corporal",
    category: "Corpo",
    headline: "Contorno, firmeza e bem-estar para o corpo inteiro.",
    summary:
      "Protocolos combinados para gordura localizada, flacidez, celulite e definição de contorno — tecnologia e método a serviço de metas realistas.",
    image: "/images/tratamento-estetica-corporal.webp",
    imageAlt:
      "Silhueta elegante envolta em tecido de seda com luz suave em tons de marfim e lilás",
    intro: [
      "O corpo responde melhor a estratégias combinadas do que a soluções isoladas. Nossos protocolos corporais integram tecnologias de radiofrequência, ultrassom, criolipólise e bioestimuladores com massagem e orientação de hábitos — sempre a partir de uma avaliação honesta do que é possível alcançar.",
      "Definimos metas por região e por etapa, com medições e registros fotográficos padronizados. Você acompanha a evolução com dados, não com promessas.",
    ],
    forWho: [
      "Quem tem gordura localizada resistente a dieta e exercício",
      "Quem percebe flacidez corporal após emagrecimento ou gestação",
      "Quem busca melhora da celulite e da qualidade da pele corporal",
      "Quem quer definição de contorno com expectativas realistas",
    ],
    benefits: [
      {
        title: "Protocolos combinados",
        text: "Tecnologias associadas entre si potencializam resultados que nenhuma entregaria sozinha.",
      },
      {
        title: "Acompanhamento mensurável",
        text: "Medições, fotos padronizadas e reavaliações periódicas documentam a evolução real.",
      },
      {
        title: "Sem cirurgia",
        text: "Procedimentos não invasivos ou minimamente invasivos, com rotina preservada.",
      },
    ],
    steps: [
      {
        title: "Avaliação corporal completa",
        text: "Análise de composição, medidas, fotos padronizadas e definição de metas por região.",
      },
      {
        title: "Programa personalizado",
        text: "Combinação de tecnologias e número de sessões definidos para os seus objetivos.",
      },
      {
        title: "Sessões monitoradas",
        text: "Aplicações com parâmetros registrados e ajustados a cada resposta do corpo.",
      },
      {
        title: "Reavaliação e manutenção",
        text: "Comparativos mensais e plano de manutenção alinhado à sua rotina.",
      },
    ],
    care: [
      {
        title: "Antes das sessões",
        items: [
          "Hidrate-se bem nas 24h anteriores",
          "Informe procedimentos cirúrgicos prévios e condições de saúde",
        ],
      },
      {
        title: "Depois das sessões",
        items: [
          "Mantenha hidratação e atividade física leve, conforme orientação",
          "Vermelhidão e sensibilidade local são esperadas em algumas tecnologias",
          "Siga o intervalo entre sessões definido no protocolo",
        ],
      },
    ],
    faqs: [
      {
        q: "Criolipólise substitui emagrecimento?",
        a: "Não. A criolipólise trata gordura localizada em áreas específicas — não é um tratamento de perda de peso. Ela funciona melhor em quem está próximo do peso estável e quer refinar o contorno.",
      },
      {
        q: "Em quanto tempo vejo resultados?",
        a: "Depende da tecnologia: radiofrequência mostra efeitos progressivos ao longo das semanas; criolipólise, entre 30 e 90 dias. O cronograma de reavaliações acompanha esses prazos.",
      },
      {
        q: "Os resultados são definitivos?",
        a: "Células de gordura eliminadas não voltam, mas as remanescentes podem aumentar de volume com ganho de peso. Manutenção de hábitos preserva os resultados.",
      },
      {
        q: "Posso fazer os protocolos no pós-parto?",
        a: "Após a liberação médica e respeitando a amamentação, sim — vários protocolos são adaptáveis a esse momento. A avaliação define o que é seguro para cada fase.",
      },
    ],
    specialistSlug: "dr-andre-sales",
    related: ["bioestimulador-de-colageno", "laser", "limpeza-de-pele"],
    facts: [
      { label: "Programa", value: "4–10 sessões" },
      { label: "Downtime", value: "Nenhum" },
      { label: "Reavaliação", value: "Mensal" },
    ],
  },
];

export function getTreatment(slug: string): Treatment | undefined {
  return treatments.find((t) => t.slug === slug);
}
