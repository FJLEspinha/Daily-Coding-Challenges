const isSpam = require('../../September-2025/27-september')

test('Given a phone number: "+0 (200) 234-0182" is spam? must return false', () => {
    expect(isSpam("+0 (200) 234-0182"))
        .toEqual(false)
});

test('Given a phone number: "+091 (555) 309-1922" is spam? must return true', () => {
    expect(isSpam("+091 (555) 309-1922"))
        .toEqual(true)
});

test('Given a phone number: "+1 (555) 435-4792" is spam? must return true', () => {
    expect(isSpam("+1 (555) 435-4792"))
        .toEqual(true)
});

test('Given a phone number: "+0 (955) 234-4364" is spam? must return true', () => {
    expect(isSpam("+0 (955) 234-4364"))
        .toEqual(true)
});

test('Given a phone number: "+0 (155) 131-6943" is spam? must return true', () => {
    expect(isSpam("+0 (155) 131-6943"))
        .toEqual(true)
});

test('Given a phone number: "+0 (555) 135-0192" is spam? must return true', () => {
    expect(isSpam("+0 (555) 135-0192"))
        .toEqual(true)
});

test('Given a phone number: "+0 (555) 564-1987" is spam? must return true', () => {
    expect(isSpam("+0 (555) 564-1987"))
        .toEqual(true)
});

test('Given a phone number: "+00 (555) 234-0182" is spam? must return false', () => {
    expect(isSpam("+00 (555) 234-0182"))
        .toEqual(false)
});

test('Given a phone number: "0 (555) 131-6943" is spam? must return true', () => {
    expect(isSpam("0 (555) 131-6943"))
        .toEqual(true)
});