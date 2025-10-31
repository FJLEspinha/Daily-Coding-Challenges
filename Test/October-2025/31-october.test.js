const spookify = require('../../October-2025/31-october')

describe('SpOoKy~CaSe Challenge', () => {
    test('Given a string representing a variable name: "hello_world",convert it to "spooky case": "HeLlO~wOrLd"', () => {
        expect(spookify('hello_world'))
            .toEqual('HeLlO~wOrLd')
    });

    test('Given a string representing a variable name: "Spooky_Case",convert it to "spooky case": "SpOoKy~CaSe"', () => {
        expect(spookify('Spooky_Case'))
            .toEqual('SpOoKy~CaSe')
    });

    test('Given a string representing a variable name: "TRICK-or-TREAT",convert it to "spooky case": "TrIcK~oR~tReAt"', () => {
        expect(spookify('TRICK-or-TREAT'))
            .toEqual('TrIcK~oR~tReAt')
    });

    test('Given a string representing a variable name: "c_a-n_d-y_-b-o_w_l",convert it to "spooky case": "C~a~N~d~Y~~b~O~w~L"', () => {
        expect(spookify('c_a-n_d-y_-b-o_w_l'))
            .toEqual('C~a~N~d~Y~~b~O~w~L')
    });

    test('Given a string representing a variable name: "thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts",convert it to "spooky case": "ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS"', () => {
        expect(spookify('thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts'))
            .toEqual('ThE~hAuNtEd~HoUsE~iS~fUlL~oF~gHoStS')
    });
});