"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person;
person = ["John", 25, true]; // ✅ correct
//person = [25, "John", true];  // ❌ wrong (order matters)
var user;
user = ["Alice"]; // ✅ valid
user = ["Alice", 22]; // ✅ valid
var scores;
scores = ["Math", 90, 85, 88]; // ✅ first string, then numbers
