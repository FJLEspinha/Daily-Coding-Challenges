const wiseSpeak = require('../../October-2025/22-october')

describe('Speak Wisely, You Must Challenge', () => {
    test('Given a sentence: "You must speak wisely.", return a version of a wise teacher: "Speak wisely, you must."', () => {
        expect(wiseSpeak('You must speak wisely.'))
            .toEqual('Speak wisely, you must.')
    });

    test('Given a sentence: "You can do it!.", return a version of a wise teacher: "Do it, you can!"', () => {
        expect(wiseSpeak('You can do it!'))
            .toEqual('Do it, you can!')
    });

    test('Given a sentence: "Do you think you will complete this?", return a version of a wise teacher: "Complete this, do you think you will?"', () => {
        expect(wiseSpeak('Do you think you will complete this?'))
            .toEqual('Complete this, do you think you will?')
    });

    test('Given a sentence: "All your base are belong to us.", return a version of a wise teacher: "Belong to us, all your base are."', () => {
        expect(wiseSpeak('All your base are belong to us.'))
            .toEqual('Belong to us, all your base are.')
    });

    test('Given a sentence: "You have much to learn.", return a version of a wise teacher: "Much to learn, you have."', () => {
        expect(wiseSpeak('You have much to learn.'))
            .toEqual('Much to learn, you have.')
    });
});