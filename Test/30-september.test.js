const formatNumber = require('../September-2025/30-september')

test('Given a string of digits: "05552340182" must return this string: "+0 (555) 234-0182"', () => {
    expect(formatNumber("05552340182"))
    .toBe("+0 (555) 234-0182")
})

test('Given a string of digits: "15554354792" must return this string: "+1 (555) 435-4792"', () => {
    expect(formatNumber("15554354792"))
    .toBe("+1 (555) 435-4792")
})