
export function add(a: number, b: number): number {
    return a + b;
  }
  
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  export function concatenate(a: string, b: string): string {
    return `${a} ${b}`;
  }
  
  interface Person {
    name: string;
    age: number;
  }
  
  export function getPersonInfo(person: Person): string {
    return `Name: ${person.name}, Age: ${person.age}`;
  }
  
  interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  export function getProductInfo(product: Product): string {
    return `Product: ${product.name}, Price: ${product.price}`;
  }
  