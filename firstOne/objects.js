"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Object declaration
var user = {
    name: 'Jayasurya',
    email: 'jayasura@gmail.com',
    isActive: false
};
// Function expecting an object as parameter
// We specify the type for the object
function createUser(user) {
    // function body (empty for now)
}
// Passing an object that matches the required type
createUser({ name: 'Jayasurya', isPaid: false });
// Function that returns an object with specific type
function createCourse() {
    return { name: 'MERN', price: 2000 };
}
