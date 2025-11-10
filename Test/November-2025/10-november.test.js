const getExtension = require('../../November-2025/10-november')

describe('Extension Extractor Challenge', () => {
    test('Given a string: "document.txt",return the extension: "txt"', () => {
        expect(getExtension('document.txt'))
            .toStrictEqual('txt')
    });

    test('Given a string: "README",return the extension: "none"', () => {
        expect(getExtension('README'))
            .toStrictEqual('none')
    });

    test('Given a string: "image.PNG",return the extension: "PNG"', () => {
        expect(getExtension('image.PNG'))
            .toStrictEqual('PNG')
    });

    test('Given a string: ".gitignore",return the extension: "gitignore"', () => {
        expect(getExtension('.gitignore'))
            .toStrictEqual('gitignore')
    });

    test('Given a string: "archive.tar.gz",return the extension: "gz"', () => {
        expect(getExtension('archive.tar.gz'))
            .toStrictEqual('gz')
    });

    test('Given a string: "final.draft.",return the extension: "none"', () => {
        expect(getExtension('final.draft.'))
            .toStrictEqual('none')
    });

    test('Given a string: "",return the extension: "none"', () => {
        expect(getExtension(''))
            .toStrictEqual('none')
    });
});