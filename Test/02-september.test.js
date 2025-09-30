const rgbToHex = require('../September-2025/02-september')

test('Given rgb = rgb(255, 255, 255) must return #ffffff', () => {
    expect(rgbToHex('rgb(255, 255, 255)'))
        .toBe('#ffffff')
});

test('Given rgb = rgb(1, 11, 111) must return #010b6f', () => {
    expect(rgbToHex('rgb(1, 11, 111)'))
        .toBe('#010b6f')
});

test('Given rgb = rgb(173, 216, 230) must return #add8e6', () => {
    expect(rgbToHex('rgb(173, 216, 230)'))
        .toBe('#add8e6')
});

test('Given rgb = rgb(79, 123, 201) must return #4f7bc9', () => {
    expect(rgbToHex('rgb(79, 123, 201)'))
        .toBe('#4f7bc9')
});