const secondLargest = require('../September-2025/25-september')

test('Given an array: [1, 2, 3, 4] , must return the second largest distinct number: 3', () => {
    expect(secondLargest([1, 2, 3, 4]))
        .toEqual(3)
});

test('Given an array: [20, 139, 94, 67, 31] , must return the second largest distinct number: 94', () => {
    expect(secondLargest([20, 139, 94, 67, 31]))
        .toEqual(94)
});

test('Given an array: [2, 3, 4, 6, 6] , must return the second largest distinct number: 4', () => {
    expect(secondLargest([2, 3, 4, 6, 6]))
        .toEqual(4)
});

test('Given an array: [10, -17, 55.5, 44, 91, 0] , must return the second largest distinct number: 55.5', () => {
    expect(secondLargest([10, -17, 55.5, 44, 91, 0]))
        .toEqual(55.5)
});

test('Given an array: [1, 0, -1, 0, 1, 0, -1, 1, 0] , must return the second largest distinct number: 0', () => {
    expect(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]))
        .toEqual(0)
});