let busInterface = {
    wheels: 8,
    limitPassenger: 40,
    doors: 2,
}
console.log(busInterface.wheels);
console.log(busInterface.limitPassenger);
console.log(busInterface.doors);

busInterface.windows = 20;
delete busInterface.wheels;

console.log(busInterface.windows);