function returnNumber(num) {
    const number = Math.floor(Math.random() * num) + 1;
    return number;
}

console.log(returnNumber(10));