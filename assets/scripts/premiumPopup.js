export function initPopup() {
    if(Math.floor(Math.random() * 8) == 0) popup();

    setInterval(() => {
        if(Math.floor(Math.random() * 50) == 0) popup();
    }, 20000);
}

function popup() {
    document.getElementById("premium-popup").style.display = "flex";
}