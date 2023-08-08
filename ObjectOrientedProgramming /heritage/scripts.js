class Mammal {
    constructor(paws) {
        this.paws = paws;
    }
}


class DogInterfaceClass extends Mammal {
    constructor(paws, breed, color) {
        super(paws, paws);
        this.breed = breed;
        this.color = color;
    }

    bark() {
        return "Au au";
    }

    howl() {
        return "Auuuuuu";
    }

    get getColor() {
        return this.color;
    }

    set setColor(color) {
        this.color = color;
    }
}

console.log(new DogInterfaceClass instanceof Mammal);