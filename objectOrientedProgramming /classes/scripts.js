let dogInterface = {
    breed: "Not Defined",
    paws: 4,
    bark: function() {
        return "Au au";
    }
}

let labrador = Object.create(dogInterface)
labrador.breed = "Labrador";

console.log(labrador.breed);
console.log(labrador.bark());


class DogInterfaceClass {
    constructor(breed, paws, color) {
        this.breed = breed;
        this.paws = paws;
        this.color = color;
    }

    bark() {
        return "Au au";
    }

    howl() {
        return "Auuuuuu";
    }
}
DogInterfaceClass.prototype.frog = true;

let blueHeller = new DogInterfaceClass("Blue Heller", 4, "gray and black");
console.log(blueHeller);