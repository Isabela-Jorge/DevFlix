// Lista de filmes
const filmes = [
    {
        id: 1,
        titulo: "Cuphead",
        imagem: "assets/img/cuphead.jpg",
        bannerM: "assets/bannerM/cupheadBANNER.jpg",
        descricao: "Baseada no famoso jogo Cuphead, a série acompanha as divertidas e caóticas aventuras dos irmãos Cuphead e Mugman em um mundo animado cheio de criaturas excêntricas, confusões e desafios inesperados. Com muito humor, amizade e situações malucas, os dois vivem tentando escapar dos problemas — especialmente daqueles causados pelo próprio Cuphead. Inspirada nos desenhos animados clássicos das décadas de 1930 e 1940, a série traz um visual encantador e histórias leves para toda a família.",
        classificacao: "Gênero: Animação, Comédia, Aventura, Família| Temporadas: 3 | Classificação: Livre",
        trailer: "https://www.youtube.com/embed/3LPU_Zfw8R0"
    },
    {
        id: 2,
        titulo: "Gilmore Girls",
        imagem: "assets/img/gilmoregirls.jpg",
        bannerM: "assets/bannerM/gilmoregirlsBANNER.jpg",
        descricao: "Lorelai Gilmore e sua filha Rory compartilham uma amizade única, marcada por muito humor, cumplicidade e conversas rápidas. Vivendo na charmosa cidade de Stars Hollow, elas enfrentam desafios familiares, romances, amizades e decisões que moldam suas vidas. Enquanto Rory busca realizar seus sonhos acadêmicos, Lorelai tenta equilibrar a vida como mãe solteira e empresária. Uma série emocionante, divertida e cheia de momentos inesquecíveis sobre família, crescimento e amor.",
        classificacao: "Gênero: Comédia, Drama, Romance| Temporadas: 7 | Classificação: 12 anos",
        trailer: "https://www.youtube.com/embed/YwY86TlfDI0"
    },
    {
        id: 3,
        titulo: "La Casa de Papel",
        imagem: "assets/img/lacasadepapel.jpg",
        bannerM: "assets/bannerM/lacasadepapelBANNER.jpg",
        descricao: "Um misterioso criminoso conhecido como (Professor) reúne um grupo de especialistas para executar o maior assalto da história da Espanha: invadir a Casa da Moeda e imprimir bilhões de euros. Com nomes de cidades como codinomes e planos cuidadosamente elaborados, a equipe precisa enfrentar a polícia, lidar com conflitos internos e sobreviver à intensa pressão do assalto. Repleta de suspense, ação e reviravoltas, a série conquistou fãs no mundo inteiro.",
        classificacao: "Gênero: Ação, Suspense, Crime, Drama | Temporadas: 5 | Classificação: 16 anos",
        trailer: "https://www.youtube.com/embed/_InqQJRqGW4"
    },
    {
        id: 4,
        titulo: "Round 6",
        imagem: "assets/img/round6.jpg",
        bannerM: "assets/bannerM/round6BANNER.jpg",
        descricao: "Centenas de pessoas endividadas e sem perspectivas recebem um misterioso convite para participar de uma série de jogos infantis valendo um prêmio milionário. O que parecia ser uma oportunidade de mudar de vida rapidamente se transforma em uma competição mortal, onde cada decisão pode significar a diferença entre a vida e a morte. Com críticas sociais, tensão constante e reviravoltas emocionantes, a série se tornou um fenômeno mundial.",
        classificacao: "Gênero: Suspense, Drama, Ação, Sobrevivência| Temporadas: 3 | Classificação: 18 anos",
        trailer: "https://www.youtube.com/embed/oqxAJKy0ii4"
    },
    {
        id: 5,
        titulo: "Stranger Things",
        imagem: "assets/img/strangerthings.jpg",
        bannerM: "assets/bannerM/strangerthingsBANNER.jpg",
        descricao: "Quando um garoto desaparece misteriosamente na pequena cidade de Hawkins, seus amigos embarcam em uma busca que os leva a descobrir experimentos secretos, forças sobrenaturais e uma garota com poderes extraordinários. Enquanto enfrentam criaturas assustadoras vindas de uma dimensão paralela, eles precisam unir coragem e amizade para proteger aqueles que amam. Misturando suspense, aventura, ficção científica e nostalgia dos anos 80, a série se tornou um dos maiores sucessos da Netflix.",
        classificacao: "Gênero:Ficção Científica, Suspense, Terror, Drama | Temporadas: 5| Classificação: 16 anos",
        trailer: "https://www.youtube.com/embed/b9EkMc79ZSU"
    },
    {
        id: 6,
        titulo: "The Chosen",
        imagem: "assets/img/thechosen.jpg" ,
        bannerM: "assets/bannerM/thechosenBANNER.jpg",
        descricao: "Acompanhe a vida de Jesus Cristo através da perspectiva daqueles que o conheceram e tiveram suas vidas transformadas por sua mensagem. A série retrata momentos marcantes de sua jornada, seus milagres, ensinamentos e o relacionamento com seus discípulos, trazendo uma abordagem humana e emocionante dos relatos bíblicos. Com produção de alta qualidade e personagens cativantes, The Chosen conquistou milhões de espectadores ao redor do mundo",
        classificacao: "Gênero:Drama, Histórico, Religioso |temporadas: 5| Classificação: 12 anos",
        trailer: "https://www.youtube.com/embed/K1-FoFj8Jbo",
    },
    {
        id: 7,
        titulo: "One Piece: A serie",
        imagem: "assets/img/onepiece.jpg",
        bannerM: "assets/bannerM/onepieceBANNER.jpg",
        descricao: "Baseada no famoso mangá e anime de mesmo nome, a série acompanha Monkey D. Luffy, um jovem pirata com habilidades elásticas adquiridas após comer uma Fruta do Diabo. Sonhando em encontrar o lendário tesouro One Piece e se tornar o Rei dos Piratas, Luffy reúne uma tripulação de amigos com habilidades únicas e embarca em uma jornada repleta de aventuras, batalhas, mistérios e desafios pelos mares. A adaptação live action conquistou fãs por sua fidelidade ao espírito da obra original e pelos personagens carismáticos.",
        classificacao: "Gênero:Aventura, Fantasia, Ação| Temporadas: 2 | Classificação: 14 anos",
        trailer: "https://www.youtube.com/embed/YC8SLpnxsL4"
    },
    {
        id: 8,
        titulo: "Peaky Blinders",
        imagem: "assets/img/peakyblinders.jpg",
        bannerM: "assets/bannerM/peakyblindersBANNER.jpg",
        descricao: "Ambientada na Inglaterra após a Primeira Guerra Mundial, a série acompanha a ascensão da família Shelby, uma organização criminosa liderada pelo ambicioso e inteligente Tommy Shelby. Enquanto expande seus negócios e influência, Tommy enfrenta rivais perigosos, autoridades determinadas a derrubá-lo e conflitos dentro de sua própria família. Com uma trama envolvente, personagens marcantes e uma atmosfera única, Peaky Blinders se tornou uma das séries mais aclamadas dos últimos anos.",
        classificacao: "Gênero: Drama, Crime, Histórico|  Temporadas: 6 | Classificação: 18 anos",
        trailer: "https://www.youtube.com/embed/P_-r11fcDTc"
    },
    {
        id: 9,
        titulo: "Bridgerton",
        imagem: "assets/img/bridgerton.jpg",
        bannerM: "assets/bannerM/bridgertonBANNER.jpg",
        descricao: "Ambientada na alta sociedade londrina do século XIX, a série acompanha a influente família Bridgerton enquanto seus membros buscam amor, casamento e felicidade em meio aos luxuosos bailes, intrigas e escândalos da elite. Narrada pela misteriosa Lady Whistledown, a história mistura romance, drama e segredos que podem mudar o destino de diversas famílias. Com figurinos deslumbrantes e personagens marcantes, Bridgerton conquistou fãs ao redor do mundo.",
        classificacao: "Gênero: Romance, Drama, Histórico | Temporadas: 3 | Classificação: 16 anos",
        trailer: "https://www.youtube.com/embed/gpv7ayf_tyE"
    },
    {
        id: 10,
        titulo: "Sandman",
        imagem: "assets/img/sandman.jpg",
        bannerM: "assets/bannerM/sadmanBANNER.jpg",
        descricao: "Após acordar de um coma em um mundo devastado por um apocalipse zumbi, o policial Rick Grimes parte em busca de sua família e encontra outros sobreviventes lutando para permanecer vivos. Enquanto enfrentam hordas de mortos-vivos, eles também precisam lidar com conflitos humanos, escassez de recursos e decisões difíceis que colocam sua moralidade à prova. A série combina ação, suspense, drama e sobrevivência em uma jornada intensa por um mundo pós-apocalíptico.",
        classificacao: "Gênero:Terror, Drama, Ação, Sobrevivência | Temporadas: 11|  Classificação: 18 anos",
        trailer: "https://www.youtube.com/embed/NFnrLVrORiE"
    },
    {
        id: 11,
        titulo: "Dr Stone",
        imagem: "assets/img/drstone.jpg",
        bannerM: "assets/bannerM/drstoneBANNER.jpg",
        descricao: "Após um misterioso fenômeno transformar toda a humanidade em pedra, o brilhante estudante Senku Ishigami desperta milhares de anos depois em um mundo onde a civilização deixou de existir. Determinado a reconstruir a sociedade do zero usando o poder da ciência, Senku embarca em uma grande aventura para redescobrir invenções, tecnologias e conhecimentos perdidos. Misturando ação, comédia e aprendizado científico, Dr. Stone apresenta uma jornada fascinante sobre inteligência, amizade e perseverança.",
        classificacao: "Gênero: Anime, Aventura, Ficção Científica, Comédia|  Temporadas: 4|  Classificação: 12 anos",
        trailer: "https://www.youtube.com/embed/tF4faMbs5oQ"
    },
    {
        id: 12,
        titulo: "Demon Slayer",
        imagem: "assets/img/kimetsu.jpg",
        bannerM: "assets/bannerM/kimetsuBANNER.jpg",
        descricao: "Após sua família ser brutalmente atacada por demônios, Tanjiro Kamado vê sua vida mudar para sempre. Determinado a proteger sua irmã Nezuko, a única sobrevivente do massacre que foi transformada em demônio, ele embarca em uma jornada para encontrar uma cura e vingar sua família. Ao longo do caminho, Tanjiro enfrenta inimigos poderosos, faz grandes amizades e se torna um caçador de demônios. Com animação impressionante, batalhas emocionantes e uma história cativante, Kimetsu no Yaiba se tornou um dos animes mais populares do mundo.",
        classificacao: "Gênero:Anime, Ação, Aventura, Fantasia, Sobrenatural|  Temporadas: 4|  Classificação: 16 anos",
        trailer: "https://www.youtube.com/embed/vBGKUXcf7SQ"
    },
    {
        id: 13,
        titulo: "Como eu era antes de você",
        imagem: "assets/img/comoeueraantesdevoce.jpg",
        bannerM: "assets/bannerM/comoeueraBANNER.jpg",
        descricao: "Louisa Lou Clark é uma jovem alegre e criativa que aceita trabalhar como cuidadora de Will Traynor, um ex-banqueiro rico que ficou tetraplégico após um acidente. Apesar do temperamento difícil de Will, os dois desenvolvem uma forte conexão que transforma suas vidas e os leva a refletir sobre amor, escolhas e o significado de viver plenamente.",
        classificacao: "Gênero: Drama, Romance.| Classificação: 12 anos",
        trailer: "https://www.youtube.com/embed/Eh993__rOxA"
    },
    {
        id: 14,
        titulo: " Cães de caça",
        imagem: "assets/img/caesdecaca.jpg",
        bannerM: "assets/bannerM/caesdecacaBANNER.jpg",
        descricao: "Após suas famílias serem ameaçadas por uma poderosa organização de agiotas, dois jovens boxeadores unem forças para enfrentar o mundo cruel dos empréstimos ilegais. Usando sua força, lealdade e determinação, eles entram em uma perigosa batalha contra criminosos que exploram pessoas vulneráveis. Com cenas intensas de ação, amizade marcante e muita emoção, Cães de Caça entrega uma história envolvente sobre justiça e superação.",
        classificacao: "Gênero:Ação, Crime, Drama, Suspense.| Temporadas: 2 | Classificação: 18 anos",
        trailer: "https://www.youtube.com/embed/myF-2r3h7HM"
    },
    {
        id: 15,
        titulo: "Dan Dan Dan",
        imagem: "assets/img/DanDanDan.jpg",
        bannerM: "assets/bannerM/dandandanBANNER.jpg",
        descricao: "Momo Ayase e Ken Takakura, apelidado de Okarun, possuem crenças completamente opostas: enquanto ela acredita em fantasmas, ele acredita em alienígenas. Para provar quem está certo, os dois embarcam em uma série de desafios que acabam revelando algo muito mais surpreendente: tanto espíritos quanto extraterrestres realmente existem. Juntos, eles enfrentam criaturas bizarras, fenômenos sobrenaturais e ameaças inexplicáveis, desenvolvendo uma amizade cheia de humor, ação e momentos emocionantes ao longo do caminho.",
        classificacao: "Gênero:Anime, Ação, Comédia, Sobrenatural, Ficção Científica|Temporadas: 2| Classificação: 16 anos",
        trailer: "https://www.youtube.com/embed/dyDrodeIA7o"
    },
    {
        id: 16,
        titulo: "Spay x Family",
        imagem: "assets/img/spayFamily.jpg",
        bannerM: "assets/bannerM/spayFamilyBANNER.jpg",
        descricao: "Para cumprir uma missão secreta que pode evitar uma guerra, o espião conhecido como Twilight precisa formar uma família falsa. Sem revelar sua verdadeira identidade, ele adota uma garota chamada Anya e se casa com Yor, sem saber que Anya é uma telepata e Yor é uma assassina profissional. Enquanto tentam manter suas vidas secretas, os três acabam criando laços genuínos e vivendo situações divertidas, emocionantes e cheias de ação.",
        classificacao: "Gênero:Anime, Comédia, Ação, Família, Espionagem, Ficção Científica|Temporadas: 2| Classificação: 12 anos",
        trailer: "https://www.youtube.com/embed/ofXigq9aIpo" 
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