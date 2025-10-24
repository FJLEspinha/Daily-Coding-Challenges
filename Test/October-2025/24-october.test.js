const dive = require('../../October-2025/24-october')

describe('Hidden Treasure Challenge', () => {
    test('Given a 2D array and an array with the coordinate: [["-", "X"], ["-", "X"], ["-", "O"]], [2, 1], return the result of dive: "Recovered"', () => {
        expect(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 1]))
            .toEqual('Recovered')
    });

    test('Given a 2D array and an array with the coordinate: [["-", "X"], ["-", "X"], ["-", "O"]], [2, 0], return the result of dive: "Empty"', () => {
        expect(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 0]))
            .toEqual('Empty')
    });

    test('Given a 2D array and an array with the coordinate: [["-", "X"], ["-", "O"], ["-", "O"]], [1, 1], return the result of dive: "Found"', () => {
        expect(dive([["-", "X"], ["-", "O"], ["-", "O"]], [1, 1]))
            .toEqual('Found')
    });

    test('Given a 2D array and an array with the coordinate: [["-", "-", "-"], ["X", "O", "X"], ["-", "-", "-"]], [1, 2], return the result of dive: "Found"', () => {
        expect(dive([["-", "-", "-"], ["X", "O", "X"], ["-", "-", "-"]], [1, 2]))
            .toEqual('Found')
    });

    test('Given a 2D array and an array with the coordinate: [["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [2, 0], return the result of dive: "Recovered"', () => {
        expect(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [2, 0]))
            .toEqual('Recovered')
    });

    test('Given a 2D array and an array with the coordinate: [["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [1, 2], return the result of dive: "Empty"', () => {
        expect(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [1, 2]))
            .toEqual('Empty')
    });
});