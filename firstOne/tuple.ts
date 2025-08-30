let person: [string, number, boolean];

person = ["John", 25, true];  // ✅ correct
//person = [25, "John", true];  // ❌ wrong (order matters)

let user: [string, number?];

user = ["Alice"];       // ✅ valid
user = ["Alice", 22];   // ✅ valid

let scores: [string, ...number[]];

scores = ["Math", 90, 85, 88];  // ✅ first string, then numbers

//different type
let person1: [string, number, boolean] = ["John", 25, true];

//Same type in all positions
let numbers: [number, number, number] = [10, 20, 30];


export {}