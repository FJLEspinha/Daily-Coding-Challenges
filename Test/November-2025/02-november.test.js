const infected = require('../../November-2025/02-november')

describe('Infected Challenge', () => {
    test('Given a number of days: 1, return number of computers infected: 2', () => {
        expect(infected(1))
            .toEqual(2)
    });

    test('Given a number of days: 3, return number of computers infected: 6', () => {
        expect(infected(3))
            .toEqual(6)
    });

    test('Given a number of days: 8, return number of computers infected: 152', () => {
        expect(infected(8))
            .toEqual(152)
    });

    test('Given a number of days: 17, return number of computers infected: 39808', () => {
        expect(infected(17))
            .toEqual(39808)
    });

    test('Given a number of days: 25, return number of computers infected: 5217638', () => {
        expect(infected(25))
            .toEqual(5217638)
    });
});