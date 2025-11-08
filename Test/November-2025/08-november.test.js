const canPost = require('../../November-2025/08-november')

describe('Character Limit Challenge', () => {
    test('Given a string: "Hello world",determine if it fits in a post: "short post"', () => {
        expect(canPost('Hello world'))
            .toStrictEqual('short post')
    });

    test('Given a string: "This is a longer message but still under eighty characters.",determine if it fits in a post: "long post"', () => {
        expect(canPost('This is a longer message but still under eighty characters.'))
            .toStrictEqual('long post')
    });

    test('Given a string: "This message is too long to fit into either of the character limits for a social media post.",determine if it fits in a post: "invalid post"', () => {
        expect(canPost('This message is too long to fit into either of the character limits for a social media post.'))
            .toStrictEqual('invalid post')
    });
});