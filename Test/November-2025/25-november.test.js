const fizzBuzz = require('../../November-2025/25-november')

describe('FizzBuzz Challenge', () => {
    test('Given an integer: 2, return an array of integers (1-n) with Fizz, Buzz or FizzBuzz', () => {
        expect(fizzBuzz(2))
            .toEqual([1, 2])
    });

    test('Given an integer: 4, return an array of integers (1-n) with Fizz, Buzz or FizzBuzz', () => {
        expect(fizzBuzz(4))
            .toEqual([1, 2, "Fizz", 4])
    });

    test('Given an integer: 8, return an array of integers (1-n) with Fizz, Buzz or FizzBuzz', () => {
        expect(fizzBuzz(8))
            .toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8])
    });

    test('Given an integer: 20, return an array of integers (1-n) with Fizz, Buzz or FizzBuzz', () => {
        expect(fizzBuzz(20))
            .toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz"])
    });

    test('Given an integer: 50, return an array of integers (1-n) with Fizz, Buzz or FizzBuzz', () => {
        expect(fizzBuzz(50))
            .toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz"])
    });

    test('Given an integer: -7, return an array of integers (1-n) with Fizz, Buzz or FizzBuzz', () => {
        expect(fizzBuzz(-7))
            .toEqual([])
    });

    test('Given an integer: 0, return an array of integers (1-n) with Fizz, Buzz or FizzBuzz', () => {
        expect(fizzBuzz(0))
            .toEqual([])
    });
});