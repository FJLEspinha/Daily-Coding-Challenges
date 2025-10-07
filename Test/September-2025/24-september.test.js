const isPerfectSquare = require('../../September-2025/24-september')

test('Given a number: 9, is a perfect square? must return true', () => {
    expect(isPerfectSquare(9))
        .toEqual(true)
});

test('Given a number: 49, is a perfect square? must return true', () => {
    expect(isPerfectSquare(49))
        .toEqual(true)
});

test('Given a number: 1, is a perfect square? must return true', () => {
    expect(isPerfectSquare(1))
        .toEqual(true)
});

test('Given a number: 2, is a perfect square? must return false', () => {
    expect(isPerfectSquare(2))
        .toEqual(false)
});

test('Given a number: 99, is a perfect square? must return false', () => {
    expect(isPerfectSquare(99))
        .toEqual(false)
});

test('Given a number: -9, is a perfect square? must return false', () => {
    expect(isPerfectSquare(-9))
        .toEqual(false)
});

test('Given a number: 0, is a perfect square? must return true', () => {
    expect(isPerfectSquare(0))
        .toEqual(true)
});

test('Given a number: 25281, is a perfect square? must return true', () => {
    expect(isPerfectSquare(25281))
        .toEqual(true)
});