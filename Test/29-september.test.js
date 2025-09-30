const getLongestWord = require('../September-2025/29-september')

test('Given a sentence: "coding is fun" return longest word, must return: "coding"', () => {
    expect(getLongestWord("coding is fun"))
    .toBe("coding")
});

test('Given a sentence: "Coding challenges are fun and educational." return longest word, must return: "educational"', () => {
    expect(getLongestWord("Coding challenges are fun and educational."))
    .toBe("educational")
});

test('Given a sentence: "This sentence has multiple long words." return longest word, must return: "sentence"', () => {
    expect(getLongestWord("This sentence has multiple long words."))
    .toBe("sentence")
});
