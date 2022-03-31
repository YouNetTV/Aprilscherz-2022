let streamCountdownTextElement = null;

const streamStartTimestamp = 1648828800000;

export function initStreamCountdown() {
    streamCountdownTextElement = document.getElementById("stream-countdown");

    setInterval(() => {updateStreamCountdown();}, 500);
    updateStreamCountdown();
}

function updateStreamCountdown() {
    let now = Date.now();

    if(now > streamStartTimestamp) {
        streamCountdownTextElement.innerText = "Jetzt Live!";
    } else {
        var secTotal = Math.floor((streamStartTimestamp - now)/1000);

        var h = Math.floor(secTotal / 3600);
        var m = Math.floor((secTotal%3600) / 60);
        var s = Math.floor(secTotal % (m*60 + h*3600));

        streamCountdownTextElement.innerText = `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    }
}