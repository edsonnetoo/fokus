import { alteraTempo, iniciaOuPausa, mostrarTempo } from "./js/contagem.js";

const html = document.querySelector("html");
const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoDescansoCurto = document.querySelector(".app__card-button--curto");
const botaoDescansoLongo = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const botoes = document.querySelectorAll(".app__card-button");
const musicaFocoInput = document.getElementById("alternar-musica");
const botaoStartPause = document.getElementById("start-pause"); 

const musica = new Audio('/sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

botaoFoco.addEventListener("click", () => {
    alteraTempo('foco');
    alterarContexto('foco');
    botaoFoco.classList.add("active");
});

botaoDescansoCurto.addEventListener("click", () => {
    alteraTempo('descanso-curto');
    alterarContexto('descanso-curto');
    botaoDescansoCurto.classList.add("active");
});

botaoDescansoLongo.addEventListener("click", () => {
    alteraTempo('descanso-longo');
    alterarContexto('descanso-longo');
    botaoDescansoLongo.classList.add("active");
});

function alterarContexto(contexto) {
    mostrarTempo();
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br> <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br> <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br> <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
        default:
            break;
    }
}

botaoStartPause.addEventListener("click", iniciaOuPausa);
mostrarTempo();