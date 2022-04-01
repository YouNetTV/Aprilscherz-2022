import { initStreamCountdown } from "./assets/scripts/streamCountdown.js"; 
import { initPopup } from "./assets/scripts/premiumPopup.js";

window.addEventListener("load", () => {
    initStreamCountdown();
    initPopup();
});