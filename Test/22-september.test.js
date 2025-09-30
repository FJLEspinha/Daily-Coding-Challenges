const digitsOrLetters = require('../September-2025/22-september')

test('Given a string: "abc123" must return "tie"', () => {
    expect(digitsOrLetters("abc123"))
        .toBe("tie")
});

test('Given a string: "a1b2c3d" must return "letters"', () => {
    expect(digitsOrLetters("a1b2c3d"))
        .toBe("letters")
});

test('Given a string: "1a2b3c4" must return "digits"', () => {
    expect(digitsOrLetters("1a2b3c4"))
        .toBe("digits")
});

test('Given a string: "abc123!@#DEF" must return "letters"', () => {
    expect(digitsOrLetters("abc123!@#DEF"))
        .toBe("letters")
});

test('Given a string: "H3110 W0R1D" must return "digits"', () => {
    expect(digitsOrLetters("H3110 W0R1D"))
        .toBe("digits")
});

test('Given a string: "P455W0RD" must return "tie"', () => {
    expect(digitsOrLetters("P455W0RD"))
        .toBe("tie")
});