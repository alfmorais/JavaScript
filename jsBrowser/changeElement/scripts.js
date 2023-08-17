let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum Texto");

novoElemento.appendChild(texto);

let elementAlvo = document.querySelector("#titulo-principal");
let pai = document.querySelector("#container-principal");

pai.insertBefore(novoElemento, elementAlvo);

let p = document.querySelector("#paragrafo-principal");
let paiSecond = p.parentNode;

paiSecond.appendChild(novoElemento);

let heading = document.querySelector("#titulo-principal");
let paiHeading = heading.parentNode;

paiHeading.replaceChild(novoElemento, heading);