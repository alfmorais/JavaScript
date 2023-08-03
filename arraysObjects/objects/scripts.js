let dog = {
    legs: 4,
    name: "Shark",
    bark: function() {
        console.log("Au Au");
    }
};

console.log(dog.legs);
console.log(dog.name);
dog.bark();

// Propriedades de um objeto
let car = {
    brand: "VW",
    doors: 4,
    eletricEngine: false,
}
console.log(car);

car.engine = 1.5;
console.log(car);

delete car.engine;
console.log(car);

// Copiando uma propriedade para outro objeto.
Object.assign(car, dog);
car.bark();
console.log(Object.keys(car));

let secondCar = car;
console.log(car.brand, secondCar.brand);

secondCar.brand = "Honda";
console.log(car.brand, secondCar.brand);