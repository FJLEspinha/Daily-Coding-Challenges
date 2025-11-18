const oneHundred = require('../../November-2025/18-november')

describe('100 Characters Challenge', () => {
    test('Given a string: "One hundred ",repeat its characters until exactly 100 characters long.', () => {
        expect(oneHundred('One hundred '))
            .toStrictEqual('One hundred One hundred One hundred One hundred One hundred One hundred One hundred One hundred One ')
    });

    test('Given a string: "freeCodeCamp ",repeat its characters until exactly 100 characters long.', () => {
        expect(oneHundred('freeCodeCamp '))
            .toStrictEqual('freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeCamp freeCodeC')
    });

    test('Given a string: "daily challenges ",repeat its characters until exactly 100 characters long.', () => {
        expect(oneHundred('daily challenges '))
            .toStrictEqual('daily challenges daily challenges daily challenges daily challenges daily challenges daily challenge')
    });

    test('Given a string: "!",repeat its characters until exactly 100 characters long.', () => {
        expect(oneHundred('!'))
            .toStrictEqual('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    });
});