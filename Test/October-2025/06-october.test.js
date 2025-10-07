const sendMessage = require('../../October-2025/06-october')

test('Given an array: [300000, 300000] representing distances, determine how long time, must return: 2.5', () => {
    expect(sendMessage([300000, 300000]))
        .toEqual(2.5)
});

test('Given an array: [384400, 384400] representing distances, determine how long time, must return: 3.0627', () => {
    expect(sendMessage([384400, 384400]))
        .toEqual(3.0627)
});

test('Given an array: [54600000, 54600000] representing distances, determine how long time, must return: 364.5', () => {
    expect(sendMessage([54600000, 54600000]))
        .toEqual(364.5)
});

test('Given an array: [1000000, 500000000, 1000000] representing distances, determine how long time, must return: 1674.3333', () => {
    expect(sendMessage([1000000, 500000000, 1000000]))
        .toEqual(1674.3333)
});

test('Given an array: [10000, 21339, 50000, 31243, 10000] representing distances, determine how long time, must return: 2.4086', () => {
    expect(sendMessage([10000, 21339, 50000, 31243, 10000]))
        .toEqual(2.4086)
});

test('Given an array: [802101, 725994, 112808, 3625770, 481239] representing distances, determine how long time, must return: 21.1597', () => {
    expect(sendMessage([802101, 725994, 112808, 3625770, 481239]))
        .toEqual(21.1597)
});