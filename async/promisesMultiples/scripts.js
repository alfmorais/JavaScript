const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve(100);
    }, 2500);
})
const promiseTwo = Promise.resolve(5);
const promiseThree = new Promise(function(resolve, reject) {
    resolve(10);
})

Promise.all([promiseOne, promiseTwo, promiseThree]).then((values) => console.log(values));