// Busca o filme salvo no localStorage
const filme = JSON.parse(
    localStorage.getItem("filmeSelecionado")
);

// Coloca as informações na tela

document.getElementById("imagemFilme").src =
    filme.bannerM;

document.getElementById("tituloFilme").textContent =
    filme.titulo;

document.getElementById("descricaoFilme").textContent =
    filme.descricao;

document.getElementById("classificacaoFilme").textContent =
    filme.classificacao;