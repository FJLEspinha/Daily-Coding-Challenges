const reverseSentence = require('../../September-2025/11-september')

test('Reverse the sentence: world hello', () => {
    expect(reverseSentence('world hello'))
        .toBe('hello world')
});

test('Reverse the sentence: push commit git', () => {
    expect(reverseSentence('push commit git'))
        .toBe('git commit push')
});

test('Reverse the sentence: npm  install  sudo', () => {
    expect(reverseSentence('npm  install  sudo'))
        .toBe('sudo install npm')
});

test('Reverse the sentence: import    default   function  export', () => {
    expect(reverseSentence('import    default   function  export'))
    .toBe('export function default import')
});
