const nthPrime = require('../../October-2025/30-october')

describe('Nth Prime Challenge', () => {
    test('Given a positive integer: 5, return the prime number on this position: 11', () => {
        expect(nthPrime(5))
            .toEqual(11)
    });

    test('Given a positive integer: 10, return the prime number on this position: 29', () => {
        expect(nthPrime(10))
            .toEqual(29)
    });

    test('Given a positive integer: 16, return the prime number on this position: 53', () => {
        expect(nthPrime(16))
            .toEqual(53)
    });

    test('Given a positive integer: 99, return the prime number on this position: 523', () => {
        expect(nthPrime(99))
            .toEqual(523)
    });

    test('Given a positive integer: 1000, return the prime number on this position: 7919', () => {
        expect(nthPrime(1000))
            .toEqual(7919)
    });
});