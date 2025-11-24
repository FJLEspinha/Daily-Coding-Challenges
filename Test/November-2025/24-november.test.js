const isValidMessage = require('../../November-2025/24-november')

describe('Message Validator Challenge', () => {
    test('Given a message string and a validation: "hello world", "hw", determine if is valid: true', () => {
        expect(isValidMessage('hello world', 'hw'))
            .toEqual(true)
    });

    test('Given a message string and a validation: "ALL CAPITAL LETTERS", "acl", determine if is valid: true', () => {
        expect(isValidMessage('ALL CAPITAL LETTERS', 'acl'))
            .toEqual(true)
    });

    test('Given a message string and a validation: "Coding challenge are boring.", "cca", determine if is valid: false', () => {
        expect(isValidMessage('Coding challenge are boring.', 'cca'))
            .toEqual(false)
    });

    test('Given a message string and a validation: "The quick brown fox jumps over the lazy dog.", "TQBFJOTLD", determine if is valid: true', () => {
        expect(isValidMessage('The quick brown fox jumps over the lazy dog.', 'TQBFJOTLD'))
            .toEqual(true)
    });

    test('Given a message string and a validation: "The quick brown fox jumps over the lazy dog.", "TQBFJOTLDT", determine if is valid: false', () => {
        expect(isValidMessage('The quick brown fox jumps over the lazy dog.', 'TQBFJOTLDT'))
            .toEqual(false)
    });

    test('Given a message string and a validation: "message", "m", determine if is valid: true', () => {
        expect(isValidMessage('message', 'm'))
            .toEqual(true)
    });

    test('Given a message string and a validation: "message", "f", determine if is valid: false', () => {
        expect(isValidMessage('message', 'f'))
            .toEqual(false)
    });

    test('Given a message string and a validation: "message", "", determine if is valid: false', () => {
        expect(isValidMessage('message', ''))
            .toEqual(false)
    });

    test('Given a message string and a validation: "", "", determine if is valid: false', () => {
        expect(isValidMessage('', ''))
            .toEqual(false)
    });
});