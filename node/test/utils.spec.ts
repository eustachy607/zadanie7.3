import { expect } from 'chai';
import { add, multiply, concatenate, getPersonInfo, getProductInfo } from '../src/utils';

describe('Utility Functions', () => {
  it('powinno dodac 2 liczby', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('powinno pomnozyc 2 liczby', () => {
    expect(multiply(2, 3)).to.equal(6);
  });

  it('powinno polaczyc stringi ', () => {
    expect(concatenate('Hello', 'World')).to.equal('Hello World');
  });

  it('powinno zwrocic obiekt jako string', () => {
    const person = { name: 'John', age: 30 };
    expect(getPersonInfo(person)).to.equal('Name: John, Age: 30');
  });

  it('powinno zwrocic obiekt jako string', () => {
    const product = { id: 1, name: 'Laptop', price: 999.99 };
    expect(getProductInfo(product)).to.equal('Product: Laptop, Price: 999.99');
  });

  it('powinno laczyc puste stringi', () => {
    expect(concatenate('', '')).to.equal(' ');
  });

  it('powinno mnozyc ujemne liczby', () => {
    expect(multiply(-2, 3)).to.equal(-6);
  });

  it('powinien dodatkowo obslugiwac 0', () => {
    expect(add(0, 5)).to.equal(5);
  });
});
