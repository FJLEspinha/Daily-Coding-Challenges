const format = require('../../October-2025/26-october')

describe('Duration Formatter Challenge', () => {
    test('Given an integer number of seconds: 500, return a string in the format "H:MM:SS": "8:20"', () => {
        expect(format(500))
            .toStrictEqual('8:20')
    });

    test('Given an integer number of seconds: 4000, return a string in the format "H:MM:SS": "1:06:40"', () => {
        expect(format(4000))
            .toStrictEqual('1:06:40')
    });

    test('Given an integer number of seconds: 1, return a string in the format "H:MM:SS": "0:01"', () => {
        expect(format(1))
            .toStrictEqual('0:01')
    });

    test('Given an integer number of seconds: 5555, return a string in the format "H:MM:SS": "1:32:35"', () => {
        expect(format(5555))
            .toStrictEqual('1:32:35')
    });

    test('Given an integer number of seconds: 99999, return a string in the format "H:MM:SS": "27:46:39"', () => {
        expect(format(99999))
            .toStrictEqual('27:46:39')
    });
});