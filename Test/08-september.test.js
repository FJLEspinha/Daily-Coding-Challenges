const buildAcronym = require('../September-2025/08-september')

test('The acronym of Search Engine Optimization must be SEO', () => {
    expect(buildAcronym('Search Engine Optimization'))
        .toBe('SEO')
});

test('The acronym of Frequently Asked Questions must be FAQ', () => {
    expect(buildAcronym('Frequently Asked Questions'))
        .toBe('FAQ')
});

test('The acronym of National Aeronautics and Space Administration must be NASA', () => {
    expect(buildAcronym('National Aeronautics and Space Administration'))
        .toBe('NASA')
});

test('The acronym of Federal Bureau of Investigation must be FBI', () => {
    expect(buildAcronym('Federal Bureau of Investigation'))
        .toBe('FBI')
});

test('The acronym of For your information must be FYI', () => {
    expect(buildAcronym('For your information'))
        .toBe('FYI')
});

test('The acronym of By the way must be BTW', () => {
    expect(buildAcronym('By the way'))
        .toBe('BTW')
});

test('The acronym of An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily must be AUHWPOTIMSH', () => {
    expect(buildAcronym('An unstoppable herd of waddling penguins overtakes the icy mountains and sings happily'))
        .toBe('AUHWPOTIMSH')
});