const to12 = require('../../October-2025/13-october')

describe('24 to 12 Challenge', () => {
    test('Given a string: "1124" return: "11:24 AM"', () => {
        expect(to12('1124'))
            .toEqual('11:24 AM')
    });

    test('Given a string: "0900" return: "9:00 AM"', () => {
        expect(to12('0900'))
            .toEqual('9:00 AM')
    });

    test('Given a string: "1455" return: "2:55 PM"', () => {
        expect(to12('1455'))
            .toEqual('2:55 PM')
    });

    test('Given a string: "2346" return: "11:46 PM"', () => {
        expect(to12('2346'))
            .toEqual('11:46 PM')
    });

    test('Given a string: "0030" return: "12:30 AM"', () => {
        expect(to12('0030'))
            .toEqual('12:30 AM')
    });
});