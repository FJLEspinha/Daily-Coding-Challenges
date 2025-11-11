const count = require('../../November-2025/11-november')

describe('Vowels and Consonants Challenge', () => {
    test('Given a string: "Hello World",return an array with the number of vowels and number of consonants: [3, 7]', () => {
        expect(count('Hello World'))
            .toEqual([3, 7])
    });

    test('Given a string: "JavaScript",return an array with the number of vowels and number of consonants: [3, 7]', () => {
        expect(count('JavaScript'))
            .toEqual([3, 7])
    });

    test('Given a string: "Python",return an array with the number of vowels and number of consonants: [1, 5]', () => {
        expect(count('Python'))
            .toEqual([1, 5])
    });

    test('Given a string: "freeCodeCamp",return an array with the number of vowels and number of consonants: [5, 7]', () => {
        expect(count('freeCodeCamp'))
            .toEqual([5, 7])
    });

    test('Given a string: "Hello, World",return an array with the number of vowels and number of consonants: [3, 7]', () => {
        expect(count('Hello, World'))
            .toEqual([3, 7])
    });

    test('Given a string: "The quick brown fox jumps over the lazy dog.",return an array with the number of vowels and number of consonants: [11, 24]', () => {
        expect(count('The quick brown fox jumps over the lazy dog.'))
            .toEqual([11, 24])
    });

    test('Given a string: "123, 456!",return an array with the number of vowels and number of consonants: [0, 0]', () => {
        expect(count('123, 456!'))
            .toEqual([0, 0])
    });
});