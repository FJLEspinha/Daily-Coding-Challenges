const countRectangles = require('../../November-2025/16-november')

describe('Rectangle Count Challenge', () => {
    test('Given two positive integers: 1, 3, return how many rectangles can fit in: 6', () => {
        expect(countRectangles(1, 3))
            .toEqual(6)
    });

    test('Given two positive integers: 3, 2, return how many rectangles can fit in: 18', () => {
        expect(countRectangles(3, 2))
            .toEqual(18)
    });

    test('Given two positive integers: 1, 2, return how many rectangles can fit in: 3', () => {
        expect(countRectangles(1, 2))
            .toEqual(3)
    });

    test('Given two positive integers: 5, 4, return how many rectangles can fit in: 150', () => {
        expect(countRectangles(5, 4))
            .toEqual(150)
    });

    test('Given two positive integers: 11, 19, return how many rectangles can fit in: 12540', () => {
        expect(countRectangles(11, 19))
            .toEqual(12540)
    });
});