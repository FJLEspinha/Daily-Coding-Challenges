const parseRomanNumeral = require('../../September-2025/07-september')

test('The roman number III must be 3', () => {
    expect(parseRomanNumeral('III'))
        .toEqual(3)
});

test('The roman number IV must be 4', () => {
    expect(parseRomanNumeral('IV'))
        .toEqual(4)
});

test('The roman number XXVI must be 26', () => {
    expect(parseRomanNumeral('XXVI'))
        .toEqual(26)
});

test('The roman number XCIX must be 99', () => {
    expect(parseRomanNumeral('XCIX'))
        .toEqual(99)
});

test('The roman number CDLX must be 460', () => {
    expect(parseRomanNumeral('CDLX'))
        .toEqual(460)
});

test('The roman number DIV must be 508', () => {
    expect(parseRomanNumeral('DIV'))
        .toEqual(504)
});

test('The roman number MMXXV must be 2025', () => {
    expect(parseRomanNumeral('MMXXV'))
        .toEqual(2025)
});