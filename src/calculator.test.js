import { calculator } from "./calculator";

test('Addition', () => {
    expect(calculator.add(3,4)).toEqual(7);
});

test('Subtraction', () => {
    expect(calculator.subtract(3,4)).toEqual(-1);
});

test('multiply', () => {
    expect(calculator.multiply(3,4)).toEqual(12);
});

test('Division', () => {
    expect(calculator.divide(8,4)).toEqual(2);
});

test('Division by zero', () => {
    expect(calculator.divide(8,0)).toEqual("Division by 0 not allowed");
});