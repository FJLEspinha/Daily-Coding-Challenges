const speeding = require('../September-2025/26-september')

test('Given an array: [50, 60, 55] must return an array fasters vehicules and average: [0, 0] ', () => {
    expect(speeding([50, 60, 55], 60))
        .toEqual([0, 0])
});

test('Given an array: [58, 50, 60, 55] must return an array fasters vehicules and average: [2, 4]', () => {
    expect(speeding([58, 50, 60, 55], 55))
        .toEqual([2, 4])
});

test('Given an array: [61, 81, 74, 88, 65, 71, 68] must return an array fasters vehicules and average: [4, 8.5]', () => {
    expect(speeding([61, 81, 74, 88, 65, 71, 68], 70))
        .toEqual([4, 8.5])
});

test('Given an array: [100, 105, 95, 102] must return an array fasters vehicules and average: [2, 3.5]', () => {
    expect(speeding([100, 105, 95, 102], 100))
        .toEqual([2, 3.5])
});

test('Given an array: [40, 45, 44, 50, 112, 39] must return an array fasters vehicules and average: [1, 57]', () => {
    expect(speeding([40, 45, 44, 50, 112, 39], 55))
        .toEqual([1, 57])
});