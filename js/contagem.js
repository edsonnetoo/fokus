let tempoDecorridoEmSegundos = 5;
let intervaloId = null;
const somPlay = new Audio("./sons/play.wav");
const somPause = new Audio("./sons/pause.mp3");
const somFim = new Audio("./sons/beep.mp3");

export function contagemRegressiva() {
    if (tempoDecorridoEmSegundos <= 0) {
        zerar();
        somFim.play();
        alert("Tempo finalizado!");
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log("Olho no tempo:", tempoDecorridoEmSegundos);
}

export function iniciaOuPausa() {
    if (intervaloId) {
        zerar();
        somPause.play();
        return;
    }
    somPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    clearInterval(intervaloId);
    intervaloId = null;
}
