const favoriteSongs = require('../../October-2025/23-october')

describe('Favorite Songs Challenge', () => {
    test('Given an array of song objects: [{ "title": "Sync or Swim", "plays": 3 }, { "title": "Byte Me", "plays": 1 }, { "title": "Earbud Blues", "plays": 2 }], return an array with the titles of the two most played songs: ["Sync or Swim", "Earbud Blues"]', () => {
        expect(favoriteSongs([{ "title": "Sync or Swim", "plays": 3 }, { "title": "Byte Me", "plays": 1 }, { "title": "Earbud Blues", "plays": 2 }]))
            .toStrictEqual(["Sync or Swim", "Earbud Blues"])
    });

    test('Given an array of song objects: [{ "title": "Skip Track", "plays": 98 }, { "title": "99 Downloads", "plays": 99 }, { "title": "Clickwheel Love", "plays": 100 }], return an array with the titles of the two most played songs: ["Clickwheel Love", "99 Downloads"]', () => {
        expect(favoriteSongs([{ "title": "Skip Track", "plays": 98 }, { "title": "99 Downloads", "plays": 99 }, { "title": "Clickwheel Love", "plays": 100 }]))
            .toStrictEqual(["Clickwheel Love", "99 Downloads"])
    });

    test('Given an array of song objects:[{ "title": "Song A", "plays": 42 }, { "title": "Song B", "plays": 99 }, { "title": "Song C", "plays": 75 }], return an array with the titles of the two most played songs: ["Song B", "Song C"]', () => {
        expect(favoriteSongs([{ "title": "Song A", "plays": 42 }, { "title": "Song B", "plays": 99 }, { "title": "Song C", "plays": 75 }]))
            .toStrictEqual(["Song B", "Song C"])
    });
});