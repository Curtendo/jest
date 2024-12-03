import { capitalize, reverse, Calculator, caesarCipher, analyzeArray } from './index';

// Capitalize
test('capitalize first letter of string', () => {
  expect(capitalize('curtis')).toBe('Curtis');
});

// Reverse String
test('reverse a string', () => {
  expect(reverse('Hello, world')).toBe('dlrow ,olleH');
});

// Calculator
test('calculator', () => {
  const calculator = Calculator();
  expect(calculator.add(6, 3)).toBe(9);
  expect(calculator.subtract(6, 3)).toBe(3);
  expect(calculator.multiply(6, 3)).toBe(18);
  expect(calculator.divide(6, 3)).toBe(2);
});

// caesarCipher
test('caesarCipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

// Analyze array
test('analyze array', () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
