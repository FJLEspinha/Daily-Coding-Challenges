const allUnique = require('../September-2025/09-september')

test('All the characters in the "abc" are unique -> true', () => {
    expect(allUnique('abc'))
        .toBe(true)
});

test('All the characters in the "aA" are unique -> true', () => {
    expect(allUnique('aA'))
        .toBe(true)
});

test('All the characters in the "QwErTy123!@" are unique -> true', () => {
    expect(allUnique('QwErTy123!@'))
        .toBe(true)
});

test('All the characters in the "~!@#$%^&*()_+" are unique -> true', () => {
    expect(allUnique('~!@#$%^&*()_+'))
        .toBe(true)
});

test('All the characters in the "hello" are unique -> true', () => {
    expect(allUnique('hello'))
        .toBe(false)
});

test('All the characters in the "freeCodeCamp" are unique -> true', () => {
    expect(allUnique('freeCodeCamp'))
        .toBe(false)
});

test('All the characters in the "!@#*$%^&*()aA" are unique -> true', () => {
    expect(allUnique('!@#*$%^&*()aA'))
        .toBe(false)
});