const sum = function sum(a, b) {
    return a + b;
}

const arrowSum = (a, b) => {
    return a + b;
}

const arrowSumVersionTwo = (a, b) => a + b;

const arrowTest = () => console.log("Testou");

const arrowSayHello = (name) => {
    if (name) {
        return $`Hello {name}!`;
    } else {
        return "Hello!";
    }
}

const user = {
    name: "Alfredo",
    sayUserName() {
        var self = this

        setTimeout(function () {
            console.log(self);
            console.log("Username: " + self.name);
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log("Username: " + this.name);
        }, 700)
    },
}