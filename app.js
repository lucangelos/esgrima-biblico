(function () {
  "use strict";

  const app = document.getElementById("app");

  /* --- desenhos (ícones) ---------------------------------------------- */
  const ICONS = {
    swords: '<polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/><polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5"/><line x1="5" x2="9" y1="14" y2="18"/><line x1="7" x2="4" y1="17" y2="20"/><line x1="3" x2="5" y1="19" y2="21"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
    arrowRight: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    arrowLeft: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    eye: '<path d="M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M10.73 5.08a10.75 10.75 0 0 1 11.24 6.38 1.11 1.11 0 0 1 0 .69 10.75 10.75 0 0 1-1.96 3.07"/><path d="M14.08 14.16a3 3 0 0 1-4.24-4.24"/><path d="M17.48 17.5a10.75 10.75 0 0 1-15.42-5.15 1.11 1.11 0 0 1 0-.7 10.75 10.75 0 0 1 4.45-5.14"/><path d="m2 2 20 20"/>',
    history: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    rotateCcw: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    shuffle: '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    construction: '<rect x="2" y="6" width="20" height="8" rx="1"/><path d="M17 14v7"/><path d="M7 14v7"/><path d="M10 14v3"/><path d="M14 14v3"/><path d="M15 7v3"/><path d="M9 7v3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
  };

  function icon(name, size, strokeWidth) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (size || 24) + '" height="' + (size || 24) +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (strokeWidth || 2) +
      '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || "") + "</svg>";
  }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  /* --- ajuda geral ----------------------------------------------------- */
  const FOOTER = '<footer class="site-footer"><p>“De sorte que somos embaixadores da parte de Cristo...”</p><span>II CORÍNTIOS 5.20</span></footer>';

  function shell(inner) {
    return '<div class="site-shell"><main class="site-main">' + inner + "</main>" + FOOTER + "</div>";
  }

  function mount(html, scroll) {
    app.innerHTML = html;
    if (scroll) window.scrollTo(0, 0);
  }

  function setTitle(title) {
    document.title = title ? title + " — Embaixadores do Rei" : "Embaixadores do Rei";
  }

  function backLink(label) {
    return '<a class="btn quiet-button" href="#/">' + icon("arrowLeft", 16) + " " + esc(label) + "</a>";
  }

  function stars(count) {
    let out = "";
    for (let i = 0; i < count; i += 1) out += icon("star", 21);
    return out;
  }

  function on(id, handler) {
    const node = document.getElementById(id);
    if (node) node.addEventListener("click", handler);
  }

  /* estado da atividade aberta; reinicia a cada tela nova */
  let state = null;

  function pick(list) {
    const index = Math.floor(Math.random() * list.length);
    return list.splice(index, 1)[0];
  }

  /* ======================================================================
     PDF: gera "perguntas + gabarito" de um nível, usando jsPDF.
     A biblioteca é carregada por uma tag <script> comum no HTML
     (vendor/jspdf.umd.min.js), não é injetada dinamicamente — isso
     evita bloqueios de CORB/CSP que a injeção via CDN pode sofrer.
     ====================================================================== */
  function loadJsPdf() {
    if (window.jspdf && window.jspdf.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    return Promise.reject(new Error(
      "O gerador de PDF (jsPDF) não foi encontrado. Confira se a tag " +
      '<script src="vendor/jspdf.umd.min.js"></script> está no HTML, ' +
      "antes do <script src=\"app.js\">."
    ));
  }

  function slugifyFileName(text) {
    return String(text)
      .normalize("NFD").replace(/[̀-ͯ]/g, "") // remove acentos
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  /* Monta e baixa o PDF de um nível de perguntas, seguindo o modelo
     "Prova Montagem Bíblica": título, campos de Nome/Data/Embaixada/
     Nota, perguntas distribuídas em três colunas, e — numa página
     separada — o gabarito compacto (formato "1-B"). */
  function buildQuizPdf(sectionTitle, level) {
    return loadJsPdf().then(function (JsPDF) {
      const doc = new JsPDF({ unit: "pt", format: "a4" });
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 48;
      const letters = ["A", "B", "C", "D"];

      const columnGap = 20;
      const columnCount = 3;
      const columnWidth = (pageWidth - margin * 2 - columnGap * (columnCount - 1)) / columnCount;

      function columnX(col) {
        return margin + col * (columnWidth + columnGap);
      }

      /* Calcula a altura que a pergunta vai ocupar na coluna, sem
         desenhar nada — usado para decidir se ela cabe no espaço
         restante ou se deve pular para a próxima coluna/página. */
      function measureQuestion(q, index) {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        const qLines = doc.splitTextToSize((index + 1) + ". " + q.question, columnWidth);
        let height = qLines.length * 13 + 8;

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        if (q.options) {
          letters.forEach(function (letter) {
            const value = q.options[letter];
            const text = letter + ") " + (value || "_____________________");
            const lines = doc.splitTextToSize(text, columnWidth - 10);
            height += lines.length * 13;
          });
        } else {
          height += 13; // uma única linha para a resposta ser escrita à mão
        }
        return height + 20;
      }

      /* Desenha a pergunta a partir de (x, y) e devolve o novo y. */
      function drawQuestion(q, index, x, y) {
        doc.setFontSize(11);
        doc.setFont("helvetica", "bold");
        const qLines = doc.splitTextToSize((index + 1) + ". " + q.question, columnWidth);
        qLines.forEach(function (line) {
          doc.text(line, x, y);
          y += 13;
        });
        y += 8;

        doc.setFontSize(10);
        doc.setFont("helvetica", "normal");
        if (q.options) {
          letters.forEach(function (letter) {
            const value = q.options[letter];
            const text = letter + ") " + (value || "_____________________");
            const lines = doc.splitTextToSize(text, columnWidth - 10);
            lines.forEach(function (line) {
              doc.text(line, x + 10, y);
              y += 13;
            });
          });
        } else {
          /* Pergunta dissertativa: uma única linha para escrever a resposta. */
          doc.setDrawColor(150, 150, 150);
          doc.setLineWidth(0.6);
          doc.line(x + 10, y, x + columnWidth, y);
          y += 13;
        }

        return y + 20;
      }

      /* Cabeçalho: título da prova + campos para preencher à mão. */
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text(sectionTitle + " – " + level.name, pageWidth / 2, margin, { align: "center" });

      let y = margin + 40;
      doc.setFontSize(11);
      doc.setFont("helvetica", "bold");
      doc.text("Nome:", margin, y);
      doc.text("Data:", margin + 320, y);
      doc.setFont("helvetica", "normal");
      doc.text("_______________________________________________", margin + 38, y);
      doc.text("______/______/__________.", margin + 355, y);

      y += 22;
      doc.setFont("helvetica", "bold");
      doc.text("Embaixada:", margin, y);
      doc.text("Nota:", margin + 320, y);
      doc.setFont("helvetica", "normal");
      doc.text("___________________________________________", margin + 66, y);
      doc.text("___________________________", margin + 355, y);

      y += 30;
      doc.setDrawColor(17, 20, 122); // #10147A
      doc.setLineWidth(1.2);
      doc.line(margin, y, pageWidth - margin, y);

      const questionsStartY = y + 30;
      const bottomLimit = pageHeight - margin;

      let col = 0;
      let colY = questionsStartY;

      /* Perguntas, distribuídas nas três colunas */
      level.questions.forEach(function (q, index) {
        const h = measureQuestion(q, index);

        if (colY + h > bottomLimit) {
          col += 1;
          colY = questionsStartY;
          if (col >= columnCount) {
            doc.addPage();
            col = 0;
            colY = margin;
          }
        }

        colY = drawQuestion(q, index, columnX(col), colY);
      });

      /* Gabarito, sempre numa página nova, no formato "1-B" */
      doc.addPage();
      let gy = margin;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text(
        "GABARITO – " + level.name.toUpperCase() + " (" + level.questions.length + " questões)",
        margin, gy
      );
      gy += 24;

      doc.setFontSize(11);
      level.questions.forEach(function (q, index) {
        if (gy > pageHeight - margin) {
          doc.addPage();
          gy = margin;
        }
        doc.setFont("helvetica", "bold");
        const answerLabel = q.correctOption
          ? (index + 1) + "-" + q.correctOption
          : (index + 1) + ". " + q.answer;
        const lines = doc.splitTextToSize(answerLabel, pageWidth - margin * 2);
        doc.text(lines, margin, gy);
        gy += lines.length * 16;
      });

      const fileName = "embaixadores-do-rei-" + slugifyFileName(sectionTitle) + "-" + level.slug + ".pdf";
      doc.save(fileName);
    });
  }

  /* Cria o botão "Baixar PDF" e liga o clique à geração do PDF.
     id: id do botão no HTML. sectionTitle/level: dados para o PDF. */
  function wirePdfButton(id, sectionTitle, level) {
    const btn = document.getElementById(id);
    if (!btn) return;
    const originalHtml = btn.innerHTML;

    btn.addEventListener("click", function () {
      btn.disabled = true;
      btn.innerHTML = icon("download", 16) + " Gerando PDF...";

      buildQuizPdf(sectionTitle, level)
        .catch(function (err) {
          window.alert(err && err.message ? err.message : "Não foi possível gerar o PDF.");
        })
        .then(function () {
          btn.disabled = false;
          btn.innerHTML = originalHtml;
        });
    });
  }

  /* --- início ---------------------------------------------------------- */
  function renderHub() {
    setTitle("");
    const cards = window.ER.activities.map(function (activity, index) {
      const href = activity.slug === "esgrima" ? "#/esgrima" : "#/atividades/" + activity.slug;
      return '<article class="activity-card' + (activity.available ? " activity-card-featured" : "") + '">' +
        '<div class="card-top"><span class="activity-icon">' + icon(activity.icon, 25, 1.6) + "</span>" +
        '<span class="' + (activity.available ? "status status-ready" : "status") + '">' + (activity.available ? "DISPONÍVEL" : "EM BREVE") + "</span></div>" +
        '<div class="card-category">' + esc(activity.category) + "</div>" +
        "<h2>" + esc(activity.name) + "</h2><p>" + esc(activity.description) + "</p>" +
        '<div class="card-bottom"><a class="btn ' + (activity.available ? "royal-button" : "activity-button") + '" href="' + href + '">Começar ' + icon("arrowRight", 16) + "</a>" +
        '<span class="card-number">0' + (index + 1) + "</span></div></article>";
    }).join("");

    mount(shell(
      '<section class="hub-intro">' +
        '<img class="brand-logo brand-logo-large" src="assets/embaixadores-logo.png" alt="Brasão dos Embaixadores do Rei" />' +
        "<h1>EMBAIXADORES <span>DO REI</span></h1>" +
        "<p>Escolha uma prova e vamos começar!</p>" +
      "</section>" +
      '<section aria-label="Provas e dinâmicas">' +
        '<div class="section-heading"><span>ESCOLHA SUA ATIVIDADE</span><span>04 dinâmicas</span></div>' +
        '<div class="activity-grid">' + cards + "</div>" +
      "</section>"
    ), true);
  }

  /* --- esgrima: escolha de nível ----------------------------------*/
  function renderEsgrimaLevels() {
    setTitle("Esgrima Bíblica");
    const cards = window.ER.levels.map(function (level, i) {
      const has = level.verses.length > 0;
      return '<article class="level-card">' +
        '<div class="level-stars" aria-hidden="true">' + stars(i + 1) + "</div>" +
        '<span class="card-category">NÍVEL 0' + (i + 1) + "</span><h2>" + esc(level.name) + "</h2>" +
        "<p>" + (has ? level.verses.length + " referências bíblicas" : "Lista de versículos em breve") + "</p>" +
        '<a class="btn ' + (has ? "royal-button" : "activity-button") + '" href="#/esgrima/' + level.slug + '">' +
        (has ? "Começar" : "Ver nível") + icon("arrowRight", 16) + "</a></article>";
    }).join("");

    mount(shell(
      backLink("Todas as atividades") +
      '<section class="page-intro"><span class="page-symbol">' + icon("swords", 32) + "</span>" +
      '<div class="eyebrow">PREPARE SUA BÍBLIA</div><h1>Esgrima Bíblica</h1><p>Escolha o nível da sua embaixada.</p></section>' +
      '<div class="level-grid">' + cards + "</div>"
    ), true);
  }

  /* --- esgrima: sorteio ------------------------------------------------- */
  function renderDraw(level) {
    setTitle("Esgrima " + level.name);
    state = { available: level.verses.slice(), history: [], confirmReset: false };
    paintDraw(level);
  }

  function paintDraw(level) {
    const total = level.verses.length;
    const current = state.history[state.history.length - 1];
    const done = state.history.length > 0 && state.available.length === 0;

    const reference = current
      ? "<h2>" + esc(current.replace(" (não existe)", "")) + "</h2>" +
        (current.indexOf("não existe") >= 0 ? '<span class="nonexistent">Não existe</span>' : "")
      : icon("swords", 48, 1.2) + '<h2 class="initial-reference">Bíblias em mãos?</h2>';

    const history = state.history.length
      ? '<ol class="history-list">' + state.history.slice().reverse().map(function (verse, i) {
          return '<li><span class="history-index">' + String(state.history.length - i).padStart(2, "0") + "</span><span>" +
            esc(verse) + "</span>" + (i === 0 ? '<span class="latest-label">ÚLTIMO</span>' : "") + "</li>";
        }).join("") + "</ol>"
      : '<p class="history-empty">Nenhuma referência sorteada ainda.</p>';

    mount(shell(
      '<div class="inner-page draw-page">' +
        '<a class="btn quiet-button" href="#/esgrima">' + icon("arrowLeft", 16) + " Trocar nível</a>" +
        '<section class="page-intro compact"><div class="eyebrow">' + icon("swords", 16) + " ESGRIMA BÍBLICA</div>" +
        "<h1>Nível " + esc(level.name) + "</h1><p>" + (total ? "Clique no botão para aparecer um versículo." : "Os versículos deste nível ainda não foram adicionados.") + "</p></section>" +
        '<section class="draw-tool" aria-label="Sorteio de versículos">' +
          '<span class="card-category">' + (current ? "REFERÊNCIA SORTEADA" : "TUDO PRONTO PARA COMEÇAR") + "</span>" +
          '<div class="reference-display" aria-live="polite" aria-atomic="true">' + reference + "</div>" +
          '<button class="btn royal-button draw-action" id="draw-btn"' + (state.available.length ? "" : " disabled") + ">" +
          icon("shuffle", 16) + (done ? "Sorteio concluído" : "Sortear versículo") + "</button>" +
          (done ? '<p class="completion">' + icon("check", 16) + " Todas as referências foram sorteadas!</p>" : "") +
          '<div class="progress-heading"><span>Progresso da atividade</span><strong>' + state.history.length +
          " <span>/ " + total + "</span></strong></div>" +
          '<progress class="draw-progress" value="' + state.history.length + '" max="' + total + '" aria-label="Referências sorteadas"></progress>' +
        "</section>" +
        '<div class="history-heading"><h2>' + icon("history", 18) + " Histórico <span>" + state.history.length + "</span></h2>" +
        '<button class="btn quiet-button" id="reset-btn"' + (state.history.length ? "" : " disabled") + ">" +
        icon("rotateCcw", 16) + " Reiniciar sorteio</button></div>" +
        (state.confirmReset
          ? '<div class="reset-confirm" role="alert"><p>Limpar o histórico e começar novamente?</p><div>' +
            '<button class="btn quiet-button" id="cancel-reset">Cancelar</button>' +
            '<button class="btn royal-button" id="confirm-reset">Reiniciar</button></div></div>'
          : "") +
        history +
      "</div>"
    ));

    on("draw-btn", function () {
      if (!state.available.length) return;
      state.history.push(pick(state.available));
      paintDraw(level);
    });
    on("reset-btn", function () { state.confirmReset = true; paintDraw(level); });
    on("cancel-reset", function () { state.confirmReset = false; paintDraw(level); });
    on("confirm-reset", function () {
      state = { available: level.verses.slice(), history: [], confirmReset: false };
      paintDraw(level);
    });
  }

  /* --- perguntas: telas -------------------------------------------------- */
  const QUIZZES = {
    organizacao: { title: "Perguntas Gerais da Organização", category: "NOSSA ORGANIZAÇÃO", levels: "organizationQuestionLevels" },
    biblia: { title: "Perguntas Gerais da Bíblia", category: "CONHECIMENTO BÍBLICO", levels: "bibleQuestionLevels" },
    personagem: { title: "Perguntas Gerais Bíblica + Organização", category: "BÍBLIA & ORGANIZAÇÃO", levels: "combinedQuestionLevels" },
  };

  function renderQuiz(config) {
    setTitle(config.title);
    const levels = window.ER[config.levels];
    const cards = levels.map(function (level, i) {
      return '<article class="level-card">' +
        '<div class="level-stars" aria-hidden="true">' + stars(i + 1) + "</div>" +
        '<span class="card-category">' + esc(level.difficulty.toLocaleUpperCase("pt-BR")) + "</span>" +
        "<h2>" + esc(level.name) + "</h2><p>" + level.questions.length + " perguntas</p>" +
        '<button class="btn royal-button" data-level="' + level.slug + '">Começar ' + icon("book", 16) + "</button></article>";
    }).join("");

    mount(shell(
      backLink("Todas as atividades") +
      '<section class="page-intro"><span class="page-symbol">' + icon("book", 32) + "</span>" +
      '<div class="eyebrow">' + esc(config.category) + "</div><h1>" + esc(config.title) + "</h1><p>Escolha o nível da sua embaixada.</p></section>" +
      '<div class="level-grid">' + cards + "</div>"
    ), true);

    Array.prototype.forEach.call(app.querySelectorAll("[data-level]"), function (btn) {
      btn.addEventListener("click", function () {
        const level = levels.filter(function (item) { return item.slug === btn.dataset.level; })[0];
        if (level) startQuiz(config, level);
      });
    });
  }

  function startQuiz(config, level) {
    state = { available: level.questions.slice(), history: [], revealed: false, confirmReset: false };
    paintQuiz(config, level);
  }

  function paintQuiz(config, level) {
    const total = level.questions.length;
    const current = state.history[state.history.length - 1];

    const history = state.history.length
      ? '<ol class="history-list question-history">' + state.history.slice().reverse().map(function (item, i) {
          return '<li><span class="history-index">' + String(state.history.length - i).padStart(2, "0") + "</span><span>" +
            esc(item.question) + "</span></li>";
        }).join("") + "</ol>"
      : '<p class="history-empty">Nenhuma pergunta sorteada ainda.</p>';

    mount(shell(
      '<div class="inner-page draw-page">' +
        '<button class="btn quiet-button" id="back-level">' + icon("arrowLeft", 16) + " Trocar nível</button>" +
        '<section class="page-intro compact"><div class="eyebrow">' + esc(config.title.toLocaleUpperCase("pt-BR")) + "</div>" +
        "<h1>Nível " + esc(level.name) + "</h1><p>" + esc(level.difficulty) + " · " + total + " perguntas</p></section>" +
        '<section class="draw-tool quiz-tool" aria-label="Sorteio de perguntas">' +
          '<span class="card-category">' + (current ? "PERGUNTA SORTEADA" : "TUDO PRONTO PARA COMEÇAR") + "</span>" +
          '<div class="question-display" aria-live="polite"><h2>' + (current ? esc(current.question) : "Vamos testar seus conhecimentos?") + "</h2></div>" +
          (current
            ? '<div class="answer-area"><button class="btn quiet-button answer-toggle" id="reveal-btn" aria-expanded="' + state.revealed + '">' +
              icon(state.revealed ? "eyeOff" : "eye", 16) + (state.revealed ? "Ocultar resposta" : "Mostrar resposta") + "</button>" +
              (state.revealed ? '<p class="question-answer" aria-live="polite">' + esc(current.answer) + "</p>" : "") + "</div>"
            : "") +
          '<button class="btn royal-button draw-action" id="draw-btn"' + (state.available.length ? "" : " disabled") + ">" +
          icon("shuffle", 16) +
          (state.available.length ? (current ? "Próxima pergunta" : "Sortear pergunta") : "Todas as perguntas sorteadas") + "</button>" +
          '<div class="progress-heading"><span>Progresso da atividade</span><strong>' + state.history.length +
          " <span>/ " + total + "</span></strong></div>" +
          '<progress class="draw-progress" value="' + state.history.length + '" max="' + total + '" aria-label="Perguntas sorteadas"></progress>' +
        "</section>" +
        '<div class="pdf-tools">' +
          '<button class="btn quiet-button pdf-button" id="pdf-btn" type="button">' +
          icon("download", 16) + " Baixar PDF (perguntas + gabarito)</button>" +
          '<p class="pdf-hint">Gera um PDF com as ' + total + ' perguntas deste nível e, ao final, o gabarito.</p>' +
        "</div>" +
        '<div class="history-heading"><h2>' + icon("history", 18) + " Histórico <span>" + state.history.length + "</span></h2>" +
        '<button class="btn quiet-button" id="reset-btn"' + (state.history.length ? "" : " disabled") + ">" +
        icon("rotateCcw", 16) + " Reiniciar perguntas</button></div>" +
        (state.confirmReset
          ? '<div class="reset-confirm" role="alert"><p>Limpar o histórico e começar novamente?</p><div>' +
            '<button class="btn quiet-button" id="cancel-reset">Cancelar</button>' +
            '<button class="btn royal-button" id="confirm-reset">Reiniciar</button></div></div>'
          : "") +
        history +
      "</div>"
    ));

    on("back-level", function () { renderQuiz(config); });
    on("draw-btn", function () {
      if (!state.available.length) return;
      state.history.push(pick(state.available));
      state.revealed = false;
      paintQuiz(config, level);
    });
    on("reveal-btn", function () { state.revealed = !state.revealed; paintQuiz(config, level); });
    on("reset-btn", function () { state.confirmReset = true; paintQuiz(config, level); });
    on("cancel-reset", function () { state.confirmReset = false; paintQuiz(config, level); });
    on("confirm-reset", function () {
      state = { available: level.questions.slice(), history: [], revealed: false, confirmReset: false };
      paintQuiz(config, level);
    });

    wirePdfButton("pdf-btn", config.title, level);
  }

  /* --- atividade ainda em construção ------------------------------------ */
  function renderUpcoming(activity) {
    setTitle(activity.name);
    mount(shell(
      '<div class="inner-page">' + backLink("Todas as atividades") +
      '<div class="empty-state">' + icon("construction", 42) +
      '<div class="eyebrow">EM CONSTRUÇÃO</div><h1>' + esc(activity.name) + "</h1>" +
      "<p>" + esc(activity.description) + "</p><p>Estamos preparando esta atividade.</p>" +
      '<a class="btn royal-button" href="#/">Voltar ao início ' + icon("arrowLeft", 16) + "</a></div></div>"
    ), true);
  }

  function renderNotFound() {
    setTitle("Página não encontrada");
    mount(shell(
      '<div class="inner-page"><div class="empty-state"><h1>404</h1>' +
      "<p>Esta página não existe ou foi movida.</p>" +
      '<a class="btn royal-button" href="#/">Voltar ao início</a></div></div>'
    ), true);
  }

  /* --- navegação -------------------------------------------------------- */
  function route() {
    const raw = window.location.hash.replace(/^#/, "");
    const path = (raw.charAt(0) === "/" ? raw : "/" + raw).replace(/\/{2,}/g, "/").replace(/\/+$/, "") || "/";
    state = null;

    if (path === "/") return renderHub();
    if (path === "/esgrima") return renderEsgrimaLevels();

    const draw = /^\/esgrima\/([\w-]+)$/.exec(path);
    if (draw) {
      const level = window.ER.levels.filter(function (item) { return item.slug === draw[1]; })[0];
      return level ? renderDraw(level) : renderNotFound();
    }

    const act = /^\/atividades\/([\w-]+)$/.exec(path);
    if (act) {
      const slug = act[1];
      if (slug === "esgrima") return renderEsgrimaLevels();
      if (QUIZZES[slug]) return renderQuiz(QUIZZES[slug]);
      const activity = window.ER.activities.filter(function (item) { return item.slug === slug; })[0];
      return activity ? renderUpcoming(activity) : renderNotFound();
    }

    return renderNotFound();
  }

  window.addEventListener("hashchange", route);
  route();
})();