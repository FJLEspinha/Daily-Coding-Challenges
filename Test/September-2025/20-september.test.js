const numberOfFiles = require('../../September-2025/20-september')

test('Given a file size: 500 , a unit for the file size: KB , and hard drive capacity in GB: 1 , the number of files keep = 2000', () => {
    expect(numberOfFiles(500, "KB", 1))
        .toStrictEqual(2000)
});

test('Given a file size: 50000 , a unit for the file size: B , and hard drive capacity in GB: 1 , the number of files keep = 20000', () => {
    expect(numberOfFiles(50000, "B", 1))
        .toStrictEqual(20000)
});

test('Given a file size: 5 , a unit for the file size: MB , and hard drive capacity in GB: 1 , the number of files keep = 200', () => {
    expect(numberOfFiles(5, "MB", 1))
        .toStrictEqual(200)
});

test('Given a file size: 4096 , a unit for the file size: B , and hard drive capacity in GB: 1.5 , the number of files keep = 366210', () => {
    expect(numberOfFiles(4096, "B", 1.5))
        .toStrictEqual(366210)
});

test('Given a file size: 220.5 , a unit for the file size: KB , and hard drive capacity in GB: 100 , the number of files keep = 453514', () => {
    expect(numberOfFiles(220.5, "KB", 100))
        .toStrictEqual(453514)
});

test('Given a file size: 4.5 , a unit for the file size: MB , and hard drive capacity in GB: 750 , the number of files keep = 166666', () => {
    expect(numberOfFiles(4.5, "MB", 750))
        .toStrictEqual(166666)
});