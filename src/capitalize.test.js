import { capitalizeFunc } from "./capitalize.js";

const capitalize = capitalizeFunc;

test('Should be Capital', () => {
  expect(capitalize('capital')).toEqual('Capital');
});

test('Only takes string input', () => {
    expect(capitalize(20)).toEqual('String input only')
})

test('Lowercase the remaining sentence', () => {
    expect(capitalize("hello WORLD")).toEqual('Hello world')
})

