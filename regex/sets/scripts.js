const reg = /[123456]/;
console.log(reg.test("Temos o número 6?"));
console.log(reg.test("Temos o número 6?"));
console.log(reg.test("Temos o número 60?"));

const regSecond = /[0-9]/;
console.log(regSecond.test("Temos o número 1"));
console.log(regSecond.test("Temos o número 11"));