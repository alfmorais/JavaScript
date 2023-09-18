function createDog(breed, paws, color) {
    let dog = Object.create({});
    dog.breed = breed;
    dog.paws = paws;
    dog.color = color;
    return dog;
}

let doberman = createDog("Doberman", 4, "black");
console.log(dog.breed);
console.log(dog.paws);
console.log(dog.color);


function DogInterface(breed, paws, color) {
    this.breed = breed;
    this.paws = paws;
    this.color = color;

    this.bark = function() {
        return "Au au";
    }
}

let husky = new DogInterface("Husky", 4, "gray");
console.log(husky.breed);
console.log(husky.paws);
console.log(husky.color);
console.log(husky.bark());