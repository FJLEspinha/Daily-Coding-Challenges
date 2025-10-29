const navigate = require('../../October-2025/28-october')

describe('Navigator Challenge', () => {
    test('Given an array of browser commands: ["Visit About Us", "Back", "Forward"], return the current page: "About Us"', () => {
        expect(navigate(['Visit About Us', 'Back', 'Forward']))
            .toEqual('About Us')
    });

    test('Given an array of browser commands: ["Forward"], return the current page: "Home"', () => {
        expect(navigate(['Forward']))
            .toEqual('Home')
    });

    test('Given an array of browser commands: ["Back"], return the current page: "Home"', () => {
        expect(navigate(['Back']))
            .toEqual('Home')
    });

    test('Given an array of browser commands: ["Visit About Us", "Visit Gallery"], return the current page: "Gallery"', () => {
        expect(navigate(['Visit About Us', 'Visit Gallery']))
            .toEqual('Gallery')
    });

    test('Given an array of browser commands: ["Visit About Us", "Visit Gallery", "Back", "Back"], return the current page: "Home"', () => {
        expect(navigate(['Visit About Us', 'Visit Gallery', 'Back', 'Back']))
            .toEqual('Home')
    });

    test('Given an array of browser commands: ["Visit About", "Visit Gallery", "Back", "Visit Contact", "Forward"], return the current page: "Contact"', () => {
        expect(navigate(['Visit About', 'Visit Gallery', 'Back', 'Visit Contact', 'Forward']))
            .toEqual('Contact')
    });

    test('Given an array of browser commands: ["Visit About Us", "Visit Visit Us", "Forward", "Visit Contact Us", "Back"], return the current page: "Visit Us"', () => {
        expect(navigate(['Visit About Us', 'Visit Visit Us', 'Forward', 'Visit Contact Us', 'Back']))
            .toEqual('Visit Us')
    });

    test('Given an array of browser commands: ["Visit Alpha", "Visit Beta", "Back", "Visit Gamma", "Back", "Forward"], return the current page: "Gamma"', () => {
        expect(navigate(['Visit Alpha', 'Visit Beta', 'Back', 'Visit Gamma', 'Back', 'Forward']))
            .toEqual('Gamma')
    });
});