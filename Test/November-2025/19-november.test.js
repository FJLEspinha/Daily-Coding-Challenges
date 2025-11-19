const convert = require('../../November-2025/19-november')

describe('Markdown Heading Converter Challenge', () => {
    test('Given a Markdown string: "# My level 1 heading", return the equivalent HTML: "<h1>My level 1 heading</h1>"', () => {
        expect(convert('# My level 1 heading'))
            .toEqual('<h1>My level 1 heading</h1>')
    });

    test('Given a Markdown string: "My heading", return the equivalent HTML: "Invalid format"', () => {
        expect(convert('My heading'))
            .toEqual('Invalid format')
    });

    test('Given a Markdown string: "##### My level 5 heading", return the equivalent HTML: "<h5>My level 5 heading</h5>"', () => {
        expect(convert('##### My level 5 heading'))
            .toEqual('<h5>My level 5 heading</h5>')
    });

    test('Given a Markdown string: "#My heading", return the equivalent HTML: "Invalid format"', () => {
        expect(convert('#My heading'))
            .toEqual('Invalid format')
    });

    test('Given a Markdown string: "  ###  My level 3 heading", return the equivalent HTML: "<h3>My level 3 heading</h3>"', () => {
        expect(convert('  ###  My level 3 heading'))
            .toEqual('<h3>My level 3 heading</h3>')
    });

    test('Given a Markdown string: "####### My level 7 heading", return the equivalent HTML: "Invalid format"', () => {
        expect(convert('####### My level 7 heading'))
            .toEqual('Invalid format')
    });

    test('Given a Markdown string: "## My #2 heading", return the equivalent HTML: "<h2>My #2 heading</h2>"', () => {
        expect(convert('## My #2 heading'))
            .toEqual('<h2>My #2 heading</h2>')
    });
});