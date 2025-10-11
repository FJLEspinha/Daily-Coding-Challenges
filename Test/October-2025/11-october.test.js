const hexToDecimal = require('../../October-2025/11-october')

describe('Hex to Decimal Challenge', () => {
    test('Should return 10 to recibe "A"', () => {
        expect(hexToDecimal("A"))
            .toEqual(10)
    });
  
    test('Should return 21 to recibe "15"', () => {
        expect(hexToDecimal("15"))
            .toEqual(21)
    });
  
    test('Should return 46 to recibe "2E"', () => {
        expect(hexToDecimal("2E"))
            .toEqual(46)
    });
  
    test('Should return 255 to recibe "FF"', () => {
        expect(hexToDecimal("FF"))
            .toEqual(255)
    });
  
    test('Should return 2623 to recibe "A3F"', () => {
        expect(hexToDecimal("A3F"))
            .toEqual(2623)
    });
});