function nomeComIdade(nome, idade) {
    let message;

    if (idade === undefined) {
        message = `Seu nome é ${nome}`;
    } else {
        message = `Seu nome é ${nome} e você tem ${idade} anos`;
    }

    return message;
}

console.log(nomeComIdade("Alfredo", 31));
console.log(nomeComIdade("Joaquim", undefined));
