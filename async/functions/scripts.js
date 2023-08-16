async function somar(a, b) {
    return a + b;
}

somar(2, 2).then(function (value) {
    console.log(value);
});

function somaComDelay(a, b) {
    return new Promise(resolve => {
        setTimeout(function () {
            resolve(a + b);
        }, 2000);
    })
}

async function soma(a, b, c, d) {
    let x = somaComDelay(a, b);
    let y = somaComDelay(c, d);

    return await x + await y;
}

soma(2, 4, 6, 8).then(x => console.log(x));