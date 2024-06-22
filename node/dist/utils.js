"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
exports.multiply = multiply;
exports.concatenate = concatenate;
exports.getPersonInfo = getPersonInfo;
exports.getProductInfo = getProductInfo;
function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function concatenate(a, b) {
    return `${a} ${b}`;
}
function getPersonInfo(person) {
    return `Name: ${person.name}, Age: ${person.age}`;
}
function getProductInfo(product) {
    return `Product: ${product.name}, Price: ${product.price}`;
}
