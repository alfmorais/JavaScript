/*

\d - Qualquer dígito de caractere
\w - Um caractere alfanumérico ("teste")
\s - Qualquer caractere de espaço em branco
\D - Caracteres que não digitos
\W - Caractere não-alfanuméricos
\S - Caractere que não seja espaço em branco
.  - Qualquer caractere, menos nova linha

*/

const pontoRegex = /./;

console.log(pontoRegex.test("asd"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("123sad"));

const dRegex = /\d/;

console.log(dRegex.test("asd")); // false
console.log(dRegex.test(" "));  // false
console.log(dRegex.test("123"));
console.log(dRegex.test("123sad"));

const dRegexD = /\D/; // [⁰-9]

console.log(dRegexD.test("asd"));
console.log(dRegexD.test(" "));
console.log(dRegexD.test("123")); // false
console.log(dRegexD.test("123sad"));

const sRegex = /\s/;

console.log(sRegex.test("asd")); // false
console.log(sRegex.test(" "));
console.log(sRegex.test("123")); // false
console.log(sRegex.test("123sad")); // false

const wRegex = /\w/;

console.log(wRegex.test("asd"));
console.log(wRegex.test(" ")); // false
console.log(wRegex.test("123"));
console.log(wRegex.test("123sad"));

let ano = /\d\d\d\d/;
console.log(ano.test("05"));
console.log(ano.test("2019"));  // true
console.log(ano.test("opa"));


let palavraTresLetras = /\w\w\w/;
console.log(palavraTresLetras.test("dia")); // true
console.log(palavraTresLetras.test("ano")); // true
console.log(palavraTresLetras.test("oi"));
console.log(palavraTresLetras.test("teste"));

// Operador NOT
let numeroSem123 = /[^123]/;

console.log(numeroSem123.test("1112"));
console.log(numeroSem123.test("14"));
console.log(numeroSem123.test("1"));

const notLetterAToZ = /[^a-z]/;
console.log(notLetterAToZ.test("asd"));

// Operador Plus

let muitosOuPoucosDigitos = /\d+/;

console.log(muitosOuPoucosDigitos.test("123"));
console.log(muitosOuPoucosDigitos.test("123456789"));
console.log(muitosOuPoucosDigitos.test(""));

// Operador Question

let opicional = /Prova\s?\d?/;

console.log(opicional.test("Prova"));
console.log(opicional.test("Prova 1"));
console.log(opicional.test("Prova 2"));


// Operador de Precisão
let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5050"));
console.log(telefone.test("99999-8080"));
console.log(telefone.test("9999-9"));
console.log(telefone.test("999-999"));

// Método Exec
let test = /\d+/.exec("O número 100");
console.log(test);
console.log(test.index);

// Método Match
let teste = "O número 100".match(/\d+/);
console.log(teste);
console.log(teste.index);

// Choice Patters

let frutas = /\d+ (bananas|maças|laranjas)/;

console.log(frutas.test("10 bananas"));
console.log(frutas.test("25 batatas"));
console.log(frutas.test("8 laranjas"));

// Validando um domínio

let validarDominio = /[?www.]\w+\.com|com.br/;

console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.teste"));
console.log(validarDominio.test("teste.com"));
console.log(validarDominio.test("www.horadecodar.com.br"));


// Validando um e-mail
let validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("teste@email.com"));
console.log(validarEmail.test("email@email"));
console.log(validarEmail.test("ronaldo@yahoo.com.br"));
console.log(validarEmail.test("email.com"));

// Validando uma data de nascimento
let validarDataDeNascimento = /[01-31]{2}[/][01-12]{2}[/][1900-2500]{4}/;

console.log(validarDataDeNascimento.test("25/12/2015"));
console.log(validarDataDeNascimento.test("25/12/15"));
console.log(validarDataDeNascimento.test("2/2/2015"));
console.log(validarDataDeNascimento.test("30/02/1999"));