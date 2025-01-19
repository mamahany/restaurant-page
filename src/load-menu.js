import frillfreeImg from "./assets/frill-free-img.png";
import adanaImg from "./assets/Adana-kebab.jpg";
import lahmacunImg from "./assets/Lahmacun.jpg";
import donerkebabImg from "./assets/Doner-kebab.jpg";
import tavuksisImg from "./assets/Tavuk-Sis.jpg";
import baklawaImg from "./assets/Baklawa.jpg";
import karisikpideImg from "./assets/Karisik-Pide.jpg";

export default  function loadMenu(){
    const content = document.querySelector("#content");
    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("class", "menu");
    menuDiv.innerHTML = `            <div class="head">
                <h1>Food Menu</h1>
                <img src="${frillfreeImg}" alt="">
            </div>
            <div class="main">
                <div class="menu-item">
                    <img src="${lahmacunImg}" alt="">
                    <p>Lahmacun</p>
                </div>
                <div class="menu-item">
                    <img src="${karisikpideImg}" alt="">
                    <p>Turkish Kiymali Pide </p>
                </div>
                <div class="menu-item">
                    <img src="${adanaImg}" alt="">
                    <p>Andana kebab</p>
                </div>
                <div class="menu-item">
                    <img src="${tavuksisImg}" alt="">
                    <p>Tavuk Sis</p>
                </div>
                <div class="menu-item">
                    <img src="${donerkebabImg}" alt="">
                    <p>Doner kebabs</p>
                </div>
                <div class="menu-item">
                    <img src="${baklawaImg}" alt="">
                    <p>Baklava</p>
                </div>
            </div>`

    content.appendChild(menuDiv);
}