const costToFill = require('../../September-2025/18-september')

test('If fuel tank = 20, fuel Level = 0 and price per gallon = 4.00 costToFill must be = $80.00', () => {
    expect(costToFill(20, 0, 4.00))
    .toEqual('$80.00')
});

test('If fuel tank = 15, fuel Level = 10 and price per gallon = 3.50 costToFill must be = $17.50', () => {
    expect(costToFill(15, 10, 3.50))
        .toEqual('$17.50')
});

test('If fuel tank = 18, fuel Level = 9, and price per gallon = 3.25 costToFill must be = $29.25', () => {
    expect(costToFill(18, 9, 3.25))
        .toEqual('$29.25')
});

test('If fuel tank = 12, fuel Level = 12, and price per gallon = 4.99 costToFill must be = $0.00', () => {
    expect(costToFill(12, 12, 4.99))
        .toEqual('$0.00')
});

test('If fuel tank = 15, fuel Level = 9.5, and price per gallon = 3.98 costToFill must be = $21.89', () => {
    expect(costToFill(15, 9.5, 3.98))
        .toEqual('$21.89')
});