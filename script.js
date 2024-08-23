import "./main.css";
// import spiralImg from "./imgs/background-spiral.c5d64e2d702a992fed648621f874d2b8.png";
import mainPageImg from "./imgs/header-total.png";
import menuImg from "./imgs/menu.png";
import aboutImg from "./imgs/about.png";
// import jokerImg from "./imgs/Joker.png";
import { getMenu } from "./menu";
import { getMain } from "./main";
import { getAbout } from "./about";

const content = document.querySelector("#content");

const pageObj = {
  main: getMain,
  menu: getMenu,
  about: getAbout,
};

const linksImgs = [
  { img: mainPageImg, page: "main" },
  { img: menuImg, page: "menu" },
  { img: aboutImg, page: "about" },
];

function renderPage(page) {
  if (pageObj[page]) {
    content.innerHTML = "";
    content.append(getHeader);
    const pageContent = pageObj[page]();
    if (pageContent) {
      content.append(pageContent);
    }
  }
}
renderPage("main");

linksImgs.forEach(({ img, page }) => {
  const imgContainer = document.createElement("div");
  imgContainer.append(img);
  imgContainer.addEventListener("click", () => {
    renderPage(page);
  });
});

// //header
export function getHeader(content) {
  const header = document.createElement("header");
  header.className = "header";
  content.append(header);
  //header Elements



  linksImgs.forEach(({ img, page }) => {
    const imgTag = document.createElement("img");
    imgTag.className = page;
    imgTag.src = img;
    const imgContainer = document.createElement("div");
    imgContainer.className = "img-container";
    imgContainer.append(imgTag);
    imgContainer.addEventListener("click", () => {
      renderPage(page);
    });
    header.append(imgContainer)
  });
}
