const products = [
    { name: "camisa", price: 10.99, category: "roupas" },
    { name: "chaleira elétrica", price: 199.99, category: "eletro" },
    { name: "fogão", price: 985.99, category: "eletro" },
    { name: "calça", price: 89.99, category: "roupas" },
]

products.map((product) => {
    if (product.category === "roupas") {
        product.onSale = true;
    }
})
console.log(products)