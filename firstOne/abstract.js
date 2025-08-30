"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Payment = /** @class */ (function () {
    function Payment() {
    }
    return Payment;
}());
var creditCard = /** @class */ (function (_super) {
    __extends(creditCard, _super);
    function creditCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    creditCard.prototype.pay = function (amount) {
        console.log("Amount ".concat(amount, " is paid through credicard"));
    };
    return creditCard;
}(Payment));
var UpiPayment = /** @class */ (function (_super) {
    __extends(UpiPayment, _super);
    function UpiPayment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpiPayment.prototype.pay = function (amount) {
        console.log("Amount ".concat(amount, " is paid through upi payment"));
    };
    return UpiPayment;
}(Payment));
var payment;
payment = new creditCard;
payment.pay(1000);
payment = new UpiPayment;
payment.pay(2000);
