class BankAccount{
    constructor(balance) {
        this.balance = balance;
    }

    deposit(value) {
        newBalance = this.balance + value;
        this.balance = newBalance;
        return this.balance;
    }

    plunder(value) {
        newBalance = this.balance - value;

        if(newBalance <= 0){
            return "Saldo insuficiente para saques.";
        }

        this.balance = newBalance;
        return this.balance;
    }
}