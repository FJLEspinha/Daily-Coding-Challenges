const sockPairs = require('../../October-2025/18-october')

describe('Missing Socks Challenge', () => {
    test('Given two integers: represent (pair socks, wash cycles): 2, 5, return complete pairs socks: 1', () => {
        expect(sockPairs(2, 5))
            .toEqual(1)
    });

    test('Given two integers: represent (pair socks, wash cycles): 1, 2, return complete pairs socks: 0', () => {
        expect(sockPairs(1, 2))
            .toEqual(0)
    });

    test('Given two integers: represent (pair socks, wash cycles): 5, 11, return complete pairs socks: 4', () => {
        expect(sockPairs(5, 11))
            .toEqual(4)
    });

    test('Given two integers: represent (pair socks, wash cycles): 6, 25, return complete pairs socks: 3', () => {
        expect(sockPairs(6, 25))
            .toEqual(3)
    });

    test('Given two integers: represent (pair socks, wash cycles): 1, 8, return complete pairs socks: 0', () => {
        expect(sockPairs(1, 8))
            .toEqual(0)
    });
});