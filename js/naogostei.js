const lista = document.getElementById("listarnaogostei"); // Procura a lista de favoritos no HTML
const naogostei = JSON.parse(localStorage.getItem("naogostei")) || []; // Busca os filmes salvos no navegador
console.log(naogostei);

// Percorre todos os favoritos
naogostei.forEach((filme) => {
  const card = document.createElement("li"); // Cria um card
  card.classList.add("card-filmeF"); // Adiciona a classe do card

  // Conteúdo do card
  card.innerHTML = `
        <img src="${filme.imagem}" alt="${filme.titulo}">

        <div class="info-filme">
        <h3>${filme.titulo}</h3>

        <button onclick="Removernaogostei(${filme.id})">
        Remover
           </button>
        </div>
    `;

  lista.appendChild(card); // Adiciona o card na página
});

function Removernaogostei(id) {
  // fução remover Nao gostei

  let naogostei = JSON.parse(localStorage.getItem("naogostei")) || []; //busca os favoritos salvos
  naogostei = naogostei.filter((f) => f.id !== id); // cria uma nova lista sem o favorito

  localStorage.setItem("naogostei", JSON.stringify(naogostei)); // Salva novamente
  location.reload(); // Atualiza a página
}