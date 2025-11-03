const countWords = require('../../November-2025/03-november')

describe('Word Counter Challenge', () => {
    test('Given a sentence string: "Hello world", return the number of words: 2', () => {
        expect(countWords('Hello world'))
            .toStrictEqual(2)
    });

    test('Given a sentence string: "The quick brown fox jumps over the lazy dog.", return the number of words: 9', () => {
        expect(countWords('The quick brown fox jumps over the lazy dog.'))
            .toStrictEqual(9)
    });

    test('Given a sentence string: "I like coding challenges!", return the number of words: 4', () => {
        expect(countWords('I like coding challenges!'))
            .toStrictEqual(4)
    });

    test('Given a sentence string: "Complete the challenge in JavaScript and Python.", return the number of words: 7', () => {
        expect(countWords('Complete the challenge in JavaScript and Python.'))
            .toStrictEqual(7)
    });

    test('Given a sentence string: "The missing semi-colon crashed the entire internet.", return the number of words: 7', () => {
        expect(countWords('The missing semi-colon crashed the entire internet.'))
            .toStrictEqual(7)
    });

    test('Given a sentence string: "   I like    coding challenges ! it\'s great  !", return the number of words: 7', () => {
        expect(countWords('   I like    coding challenges ! it\'s great  !'))
            .toStrictEqual(6)
    });

    test('Given a sentence string: ". - -.", return the number of words: 0', () => {
        expect(countWords('. - -.'))
            .toStrictEqual(0)
    });
});