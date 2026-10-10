/* Embaixadores do Rei — dados das atividades.
   Edite as listas abaixo para mudar versículos e perguntas. */
window.ER = (function () {
  "use strict";

  const juniorVerses = [
    "Gênesis 1:1", "Salmos 23:1", "Apocalipse 22:21", "João 3:16",
    "Êxodo 20:12", "2 Coríntios 5:20", "Mateus 28:19", "Lucas 15:7",
    "Efésios 6:1", "Judas 1:20", "Romanos 3:23", "Salmos 119:105",
    "Sofonias 2:6", "Cantares 4:7", "Daniel 6:19", "1 Crônicas 11:8",
    "1 Pedro 5:10", "Gênesis 26:27", "Jó 43:21 (não existe)",
    "Tiago 3:19 (não existe)", "Esdras 2:35", "Neemias 7:27",
    "Josué 1:9", "Efésios 4:21", "Atos 12:11", "Rute 1:17",
    "Levítico 21:14", "Números 7:27", "1 Timóteo 2:5", "Ageu 1:1",
    "Malaquias 4:7 (não existe)", "Juízes 20:23",
  ];

  const adolescentYouthVerses = [
    "Gênesis 1:1", "João 11:35", "Salmos 119:105", "Sofonias 2:6",
    "Ester 8:9", "2 Reis 8:16", "Salmos 119:123", "Ageu 2:7",
    "Judas 1:12", "Filemom 1:17", "Isaías 41:20", "Romanos 11:1",
    "Atos 3:24", "Atos 13:37", "Apocalipse 22:22 (não existe)",
    "Jó 43:21 (não existe)", "Tiago 3:19 (não existe)", "Esdras 2:35",
    "Neemias 7:27", "Habacuque 3:10", "Habacuqe 3:19", "Malaquias 2:18 (não existe)",
    "Gálatas 3:20", "1 Tessalonicenses 1:10", "Colossenses 2:17", "Provérbios 25:22",
    "Eclesiastes 3:3", "2 Samuel 24:9", "Rute 1:17", "Deuteronômio 28:67",
    "Josué 1:9", "Números 7:27", "Malaquias 4:7 (não existe)", "Juízes 20:23",
    "Provérbios 31:31", "Isaías 16:3", "Jeremias 18:8", "Ezequiel 25:11",
    "Zacarias 2:4", "Obadias 1:14", "Jonas 3:1", "Miquéias 6:7",
    "Marcos 11:10", "Lucas 9:45", "João 3:36", "Números 8:23",
    "1 Samuel 8:8", "2 Crônicas 4:4", "Salmos 137:3", "Salmos 37:41 (não existe)",
  ];

  const levels = [
    { slug: "juniores", name: "Juniores", verses: juniorVerses },
    { slug: "adolescente", name: "Adolescente", verses: adolescentYouthVerses },
    { slug: "juvenil", name: "Juvenil", verses: adolescentYouthVerses },
  ];

  const activities = [
    { slug: "esgrima", name: "Esgrima Bíblica", description: "Ache o versículo sorteado antes de todo mundo.", category: "AGILIDADE & CONHECIMENTO", icon: "swords", available: true },
    { slug: "organizacao", name: "Perguntas Gerais da Organização", description: "Perguntas baseadas nos livros dos Embaixadores do Rei.", category: "NOSSA ORGANIZAÇÃO", icon: "shield", available: true },
    { slug: "biblia", name: "Perguntas Gerais da Bíblia", description: "Perguntas sobre a Bíblia, seus livros, autores e contextos.", category: "CONHECIMENTO BÍBLICO", icon: "book", available: true },
    { slug: "personagem", name: "Perguntas Gerais Bíblica + Organização", description: "Conhecimentos da Bíblia e dos Embaixadores do Rei em um só desafio.", category: "BÍBLIA & ORGANIZAÇÃO", icon: "book", available: true },
  ];

  /* Cada pergunta tem "options" (A a D). Quando a pergunta já tinha
     alternativas definidas no texto original, elas foram mantidas.
     Quando não tinha, a resposta correta foi colocada em uma letra
     sorteada aleatoriamente e as outras três ficaram "null" —
     preencha esses "null" com as alternativas erradas (distratores)
     quando for gerar a prova. */
  const bibleQuestionLevels = [
    { slug: "juniores", name: "Juniores", difficulty: "Fácil", questions: [
      { question: "Quem construiu a arca para sobreviver ao dilúvio?", answer: "Noé"},
      { question: "Qual é o primeiro livro da Bíblia?", answer: "Gênesis"},
      { question: "Quem foi o primeiro homem criado por Deus, segundo a Bíblia?", answer: "Adão" }, 
      { question: "Em qual cidade Jesus nasceu?", answer: "Belém", options: { A: "Galileia", B: "Belém", C: "Judeia", D: "Jerusalém" }, correctOption: "B" },
      { question: "Quantos discípulos (apóstolos) Jesus escolheu?", answer: "12", options: { A: "7", B: "3", C: "15", D: "12" }, correctOption: "D" },
      { question: "Quem traiu Jesus por 30 moedas de prata?", answer: "Judas Iscariotes"} ,
      { question: "Qual é o último livro da Bíblia?", answer: "Apocalipse"},
      { question: "Quem recebeu os Dez Mandamentos no Monte Sinai?", answer: "Moisés", options: { A: "Salomão", B: "Moisés", C: "João Batista", D: "Samuel" }, correctOption: "B" },
      { question: "Em quantos dias Deus criou o mundo, segundo Gênesis?", answer: "6 dias (descansando no 7º)", options: { A: "6 dias", B: "7 dias", C: "3 dias", D: "8 dias" }, correctOption: "A" },
      { question: "Qual foi o primeiro milagre de Jesus, segundo o Evangelho de João?", answer: "Transformar água em vinho", options: { A: "Transformar água em vinho", B: "Cura do filho do oficial", C: "A pesca maravilhosa", D: "Cura do paralítico" }, correctOption: "A" },
    ] },
    { slug: "adolescente", name: "Adolescente", difficulty: "Médio", questions: [
      { question: "Quais livros fazem parte do Pentateuco?", answer: "Gênesis, Êxodo, Levítico, Números e Deuteronômio"},
      { question: "Quem foi o pai de Isaque?", answer: "Abraão", options: { A: "Jacó", B: "Israel", C: "Abraão", D: "Esaú" }, correctOption: "C" },
      { question: "Qual rei de Israel pediu sabedoria a Deus?", answer: "Salomão", options: { A: "Salomão", B: "Davi", C: "Saul", D: "Jeroboão" }, correctOption: "A" },
      { question: "Quantos anos os israelitas vagaram pelo deserto antes de entrar na Terra Prometida?", answer: "40 anos", options: { A: "37 anos", B: "20 anos", C: "44 anos", D: "40 anos" }, correctOption: "D" },
      { question: "Quem foi lançado na cova dos leões?", answer: "Daniel", options: { A: "Daniel", B: "Davi", C: "Jacó", D: "Ezequiel" }, correctOption: "A" },
      { question: "Qual apóstolo escreveu a maior parte das cartas (epístolas) do Novo Testamento?", answer: "Paulo", options: { A: "João", B: "Jesus", C: "Pedro", D: "Paulo" }, correctOption: "D" },
      { question: "Quem foi a primeira mulher mencionada na Bíblia?", answer: "Eva"},
      { question: "Qual profeta foi engolido por um grande peixe?", answer: "Jonas"},
      { question: "Em que monte a arca de Noé teria repousado após o dilúvio?", answer: "Monte Ararate", options: { A: "Monte Sinai", B: "Monte Sião", C: "Monte Moriá", D: "Monte Ararate" }, correctOption: "D" },
      { question: "Quantos livros tem o Novo Testamento?", answer: "27", options: { A: "34", B: "66", C: "27", D: "29" }, correctOption: "C" },
      { question: "Quem batizou Jesus no rio Jordão?", answer: "João Batista"},
      {question: "Quantos dias Jesus ficou no deserto sendo tentado?", answer: "40 dias", options: {A: "20 dias", B:"15 dias", C: "40 dias", D: "30 dias"}, correctOption: "C"},
      {question: "Qual apóstolo era cobrador de impostos antes de seguir Jesus?", answer: "Mateus", options: {A: "Mateus", B:"Marcos", C: "André", D: "Lucas"}, correctOption: "A"},
      {question: "Qual discípulo duvidou da ressurreição de Jesus até ver as marcas em suas mãos?", answer: "Tomé", options: {A: "Marcos", B:"André", C: "Tomé", D: "Tiago"}, correctOption: "C"},
      {question: "Quantos anos, aproximadamente, Jesus tinha ao iniciar seu ministério público, segundo Lucas?", answer: "30 anos", options: {A: "33 anos", B:"30 anos", C: "20 anos", D: "25 anos"}, correctOption: "B"},
      {question: "Qual era o nome do publicano de baixa estatura que subiu em uma árvore para ver Jesus?", answer: "Zaqueu", options: {A: "Levi", B:"Simão, o fariseu", C: "Zaqueu", D: "Erodes"}, correctOption: "C"},
    ] },
    { slug: "juvenil", name: "Juvenil", difficulty: "Difícil", questions: [
      { question: "Quem foi o sogro de Moisés?", answer: "Jetro", options: { A: "Terá", B: "Ló", C: "Jetro", D: "Joel" }, correctOption: "C" },
      { question: "Qual é considerado o livro mais curto do Antigo Testamento, em número de versículos?", answer: "Obadias", options: { A: "Oséias", B: "Naum", C: "Obadias", D: "Ageu" }, correctOption: "C" },
      { question: "Quantos capítulos tem o livro de Salmos?", answer: "150", options: { A: "190", B: "110", C: "240", D: "150" }, correctOption: "D" },
      { question: "Qual era o nome da esposa de Moisés?", answer: "Zípora", options: { A: "Zípora", B: "Sara", C: "Débora", D: "Dalila" }, correctOption: "A" },
      { question: "Quem sucedeu Moisés na liderança do povo de Israel?", answer: "Josué", options: { A: null, B: null, C: "Josué", D: null }, correctOption: "C" },
      { question: "Quem cortou a orelha do soldado durante a prisão de Jesus?", answer: "Pedro", options: { A: "Pedro", B: "Tomé", C: "Marcos", D: "Paulo" }, correctOption: "A" },
      { question: "Quantos anos Matusalém viveu, segundo Gênesis?", answer: "969 anos", options: { A: "967", B: "991", C: "969 anos", D: "914" }, correctOption: "C" },
      { question: "Qual é considerado o versículo mais curto da Bíblia, em muitas traduções?", answer: "\"Jesus chorou\" (João 11:35)", options: { A: "Ester 8:9", B: "Jó 3:2", C: "João 11:35", D: "Êxodo 20:13" }, correctOption: "C" },
      { question: "Qual profeta ungiu tanto Saul quanto Davi como reis de Israel?", answer: "Samuel", options: { A: "Natan", B: "Gade", C: "Elias", D: "Samuel" }, correctOption: "D" },
      { question: "Qual era o nome original de Abraão, antes de Deus mudar seu nome?", answer: "Abrão", options: { A: "Aarão", B: "Abrão", C: "Absalão ", D: "Abimeleque " }, correctOption: "B" },
      { question: "Quem batizou Jesus no rio Jordão?", answer: "João Batista"},
      {question: "Quantos dias Jesus ficou no deserto sendo tentado?", answer: "40 dias", options: {A: "20 dias", B:"15 dias", C: "40 dias", D: "30 dias"}, correctOption: "C"},
      {question: "Qual apóstolo era cobrador de impostos antes de seguir Jesus?", answer: "Mateus", options: {A: "Mateus", B:"Marcos", C: "André", D: "Lucas"}, correctOption: "A"},
      {question: "Qual discípulo duvidou da ressurreição de Jesus até ver as marcas em suas mãos?", answer: "Tomé", options: {A: "Marcos", B:"André", C: "Tomé", D: "Tiago"}, correctOption: "C"},
      {question: "Quantos anos, aproximadamente, Jesus tinha ao iniciar seu ministério público, segundo Lucas?", answer: "30 anos", options: {A: "33 anos", B:"20 anos", C: "30 anos", D: "25 anos"}, correctOption: "C"},
      {question: "Qual era o nome do publicano de baixa estatura que subiu em uma árvore para ver Jesus?", answer: "Zaqueu", options: {A: "Levi", B:"Simão, o fariseu", C: "Zaqueu", D: "Erodes"}, correctOption: "C"},
    ] },
  ];

  const organizationQuestionLevels = [
    { slug: "juniores", name: "Juniores", difficulty: "Fácil", questions: [
      { question: "Quais são os cinco ideais dos Embaixadores do Rei?", answer: "Estudo Bíblico, Missões, Oração, Mordomia e Serviço Real"},
      { question: "O que simboliza a cor branca?", answer: "Pureza", options: { A: "Pureza", B: "Lealdade", C: "Preciosidade", D: "Beleza" }, correctOption: "A" },
      { question: "Qual parte da insígnia simboliza a vitória?", answer: "Ramo de Louro", options: { A: "Coroa", B: "Escudo", C: "Ramo de Louro", D: "Faixa" }, correctOption: "C" },
      { question: "O que simboliza a cor azul?", answer: "Lealdade", options: { A: "Confiança", B: "Preciosidade", C: "Lealdade", D: "Pureza"  }, correctOption: "C" },
      { question: "O que significa a cor amarela?", answer: "Preciosidade", options: { A: "Prosperidade", B: "Propósito", C: "Alegria", D: "Preciosidade" }, correctOption: "D" },
      { question: "Quais são os postos básicos da Organização Embaixadores do Rei?", answer: "Embaixador Arauto, Embaixador Escudeiro e Embaixador Cavaleiro"},
      { question: "Quais são as regras dos esportes?", answer: "Trabalho em Equipe, Guardar os lábios, Ser honesto e Perder sem zangar-se"},
    ] },
    { slug: "adolescente", name: "Adolescente", difficulty: "Médio", questions: [
      { question: "Qual é o primeiro posto da Organização Embaixadores do Rei?", answer: "Arauto", options: { A: "Escudeiro", B: "Sênior", C: "Emerito", D: "Arauto" }, correctOption: "D" },
      { question: "O que representam as nove folhas do ramo de louro?", answer: "A faixa etária que deve começar na embaixada", options: { A: "A vitória", B: "A paz de Cristo", C: "A aliança de Deus", D: "A faixa etária que deve começar na embaixada" }, correctOption: "D" },
      { question: "Qual parte da insígnia é estudada pelo ER Cavaleiro?", answer: "Ramo de Louro", options: { A: "Ramo de Louro", B: "Faixa", C: "Coroa", D: "Escudo" }, correctOption: "A" },
      { question: "Em que ano a Organização Embaixadores do Rei teve início no Brasil?", answer: "1948", options: { A: "1908", B: "1888", C: "1984", D: "1948" }, correctOption: "D" },
      { question: "Em que país teve início o nome “Embaixador do Rei”?", answer: "Estados Unidos", options: { A: "Inglaterra", B: "Reino Unido", C: "Canadá", D: "Estados Unidos" }, correctOption: "D" },
      { question: "Em que ano foi criada a Organização Embaixadores do Rei?", answer: "1908", options: { A: "1948", B: "1872", C: "1914", D: "1908" }, correctOption: "D" },
      { question: "Qual o nome do hino dos ER?", answer: "Firmando Propósito", options: { A: "Sendo Embaixador", B: "Compromisso Real", C: "Firmando Propósito", D: "Mensagem Real" }, correctOption: "C" },
    ] },
    { slug: "juvenil", name: "Juvenil", difficulty: "Difícil", questions: [
      { question: "Qual parte da insígnia é estudada pelo ER Cavaleiro?", answer: "Ramo de Louro", options: { A: "Coroa", B: "Faixa", C: "Escudo", D: "Ramo de Louro" }, correctOption: "D" },
      { question: "Em que ano a Organização Embaixadores do Rei teve início no Brasil?", answer: "1948", options: { A: "1908", B: "1984", C: "1893", D: "1948" }, correctOption: "D" },
      { question: "Em que ano foi criada a Organização Embaixadores do Rei?", answer: "1908", options: { A: "1908", B: "1893", C: "1914", D: "1948" }, correctOption: "A" },
      { question: "Em que país teve início o nome “Embaixador do Rei”?", answer: "Estados Unidos", options: { A: "Reino Unido", B: "Estados Unidos", C: "Canadá", D: "Inglaterra" }, correctOption: "B" },
      { question: "Qual o nome do hino dos ER?", answer: "Firmando Propósito", options: { A: "Sendo Embaixador", B: "Firmando Propósito", C: "Compromisso Real", D: "Mensagem Real" }, correctOption: "B" },
      { question: "Qual foi a data de organização da primeira Embaixada do Brasil?", answer: "25 de agosto de 1948", options: { A: "15 de outubro de 1882", B: "25 de agosto de 1948", C: "24 de agosto de 1884", D: "25 de agosto de 1950" }, correctOption: "B" },
      { question: "Qual é o prazo mínimo como membro da Embaixada para o ER ser promovido ao posto de Embaixador Arauto?", answer: "6 meses", options: { A: "6 meses", B: "12 meses", C: "9 meses", D: "3 meses" }, correctOption: "A" },
      { question: "Quais são os postos básicos da Organização Embaixadores do Rei?", answer: "Embaixador Arauto, Embaixador Escudeiro e Embaixador Cavaleiro"},
    ] },
  ];

  /* Bíblia + Organização: junta as perguntas de cada nível correspondente. */
  const combinedQuestionLevels = bibleQuestionLevels.map(function (level, i) {
    return {
      slug: level.slug,
      name: level.name,
      difficulty: level.difficulty,
      questions: level.questions.concat(organizationQuestionLevels[i] ? organizationQuestionLevels[i].questions : []),
    };
  });

  return {
    levels,
    activities,
    bibleQuestionLevels,
    organizationQuestionLevels,
    combinedQuestionLevels,
  };
})();