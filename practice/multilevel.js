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
var Grand = /** @class */ (function () {
    function Grand() {
    }
    Grand.prototype.dad = function () {
        console.log('86 year');
    };
    return Grand;
}());
var Parent = /** @class */ (function (_super) {
    __extends(Parent, _super);
    function Parent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parent.prototype.dad = function () {
        console.log('55 year old');
    };
    Parent.prototype.son = function () {
        console.log('i have a son');
    };
    return Parent;
}(Grand));
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.son = function () {
        console.log('i am his son');
    };
    Child.prototype.duaghter = function () {
        console.log('i am her daughter');
    };
    return Child;
}(Parent));
var c = new Child();
c.dad();
c.duaghter();
c.son();
