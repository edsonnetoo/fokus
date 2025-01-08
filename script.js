const html = document.querySelector("html");
const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoDescansoCurto = document.querySelector(".app__card-button--curto");
const botaoDescansoLongo = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

botaoFoco.addEventListener("click", () => {
    alterarContexto('foco');
});

botaoDescansoCurto.addEventListener("click", () => {
    alterarContexto('descanso-curto');
});

botaoDescansoLongo.addEventListener("click", () => {
    alterarContexto('descanso-longo');
});

function alterarContexto(contexto) {
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/imagens/${contexto}.png`);
}