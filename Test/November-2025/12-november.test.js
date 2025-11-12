const generateSignature = require('../../November-2025/12-november')

describe('Email Signature Generator Challenge', () => {
    test('Given strings: "Quinn Waverly", "Founder and CEO", "TechCo", return an email signature: "--Quinn Waverly, Founder and CEO at TechCo"', () => {
        expect(generateSignature('Quinn Waverly', 'Founder and CEO', 'TechCo'))
            .toStrictEqual('--Quinn Waverly, Founder and CEO at TechCo')
    });

    test('Given strings: "Alice Reed", "Engineer", "TechCo", return an email signature: ">>Alice Reed, Engineer at TechCo"', () => {
        expect(generateSignature('Alice Reed', 'Engineer', 'TechCo'))
            .toStrictEqual('>>Alice Reed, Engineer at TechCo')
    });

    test('Given strings: "Tina Vaughn", "Developer", "example.com", return an email signature: "::Tina Vaughn,Developer at example.com"', () => {
        expect(generateSignature('Tina Vaughn', 'Developer', 'example.com'))
            .toStrictEqual('::Tina Vaughn, Developer at example.com')
    });

    test('Given strings: "B. B.", "Product Tester", "AcmeCorp", return an email signature: ">>B. B., Product Tester at AcmeCorp"', () => {
        expect(generateSignature('B. B.', 'Product Tester', 'AcmeCorp'))
            .toStrictEqual('>>B. B., Product Tester at AcmeCorp')
    });

    test('Given strings: "windstorm", "Cloud Architect", "Atmospheronics", return an email signature: "::windstorm, Cloud Architect at Atmospheronics"', () => {
        expect(generateSignature('windstorm', 'Cloud Architect', 'Atmospheronics'))
            .toStrictEqual('::windstorm, Cloud Architect at Atmospheronics')
    });
});