const { isFizzBuzzImperative, isFizzBuzzEasyUnderstand } = require('../../November-2025/26-november')

describe('BuzzFizz Challenge with isFizzBuzzImperative ', () => {
    test('Given an array: [1, 2, "Fizz", 4], determine if it is a correct FizzBuzz sequence: true', () => {
        expect(isFizzBuzzImperative([1, 2, "Fizz", 4]))
            .toBe(true)
    });

    test('Given an array: [1, 2, 3, 4], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzImperative([1, 2, 3, 4]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", 7], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzImperative([1, 2, "Fizz", 4, "Buzz", 7]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzImperative([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzImperative([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzImperative([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"], determine if it is a correct FizzBuzz sequence: true', () => {
        expect(isFizzBuzzImperative([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]))
            .toBe(true)
    });
});

describe('BuzzFizz Challenge with isFizzBuzzEasyUnderstand ', () => {
    test('Given an array: [1, 2, "Fizz", 4], determine if it is a correct FizzBuzz sequence: true', () => {
        expect(isFizzBuzzEasyUnderstand([1, 2, "Fizz", 4]))
            .toBe(true)
    });

    test('Given an array: [1, 2, 3, 4], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzEasyUnderstand([1, 2, 3, 4]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", 7], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzEasyUnderstand([1, 2, "Fizz", 4, "Buzz", 7]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzEasyUnderstand([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "FizzBuzz"]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzEasyUnderstand([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Fizz"]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"], determine if it is a correct FizzBuzz sequence: false', () => {
        expect(isFizzBuzzEasyUnderstand([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, "Buzz"]))
            .toBe(false)
    });

    test('Given an array: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"], determine if it is a correct FizzBuzz sequence: true', () => {
        expect(isFizzBuzzEasyUnderstand([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"]))
            .toBe(true)
    });
});