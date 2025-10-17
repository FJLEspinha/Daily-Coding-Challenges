const mask = require('../../October-2025/17-october')

describe('Credit Card Masker Challenge', () => {
    test('Given a string: "4012-8888-8888-1881" return a masked version: "****-****-****-1881"', () => {
        expect(mask('4012-8888-8888-1881'))
            .toEqual('****-****-****-1881')
    });
 
    test('Given a string: "5105 1051 0510 5100" return a masked version: "**** **** **** 5100"', () => {
        expect(mask('5105 1051 0510 5100'))
            .toEqual('**** **** **** 5100')
    });
 
    test('Given a string: "6011 1111 1111 1117" return a masked version: "**** **** **** 1117"', () => {
        expect(mask('6011 1111 1111 1117'))
            .toEqual('**** **** **** 1117')
    });
 
    test('Given a string: "2223-0000-4845-0010" return a masked version: "****-****-****-0010"', () => {
        expect(mask('2223-0000-4845-0010'))
            .toEqual('****-****-****-0010')
    });
});