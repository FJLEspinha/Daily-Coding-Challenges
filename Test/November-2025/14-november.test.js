const daysUntilWeekend = require('../../November-2025/14-november')

describe('Is It the Weekend? Challenge', () => {
    test('Given a date ("YYYY-MM-DD"): "2025-11-14",return the number of days left until the weekend: "1 day until the weekend."', () => {
        expect(daysUntilWeekend('2025-11-14'))
            .toStrictEqual('1 day until the weekend.')
    });

    test('Given a date ("YYYY-MM-DD"): "2025-01-01",return the number of days left until the weekend: "3 days until the weekend."', () => {
        expect(daysUntilWeekend('2025-01-01'))
            .toStrictEqual('3 days until the weekend.')
    });

    test('Given a date ("YYYY-MM-DD"): "2025-12-06",return the number of days left until the weekend: "It\'s the weekend!"', () => {
        expect(daysUntilWeekend('2025-12-06'))
            .toStrictEqual("It's the weekend!")
    });

    test('Given a date ("YYYY-MM-DD"): "2026-01-27",return the number of days left until the weekend: "4 days until the weekend."', () => {
        expect(daysUntilWeekend('2026-01-27'))
            .toStrictEqual('4 days until the weekend.')
    });

    test('Given a date ("YYYY-MM-DD"): "2026-09-07",return the number of days left until the weekend: "5 days until the weekend."', () => {
        expect(daysUntilWeekend('2026-09-07'))
            .toStrictEqual('5 days until the weekend.')
    });

    test('Given a date ("YYYY-MM-DD"): "2026-11-29",return the number of days left until the weekend: "It\'s the weekend!"', () => {
        expect(daysUntilWeekend('2026-11-29'))
            .toStrictEqual("It's the weekend!")
    });
});