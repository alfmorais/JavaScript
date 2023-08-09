/*
Pensar melhor como podemos fazer essa aplicação. 
Date: 08/08/2023
*/

class Product {
    constructor(name, quantity, unitValue) {
        this.name = name;
        this.quantity = quantity;
        this.unitValue = unitValue;
    }

    get totalValue() {
        return this.quantity * this.unitValue;
    }
}


class EcommerceCart {
    constructor() {
        this.items = []
    }

    addItemInsideCart(product) {
        this.items.push(product);
        return this.items
    }

    removeItemInsideCart(product) {
        let index = 0;

        this.items.forEach(unitProduct => {
            if (unitProduct.name === product.name) {
                this.items.splice(index, 1);
            }

            index++;
        })
    }
}