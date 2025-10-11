const launchFuel = require('../../October-2025/10-october')

describe('Launch Fuel Challenge', () => {
    test('Should return 12.4 to 50 kg', () => {
        expect(launchFuel(50))
            .toEqual(12.4)
    });

    test('Should return 124.8 to 500 kg', () => {
        expect(launchFuel(500))
            .toEqual( 124.8)
    });

    test('Should return 60.7 to 243 kg', () => {
        expect(launchFuel(243))
            .toEqual(60.7)
    });

    test('Should return 2749.8 to 11000 kg', () => {
        expect(launchFuel(11000))
            .toEqual(2749.8)
    });

    test('Should return 1553.4 to 6214 kg', () => {
        expect(launchFuel(6214))
            .toEqual(1553.4)
    });
});