import { reverseStringFunc } from "./reverseString";

const reverseString = reverseStringFunc;

test('Should return reverse', () => {
    expect(reverseString('Hello')).toEqual('olleH');
});

test('Does not take non-string input', () => {
    expect(reverseString(undefined)).toEqual('String input only')
});

test('Empty string', () => {
    expect(reverseString("")).toEqual("");
})

test('Works with numbers input as string', () => {
    expect(reverseString("h3ll0")).toEqual('0ll3h');
})