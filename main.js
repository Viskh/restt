import spiralImg from "./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png";
import mainPageImg from "./imgs/header-total.png";
import menuImg from "./imgs/menu.png";
import aboutImg from "./imgs/about.png";
import jokerImg from "./imgs/Joker.png";
import { getHeader } from "./script";




export function getMain() {
  const content = document.querySelector("#content");

  content.innerHTML = "";
  const background = document.createElement("div");
  background.className = "background";
  content.append(background);
  getHeader(content);
  //header
  //paralax
  function paralxBox() {
    const background = document.createElement("div");
    background.className = "background";
    content.append(background);

    const paralax = document.createElement("div");
    paralax.className = "paralax-box";
    content.append(paralax);
    // paralax Elements
    const spiral = document.createElement("img");
    spiral.className = "spiral";
    spiral.src = spiralImg;
    paralax.append(spiral);

    const joker = document.createElement("img");
    joker.className = "joker";
    joker.src = jokerImg;
    paralax.append(joker);
  }
  return paralxBox();
}
