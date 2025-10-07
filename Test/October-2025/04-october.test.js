const classification = require('../../October-2025/04-october')

test('given a temperature in Kelvin: 5778 must return classification: "G"', () => {
    expect(classification(5778))
    .toEqual("G")
});

test('given a temperature in Kelvin: 2400 must return classification: "M"', () => {
    expect(classification(2400))
    .toEqual("M")
});

test('given a temperature in Kelvin: 9999 must return classification: "A"', () => {
    expect(classification(9999))
    .toEqual("A")
});

test('given a temperature in Kelvin: 3700 must return classification: "K"', () => {
    expect(classification(3700))
    .toEqual("K")
});

test('given a temperature in Kelvin: 3699 must return classification: "M"', () => {
    expect(classification(3699))
    .toEqual("M")
});

test('given a temperature in Kelvin: 210000 must return classification: "O"', () => {
    expect(classification(210000))
    .toEqual("O")
});

test('given a temperature in Kelvin: 6000 must return classification: "F"', () => {
    expect(classification(6000))
    .toEqual("F")
});

test('given a temperature in Kelvin: 11432 must return classification: "B"', () => {
    expect(classification(11432))
    .toEqual("B")
});

test('given a temperature in Kelvin: -1 must return classification: "Out of range"', () => {
    expect(classification(-1))
    .toEqual("Out of range")
});