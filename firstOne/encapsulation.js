"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bank = /** @class */ (function () {
    function Bank(amount) {
        this.balance = amount; //accessible here
    }
    Bank.prototype.getBalance = function () {
        return this.balance;
    };
    Bank.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    return Bank;
}());
var account = new Bank(1000);
console.log(account.getBalance);
account.deposit(500);
console.log(account.getBalance);
