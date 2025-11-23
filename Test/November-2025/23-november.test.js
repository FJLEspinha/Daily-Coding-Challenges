const countCharacters = require('../../November-2025/23-november')

describe('Character Count Challenge', () => {
    test('Given a sentence string: "hello world", return an array with a count of each character in alphabetical order', () => {
        expect(countCharacters('hello world'))
            .toEqual(["d 1", "e 1", "h 1", "l 3", "o 2", "r 1", "w 1"])
    });

    test('Given a sentence string: "I love coding challenges!", return an array with a count of each character in alphabetical order', () => {
        expect(countCharacters('I love coding challenges!'))
            .toEqual(["a 1", "c 2", "d 1", "e 3", "g 2", "h 1", "i 2", "l 3", "n 2", "o 2", "s 1", "v 1"])
    });

    test('Given a sentence string: "// TODO: Complete this challenge ASAP!", return an array with a count of each character in alphabetical order', () => {
        expect(countCharacters('// TODO: Complete this challenge ASAP!'))
            .toEqual(["a 3", "c 2", "d 1", "e 4", "g 1", "h 2", "i 1", "l 3", "m 1", "n 1", "o 3", "p 2", "s 2", "t 3"])
    });

    test('Given a sentence string: "", return an array with a count of each character in alphabetical order', () => {
        expect(countCharacters(''))
            .toEqual([])
    });

    test('Given a sentence string: "//??!!!!   ", return an array with a count of each character in alphabetical order', () => {
        expect(countCharacters('//??!!!!   '))
            .toEqual([])
    });

    test('Given a sentence string: "//??!!!!   z", return an array with a count of each character in alphabetical order', () => {
        expect(countCharacters('//??!!!!   z'))
            .toEqual(['z 1'])
    });
});