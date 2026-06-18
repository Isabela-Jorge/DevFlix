// Busca o filme salvo no localStorage
const filme = JSON.parse(localStorage.getItem("filmeSelecionado"));

// Coloca as informações na tela
document.getElementById("imagemFilme").src = filme.bannerM;

document.getElementById("tituloFilme").textContent = filme.titulo;

document.getElementById("descricaoFilme").textContent = filme.descricao;

document.getElementById("classificacaoFilme").textContent = filme.classificacao;

//busca os botoes da pagina
const btnFavorito = document.getElementById("btnFavorito");

const btnNaoGostei = document.getElementById("btnNaoGostei");

const btnAssistirDepois = document.getElementById("btnAssistirDepois");

// função para favoritar
btnFavorito.addEventListener("click", () => {
  let favoritos =
    JSON.parse(localStorage.getItem("favoritos")) || // o json.parse transforma a string em objeto novamente
    [];

  const jaExiste = favoritos.find((f) => f.id === filme.id); // find procura um elemento dentro de uma array

  if (jaExiste) {
    alert("Esse titulo já está nós seus favoritos!");
    return;
  }
  favoritos.push(filme);

  localStorage.setItem(
    "favoritos",
    JSON.stringify(favoritos), // setItem é para salvar no navegador e getItem procura e stringify é para transformar em string, já q filme é um objeto
  );

  alert("Titulo adicionado aos favoritos!");
});

// função para Não gostei

btnNaoGostei.addEventListener("click", () => {
  let naogostei =
    JSON.parse(localStorage.getItem("naogostei")) || // o json.parse transforma a string em objeto novamente
    [];

  const jaExiste = naogostei.find((f) => f.id === filme.id); // find procura um elemento dentro de uma array

  if (jaExiste) {
    alert("Esse titulo já está nós seus Não gostei!");
    return;
  }

  naogostei.push(filme);

  localStorage.setItem(
    "naogostei",
    JSON.stringify(naogostei), // setItem é para salvar no navegador e getItem procura e stringify é para transformar em string, já q filme é um objeto
  );

  alert("Titulo adicionado ao Não gostei!");
});

// função para assistir depois

btnAssistirDepois.addEventListener("click", () => {
  let assistirdepois =
    JSON.parse(localStorage.getItem("assistirdepois")) || // o json.parse transforma a string em objeto novamente
    [];

  const jaExiste = assistirdepois.find((f) => f.id === filme.id); // find procura um elemento dentro de uma array

  if (jaExiste) {
    alert("Esse titulo já está na lista assistir depois!");
    return;
  }
  assistirdepois.push(filme);

  localStorage.setItem(
    "assistirdepois",
    JSON.stringify(assistirdepois), // setItem é para salvar no navegador e getItem procura e stringify é para transformar em string, já q filme é um objeto
  );

  alert("Titulo adicionado para assistir depois!");
});

//modal trailer
const modal = document.getElementById("modalTrailer");
const iframe = document.getElementById("videoTrailer");

document.getElementById("btnTrailer").addEventListener("click", () => {
  iframe.src = filme.trailer + "?autoplay=1";

  modal.style.display = "flex";
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modal.style.display = "none";
  iframe.src = "";
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    iframe.src = "";
  }
});
