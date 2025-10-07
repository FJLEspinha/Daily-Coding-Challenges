const toBinary = require('../../October-2025/02-october')

test('Given a non-negative integer: 5 return its binary as a string, must be: "101"', () => {
    expect(toBinary(5))
    .toEqual("101")
});

test('Given a non-negative integer: 12 return its binary as a string, must be: "1100"', () => {
    expect(toBinary(12))
    .toEqual("1100")
});

test('Given a non-negative integer: 50 return its binary as a string, must be: "110010"', () => {
    expect(toBinary(50))
    .toEqual("110010")
});

test('Given a non-negative integer: 99 return its binary as a string, must be: "1100011"', () => {
    expect(toBinary(99))
    .toEqual("1100011")
});