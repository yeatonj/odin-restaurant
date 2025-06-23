import "./styles.css";

import { drawHome } from "./subpages/home";
import { drawMenu } from "./subpages/menu";
import { drawContact } from "./subpages/contact";

function clearContent() {
    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

function drawContent(drawFunction) {
    clearContent();
    drawFunction();
}

drawHome();

const buttons = [...document.querySelectorAll("button")];

buttons[0].addEventListener("click", () => drawContent(drawHome));
buttons[1].addEventListener("click", () => drawContent(drawMenu));
buttons[2].addEventListener("click", () => drawContent(drawContact));