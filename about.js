import { getHeader } from "./script";

export function getAbout() {
    const content = document.querySelector("#content");

    content.innerHTML = ''
    getHeader(content)
    const aboutBack = document.createElement("div");
    aboutBack.className = "about-background";
    content.append(aboutBack)
}
