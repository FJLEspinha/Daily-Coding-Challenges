const calculateTips = require('../../October-2025/20-october')

describe('Tip Calculator Challenge', () => {
    test('Given two strings with the price and a custom tip percent: "$10.00", "25%" must return an array: ["$1.50", "$2.00", "$2.50"]', () => {
        expect(calculateTips('$10.00', '25%'))
            .toEqual(['$1.50', '$2.00', '$2.50'])
    });

    test('Given two strings with the price and a custom tip percent: "$89.67", "26%" must return an array: ["$13.45", "$17.93", "$23.31"]', () => {
        expect(calculateTips('$89.67', '26%'))
            .toEqual(['$13.45', '$17.93', '$23.31'])
    });

    test('Given two strings with the price and a custom tip percent: "$19.85", "9%" must return an array: ["$2.98", "$3.97", "$1.79"]', () => {
        expect(calculateTips('$19.85', '9%'))
            .toEqual(['$2.98', '$3.97', '$1.79'])
    });
});