const generateSlug = require('../../September-2025/17-september')

test('Return a URL-friendly of helloWorld must be -> helloworld ', () => {
    expect(generateSlug('helloWorld'))
        .toBe('helloworld')
})

test('Return a URL-friendly of hello world! must be -> hello%20world ', () => {
    expect(generateSlug('hello world!'))
        .toBe('hello%20world')
})

test('Return a URL-friendly of " hello-world " must be -> helloworld ', () => {
    expect(generateSlug(' hello-world '))
        .toBe('helloworld')
})

test('Return a URL-friendly of "hello  world" must be -> hello%20world', () => {
    expect(generateSlug('hello  world'))
        .toBe('hello%20world')
})

test('Return a URL-friendly of "  ?H^3-1*1]0! W[0%R#1]D  " must be -> h3110%20w0r1d', () => {
    expect(generateSlug('  ?H^3-1*1]0! W[0%R#1]D  '))
        .toBe('h3110%20w0r1d')
})