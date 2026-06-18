const tema = document.getElementById("tema");

tema.addEventListener("change", () => {

    if (tema.checked) {
        document.body.classList.add("tema-claro");
    } else {
        document.body.classList.remove("tema-claro");
    }

});