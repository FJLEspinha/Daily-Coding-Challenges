const tribonacciSequence = require('../September-2025/01-september')

test('Given array: [0, 0, 1] and length: 20 must return tribonacci [0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513]', () => {
    expect(tribonacciSequence([0, 0, 1], 20))
        .toStrictEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136, 5768, 10609, 19513])
});

test('Given array: [21, 32, 43] and length: 1 must return tribonacci [21]', () => {
    expect(tribonacciSequence([21, 32, 43], 1))
        .toStrictEqual([21])
});

test('Given array: [0, 0, 1] and length: 0 must return tribonacci []', () => {
    expect(tribonacciSequence([0, 0, 1], 0))
        .toStrictEqual([])
});

test('Given array: [10, 20, 30] and length: 2 must return tribonacci [10, 20]', () => {
    expect(tribonacciSequence([10, 20, 30], 2))
        .toStrictEqual([10, 20])
});

test('Given array: [10, 20, 30] and length: 3 must return tribonacci [10, 20, 30]', () => {
    expect(tribonacciSequence([10, 20, 30], 3))
        .toStrictEqual([10, 20, 30])
});

test('Given array: [123, 456, 789] and length: 8 must return tribonacci [123, 456, 789, 1368, 2613, 4770, 8751, 16134]', () => {
    expect(tribonacciSequence([123, 456, 789], 8))
        .toStrictEqual([123, 456, 789, 1368, 2613, 4770, 8751, 16134])
});