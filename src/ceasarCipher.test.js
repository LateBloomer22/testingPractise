import { ceasarCipher } from "./ceasarCipher";

test('Base case', () => {
    expect(ceasarCipher("Hello", 1)).toEqual("Ifmmp");
});

test('Preserve Lettercase', () => {
    expect(ceasarCipher('HeLLo', 3)).toEqual("KhOOr")
});

test('Preserve punctuation', () => {
    expect(ceasarCipher('Hello, World!', 3)).toEqual("Khoor, Zruog!")
});