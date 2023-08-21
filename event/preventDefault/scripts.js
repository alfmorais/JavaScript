let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let paragraph = document.querySelector("p");
let link = document.querySelector("a");

function message(e) {
    // Objeto do evento
    console.log(e);
    console.log("Clicou no Button");
    e.stopPropagation();
}

function removeEvent(){
    console.log("Removeu a ação do botão 1.")
    btn1.removeEventListener("click", message);
}

btn1.addEventListener("click", message);
btn2.addEventListener("click", removeEvent);
paragraph.addEventListener("click", function(){
    console.log("clicou no paragrafo");
})
link.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Não vai pro linkedin");
})