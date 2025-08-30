var Person = /** @class */ (function () {
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    Person.prototype.getDetail = function () {
        console.log("my name is ".concat(this.name, " and email id is ").concat(this.email));
    };
    return Person;
}());
var p1 = new Person('Jayasurya', 'jay@gmail.com');
p1.getDetail();
