let person = {
    hands: 2,
}

console.log(Object.getPrototypeOf(person));
console.log(Object.getPrototypeOf(person) == Object.prototype);
console.log(person.hasOwnProperty("hands"));

let newPerson = Object.create(person);
console.log(newPerson.hands);
console.log(Object.getPrototypeOf(newPerson) == person);


function DogInterface(breed, paws, color) {
    this.breed = breed;
    this.paws = paws;
    this.color = color;
}

DogInterface.prototype.bark = function() {
    return "Au au";
}
let husky = new DogInterface("Husky", 4, "gray");
console.log(husky.bark());