const toDecimal = require('../../October-2025/01-october')

test('Given a string: "101" must return integer: 5', () => {
    expect(toDecimal("101"))
    .toEqual(5)
});

test('Given a string: "1010" must return integer: 10', () => {
    expect(toDecimal("1010"))
    .toEqual(10)
});

test('Given a string: "10010" must return integer: 18', () => {
    expect(toDecimal("10010"))
    .toEqual(18)
});

test('Given a string: "1010101" must return integer: 85', () => {
    expect(toDecimal("1010101"))
    .toEqual(85)
});