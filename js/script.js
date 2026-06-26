const formulario = document.querySelector("form"); // procura o formulario na pagina
const usuario = document.getElementById("usuario"); // Procura o input de usuário através do id
const senha = document.getElementById("senha"); // Procura o input de senha através do id
const mensagemErro = document.getElementById("mensagemErro"); // Procura o elemento responsável por exibir erros

//Criação de uma array para armazenar os dados corretos de acesso.
const usuarioSistema = [
    {
        login: "Isabela",
        senha: "123"
    },
    {
        login: "Daniela",
        senha: "456"
    }
];

// Função de validação
function validarlogin() {

    const usuarioEncontrado =
    usuarioSistema.find(user =>

        user.login === usuario.value &&
        user.senha === senha.value

    );

    if (usuarioEncontrado) {

        localStorage.setItem("logado", "true");

        localStorage.setItem(
            "usuarioLogado",
            JSON.stringify(usuarioEncontrado)
        );

        window.location.href = "catalogo.html";

    }

    else {

        mensagemErro.textContent =
        "Usuário ou senha incorretos.";

    }
}

// Evento do formulário
formulario.addEventListener("submit", function(event) {  // Sempre que o usuário clicar em Entrar, o formulário dispara o evento submit.

    event.preventDefault();  // Impede que a página recarregue

    validarlogin(); // Chama a função responsável por validar o login

});
