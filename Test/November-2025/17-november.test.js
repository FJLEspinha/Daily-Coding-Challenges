const isMatch = require('../../November-2025/17-november')

describe('Fingerprint Test Challlenge', () => {
    test('Given two strings: "helloworld", "helloworld", return if they are a match: true', () => {
        expect(isMatch('helloworld', 'helloworld'))
            .toBe(true)
    });

    test('Given two strings: "helloworld", "helloworlds", return if they are a match: false', () => {
        expect(isMatch('helloworld', 'helloworlds'))
            .toBe(false)
    });

    test('Given two strings: "helloworld", "helloworlds", return if they are a match: true', () => {
        expect(isMatch('helloworld', 'jelloworld'))
            .toBe(true)
    });

    test('Given two strings: "thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog", return if they are a match: true', () => {
        expect(isMatch('thequickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthelazydog'))
            .toBe(true)
    });

    test('Given two strings: "thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthelazydog", return if they are a match: true', () => {
        expect(isMatch('theslickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthehazydog'))
            .toBe(true)
    });

    test('Given two strings: "thequickbrownfoxjumpsoverthelazydog", "thequickbrownfoxjumpsoverthehazycat", return if they are a match: false', () => {
        expect(isMatch('thequickbrownfoxjumpsoverthelazydog', 'thequickbrownfoxjumpsoverthehazycat'))
            .toBe(false)
    });
});