const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2];

console.log(a3);

const name = { name: "gol" };
const brand = { brand: "vw" };
const infos = { km: 100000, price: 49000.00 };
const car = { ...name, ...brand, ...infos };
console.log(car);