const getWeekday = require('../../November-2025/06-november')

describe('Weekday Finder Challenge', () => {
    test('Given a string date in the format YYYY-MM-DD: "2025-11-06",return the day of the week: "Thursday"', () => {
        expect(getWeekday('2025-11-06'))
            .toEqual('Thursday')
    });

    test('Given a string date in the format YYYY-MM-DD: "1999-12-31",return the day of the week: "Friday"', () => {
        expect(getWeekday('1999-12-31'))
            .toEqual('Friday')
    });

    test('Given a string date in the format YYYY-MM-DD: "1111-11-11",return the day of the week: "Saturday"', () => {
        expect(getWeekday('1111-11-11'))
            .toEqual('Saturday')
    });

    test('Given a string date in the format YYYY-MM-DD: "2112-12-21",return the day of the week: "Wednesday"', () => {
        expect(getWeekday('2112-12-21'))
            .toEqual('Wednesday')
    });

    test('Given a string date in the format YYYY-MM-DD: "2345-10-01",return the day of the week: "Monday"', () => {
        expect(getWeekday('2345-10-01'))
            .toEqual('Monday')
    });
});