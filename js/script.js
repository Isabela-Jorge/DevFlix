const formulario = document.querySelector("form"); // procura  o formulario na pagina
const usuario = document.getElementById("usuario"); // Procura o input de usuário através do id
const senha = document.getElementById("senha"); // Procura o input de senha através do id
const mensagemErro = document.getElementById("mensagemErro"); // Procura o elemento responsável por exibir erros

// DADOS DE LOGIN
const usuarioSistema = { //Criação de um objeto para armazenar os dados corretos de acesso. Utilizamos objeto porque futuramente podemos adicionar mais informações sobre usuário.
    login: "Isa",
    senha: "123"
};

// FUNÇÃO DE VALIDAÇÃO
function validarlogin() {  // Esta função verifica se os dados digitados são iguais aos cadastrados.

    if (   // Verifica se login e senha estão corretos
        usuario.value === usuarioSistema.login &&
        senha.value === usuarioSistema.senha
    ) {
        localStorage.setItem("logado", "true");  // Salva informação no navegador indicando que o usuário está logado
        window.location.href = "catalogo.html";  // Redireciona para a página do catálogo
    }

    else {  // Exibe mensagem de erro
        mensagemErro.textContent = "Usuario ou senha incorretos.";
    }
}

// EVENTO DE ENVIO DO FORMULÁRIO
formulario.addEventListener("submit", function (event) {  // Sempre que o usuário clicar em Entrar, o formulário dispara o evento submit.


    event.preventDefault(); // Impede que a página recarregue
    validarlogin();  // Chama a função responsável por validar o login
});
