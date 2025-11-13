const shiftArray = require('../../November-2025/13-november')

describe('Array Shift Challenge', () => {
    test('Given an array and an integer: [1, 2, 3], 1,return the shifted array: [2, 3, 1]', () => {
        expect(shiftArray([1, 2, 3], 1))
            .toEqual([2, 3, 1])
    });

    test('Given an array and an integer: [1, 2, 3], -1,return the shifted array: [3, 1, 2]', () => {
        expect(shiftArray([1, 2, 3], -1))
            .toEqual([3, 1, 2])
    });

    test('Given an array and an integer: ["alpha", "bravo", "charlie"], 5,return the shifted array: ["charlie", "alpha", "bravo"]', () => {
        expect(shiftArray(['alpha', 'bravo', 'charlie'], 5))
            .toEqual(['charlie', 'alpha', 'bravo'])
    });

    test('Given an array and an integer: ["alpha", "bravo", "charlie"], -11,return the shifted array: ["bravo", "charlie", "alpha"]', () => {
        expect(shiftArray(['alpha', 'bravo', 'charlie'], -11))
            .toEqual(['bravo', 'charlie', 'alpha'])
    });

    test('Given an array and an integer: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15,return the shifted array: [5, 6, 7, 8, 9, 0, 1, 2, 3, 4]', () => {
        expect(shiftArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 15))
            .toEqual([5, 6, 7, 8, 9, 0, 1, 2, 3, 4])
    });

    test('Given an array and an integer: [], 5,return the shifted array: []', () => {
        expect(shiftArray([], 5))
            .toEqual([])
    });

    test('Given an array and an integer: [1, 2, 3, 4, 5], 0,return the shifted array: [1, 2, 3, 4, 5]', () => {
        expect(shiftArray([1, 2, 3, 4, 5], 0))
            .toEqual([1, 2, 3, 4, 5])
    });

    test('Given an array and an integer: [], 0,return the shifted array: []', () => {
        expect(shiftArray([], 0))
            .toEqual([])
    });

    test('Given an array and an integer: [1, 2, 3], -11,return the shifted array: [ 2, 3, 1 ]', () => {
        expect(shiftArray([1, 2, 3], -11))
            .toEqual([2, 3, 1])
    });
});