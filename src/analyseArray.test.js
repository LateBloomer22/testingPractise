import { analyseArray } from "./analyseArray";

test('analyzeArray returns average', () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toMatchObject({ average: 4 });
});

test('analyseArray returns array', () => {
  expect(analyseArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});