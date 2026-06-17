const lista = document.getElementById("assistirdepois"); // Procura a lista de assistir depois no HTML
const assistirdepois = JSON.parse(localStorage.getItem("assistirdepois")) || []; // Busca os filmes salvos no navegador

// Percorre todos os titulos
assistirdepois.forEach((filme) => {
  const card = document.createElement("li"); // Cria um card
  card.classList.add("card-filmeF"); // Adiciona a classe do card

  // Conteúdo do card
  card.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">

        <div class="info-filme">
        <h3>${filme.titulo}</h3>

        <button onclick="RemoverAssistirdepois(${filme.id})">
        Remover
           </button>
        </div>
    `;

  lista.appendChild(card); // Adiciona o card na página
});

// fução remover assistir depois
function RemoverAssistirdepois(id) {

  let assistirdepois = JSON.parse(localStorage.getItem("assistirdepois")) || []; //busca os favoritos salvos
  assistirdepois = assistirdepois.filter((f) => f.id !== id); // cria uma nova lista sem o favorito

  localStorage.setItem("assistirdepois", JSON.stringify(assistirdepois)); // Salva novamente
  location.reload(); // Atualiza a página
}
