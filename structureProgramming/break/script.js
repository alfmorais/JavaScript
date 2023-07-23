let firstName = "Alfredo";


for (let number = 0; number < 10; number = number + 1) {
    if (number == 3) {
        firstName = "Joaquim";
    }

    if (number == 5 && firstName == "Joaquim") {
        console.log("O nome é Joaquim, pode parar.");
        break;
    }

    console.log(number);
}