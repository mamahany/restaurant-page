import "./main.css";
import loadHome from "./load-home";
import loadMenu from "./load-menu";
import loadContact from "./load-contact";
const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const contactBtn = document.querySelector("#contact");
const buttons = [homeBtn, menuBtn, contactBtn];
buttons.forEach((element)=>{
    element.addEventListener("click", ()=>{tabClicked(element.id)});
});

function tabClicked(id){
    content.innerHTML = "";
    buttons.forEach((element)=>{
        element.removeAttribute("class");
    });
    const tab = document.querySelector("#" + id);
    tab.setAttribute("class", "active-tab");
    switch(id){
        case "home":
            loadHome();
            break;
        case "menu":
            loadMenu();
            break;
        case "contact":
            loadContact();
            break;
    }
}
tabClicked("home");