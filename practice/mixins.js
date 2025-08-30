"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Walk = /** @class */ (function () {
    function Walk() {
    }
    Walk.prototype.canWalk = function () {
        console.log('i can eat');
    };
    return Walk;
}());
var Eat = /** @class */ (function () {
    function Eat() {
    }
    Eat.prototype.canEat = function () {
        console.log('i can walk');
    };
    return Eat;
}());
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
Object.assign(Person.prototype, Walk.prototype, Eat.prototype);
var person = new Person();
person.canEat();
person.canWalk();
