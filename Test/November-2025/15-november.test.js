const { gcd, gcdEuclidean } = require('../../November-2025/15-november')

describe('GCD Challenge without Eclides', () => {
    test('Given two positive integers: 4, 6, return GCD: 2', () => {
        expect(gcd(4, 6))
            .toEqual(2)
    });

    test('Given two positive integers: 20, 15, return GCD: 5', () => {
        expect(gcd(20, 15))
            .toEqual(5)
    });

    test('Given two positive integers: 13, 17, return GCD: 1', () => {
        expect(gcd(13, 17))
            .toEqual(1)
    });

    test('Given two positive integers: 654, 456, return GCD: 6', () => {
        expect(gcd(654, 456))
            .toEqual(6)
    });

    test('Given two positive integers: 3456, 4320, return GCD: 864', () => {
        expect(gcd(3456, 4320))
            .toEqual(864)
    });
});

describe('GCD Challenge Eclidean method', () => {
    test('Given two positive integers: 4, 6, return GCD: 2', () => {
        expect(gcdEuclidean(4, 6))
            .toEqual(2)
    });

    test('Given two positive integers: 20, 15, return GCD: 5', () => {
        expect(gcdEuclidean(20, 15))
            .toEqual(5)
    });

    test('Given two positive integers: 13, 17, return GCD: 1', () => {
        expect(gcdEuclidean(13, 17))
            .toEqual(1)
    });

    test('Given two positive integers: 654, 456, return GCD: 6', () => {
        expect(gcdEuclidean(654, 456))
            .toEqual(6)
    });

    test('Given two positive integers: 3456, 4320, return GCD: 864', () => {
        expect(gcdEuclidean(3456, 4320))
            .toEqual(864)
    });
});