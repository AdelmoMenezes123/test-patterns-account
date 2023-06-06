"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(currencyAPI) {
        this.currencyAPI = currencyAPI;
        this.balance = 0;
    }
    credit(amount, currency) {
        if (currency) {
            amount = this.currencyAPI.convert(amount, currency);
        }
        this.balance += amount;
    }
    debit(amount) {
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
exports.default = Account;
