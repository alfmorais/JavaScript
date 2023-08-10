class AccountBank {
    constructor(balanceCheckingAccount, balanceSavingsAccount, feesSavingsAccount) {
        this.balanceCheckingAccount = balanceCheckingAccount;
        this.balanceSavingsAccount = balanceSavingsAccount;
        this.feesSavingsAccount = feesSavingsAccount;
    }

    depositCheckingAccount(amount) {
        this.balanceCheckingAccount += amount;
    }

    depositSavingsAccount(amount) {
        this.balanceSavingsAccount += amount;
    }

    withdrawCheckingAccount(amount) {
        balance = this.balanceCheckingAccount - amount;

        if(balance < 0) {
            return "Saldo Insuficiente.";
        }

        this.balanceCheckingAccount -= amount;
        return "Transferência feito com sucesso.";
    }

    withdrawSavingsAccount(amount) {
        balance = this.balanceSavingsAccount - amount;

        if(balance < 0) {
            return "Saldo Insuficiente.";
        }

        this.balanceSavingsAccount -= amount;
        return "Transferência feito com sucesso.";
    }

    transferFromSavingsToCheckingAccount(amount) {
        balance = this.balanceSavingsAccount - amount;

        if(balance < 0) {
            return "Saldo Insuficiente para transferência.";
        }

        this.balanceSavingsAccount -= amount;
        this.balanceCheckingAccount += amount;
    }

    compoundFeesForSavingsAccount(months) {
        compoundFees = this.balanceSavingsAccount * (1 + this.feesSavingsAccount) ** months
    }
}


class SpecialAccountBank extends AccountBank {
    constructor(balanceCheckingAccount, balanceSavingsAccount, feesSavingsAccount){
        super(balanceCheckingAccount, balanceSavingsAccount, feesSavingsAccount * 2);
    }
}