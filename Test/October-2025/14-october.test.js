const count = require('../../October-2025/14-october')

describe('String Count Challenge', () => {
    test('Given two strings: "abcdefg", "def" must return times appears: 1', () => {
        expect(count('abcdefg', 'def'))
            .toEqual(1)
    });

    test('Given two strings: "hello", "world"  must return times appears: 0', () => {
        expect(count('hello', 'world'))
            .toEqual(0)
    });

    test('Given two strings: "mississippi", "iss"  must return times appears: 2', () => {
        expect(count('mississippi', 'iss'))
            .toEqual(2)
    });

    test('Given two strings: "she sells seashells by the seashore", "sh"  must return times appears: 3', () => {
        expect(count('she sells seashells by the seashore', 'sh'))
            .toEqual(3)
    });

    test('Given two strings: "101010101010101010101", "101"  must return times appears: 10', () => {
        expect(count('101010101010101010101', '101'))
            .toEqual(10)
    });
});