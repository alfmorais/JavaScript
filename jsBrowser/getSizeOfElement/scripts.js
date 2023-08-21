let elemento = document.querySelector("#titulo-principal");

// Considera as bordas.
console.log("largura: " + elemento.offsetWidth);
console.log("altura: " + elemento.offsetHeight);

// Não considera as bordas.
console.log("largura: " + elemento.clientWidth);
console.log("altura: " + elemento.clientHeight);

// Posiçoes
console.log(elemento.getBoundingClientRect());

// Estilizando com JS
let paragraph = document.getElementById("#paragrafo-principal");
paragraph.style.color = "red";

let todosPs = document.querySelectorAll("p");
console.log(todosPs);
console.log(count(todosPs));
