const isValidIPv4 = require('../../September-2025/05-september')

test('The IP 192.168.1.1 is valid IPv4? must be true', () => {
    expect(isValidIPv4('192.168.1.1'))
        .toEqual(true)
});

test('The IP 0.0.0.0 is valid IPv4? must be true', () => {
    expect(isValidIPv4('0.0.0.0'))
        .toEqual(true)
});

test('The IP 255.01.50.111 is valid IPv4? must be false', () => {
    expect(isValidIPv4('255.01.50.111'))
        .toEqual(false)
});

test('The IP 255.00.50.111 is valid IPv4? must be false', () => {
    expect(isValidIPv4('255.00.50.111'))
        .toEqual(false)
});

test('The IP 256.101.50.115 is valid IPv4? must be false', () => {
    expect(isValidIPv4('256.101.50.115'))
        .toEqual(false)
});

test('The IP 192.168.101. is valid IPv4? must be false', () => {
    expect(isValidIPv4('192.168.101.'))
        .toEqual(false)
});

test('The IP 192168145213 is valid IPv4? must be false', () => {
    expect(isValidIPv4('192168145213'))
        .toEqual(false)
});

// My own test

test('The IP 00.00.00.00 is valid IPv4? must be false', () => {
    expect(isValidIPv4('00.00.00.00'))
        .toEqual(false)
});

test('The IP 010.1.50.11 is valid IPv4? must be false', () => {
    expect(isValidIPv4('010.1.50.11'))
        .toEqual(false)
});

test('The IP 10.1.050.11 is valid IPv4? must be false', () => {
    expect(isValidIPv4('10.1.050.11'))
        .toEqual(false)
});

test('The IP 255.255.255.11 is valid IPv4? must be true', () => {
    expect(isValidIPv4('255.255.255.11'))
        .toEqual(true)
});