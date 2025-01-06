const html = document.querySelector("html");
const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoDescansoCurto = document.querySelector(".app__card-button--curto");

botaoFoco.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
});

botaoDescansoCurto.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
});