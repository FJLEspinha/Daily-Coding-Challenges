const verify = require('../../November-2025/01-november')

describe('Signature Validation Challenge', () => {
    test('Given a message string: "foo", a secret key string: "bar", and a signature number: 57, determine if is valid: true ', () => {
        expect(verify('foo', 'bar', 57))
            .toEqual(true)
    });

    test('Given a message string: "foo", a secret key string: "bar", and a signature number: 54, determine if is valid: false ', () => {
        expect(verify('foo', 'bar', 54))
            .toEqual(false)
    });

    test('Given a message string: "freeCodeCamp", a secret key string: "Rocks", and a signature number: 238, determine if is valid: true ', () => {
        expect(verify('freeCodeCamp', 'Rocks', 238))
            .toEqual(true)
    });

    test('Given a message string: "Is this valid?", a secret key string: "No", and a signature number: 210, determine if is valid: false ', () => {
        expect(verify('Is this valid?', 'No', 210))
            .toEqual(false)
    });

    test('Given a message string: "Is this valid?", a secret key string: "Yes", and a signature number: 233, determine if is valid: true ', () => {
        expect(verify('Is this valid?', 'Yes', 233))
            .toEqual(true)
    });

    test('Given a message string: "Check out the freeCodeCamp podcast,", a secret key string: "in the mobile app", and a signature number: 514, determine if is valid: true ', () => {
        expect(verify('Check out the freeCodeCamp podcast,', 'in the mobile app', 514))
            .toEqual(true)
    });

    test('Given a message string: " ..~foo.", a secret key string: "bar.....!", and a signature number: 57, determine if is valid: true ', () => {
        expect(verify(' ..~foo.', 'bar.....!', 57))
            .toEqual(true)
    });
});