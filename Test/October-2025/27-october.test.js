const sequence = require('../../October-2025/27-october')

describe('Integer Sequence Challenge', () => {
    test('Given a positive integer: 5, return a string: "12345"', () => {
        expect(sequence(5))
            .toEqual('12345')
    });

    test('Given a positive integer: 10, return a string: "12345678910"', () => {
        expect(sequence(10))
            .toEqual('12345678910')
    });

    test('Given a positive integer: 1, return a string: "1"', () => {
        expect(sequence(1))
            .toEqual('1')
    });

    test('Given a positive integer: 27, return a string: "123456789101112131415161718192021222324252627"', () => {
        expect(sequence(27))
            .toEqual('123456789101112131415161718192021222324252627')
    });
});