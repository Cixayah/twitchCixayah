function toggleMode(): void {
  // Seleciona o elemento HTML raiz.
  const html: HTMLElement | null = document.documentElement;

  if (!html) {
    console.error("Elemento HTML não encontrado.");
    return;
  }

  // Alterna a classe 'light' no elemento HTML raiz, mudando o modo.
  html.classList.toggle("light");

  // Seleciona o elemento com o id "profile".
  const profileElement: HTMLElement | null = document.getElementById("profile");

  if (!profileElement) {
    console.error('Elemento com id "profile" não encontrado.');
    return;
  }

  // Seleciona a imagem dentro do elemento com o id "profile".
  const img: HTMLImageElement | null = profileElement.querySelector("img");

  if (!img) {
    console.error('Imagem não encontrada dentro do elemento com id "profile".');
    return;
  }

  // Verifica se o modo "light" está ativado.
  if (html.classList.contains("light")) {
    // Se o modo "light" estiver ativo, define a imagem para 'avatar-light.png'.
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // Se o modo "light" não estiver ativo, define a imagem para 'avatar.png'.
    img.setAttribute("src", "./assets/avatar.png");
  }
}
