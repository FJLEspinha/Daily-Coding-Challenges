const arrayDiff = require('../September-2025/10-september')


test('Words to appear in only one of the 2 arrays ["apple", "banana"], ["apple", "banana", "cherry"]', () => {
    expect(arrayDiff(["apple", "banana"], ["apple", "banana", "cherry"]))
        .toStrictEqual( ["cherry"])
});

test('Words to appear in only one of the 2 arrays ["apple", "banana", "cherry"], ["apple", "banana"]', () => {
    expect(arrayDiff(["apple", "banana", "cherry"], ["apple", "banana"]))
        .toStrictEqual( ["cherry"])
});

test('Words to appear in only one of the 2 arrays ["one", "two", "three", "four", "six"], ["one", "three", "eight"]', () => {
    expect(arrayDiff(["one", "two", "three", "four", "six"], ["one", "three", "eight"]))
        .toStrictEqual( ["eight", "four", "six", "two"])
});

test('Words to appear in only one of the 2 arrays ["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]', () => {
    expect(arrayDiff(["two", "four", "five", "eight"], ["one", "two", "three", "four", "seven", "eight"]))
        .toStrictEqual(["five", "one", "seven", "three"])
});

test('Words to appear in only one of the 2 arrays["I like freeCodeCamp"], ["I like rocks"]', () => {
    expect(arrayDiff(["I like freeCodeCamp"], ["I like rocks"]))
        .toStrictEqual( ["freeCodeCamp", "rocks"])
});