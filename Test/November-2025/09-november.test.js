const findWord = require('../../November-2025/09-november')

describe('Word Search Challenge', () => {
    test('Given a matrix: [["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]] and a word to find: "cat",return the start and end indices: [[0, 1], [2, 1]]', () => {
        expect(findWord([["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]], 'cat'))
            .toEqual([[0, 1], [2, 1]])
    });

    test('Given a matrix: [["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]] and a word to find: "dog",return the start and end indices: [[0, 0], [0, 2]]', () => {
        expect(findWord([["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]], 'dog'))
            .toEqual([[0, 0], [0, 2]])
    });

    test('Given a matrix: [["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]] and a word to find: "fish",return the start and end indices: [[3, 3], [0, 3]]', () => {
        expect(findWord([["h", "i", "s", "h"], ["i", "s", "f", "s"], ["f", "s", "i", "i"], ["s", "h", "i", "f"]], 'fish'))
            .toEqual([[3, 3], [0, 3]])
    });

    test('Given a matrix: [["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]] and a word to find: "fox",return the start and end indices: [[1, 3], [1, 1]]', () => {
        expect(findWord([["f", "x", "o", "x"], ["o", "x", "o", "f"], ["f", "o", "f", "x"], ["f", "x", "x", "o"]], 'fox'))
            .toEqual([[1, 3], [1, 1]])
    });
});