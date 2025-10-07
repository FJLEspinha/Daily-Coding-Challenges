const tooMuchScreenTime = require('../../September-2025/12-september')

test('To much screen time in week? input h/day week: [1, 2, 3, 4, 5, 6, 7] result -> false', () => {
    expect(tooMuchScreenTime([1, 2, 3, 4, 5, 6, 7]))
        .toBe(false)
});

test('To much screen time in week? input h/day week: [7, 8, 8, 4, 2, 2, 3] result -> false', () => {
    expect(tooMuchScreenTime([7, 8, 8, 4, 2, 2, 3]))
        .toBe(false)
});

test('To much screen time in week? input h/day week: [5, 6, 6, 6, 6, 6, 6] result -> false', () => {
    expect(tooMuchScreenTime([5, 6, 6, 6, 6, 6, 6]))
        .toBe(false)
});

test('To much screen time in week? input h/day week: [1, 2, 3, 11, 1, 3, 4] result -> true', () => {
    expect(tooMuchScreenTime([1, 2, 3, 11, 1, 3, 4]))
        .toBe(true)
});

test('To much screen time in week? input h/day week: [1, 2, 3, 10, 2, 1, 0] result -> true', () => {
    expect(tooMuchScreenTime([1, 2, 3, 10, 2, 1, 0]))
        .toBe(true)
});

test('To much screen time in week? input h/day week: [3, 3, 5, 8, 8, 9, 4] result -> true', () => {
    expect(tooMuchScreenTime([3, 3, 5, 8, 8, 9, 4]))
        .toBe(true)
});

test('To much screen time in week? input h/day week: [3, 9, 4, 8, 5, 7, 6] result -> true', () => {
    expect(tooMuchScreenTime([3, 9, 4, 8, 5, 7, 6]))
        .toBe(true)
});