const carSpeed = prompt("Qual é a velocidade do veículo?");

if (carSpeed <= 80) {
    console.log(`Sua velocidade atual é: ${carSpeed}`);
} else {
    console.log(`Limite da via é 80. Sua velocidade atual é ${carSpeed}`);
}
