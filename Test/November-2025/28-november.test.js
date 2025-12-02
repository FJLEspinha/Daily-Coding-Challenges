const compare = require('../../November-2025/28-november')

describe('Word Guesser Challenge', () => {
    test('Given two strings: "APPLE", "POPPA",compare and return: "10201"', () => {
        expect(compare('APPLE', 'POPPA'))
            .toStrictEqual('10201')
    });

    test('Given two strings: "REACT", "TRACE",compare and return: "11221"', () => {
        expect(compare('REACT', 'TRACE'))
            .toStrictEqual('11221')
    });

    test('Given two strings: "DEBUGS", "PYTHON",compare and return: "000000"', () => {
        expect(compare('DEBUGS', 'PYTHON'))
            .toStrictEqual('000000')
    });

    test('Given two strings: "JAVASCRIPT", "TYPESCRIPT",compare and return: "0000222222"', () => {
        expect(compare('JAVASCRIPT', 'TYPESCRIPT'))
            .toStrictEqual('0000222222')
    });

    test('Given two strings: "ORANGE", "ROUNDS",compare and return: "110200"', () => {
        expect(compare('ORANGE', 'ROUNDS'))
            .toStrictEqual('110200')
    });

    test('Given two strings: "WIRELESS", "ETHERNET",compare and return: "10021000"', () => {
        expect(compare('WIRELESS', 'ETHERNET'))
            .toStrictEqual('10021000')
    });

    test('Given two strings: "APPLEE", "POPPA",compare and return: "Two words have not the same length"', () => {
        expect(compare('APPLEE', 'POPPA'))
            .toStrictEqual('Two words have not the same length')
    });
});