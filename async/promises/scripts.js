let promessa = Promise.resolve(4 + 8);

console.log("Algum Código");

promessa.then((value) => console.log(`A soma é ${value}`));