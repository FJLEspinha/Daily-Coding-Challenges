const combinations = require('../../November-2025/07-november')

describe('Counting Cards Challenge', () => {
    test('Given an integer, number of cards to pick: 52, return the number of unique combinations: 1', () => {
        expect(combinations(52))
            .toStrictEqual(1)
    });

    test('Given an integer, number of cards to pick: 1, return the number of unique combinations: 52', () => {
        expect(combinations(1))
            .toStrictEqual(52)
    });

    test('Given an integer, number of cards to pick: 2, return the number of unique combinations: 1326', () => {
        expect(combinations(2))
            .toStrictEqual(1326)
    });

    test('Given an integer, number of cards to pick: 5, return the number of unique combinations: 2598960', () => {
        expect(combinations(5))
            .toStrictEqual(2598960)
    });

    test('Given an integer, number of cards to pick: 10, return the number of unique combinations: 15820024220', () => {
        expect(combinations(10))
            .toStrictEqual(15820024220)
    });

    test('Given an integer, number of cards to pick: 50, return the number of unique combinations: 1326', () => {
        expect(combinations(50))
            .toStrictEqual(1326)
    });
});