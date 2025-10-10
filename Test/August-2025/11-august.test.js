const isBalanced = require('../../August-2025/11-august')

test('Given a string: "racecar" must return the volwes are the same in two halfs of string: true', () => {
    expect(isBalanced('racecar'))
    .toEqual(true)
});

test('Given a string: "Lorem Ipsum" must return the volwes are the same in two halfs of string: true', () => {
    expect(isBalanced('Lorem Ipsum'))
    .toEqual(true)
});

test('Given a string: "Kitty Ipsum" must return the volwes are the same in two halfs of string: false', () => {
    expect(isBalanced('Kitty Ipsum'))
    .toEqual(false)
});

test('Given a string: "string" must return the volwes are the same in two halfs of string: false', () => {
    expect(isBalanced('string'))
    .toEqual(false)
});

test('Given a string: " " must return the volwes are the same in two halfs of string: true', () => {
    expect(isBalanced(' '))
    .toEqual(true)
});

test('Given a string: "abcdefghijklmnopqrstuvwxyz" must return the volwes are the same in two halfs of string: false', () => {
    expect(isBalanced('abcdefghijklmnopqrstuvwxyz'))
    .toEqual(false)
});

test('Given a string: "123A#b!E&*456-o.U" must return the volwes are the same in two halfs of string: true', () => {
    expect(isBalanced('123A#b!E&*456-o.U'))
    .toEqual(true)
});