function repetirFrase(frase, n = 2) {
    for (let x = 1; x <= n; x++) {
        console.log(frase + " " + x);
    }
}

const frase = "Olá mundo";
repetirFrase(frase, 5);
repetirFrase(frase);
