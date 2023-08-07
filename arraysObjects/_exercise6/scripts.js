const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ["Alfredo", "Denise"];


function checkQuantityOfElementsInArray(array) {
    if (array.length > 5) {
        console.log("Muitos elementos");
    } else {
        console.log("Poucos elementos");
    }
}

checkQuantityOfElementsInArray(numbers);
checkQuantityOfElementsInArray(names);
