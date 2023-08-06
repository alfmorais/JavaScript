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

// Destruction

let carInterface = {
    rodas: 4,
    portas: 4,
    tetoSolar: true,
    motor: "2.0"
}

const {rodas: vRodas, portas: vPortas, tetoSolar, vTetoSolar, motor: vMotor} = carInterface;
console.log(vMotor, vPortas, vRodas, vTetoSolar);