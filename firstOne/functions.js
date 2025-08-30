"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Function without explicit return type -> TypeScript infers as string
function numbers(num) {
    return 'hello';
}
// Function with string input and string output
function values(str) {
    return str.toUpperCase();
}
numbers(2);
values('hi this is jayasurya');
// Function with 3 parameters
function Users(name, email, isPaid) {
}
Users('Jayasurya', 'jayasurya@gmail.com', false);
// Arrow function with default parameter
var newUsers = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
newUsers('Suryadas', 'suryadas@gmail.com');
// Arrays with inferred types
var developers = ['manoj', 'jayasurya', 'akash']; // string[]
var count = [1, 2, 3]; // number[]
// Correct usage of forEach (for side effects, not return)
developers.forEach(function (them) {
    console.log("developer is ".concat(them));
});
count.forEach(function (counts) {
    console.log(counts);
});
