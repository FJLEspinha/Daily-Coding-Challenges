const findLandingSpot = require('../../October-2025/07-october')

test('Given a matrix of numbers: [[1, 0], [2, 0]], find the safest landing spot, must be: [0,1]', () => {
    expect(findLandingSpot([[1, 0], [2, 0]]))
        .toEqual([0, 1])
});

test('Given a matrix of numbers: [[9, 0, 3], [7, 0, 4], [8, 0, 5]], find the safest landing spot, must be: [1,1]', () => {
    expect(findLandingSpot([[9, 0, 3], [7, 0, 4], [8, 0, 5]]))
        .toEqual([1, 1])
});

test('Given a matrix of numbers: [[1, 2, 1], [0, 0, 2], [3, 0, 0]]], find the safest landing spot, must be: [2,2]', () => {
    expect(findLandingSpot([[1, 2, 1], [0, 0, 2], [3, 0, 0]]))
        .toEqual([2, 2])
});

test('Given a matrix of numbers: [[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]], find the safest landing spot, must be: [2,1]', () => {
    expect(findLandingSpot([[9, 6, 0, 8], [7, 1, 1, 0], [3, 0, 3, 9], [8, 6, 0, 9]]))
        .toEqual([2, 1])
});