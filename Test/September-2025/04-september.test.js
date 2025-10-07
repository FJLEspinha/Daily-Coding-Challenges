const repeatVowels = require('../../September-2025/04-september')

test('Repeat the vowels of: hello world must be helloo wooorld', () => {
    expect(repeatVowels('hello world'))
        .toBe('helloo wooorld')
});

test('Repeat the vowels of: freeCodeCamp must be freeeCooodeeeeCaaaaamp', () => {
    expect(repeatVowels('freeCodeCamp'))
        .toBe('freeeCooodeeeeCaaaaamp')
});

test('Repeat the vowels of: AEIOU must be AEeIiiOoooUuuuu', () => {
    expect(repeatVowels('AEIOU'))
        .toBe('AEeIiiOoooUuuuu')
});

test('Repeat the vowels of: I like eating ice cream in Iceland must be I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand', () => {
    expect(repeatVowels('I like eating ice cream in Iceland'))
        .toBe('I liikeee eeeeaaaaatiiiiiing iiiiiiiceeeeeeee creeeeeeeeeaaaaaaaaaam iiiiiiiiiiin Iiiiiiiiiiiiceeeeeeeeeeeeelaaaaaaaaaaaaaand')
});