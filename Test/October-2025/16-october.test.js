const validate = require('../../October-2025/16-october')

describe('Email Validator Challenge', () => {
    test('Given a string: "a@b.cd" must return: true', () => {
        expect(validate('a@b.cd'))
            .toEqual(true)
    });

    test('Given a string: "hell.-w.rld@example.com" must return: true', () => {
        expect(validate('hell.-w.rld@example.com'))
            .toEqual(true)
    });

    test('Given a string: ".b@sh.rc" must return: false', () => {
        expect(validate('.b@sh.rc'))
            .toEqual(false)
    });

    test('Given a string: "example@test.c0" must return: false', () => {
        expect(validate('example@test.c0'))
            .toEqual(false)
    });

    test('Given a string: "freecodecamp.org" must return: false', () => {
        expect(validate('freecodecamp.org'))
            .toEqual(false)
    });

    test('Given a string: "develop.ment_user@c0D!NG.R.CKS" must return: true', () => {
        expect(validate('develop.ment_user@c0D!NG.R.CKS'))
            .toEqual(true)
    });

    test('Given a string: "hello.@wo.rld" must return: false', () => {
        expect(validate('hello.@wo.rld'))
            .toEqual(false)
    });

    test('Given a string: "hello@world..com" must return: false', () => {
        expect(validate('hello@world..com'))
            .toEqual(false)
    });

    test('Given a string: "git@commit@push.io" must return: false', () => {
        expect(validate('git@commit@push.io'))
            .toEqual(false)
    });

});