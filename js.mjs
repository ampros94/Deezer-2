const menu = document.getElementById("menu");
const button = document.getElementById("menublanco");

let esVisisble = false;

console.log(menu)

function abrirMenu() {
    if (esVisisble) {
        menu.style.transform = "translateY(-100%)";
        esVisisble = false;
    } else{
        menu.style.transform = "translateY(0%)";
        esVisisble = true;
    }
}

button.addEventListener("click", abrirMenu);
