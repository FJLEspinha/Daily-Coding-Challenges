const isMirror = require('../September-2025/23-september')

test('Given a str1: "helloworld" and str2: "helloworld"  must return false', () => {
    expect(isMirror("helloworld", "helloworld"))
        .toEqual(false)
});

test('Given a str1: "Hello World" and str2: "dlroW olleH"  must return true', () => {
    expect(isMirror("Hello World", "dlroW olleH"))
        .toEqual(true)
});

test('Given a str1: "RaceCar" and str2: "raCecaR"  must return true', () => {
    expect(isMirror("RaceCar", "raCecaR"))
        .toEqual(true)
});

test('Given a str1: "RaceCar" and str2: "RaceCar"  must return false', () => {
    expect(isMirror("RaceCar", "RaceCar"))
        .toEqual(false)
});

test('Given a str1: "Mirror" and str2: "rorrim"  must return false', () => {
    expect(isMirror("Mirror", "rorrim"))
        .toEqual(false)
});

test('Given a str1: "Hello World" and str2: "dlroW-olleH"  must return true', () => {
    expect(isMirror("Hello World", "dlroW-olleH"))
        .toEqual(true)
});

test('Given a str1: "Hello World" and str2: "!dlroW !olleH"  must return true', () => {
    expect(isMirror("Hello World", "!dlroW !olleH"))
        .toEqual(true)
});