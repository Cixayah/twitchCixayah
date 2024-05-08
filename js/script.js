"use strict";
function toggleMode() {
    const html = document.documentElement;
    if (!html) {
        console.error("Elemento HTML não encontrado.");
        return;
    }
    html.classList.toggle("light");
    const profileElement = document.getElementById("profile");
    if (!profileElement) {
        console.error('Elemento com id "profile" não encontrado.');
        return;
    }
    const img = profileElement.querySelector("img");
    if (!img) {
        console.error('Imagem não encontrada dentro do elemento com id "profile".');
        return;
    }
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png");
    }
    else {
        img.setAttribute("src", "./assets/avatar.png");
    }
}
