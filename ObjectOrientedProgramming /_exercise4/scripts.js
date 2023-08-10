class CarInterface {
    constructor(brand, color, fuelTank) {
        this.brand = brand;
        this.color = color;
        this.fuelTank = color;
    }

    set toFuelTank(value) {
        let difference;
        let quantityOfFuel;

        fuelTank = this.fuelTank + value;

        if (fuelTank > 100) {
            difference = fuelTank - 100
            quantityOfFuel = value - difference;
            this.fuelTank = this.fuelTank + quantityOfFuel;

            return `Você abasteceu ${quantityOfFuel} litros de gasolina.`
        }

        this.fuelTank = this.fuelTank + value;

        return `Você abasteceu ${value} litros de gasolina.`
    }

    drive(distance) {
        const fuelConsumption = 0.83;
        const totalFuelConsumption = fuelConsumption * distance;

        for (let route = distance; route <= 0; route = route - 1) {
            this.fuelTank = this.fuelTank - fuelConsumption;
        }

        return `Você andou ${distance} km e gastou ${totalFuelConsumption} de gasolina.`
    }
}