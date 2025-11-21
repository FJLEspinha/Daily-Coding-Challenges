const lcm = require('../../November-2025/21-november')

describe('LCM Challenge', () => {
    test('Given two integers: 4, 6,  return the LCM: 12', () => {
        expect(lcm(4, 6))
            .toEqual(12)
    });

    test('Given two integers: 9, 6,  return the LCM: 18', () => {
        expect(lcm(9, 6))
            .toEqual(18)
    });

    test('Given two integers: 10, 100,  return the LCM: 100', () => {
        expect(lcm(10, 100))
            .toEqual(100)
    });

    test('Given two integers: 13, 17,  return the LCM: 221', () => {
        expect(lcm(13, 17))
            .toEqual(221)
    });

    test('Given two integers: 45, 70,  return the LCM: 630', () => {
        expect(lcm(45, 70))
            .toEqual(630)
    });

    test('Given two integers: -4,6,  return the LCM: 12', () => {
        expect(lcm(-4, 6))
            .toEqual(12)
    });

    test('Given two integers: 0,100,  return the LCM: 1', () => {
        expect(lcm(0, 100))
            .toEqual(1)
    });
});