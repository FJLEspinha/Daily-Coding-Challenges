const moonPhase = require('../../October-2025/09-october')

describe('Lunar Cycle Challenge', () => {
    test('Should return "New" for "2000-01-12"', () => {
        expect(moonPhase('2000-01-12'))
            .toEqual('New')
    });

    test('Should return "Waxing" for "2000-01-13"', () => {
        expect(moonPhase('2000-01-13'))
            .toEqual('Waxing')
    });
  
    test('Should return "Full" for "2014-10-15"', () => {
        expect(moonPhase('2014-10-15'))
            .toEqual('Full')
    });
  
    test('Should return "Waning" for "2012-10-21"', () => {
        expect(moonPhase('2012-10-21'))
            .toEqual('Waning')
    });
  
    test('Should return "New" for "2022-12-14"', () => {
        expect(moonPhase('2022-12-14'))
            .toEqual('New')
    });
})