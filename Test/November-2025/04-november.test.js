const imageSearch = require('../../November-2025/04-november')

describe('Image Search Challenge', () => {
    test('Given an array of image names: ["dog.png", "cat.jpg", "parrot.jpeg"] and a search term: "dog",return an array of searching images: ["dog.png"]', () => {
        expect(imageSearch(['dog.png', 'cat.jpg', 'parrot.jpeg'], 'dog'))
            .toStrictEqual(['dog.png'])
    });

    test('Given an array of image names: ["Sunset.jpg", "Beach.png", "sunflower.jpeg"] and a search term: "sun",return an array of searching images: ["Sunset.jpg", "sunflower.jpeg"]', () => {
        expect(imageSearch(['Sunset.jpg', 'Beach.png', 'sunflower.jpeg'], 'sun'))
            .toStrictEqual(['Sunset.jpg', 'sunflower.jpeg'])
    });

    test('Given an array of image names: ["Moon.png", "sun.jpeg", "stars.png"] and a search term: "PNG",return an array of searching images: ["Moon.png", "stars.png"]', () => {
        expect(imageSearch(['Moon.png', 'sun.jpeg', 'stars.png'], 'PNG'))
            .toStrictEqual(['Moon.png', 'stars.png'])
    });

    test('Given an array of image names: ["cat.jpg", "dogToy.jpeg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"] and a search term: "Cat",return an array of searching images: ["cat.jpg", "kitty-cat.png", "catNip.jpeg", "franken_cat.gif"]', () => {
        expect(imageSearch(['cat.jpg', 'dogToy.jpeg', 'kitty-cat.png', 'catNip.jpeg', 'franken_cat.gif'], 'Cat'))
            .toStrictEqual(['cat.jpg', 'kitty-cat.png', 'catNip.jpeg', 'franken_cat.gif'])
    });
});