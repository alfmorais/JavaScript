class Address {
    constructor(street, number, neighborhood, city, state){
        this.street = street;
        this.number = number;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
    }

    get fullAddress(){
        address = `${this.street}, ${this.number} - ${this.neighborhood}.`;
        complement = `${this.city} - ${this.state}`;
        return `${address} ${complement}`;
    }

    set setStreet(street) {
        this.street = street;
    }

    set setNumber(number) {
        this.number = number;
    }

    set setNeighborhood(neighborhood) {
        this.neighborhood = neighborhood;
    }

    set setCity(city) {
        this.city = city;
    }

    set setState(state) {
        this.state = state;
    }

}