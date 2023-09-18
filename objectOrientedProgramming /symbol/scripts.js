class DogInterfaceClass {
    constructor(breed, color) {
        this.breed = breed;
        this.color = color;
    }

    bark() {
        return "Au au";
    }

    howl() {
        return "Auuuuuu";
    }
}
let paws = Symbol()
DogInterfaceClass.prototype[paws] = 4;

let blueHeller = new DogInterfaceClass("Blue Heller", "gray and black");
console.log(blueHeller);
console.log(blueHeller[paws]);