const findMissingNumbers = require('../September-2025/13-september')

test('Missing numbes of: [1, 3, 5] are [2, 4]', () => {
    expect(findMissingNumbers([1, 3, 5]))
        .toEqual([2, 4])
});

test('Missing number of: [1, 2, 3, 4, 5] are []', () => {
    expect(findMissingNumbers([1, 2, 3, 4, 5]))
        .toEqual([])
});

test('Missing number of: [1, 10] are  [2, 3, 4, 5, 6, 7, 8, 9]', () => {
    expect(findMissingNumbers([1, 10]))
        .toEqual([2, 3, 4, 5, 6, 7, 8, 9])
});

test('Missing number of: [10, 1, 10, 1, 10, 1] are [2, 3, 4, 5, 6, 7, 8, 9]', () => {
    expect(findMissingNumbers([10, 1, 10, 1, 10, 1]))
        .toEqual([2, 3, 4, 5, 6, 7, 8, 9])
});

test('Missing number of: [3, 1, 4, 1, 5, 9] are [2, 6, 7, 8]', () => {
    expect(findMissingNumbers([3, 1, 4, 1, 5, 9]))
        .toEqual([2, 6, 7, 8])
});

test('Missing number of: [1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4] are  [11]', () => {
    expect(findMissingNumbers([1, 2, 3, 4, 5, 7, 8, 9, 10, 12, 6, 8, 9, 3, 2, 10, 7, 4]))
        .toEqual( [11])
});

