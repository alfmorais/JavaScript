let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

function message(e) {
    // Objeto do evento
    console.log(e);
}

function removeEvent(){
    console.log("Removeu a ação do botão 1.")
    btn1.removeEventListener("click", message);
}

btn1.addEventListener("click", message);
btn2.addEventListener("click", removeEvent);
