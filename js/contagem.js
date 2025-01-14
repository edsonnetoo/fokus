let tempoDecorridoEmSegundos = 30;
let intervaloId = null;
const html = document.querySelector("html");
const spanStartPause = document.querySelector("#start-pause span");
const iconeBotao = document.querySelector(".app__card-primary-button-icon");
const tempoNaTela = document.querySelector("#timer");

const somPlay = new Audio("./sons/play.wav");
const somPause = new Audio("./sons/pause.mp3");
const somFim = new Audio("./sons/beep.mp3");

export function contagemRegressiva() {
    if (tempoDecorridoEmSegundos <= 0) {
        // somFim.play();
        alert("Tempo finalizado!");
        const focoAtivo = html.getAttribute('data-contexto') == 'foco';
        if (focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado');
            document.dispatchEvent(evento);
        }
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

export function iniciaOuPausa() {
    if (intervaloId) {
        
        zerar();
        somPause.play();
        return;
    }
    iconeBotao.setAttribute("src", "./imagens/pause.png");
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    spanStartPause.textContent = "Pausar";
}

function zerar() {
    clearInterval(intervaloId);
    iconeBotao.setAttribute("src", "./imagens/play_arrow.png");
    spanStartPause.textContent = "Começar";
    intervaloId = null;
}

export function alteraTempo(contexto) {
    switch (contexto) {
        case "foco":
            tempoDecorridoEmSegundos = 30;
            break;
        case "descanso-curto":
            tempoDecorridoEmSegundos = 5;
            break;
        case "descanso-longo":
            tempoDecorridoEmSegundos = 15;
            break;
        default:
            break;
    }
}

export function mostrarTempo() {
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}
