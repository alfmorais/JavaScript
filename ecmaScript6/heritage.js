class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDicount(discount) {
        return this.price * ((100 - discount) / 100);
    }
}

class ProductWithAttibutes extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
}