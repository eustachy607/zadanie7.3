import { add, multiply, concatenate, getPersonInfo, getProductInfo } from './utils';

console.log(add(2, 3));
console.log(multiply(2, 3));
console.log(concatenate('Hello', 'World'));

const person = { name: 'John', age: 30 };
console.log(getPersonInfo(person));

const product = { id: 1, name: 'Laptop', price: 999.99 };
console.log(getProductInfo(product));
