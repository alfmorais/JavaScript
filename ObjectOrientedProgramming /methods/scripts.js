const dog = {
    bark: function() {
        console.log("Au au");
    },
    growl: function() {
        console.log("Grrrrrr")
    },
}

dog.bark();
dog.growl();


const person = {
    name: "",
    setName: function(newName) {
        this.name = newName;
    },
    getName: function() {
        return this.name;
    }
}

person.setName("Alfredo");
console.log(person.getName());