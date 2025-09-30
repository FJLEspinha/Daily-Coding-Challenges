const isPangram = require('../September-2025/03-september')

test('Given sentence = hello and letters = helo must return true ', () => {
    expect(isPangram("hello", "helo"))
        .toEqual(true)
});

test('Given sentence = hello and letters = hel must return false ', () => {
    expect(isPangram("hello", "hel"))
        .toEqual(false)
});

test('Given sentence = hello and letters = helow must return false ', () => {
    expect(isPangram("hello", "helow"))
        .toEqual(false)
});

test('Given sentence = hello world and letters = helowrd must return true ', () => {
    expect(isPangram("hello world", "helowrd"))
        .toEqual(true)
});

test('Given sentence = Hello World! and letters = helowrd must return true ', () => {
    expect(isPangram("Hello World!", "helowrd"))
        .toEqual(true)
});

test('Given sentence = Hello World! and letters = heliowrd must return false ', () => {
    expect(isPangram("Hello World!", "heliowrd"))
        .toEqual(false)
});

test('Given sentence = freeCodeCamp and letters = frcdmp must return false ', () => {
    expect(isPangram("freeCodeCamp", "frcdmp"))
        .toEqual(false)
});

test('Given sentence = The quick brown fox jumps over the lazy dog. and letters = abcdefghijklmnopqrstuvwxyz must return true ', () => {
    expect(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"))
        .toEqual(true)
});