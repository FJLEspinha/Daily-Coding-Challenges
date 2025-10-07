const getWords = require('../../September-2025/14-september')

test("Most frequency words of: Coding in Python is fun because coding Python allows for coding in Python easily while coding", () => {
    expect(getWords('Coding in Python is fun because coding Python allows for coding in Python easily while coding'))
        .toStrictEqual(['coding', 'python', 'in'])
});

test("Most frequency words of: I like coding. I like testing. I love debugging!", () => {
    expect(getWords("I like coding. I like testing. I love debugging!"))
        .toStrictEqual(['i', 'like', 'coding'])
})

test("Most frequenzy words of: Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!", () => {
    expect(getWords('Debug, test, deploy. Debug, debug, test, deploy. Debug, test, test, deploy!'))
        .toStrictEqual(['debug', 'test', 'deploy'])
})