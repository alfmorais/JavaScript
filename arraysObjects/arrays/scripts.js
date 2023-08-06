// Deifinição de Array
let numbers = [1, 2, 3, 4, 5, 6];
let information = ["Alfredo", true, 31];

// Acessando itens de um array
console.log(numbers[0]);
console.log(information[0]);
console.log(numbers[numbers.length - 1]);

// Propriedades são métodos dos objetos/array
console.log(numbers.length);
console.log(information["length"]);

// Métodos
let brand = "Nike";

console.log(typeof brand.toUpperCase);
console.log(brand.toLowerCase());

// Loops
for (let i = 0; i <= numbers.length; i++) {
    console.log(numbers[i]);
}

// Push e Pop
let persons = ["Alfred", "Bruce", "Clark"];

let personRemoved = persons.pop();
console.log(personRemoved);

persons.push("Coringa");
console.log(persons);

// Shift e Unshif

let myName = persons.shift();
console.log(myName);
console.log(persons);

persons.unshift("Alfredo");
console.log(persons);

// IndexOf e LastIndexOf
let numbersUnorderned = [0, 1, 2, 1, 0];
console.log(numbersUnorderned.indexOf(1));
console.log(numbersUnorderned.lastIndexOf(1));

// Slice
console.log(numbersUnorderned.slice(2, 3));
console.log(numbersUnorderned.slice(1));

// For Each
numbers.forEach(num => {
    console.log(num);
});

// Includes
let cars = ["BMW", "Fiat", "Honda", "Toyota"];
console.log(cars.includes("Fiat"));
console.log(cars.includes("Ford"));

// Reverse
console.log(cars.reverse());

// String Trim
let texto = "    \n Teste \n ";
console.log(texto.trim());

// padStart
let sku = "34";
console.log(sku.padStart(6, "0"));
console.log(sku.padEnd(6, "0"));

// Split
let frase = "O rato roeu a roupa do rei de roma";
let palavras = frase.split(" ");

console.log(frase);
console.log(palavras);

// Join
let fraseMontada = palavras.join(" ");
console.log(fraseMontada);

// Repeat
console.log("teste".repeat(5));

// Rest Operator
function imprimirNumeros(...args) {
    for (let i = 0; i <= args.length; i++) {
        console.log(args[i]);
    }
}

// destruction
let [bmw, fiat, honda, toyota] = cars;
console.log(bmw, fiat, honda, toyota);

// JSON p/ String
const data = {
    "glossary": {
        "title": "example glossary",
        "GlossDiv": {
            "title": "S",
            "GlossList": {
                "GlossEntry": {
                    "ID": "SGML",
                    "SortAs": "SGML",
                    "GlossTerm": "Standard Generalized Markup Language",
                    "Acronym": "SGML",
                    "Abbrev": "ISO 8879:1986",
                    "GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
                        "GlossSeeAlso": ["GML", "XML"]
                    },
                    "GlossSee": "markup"
                }
            }
        }
    }
}

let dataTexto = JSON.stringify(data);
console.log(dataTexto);

let dataJson = JSON.parse(dataTexto);
console.log(dataJson);

