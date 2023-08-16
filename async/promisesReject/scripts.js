function verificaAlgo(num) {
    return new Promise((resolve, reject) => {
        if (num == 2) {
            resolve(console.log("O número é 2"));
        } else {
            reject(new Error("Falhou"));
        }
    }) 
}

verificaAlgo(3);
verificaAlgo(2);