const numberOfPhotos = require('../September-2025/19-september')

test('Given photo size: 1 in MB and HDD capacity: 1 in GB must return 1000  ', () => {
    expect(numberOfPhotos(1, 1))
        .toBe(1000)
});

test('Given photo size: 2 in MB and HDD capacity: 1 in GB must return 500  ', () => {
    expect(numberOfPhotos(2, 1))
        .toBe(500)
});

test('Given photo size: 4 in MB and HDD capacity: 256 in GB must return 64000  ', () => {
    expect(numberOfPhotos(4, 256))
        .toBe(64000)
});

test('Given photo size: 3.5 in MB and HDD capacity: 750 in GB must return 214285  ', () => {
    expect(numberOfPhotos(3.5, 750))
        .toBe(214285)
});

test('Given photo size: 3.5 in MB and HDD capacity: 5.5 in GB must return 1571  ', () => {
    expect(numberOfPhotos(3.5, 5.5))
        .toBe(1571)
});