var BankAccount = /** @class */ (function () {
    function BankAccount(amount) {
        this.balance = amount;
    }
    BankAccount.prototype.getbalance = function () {
        return this.balance;
    };
    BankAccount.prototype.deposit = function (amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(" balance:".concat(this.balance));
        }
        else {
            console.log('balance cannot minus');
        }
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log("balance:".concat(this.balance));
        }
        else {
            console.log('balance cannot minus');
        }
    };
    return BankAccount;
}());
var account = new BankAccount(1000);
console.log(account.getbalance());
account.deposit(100);
console.log(account.getbalance());
account.withdraw(50);
console.log(account.getbalance());
