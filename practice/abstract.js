"use strict";
// abstract class Vehicle{
//     abstract drive(): void
// }
// class Car extends Vehicle{
//     drive(): void {
//         console.log("🚗 Car is driving on the road...")
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
var creditcard = /** @class */ (function () {
    function creditcard() {
    }
    creditcard.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using Credit Card"));
    };
    return creditcard;
}());
var Upi = /** @class */ (function () {
    function Upi() {
    }
    Upi.prototype.pay = function (amount) {
        console.log("Paid \u20B9".concat(amount, " using upi"));
    };
    return Upi;
}());
var pays;
pays = new creditcard();
pays.pay(500);
pays = new Upi();
pays.pay(500);
