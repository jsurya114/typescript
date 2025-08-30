"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PetrolEngine = /** @class */ (function () {
    function PetrolEngine() {
    }
    PetrolEngine.prototype.start = function () {
        console.log('PetrolEngine');
    };
    return PetrolEngine;
}());
var ElectricEngine = /** @class */ (function () {
    function ElectricEngine() {
    }
    ElectricEngine.prototype.start = function () {
        console.log('ElectricEngine');
    };
    return ElectricEngine;
}());
var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.drive = function () {
        this.engine.start();
    };
    return Car;
}());
var p = new Car(new PetrolEngine());
p.drive();
var e = new Car(new ElectricEngine());
e.drive();
