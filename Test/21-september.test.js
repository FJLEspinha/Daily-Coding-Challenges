const numberOfVideos = require('../September-2025/21-september')

test('Given a video size: 500 , a unit for the video size: "MB", a hard drive capacity: 100, and a unit: "GB"  must return 200', () => {
    expect(numberOfVideos(500, "MB", 100, "GB"))
        .toEqual(200)
});

test('Given a video size: 2000, a unit for the video size: "B", a hard drive capacity: 1, and a unit: "TB"  must return "Invalid video unit"', () => {
    expect(numberOfVideos(2000, "B", 1, "TB"))
        .toEqual("Invalid video unit")
});

test('Given a video size: 2000, a unit for the video size: "MB", a hard drive capacity: 100000, and a unit: "MB"  must return "Invalid drive unit"', () => {
    expect(numberOfVideos(2000, "MB", 100000, "MB"))
        .toEqual("Invalid drive unit")
});

test('Given a video size: 500000, a unit for the video size: "KB", a hard drive capacity: 2, and a unit: TB"  must return 4000', () => {
    expect(numberOfVideos(500000, "KB", 2, "TB"))
        .toEqual(4000)
});

test('Given a video size: 1.5, a unit for the video size: "GB", a hard drive capacity: 2.2, and a unit: TB"  must return 1466', () => {
    expect(numberOfVideos(1.5, "GB", 2.2, "TB"))
        .toEqual(1466)
});