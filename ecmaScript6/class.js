class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDicount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

const shirt = new Product("camisa", 10.99)
console.log(shirt.productWithDicount(35));