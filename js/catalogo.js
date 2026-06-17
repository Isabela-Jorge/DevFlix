// Lista de filmes
const filmes = [
    {
        id: 1,
        titulo: "Brooklyn 99",
        imagem: "assets/img/brooklin99.jpg",
        bannerM: "assets/bannerM/brooklin99BANNER.jpg",
        descricao: "Uma equipe de detetives combate o crime em meio ao caos cômico nesta série (que vai toda família rolar de rir), segundo The New York Times.",
        classificação: "Gênero:: Comédia, Policial | Temporadas: 8 |Classificação: 14 anos"
    },
    {
        id: 2,
        titulo: "Gilmore Girls",
        imagem: "assets/img/gilmoregirls.jpg",
        bannerM: "assets/bannerM/gilmoregirlsBANNER.jpg",
        descricao: "Lorelai Gilmore e sua filha Rory compartilham uma amizade única, marcada por muito humor, cumplicidade e conversas rápidas. Vivendo na charmosa cidade de Stars Hollow, elas enfrentam desafios familiares, romances, amizades e decisões que moldam suas vidas. Enquanto Rory busca realizar seus sonhos acadêmicos, Lorelai tenta equilibrar a vida como mãe solteira e empresária. Uma série emocionante, divertida e cheia de momentos inesquecíveis sobre família, crescimento e amor.",
        classificação: "Gênero: Comédia, Drama, Romance| Temporadas: 7 | Classificação: 12 anos"
    },
    {
        id: 3,
        titulo: "La Casa de Papel",
        imagem: "assets/img/lacasadepapel.jpg",
        bannerM: "assets/bannerM/lacasadepapelBANNER.jpg",
        descricao: "Um misterioso criminoso conhecido como (Professor) reúne um grupo de especialistas para executar o maior assalto da história da Espanha: invadir a Casa da Moeda e imprimir bilhões de euros. Com nomes de cidades como codinomes e planos cuidadosamente elaborados, a equipe precisa enfrentar a polícia, lidar com conflitos internos e sobreviver à intensa pressão do assalto. Repleta de suspense, ação e reviravoltas, a série conquistou fãs no mundo inteiro.",
        classificação: "Gênero: Ação, Suspense, Crime, Drama | Temporadas: 5 | Classificação: 16 anos"
    },
    {
        id: 4,
        titulo: "Round 6",
        imagem: "assets/img/round6.jpg",
        bannerM: "assets/bannerM/round6BANNER.jpg",
        descricao: "Centenas de pessoas endividadas e sem perspectivas recebem um misterioso convite para participar de uma série de jogos infantis valendo um prêmio milionário. O que parecia ser uma oportunidade de mudar de vida rapidamente se transforma em uma competição mortal, onde cada decisão pode significar a diferença entre a vida e a morte. Com críticas sociais, tensão constante e reviravoltas emocionantes, a série se tornou um fenômeno mundial.",
        classificação: "Gênero: Suspense, Drama, Ação, Sobrevivência| Temporadas: 3 | Classificação: 18 anos"
    },
    {
        id: 5,
        titulo: "Stranger Things",
        imagem: "assets/img/strangerthings.jpg",
        bannerM: "assets/bannerM/strangerthingsBANNER.jpg",
        descricao: "Quando um garoto desaparece misteriosamente na pequena cidade de Hawkins, seus amigos embarcam em uma busca que os leva a descobrir experimentos secretos, forças sobrenaturais e uma garota com poderes extraordinários. Enquanto enfrentam criaturas assustadoras vindas de uma dimensão paralela, eles precisam unir coragem e amizade para proteger aqueles que amam. Misturando suspense, aventura, ficção científica e nostalgia dos anos 80, a série se tornou um dos maiores sucessos da Netflix.",
        classificação: "Gênero:Ficção Científica, Suspense, Terror, Drama | Temporadas: 5|  Classificação: 16 anos"
    },
    {
        id: 6,
        titulo: "The Chosen",
        imagem: "assets/img/thechosen.jpg" ,
        bannerM: "assets/bannerM/thechosenBANNER.jpg",
        descricao: "Acompanhe a vida de Jesus Cristo através da perspectiva daqueles que o conheceram e tiveram suas vidas transformadas por sua mensagem. A série retrata momentos marcantes de sua jornada, seus milagres, ensinamentos e o relacionamento com seus discípulos, trazendo uma abordagem humana e emocionante dos relatos bíblicos. Com produção de alta qualidade e personagens cativantes, The Chosen conquistou milhões de espectadores ao redor do mundo",
        classificação: "Gênero:Drama, Histórico, Religioso |temporadas: 5| Classificação: 12 anos"
    },
    {
        id: 7,
        titulo: "The Middle",
        imagem: "assets/img/themiddle.jpg",
        bannerM: "assets/bannerM/themiddleBANNER.jpg",
        descricao: "A série acompanha o dia a dia da família Heck, uma família comum de classe média que vive na pequena cidade de Orson, em Indiana. Entre problemas financeiros, desafios na escola, situações constrangedoras e muita confusão dentro de casa, a mãe Frankie e o pai Mike tentam criar seus três filhos da melhor forma possível. Com muito humor e situações relatáveis, The Middle mostra os altos e baixos da vida familiar de maneira divertida e emocionante.",
        classificação: "Gênero: Suspense, Drama, Ação, Sobrevivência | Temporadas: 3 | Classificação: 18 anos"
    },
    {
        id: 8,
        titulo: "Todo Mundo Odeia o Chris",
        imagem: "assets/img/todomundoodeiaochris.jpg",
        bannerM: "assets/bannerM/todomundoodeiaochrisBANNER.jpg",
        descricao: "Inspirada na infância do comediante Chris Rock, a série acompanha as aventuras e desafios de Chris, um adolescente que vive no Brooklyn durante os anos 1980. Entre problemas na escola, amizades, conflitos familiares e situações engraçadas do cotidiano, ele aprende importantes lições sobre crescimento, responsabilidade e perseverança. Com muito humor e personagens inesquecíveis, a série se tornou um grande sucesso no Brasil.",
        classificação: "Gênero: Comédia, Família|  Temporadas: 4 | Classificação: 10 anos"
    },
    {
        id: 9,
        titulo: "Bridgerton",
        imagem: "assets/img/bridgerton.jpg",
        bannerM: "assets/bannerM/bridgertonBANNER.jpg",
        descricao: "Ambientada na alta sociedade londrina do século XIX, a série acompanha a influente família Bridgerton enquanto seus membros buscam amor, casamento e felicidade em meio aos luxuosos bailes, intrigas e escândalos da elite. Narrada pela misteriosa Lady Whistledown, a história mistura romance, drama e segredos que podem mudar o destino de diversas famílias. Com figurinos deslumbrantes e personagens marcantes, Bridgerton conquistou fãs ao redor do mundo.",
        classificação: "Gênero: Romance, Drama, Histórico | Temporadas: 3 | Classificação: 16 anos"
    },
    {
        id: 10,
        titulo: "The Walking Dead",
        imagem: "assets/img/thewalkingdead.jpg",
        bannerM: "assets/bannerM/thewalkingdeadBANNER.jpg",
        descricao: "Após acordar de um coma em um mundo devastado por um apocalipse zumbi, o policial Rick Grimes parte em busca de sua família e encontra outros sobreviventes lutando para permanecer vivos. Enquanto enfrentam hordas de mortos-vivos, eles também precisam lidar com conflitos humanos, escassez de recursos e decisões difíceis que colocam sua moralidade à prova. A série combina ação, suspense, drama e sobrevivência em uma jornada intensa por um mundo pós-apocalíptico.",
        classificação: "Gênero:Terror, Drama, Ação, Sobrevivência | Temporadas: 11|  Classificação: 18 anos"
    },
    {
        id: 11,
        titulo: "Dr Stone",
        imagem: "assets/img/drstone.jpg",
        bannerM: "assets/bannerM/drstoneBANNER.jpg",
        descricao: "Após um misterioso fenômeno transformar toda a humanidade em pedra, o brilhante estudante Senku Ishigami desperta milhares de anos depois em um mundo onde a civilização deixou de existir. Determinado a reconstruir a sociedade do zero usando o poder da ciência, Senku embarca em uma grande aventura para redescobrir invenções, tecnologias e conhecimentos perdidos. Misturando ação, comédia e aprendizado científico, Dr. Stone apresenta uma jornada fascinante sobre inteligência, amizade e perseverança.",
        classificação: "Gênero: Anime, Aventura, Ficção Científica, Comédia|  Temporadas: 4|  Classificação: 12 anos"
    },
    {
        id: 12,
        titulo: "Death Note",
        imagem: "assets/img/deathnote.jpg",
        bannerM: "assets/bannerM/deathnoteBANNER.jpg",
        descricao: "Light Yagami é um estudante extremamente inteligente que encontra um misterioso caderno chamado Death Note. Ao descobrir que qualquer pessoa cujo nome seja escrito nele morre, Light decide usar esse poder para eliminar criminosos e criar um mundo que considera perfeito. Porém, suas ações chamam a atenção de L, um brilhante detetive determinado a descobrir a identidade do responsável pelas mortes. O anime apresenta uma intensa batalha psicológica repleta de suspense, estratégia e dilemas morais.",
        classificação: "Gênero:Anime, Suspense, Mistério, Sobrenatural, Psicológico|  Temporadas: 2|  Classificação: 16 anos"
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
        `;

        // Ao clicar no card abre a página de detalhes
        card.addEventListener("click", () => {

            localStorage.setItem(
                "filmeSelecionado",
                JSON.stringify(filme)
            );

            window.location.href = "detalhes.html";
        });

        listaFilmes.appendChild(card);
    });
}

//  salva os filmes Favoritos
function adicionarFavorito(id) {

    const filme = filmes.find(f => f.id === id); // procura o filme pelo id
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []; // busca os favoritos já salvos

    const jaExiste = favoritos.find(f => f.id === id); // Verifica se o filme já está favoritado (find é uma função pra procurar um elemento dentro de uma array sem percorrer todos os elementos igual o forEch)

    if (jaExiste) {
        alert("Esse filme já está nos favoritos!");
        return;
    }

    favoritos.push(filme); //adiciona o filme a lista
    localStorage.setItem("favoritos", JSON.stringify(favoritos)); //salva no navegador

    alert("Filme adicionado aos favoritos!");
}

// salvas os filmes na lista Ñ gostei
function marcarNaoGostei(id) {
    
    const filme = filmes.find(f => f.id === id);
    let naogostei = JSON.parse(localStorage.getItem("naogostei")) || [];

    const jaExiste = naogostei.find(f => f.id === id);

    if (jaExiste) {
        alert("Esse filme já está na lista!");
        return;
    }

    naogostei.push(filme); //adiciona o filme a lista
    localStorage.setItem("naogostei", JSON.stringify(naogostei)); //salva no navegador
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


//botao de limpar localStorage
function limparDados() {

    localStorage.clear();

    alert("Dados apagados!");

    location.reload();
}