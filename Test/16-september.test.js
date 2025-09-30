const capitalize = require('../September-2025/16-september')

test('Capitalize: this is a simple sentence', () => {
    expect(capitalize('this is a simple sentence.')).toBe('This is a simple sentence.')
});

test('Capitalize: hello world. how are you?', () => {
    expect(capitalize('hello world. how are you?')).toBe('Hello world. How are you?')
});

test("Capitalize: 'i did today's coding challenge... it was fun!!'", () => {
    expect(capitalize("i did today's coding challenge... it was fun!!"))
        .toBe("I did today's coding challenge... It was fun!!")
});
test('Capitalize: crazy!!!strange???unconventional...sentences.', () => {
    expect(capitalize('crazy!!!strange???unconventional...sentences.'))
        .toBe('Crazy!!!Strange???Unconventional...Sentences.')
});

test("Capitalize: 'there's a space before this period . why is there a space before that period ?'", () => {
    expect(capitalize("there's a space before this period . why is there a space before that period ?"))
        .toBe("There's a space before this period . Why is there a space before that period ?")
});