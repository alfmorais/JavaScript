function imprimirNoConsole() {
    console.log("Olá mundo!");
}

function imprimirUmNumero(numero) {
    console.log("O número é: " + numero);
}

const numeroAleatorio = function () {
    console.log(Math.random());
}

const soma = function (a, b) {
    return a + b;
}
const somatoria = soma(2, 3);

function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}
const multiplicacao = multiplicarTresNumeros(2, 5, 9);

function podeDirigir(idade, cnh) {
    if (idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}

imprimirNoConsole();
imprimirUmNumero(6);
numeroAleatorio();

console.log("O resultado é: " + somatoria);
console.log("O resultado é: " + multiplicacao);

podeDirigir(31, true);
podeDirigir(15, false);
