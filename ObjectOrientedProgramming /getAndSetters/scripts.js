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

    get getColor() {
        return this.color;
    }

    set setColor(color) {
        this.color = color;
    }
}

let pastor = new DogInterfaceClass("Pastor", "NotDefined");
pastor.setColor = "Marron";
console.log(pastor.getColor);