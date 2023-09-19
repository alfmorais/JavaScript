const fruits = ["maça", "laranja", "mamão"];
const [f1, f2, f3] = fruits;

console.log(f1, f2, f3);

const productDetails = {
    name: "mouse",
    price: 39.99,
    category: "periféricos",
    color: "cinza",
}
const {name: productName, price, category: productCategory, color} = productDetails;
console.log(productName, price, productCategory, color);