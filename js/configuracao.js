const tema = document.getElementById("tema");

if (localStorage.getItem("tema") === "claro") {
  document.body.classList.add("tema-claro");
  tema.checked = true;
}

tema.addEventListener("change", () => {
  if (tema.checked) {
    document.body.classList.add("tema-claro");
    localStorage.setItem("tema", "claro");
  } else {
    document.body.classList.remove("tema-claro");
    localStorage.setItem("tema", "escuro");
  }
});

function limparDados() {
  const confirmar = confirm(
    "Tem certeza que deseja restaurar as configurações?\n\nTodos os dados serão apagados.",
  );

  if (!confirmar) return;

  localStorage.clear();

  alert("Configurações restauradas com sucesso!");

  location.reload();
}
