const complementaryDNA = require('../../October-2025/25-october')

describe('Complementary DNA Challenge', () => {
    test('Given a string: "ACGT" return its complementary: "TGCA"', () => {
        expect(complementaryDNA('ACGT'))
            .toEqual('TGCA')
    });

    test('Given a string: "ATGCGTACGTTAGC" return its complementary: "TACGCATGCAATCG"', () => {
        expect(complementaryDNA('ATGCGTACGTTAGC'))
            .toEqual('TACGCATGCAATCG')
    });

    test('Given a string: "GGCTTACGATCGAAG" return its complementary: "CCGAATGCTAGCTTC"', () => {
        expect(complementaryDNA('GGCTTACGATCGAAG'))
            .toEqual('CCGAATGCTAGCTTC')
    });

    test('Given a string: "GATCTAGCTAGGCTAGCTAG" return its complementary: "CTAGATCGATCCGATCGATC"', () => {
        expect(complementaryDNA('GATCTAGCTAGGCTAGCTAG'))
            .toEqual('CTAGATCGATCCGATCGATC')
    });
});