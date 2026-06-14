// Lista de filmes
const filmes = [
    {
        id: 1,
        titulo: "Brooklyn 99",
        imagem: "assets/img/brooklin99.jpg"
    },
    {
        id: 2,
        titulo: "Gilmore Girls",
        imagem: "assets/img/gilmoregirls.jpg"
    },
    {
        id: 3,
        titulo: "La Casa de Papel",
        imagem: "assets/img/lacasadepapel.jpg"
    },
    {
        id: 4,
        titulo: "Round 6",
        imagem: "assets/img/round6.jpg"
    },
    {
        id: 4,
        titulo: "Stranger Things",
        imagem: "assets/img/strangerthings.jpg"
    },
    {
        id: 5,
        titulo: "The Chosen",
        imagem: "assets/img/thechosen.jpg" 
    },
    {
         id: 6,
        titulo: "The Middle",
        imagem: "assets/img/themiddle.jpg"
    },
    {
         id: 7,
        titulo: "Todo Mundo Odeia o Chris",
        imagem: "assets/img/todomundoodeiaochris.jpg"
    }

];

// Container dos filmes
const listaFilmes = document.getElementById("listaFilmes");

// Cria os cards na tela
function carregarFilmes() {

    listaFilmes.innerHTML = "";

    filmes.forEach((filme) => {

        const card = document.createElement("div");

        card.classList.add("card-filme");

        card.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.titulo}">

            <h3>${filme.titulo}</h3>

            <div class="botoes-card">
                <button onclick="adicionarFavorito(${filme.id})">
                    ❤️ Favoritar
                </button>

                <button onclick="marcarNaoGostei(${filme.id})">
                    👎 Não gostei
                </button>
            </div>
        `;

        listaFilmes.appendChild(card);
    });
}

// Favoritar
function adicionarFavorito(id) {
    console.log("Favoritou o filme:", id);
}

// Não gostei
function marcarNaoGostei(id) {
    console.log("Não gostou do filme:", id);
}

// Carrega os filmes
carregarFilmes();


// CARROSSEl

const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let slideAtual = 0;

// Mostra um slide por vez
function mostrarSlide(index) {

    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
}

// Próximo slide
btnNext.addEventListener("click", () => {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
});

// Slide anterior
btnPrev.addEventListener("click", () => {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
});

// Primeiro slide
mostrarSlide(slideAtual);
