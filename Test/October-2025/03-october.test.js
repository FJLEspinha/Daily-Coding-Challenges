const checkStrength = require('../../October-2025/03-october')

test('Given a password string: "123456", must return: weak ', () => {
    expect(checkStrength("123456"))
    .toEqual('weak')
});

test('Given a password string: "pass!!!", must return: weak ', () => {
    expect(checkStrength("pass!!!"))
    .toEqual('weak')
});

test('Given a password string: "Qwerty", must return: weak ', () => {
    expect(checkStrength("Qwerty"))
    .toEqual('weak')
});

test('Given a password string: "PASSWORD", must return: weak ', () => {
    expect(checkStrength("PASSWORD"))
    .toEqual('weak')
});

test('Given a password string: "PASSWORD!", must return: medium ', () => {
    expect(checkStrength("PASSWORD!"))
    .toEqual('medium')
});

test('Given a password string: "PassWord%^!", must return: medium ', () => {
    expect(checkStrength("PassWord%^!"))
    .toEqual('medium')
});

test('Given a password string: "qwerty12345", must return: medium ', () => {
    expect(checkStrength("qwerty12345"))
    .toEqual('medium')
});

test('Given a password string: "PASSWORD!", must return: medium ', () => {
    expect(checkStrength("PASSWORD!"))
    .toEqual('medium')
});

test('Given a password string: "PASSWORD!", must return: medium ', () => {
    expect(checkStrength("PASSWORD!"))
    .toEqual('medium')
});

test('Given a password string: "S3cur3P@ssw0rd", must return: strong ', () => {
    expect(checkStrength("S3cur3P@ssw0rd"))
    .toEqual('strong')
});

test('Given a password string: "C0d3&Fun!", must return: strong ', () => {
    expect(checkStrength("C0d3&Fun!"))
    .toEqual('strong')
});