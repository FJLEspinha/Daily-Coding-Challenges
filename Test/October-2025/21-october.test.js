const adjustThermostat = require('../../October-2025/21-october')

describe('Thermostat Adjuster 2 Challenge', () => {
    test('Given the current in F and a target temperature in C: 32, 0, return a string indicating how to adjust: "Hold"', () => {
        expect(adjustThermostat(32, 0))
            .toEqual('Hold')
    });

    test('Given the current in F and a target temperature in C: 70, 25, return a string indicating how to adjust: "Heat: 7.0 degrees Fahrenheit"', () => {
        expect(adjustThermostat(70, 25))
            .toEqual('Heat: 7.0 degrees Fahrenheit')
    });

    test('Given the current in F and a target temperature in C: 72, 18, return a string indicating how to adjust: "Cool: 7.6 degrees Fahrenheit"', () => {
        expect(adjustThermostat(72, 18))
            .toEqual('Cool: 7.6 degrees Fahrenheit')
    });

    test('Given the current in F and a target temperature in C: 212, 100, return a string indicating how to adjust: "Hold"', () => {
        expect(adjustThermostat(212, 100))
            .toEqual('Hold')
    });

    test('Given the current in F and a target temperature in C: 59, 22, return a string indicating how to adjust: "Heat: 12.6 degrees Fahrenheit"', () => {
        expect(adjustThermostat(59, 22))
            .toEqual('Heat: 12.6 degrees Fahrenheit')
    });
});