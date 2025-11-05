const buildMatrix = require('../../November-2025/05-november')

describe('Matrix Builder Challenge', () => {
    test('Given two integers (rows, columns): 2, 3,return a matrix: [[0, 0, 0], [0, 0, 0]]', () => {
        expect(buildMatrix(2, 3))
            .toStrictEqual([[0, 0, 0], [0, 0, 0]])
    });

    test('Given two integers (rows, columns): 3, 2,return a matrix: [[0, 0], [0, 0], [0, 0]]', () => {
        expect(buildMatrix(3, 2))
            .toStrictEqual([[0, 0], [0, 0], [0, 0]])
    });

    test('Given two integers (rows, columns): 4, 3,return a matrix: [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]', () => {
        expect(buildMatrix(4, 3))
            .toStrictEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]])
    });

    test('Given two integers (rows, columns): 9, 1,return a matrix: [[0], [0], [0], [0], [0], [0], [0], [0], [0]]', () => {
        expect(buildMatrix(9, 1))
            .toStrictEqual([[0], [0], [0], [0], [0], [0], [0], [0], [0]])
    });

    test('Given two integers (rows, columns): undefined, 3,return a matrix: "Parameters must be positive numbers"', () => {
        expect(buildMatrix(undefined, 3))
            .toStrictEqual('Parameters must be positive numbers')
    });

    test('Given two integers (rows, columns): 2, null,return a matrix: "Parameters must be positive numbers"', () => {
        expect(buildMatrix(2, null))
            .toStrictEqual('Parameters must be positive numbers')
    });

    test('Given two integers (rows, columns): -2, 3,return a matrix: "Parameters must be positive numbers"', () => {
        expect(buildMatrix(-2, 3))
            .toStrictEqual('Parameters must be positive numbers')
    });
});