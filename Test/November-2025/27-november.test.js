const calculateAge = require('../../November-2025/27-november')

describe('What\'s My Age Again? Challenge', () => {
    test('Given the birthday date: "2000-11-20", return the age as of November 27th, 2025: 25', () => {
        expect(calculateAge('2000-11-20'))
            .toEqual(25)
    });

    test('Given the birthday date: "2000-12-01", return the age as of November 27th, 2025: 24', () => {
        expect(calculateAge('2000-12-01'))
            .toEqual(24)
    });

    test('Given the birthday date: "2014-10-25", return the age as of November 27th, 2025: 11', () => {
        expect(calculateAge('2014-10-25'))
            .toEqual(11)
    });

    test('Given the birthday date: "1994-01-06", return the age as of November 27th, 2025: 31', () => {
        expect(calculateAge('1994-01-06'))
            .toEqual(31)
    });

    test('Given the birthday date: "1994-12-14", return the age as of November 27th, 2025: 30', () => {
        expect(calculateAge('1994-12-14'))
            .toEqual(30)
    });

    test('Given the birthday date: "2000-11-28", return the age as of November 27th, 2025: 24', () => {
        expect(calculateAge('2000-11-28'))
            .toEqual(24)
    });
});