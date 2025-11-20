const longestWord = require('../../November-2025/20-november')

describe('Longest Word Challenge', () => {
    test('Given a string: "The quick red fox", return the longest word: "quick"', () => {
        expect(longestWord('The quick red fox'))
            .toStrictEqual('quick')
    });
 
    test('Given a string: "Hello coding challenge.", return the longest word: "challenge"', () => {
        expect(longestWord('Hello coding challenge.'))
            .toStrictEqual('challenge')
    });
 
    test('Given a string: "Do Try This At Home.", return the longest word: "This"', () => {
        expect(longestWord('Do Try This At Home.'))
            .toStrictEqual('This')
    });
 
    test('Given a string: "This sentence... has commas, ellipses, and an exlamation point!", return the longest word: "exlamation"', () => {
        expect(longestWord('This sentence... has commas, ellipses, and an exlamation point!'))
            .toStrictEqual('exlamation')
    });
 
    test('Given a string: "A tie? No way!", return the longest word: "tie"', () => {
        expect(longestWord('A tie? No way!'))
            .toStrictEqual('tie')
    });
 
    test('Given a string: "Wouldn\'t you like to know.", return the longest word: "Wouldnt"', () => {
        expect(longestWord("Wouldn't you like to know."))
            .toStrictEqual('Wouldnt')
    });
 
    test('Given a string: "This is a $100% test", return the longest word: "This"', () => {
        expect(longestWord('This is a $100% test'))
            .toStrictEqual('This')
    });
 
    test('Given a string: "A sentence with a long-word@#", return the longest word: "sentence"', () => {
        expect(longestWord('A sentence with a long-word@#'))
            .toStrictEqual('sentence')
    });
});