"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Check(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else {
        return value + 2;
    }
}
console.log(Check("3"));
var str = 'hello';
var leng = str.length;
console.log(leng);
