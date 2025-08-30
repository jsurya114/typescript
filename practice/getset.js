var Person = /** @class */ (function () {
    function Person(sname) {
        this.name = sname;
    }
    Object.defineProperty(Person.prototype, "sname", {
        get: function () {
            return this.name;
        },
        set: function (newName) {
            if (newName.length > 0) {
                this.name = newName;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var p = new Person('jay');
console.log(p.sname);
p.sname = 'Surya';
console.log(p.sname);
