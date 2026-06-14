// 1. Banco de dados simulado (Array de objetos)
const filmes = [
    { id: 1, titulo: "Breaking Code", imagem: "assets/img/filme1.jpg", categoria: "Populares" },
    { id: 2, titulo: "The CSS Matrix", imagem: "assets/img/filme2.jpg", categoria: "Populares" },
    { id: 3, titulo: "Lord of the Scripts", imagem: "assets/img/filme3.jpg", categoria: "Populares" }
];

// 2. Seleção de elementos do HTML (DOM)
const listaFilmes = document.getElementById('listaFilmes');
const itensMenu = document.querySelectorAll('.sidebar nav ul li');

// 3. Função para renderizar os filmes na tela
function carregarFilmes(lista) {
    listaFilmes.innerHTML = ""; // Limpa o container antes de carregar
    
    lista.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('card-filme'); // Adicione estilização para essa classe no seu CSS
        
        card.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <div class="botoes-card">
                <button onclick="adicionarFavorito(${filme.id})">⭐</button>
                <button onclick="marcarNaoGostei(${filme.id})">👎</button>
            </div>
        `;
        
        listaFilmes.appendChild(card);
    });
}

// 4. Funções de Interação (Exemplos de lógica)
function adicionarFavorito(id) {
    console.log(`Filme ${id} adicionado aos Favoritos.`);
}

function marcarNaoGostei(id) {
    console.log(`Filme ${id} marcado como 'Não gostei'.`);
}

// 5. Evento de clique para o Menu Lateral (Sidebar)
itensMenu.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe ativa anterior se houver
        itensMenu.forEach(i => i.classList.remove('active'));
        // Adiciona classe ativa no item clicado
        item.classList.add('active');
        
        console.log(`Você navegou para: ${item.innerText}`);
        // Aqui você pode criar lógicas para filtrar a lista de filmes exibida
    });
});

// 6. Inicialização do sistema
document.addEventListener('DOMContentLoaded', () => {
    carregarFilmes(filmes);
});

// carrossel

const slides = document.querySelectorAll(".slide");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

let slideAtual = 0;

function mostrarSlide(index) {

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
}

btnNext.addEventListener("click", () => {

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide(slideAtual);
});

btnPrev.addEventListener("click", () => {

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
});

// Mostra o primeiro slide ao carregar
mostrarSlide(slideAtual);
