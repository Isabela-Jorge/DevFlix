const lista = document.getElementById("listaFavoritos"); // Procura a lista de favoritos no HTML
const card = document.createElement("li"); // Cria um card
card.classList.add("card-filme"); // adiciona uma classe para estilizar

// conteudo do card
card.innerHTML = ` 
    <img src="assets/img/gilmoregirls.jpg" alt="Gilmore Girls">
    <h3>Gilmore Girls</h3>
`; 

lista.appendChild(card); // Adiciona o card na página.( O método appendChild() adiciona um elemento filho dentro de outro.)



