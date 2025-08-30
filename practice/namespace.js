var Animal;
(function (Animal) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.bark = function () {
            console.log('dogs');
        };
        return Dog;
    }());
    Animal.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat() {
        }
        Cat.prototype.sound = function () {
            console.log('cat');
        };
        return Cat;
    }());
    Animal.Cat = Cat;
})(Animal || (Animal = {}));
var Pets;
(function (Pets) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        Dog.prototype.bark = function () {
            console.log('puppies');
        };
        return Dog;
    }());
    Pets.Dog = Dog;
    var Cat = /** @class */ (function () {
        function Cat() {
        }
        Cat.prototype.sound = function () {
            console.log('kittens');
        };
        return Cat;
    }());
    Pets.Cat = Cat;
})(Pets || (Pets = {}));
var d1 = new Animal.Dog();
d1.bark();
var d2 = new Animal.Cat();
d2.sound();
var p1 = new Pets.Dog();
p1.bark();
var p2 = new Pets.Cat();
p2.sound();
