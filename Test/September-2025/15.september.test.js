const adjustThermostat = require('../../September-2025/15-september')

test('Adjust thermostat current: 68, target: 72 return -> heat', () => {
    expect(adjustThermostat(68, 72)).toBe('heat')
});

test('Adjust thermostat current: 75, target: 72 return -> cool', () => {
    expect(adjustThermostat(75, 72)).toBe('cool')
});

test('Adjust thermostat current: 72, target: 72 return ->  hold', () => {
    expect(adjustThermostat(72, 72)).toBe('hold')
});

test('Adjust thermostat current: -20.5, target: -10.1 return -> heat', () => {
    expect(adjustThermostat(-20.5,-10.1)).toBe('heat')
});

test('Adjust thermostat currentf: 100, target: 99.9 return -> cool', () => {
    expect(adjustThermostat(100,99.9)).toBe('cool')
});

test('Adjust thermostat current: 0.0, target: 0.0 return -> hold', () => {
    expect(adjustThermostat(0.0,0.0)).toBe('hold')
});