// Verifique se o número é primo!
// Um número primo é um número natural, maior que 1 e apenas divisível por si próprio e por 1;

let number = 41;
let dividors = 0;

for (let i = 1; i <= number; i++) {
    if (number % i == 0) {
        dividors++;
    }
}

if (dividors == 2) {
    console.log("Primo");
} else {
    console.log("Não é Primo");
}