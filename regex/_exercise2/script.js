let validarId = /\d+ID\b/;

console.log(validarId.test("01234587ID"));
console.log(validarId.test("0123ID4587"));
console.log(validarId.test("0123004587"));