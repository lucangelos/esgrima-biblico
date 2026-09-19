// ============================================================
//  LISTAS DE VERSÍCULOS
//  Para incluir ou remover um versículo, basta editar as listas abaixo.
// ============================================================
const NIVEIS = {
  juniores: {
    nome: "Juniores",
    versiculos: [
      "Gênesis 1:1",
      "Salmos 23:1",
      "Apocalipse 22:21",
      "João 3:16",
      "Êxodo 20:12",
      "2 Coríntios 5:20",
      "Mateus 28:19",
      "Lucas 15:7",
      "Efésios 6:1",
      "Judas 1:20",
      "Romanos 3:23",
      "Salmos 119:105",
      "Sofonias 2:6",
      "Cantares 4:7",
      "Daniel 6:19",
      "1 Crônicas 11:8",
      "1 Pedro 5:10",
      "Gênesis 26:27",
      "Jó 43:21 (não existe)",
      "Tiago 3:19 (não existe)",
      "Esdras 2:35",
      "Neemias 7:27",
      "Josué 1:9",
      "Efésios 4:21",
      "Atos 12:11",
      "Rute 1:17",
      "Levítico 21:14",
      "Números 7:27",
      "1 Timóteo 2:5",
      "Ageu 1:1",
      "Malaquias 4:7 (não existe)"
    ]
  },
  adolescentes: {
    nome: "Adolescentes",
    versiculos: [
      "Gênesis 1:1",
      "João 11:35",
      "Salmos 119:105",
      "Sofonias 2:6",
      "Ester 8:9",
      "2 Reis 8:16",
      "Salmos 119:123",
      "Ageu 2:7",
      "Judas 1:12",
      "Filemom 1:17",
      "Isaías 41:20",
      "Romanos 11:1",
      "Atos 3:24",
      "Atos 13:37",
      "Apocalipse 22:22 (não existe)",
      "Jó 43:21 (não existe)",
      "Tiago 3:19 (não existe)",
      "Esdras 2:35",
      "Neemias 7:27",
      "Habacuque 3:10",
      "Habacuqe 3:19",
      "Malaquias 2:18 (não existe)",
      "Gálatas 3:20",
      "1 Tessalonicenses 1:10",
      "Colossenses 2:17",
      "Provérbios 25:22",
      "Eclesiastes 3:3",
      "2 Samuel 24:9",
      "Rute 1:17",
      "Deuteronômio 28:67",
      "Josué 1:9",
      "Números 7:27",
      "Malaquias 4:7 (não existe)"
    ]
  }
};

// ============================================================
//  SORTEIO (só roda nas páginas de nível)
// ============================================================
const chaveNivel = document.body.dataset.nivel;

if (chaveNivel && NIVEIS[chaveNivel]) {
  const nivel = NIVEIS[chaveNivel];
  const total = nivel.versiculos.length;

  const elVersiculo = document.getElementById("versiculo");
  const elSortear = document.getElementById("sortear");
  const elProgresso = document.getElementById("progresso");
  const elBarra = document.getElementById("barra");
  const elHistorico = document.getElementById("historico");
  const elReiniciar = document.getElementById("reiniciar");

  let restantes = [...nivel.versiculos];

  function atualizarProgresso() {
    const sorteados = total - restantes.length;
    elProgresso.textContent = `${sorteados} de ${total} versículos sorteados`;
    elBarra.style.width = `${(sorteados / total) * 100}%`;
    elSortear.disabled = restantes.length === 0;
    elSortear.textContent = restantes.length === 0 ? "Fim dos versículos" : "Sortear versículo";
  }

  function sortear() {
    if (restantes.length === 0) return;

    const i = Math.floor(Math.random() * restantes.length);
    const escolhido = restantes.splice(i, 1)[0];

    elVersiculo.classList.remove("espera", "revelar");
    void elVersiculo.offsetWidth; // reinicia a animação
    elVersiculo.classList.add("revelar");
    elVersiculo.textContent = escolhido;

    const item = document.createElement("li");
    item.textContent = escolhido;
    elHistorico.appendChild(item);

    atualizarProgresso();
  }

  function reiniciar() {
    restantes = [...nivel.versiculos];
    elVersiculo.classList.remove("revelar");
    elVersiculo.classList.add("espera");
    elVersiculo.textContent = "Aguardando o sorteio";
    elHistorico.innerHTML = "";
    atualizarProgresso();
  }

  elSortear.addEventListener("click", sortear);
  elReiniciar.addEventListener("click", reiniciar);
  atualizarProgresso();
}
