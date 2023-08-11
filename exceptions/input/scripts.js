function checkNumber(value) {
    let number = Number(value);

    if(Number.isNaN(number)){
        alert("Não é numero")
    }

    return number;
}