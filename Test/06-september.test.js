const rotate = require('../September-2025/06-september')

test('Rotate the matrix: [[1]] 90 degrees clockwise must return [[1]]', () => {
    expect(rotate([[1]]))
        .toStrictEqual( [[1]])
});

test('Rotate the matrix: [[1, 2], [3, 4]] 90 degrees clockwise must return [[3, 1], [4, 2]]', () => {
    expect(rotate([[1, 2], [3, 4]]))
        .toStrictEqual([[3, 1], [4, 2]])
});

test('Rotate the matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]] 90 degrees clockwise must return[[7, 4, 1], [8, 5, 2], [9, 6, 3]]', () => {
    expect(rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
        .toStrictEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]])
});

test('Rotate the matrix: [[0, 1, 0], [1, 0, 1], [0, 0, 0]] 90 degrees clockwise must return [[0, 1, 0], [0, 0, 1], [0, 1, 0]]', () => {
    expect(rotate([[0, 1, 0], [1, 0, 1], [0, 0, 0]]))
        .toStrictEqual([[0, 1, 0], [0, 0, 1], [0, 1, 0]])
});