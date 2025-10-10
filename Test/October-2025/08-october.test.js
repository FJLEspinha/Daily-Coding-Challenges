const goldilocksZone = require('../../October-2025/08-october')

test('Given the mass of a star: 1, must return an array with the start and end distances: [0.95, 1.37]', () => {
    expect(goldilocksZone(1))
        .toEqual([0.95, 1.37])
});

test('Given the mass of a star: 0.5, must return an array with the start and end distances: [0.28, 0.41]', () => {
    expect(goldilocksZone(0.5))
        .toEqual([0.28, 0.41])
});

test('Given the mass of a star: 6, must return an array with the start and end distances: [21.85, 31.51]', () => {
    expect(goldilocksZone(6))
        .toEqual([21.85, 31.51])
});

test('Given the mass of a star: 3.7, must return an array with the start and end distances: [9.38, 13.52]', () => {
    expect(goldilocksZone(3.7))
        .toEqual([9.38, 13.52])
});

test('Given the mass of a star: 20, must return an array with the start and end distances: [179.69, 259.13]', () => {
    expect(goldilocksZone(20))
        .toEqual([179.69, 259.13])
});