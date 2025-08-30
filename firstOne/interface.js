"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create an object that follows the interface
var user = {
    name: 'Jayasurya',
    age: 23
};
function newCar(car) {
    console.log("car:".concat(car.name, ",").concat(car.brand, ",").concat(car.model));
}
var info = {
    name: 'Mustang',
    brand: 'Ford',
    model: 1969
};
newCar(info);
