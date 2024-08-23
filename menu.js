import dishOneImg from "./imgsMenu/snorlax-food.e41957ea4dfa06a60365129480382d06.png";
import dishTwoImg from "./imgsMenu/eevee-food.9af9e2902101198fcb022fd8e4e6bdc3.png"
import dishThreeImg from "./imgsMenu/jigglypuff-food.3c71fb31ea4331868b25d30b61a1cb75.png"
import dishFourImg from "./imgsMenu/pickachu-drink.ca1ac5acb51dfbc95eba7d9cb0bef704.png"
import dishFiveImg from "./imgsMenu/eevee-drink.f8b591c2bb596b365db38035b955558b.png"
import dishSixImg from "./imgsMenu/gengar-drink.1e63d44d6cf39607a4527b2de6413051.png"
import { getHeader } from "./script";



export function getMenu() {
    const content = document.querySelector("#content");

    content.innerHTML = ''
    getHeader(content)
    const menuBack = document.createElement("div");
    menuBack.className = "menu-back";
    content.append(menuBack);

    const menuContainer = document.createElement("div");
    menuContainer.className = "menu-container";
    content.append(menuContainer);

    const imgOne = document.createElement("img");
    imgOne.className="dish-one";
    imgOne.src = dishOneImg;
    menuContainer.append(imgOne);

    const imgTwo = document.createElement("img");
    imgTwo.className="dish-two";
    imgTwo.src = dishTwoImg;
    menuContainer.append(imgTwo);

    const imgThree = document.createElement("img");
    imgThree.className="dish-three";
    imgThree.src = dishThreeImg;
    menuContainer.append(imgThree);

    const imgFour = document.createElement("img");
    imgFour.className="dish-four";
    imgFour.src = dishFourImg;
    menuContainer.append(imgFour);

    const imgFive = document.createElement("img");
    imgFive.className="dish-five";
    imgFive.src = dishFiveImg;
    menuContainer.append(imgFive);

    const imgSix = document.createElement("img");
    imgSix.className="dish-six";
    imgSix.src = dishSixImg;
    menuContainer.append(imgSix);

    
}
