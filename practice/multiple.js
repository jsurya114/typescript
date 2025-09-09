var Citizen = /** @class */ (function () {
    function Citizen(sname, iamount) {
        this.name = sname;
        this.amount = iamount;
    }
    Citizen.prototype.acc_type = function () {
        console.log("savings account of ".concat(this.name));
    };
    Citizen.prototype.balance = function () {
        console.log("balance of ".concat(this.name, "'s account is ").concat(this.amount, "rs"));
    };
    return Citizen;
}());
var person = new Citizen('Jayasurya', 5000);
person.acc_type();
person.balance();
