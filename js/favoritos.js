const lista = document.getElementById("listaFavoritos"); // Procura a lista de favoritos no HTML
const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // Busca os filmes salvos no navegador

// Percorre todos os favoritos
favoritos.forEach((filme) => {
  const card = document.createElement("li"); // Cria um card
  card.classList.add("card-filmeF"); // Adiciona a classe do card

  // Conteúdo do card
  card.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">

        <div class="info-filme">
        <h3>${filme.titulo}</h3>

        <button onclick="RemoverFavorito(${filme.id})">
        Remover
           </button>
        </div>
    `;

  lista.appendChild(card); // Adiciona o card na página
});

function RemoverFavorito(id) {
  // fução remover favorito

  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; //busca os favoritos salvos
  favoritos = favoritos.filter((f) => f.id !== id); // cria uma nova lista sem o favorito

  localStorage.setItem("favoritos", JSON.stringify(favoritos)); // Salva novamente
  location.reload(); // Atualiza a página
}
