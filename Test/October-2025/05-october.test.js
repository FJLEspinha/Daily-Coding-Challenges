const hasExoplanet = require('../../October-2025/05-october')

test('Given a String: "665544554" is a exoplanet must return: false', () => {
    expect(hasExoplanet("665544554"))
        .toEqual(false)
});

test('Given a String: "FGFFCFFGG" is a exoplanet must return: true', () => {
    expect(hasExoplanet("FGFFCFFGG"))
        .toEqual(true)
});

test('Given a String: "MONOPLONOMONPLNOMPNOMP" is a exoplanet must return: false', () => {
    expect(hasExoplanet("MONOPLONOMONPLNOMPNOMP"))
        .toEqual(false)
});

test('Given a String: "FREECODECAMP" is a exoplanet must return: true', () => {
    expect(hasExoplanet("FREECODECAMP"))
        .toEqual(true)
});

test('Given a String: "9AB98AB9BC98A" is a exoplanet must return: false', () => {
    expect(hasExoplanet("9AB98AB9BC98A"))
        .toEqual(false)
});

test('Given a String: "ZXXWYZXYWYXZEGZXWYZXYGEE" is a exoplanet must return: true', () => {
    expect(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE"))
        .toEqual(true)
});