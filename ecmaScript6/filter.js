const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const highNumbers = arr.filter((number) => {
    if (number >= 3) {
        return number;
    }
})
console.log(highNumbers);

const users = [
    { name: "Alfredo", available: true },
    { name: "Joaquim", available: true },
    { name: "Denise", available: true },
    { name: "José", available: false },
]

const availableUsers = users.filter((user) => { user.available })
const notAvailableUsers = users.filter((user) => { !user.available })