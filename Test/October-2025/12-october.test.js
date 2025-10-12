const battle = require('../../October-2025/12-october')

describe('Battle of Words Challenge', () => {
    test('Recieve: "hello world", "hello word" must return: "We win"', () => {
        expect(battle('hello world', 'hello word'))
            .toEqual('We win')
    });

    test('Recieve: "Hello world", "hello world" must return: "We win"', () => {
        expect(battle('Hello world', 'hello world'))
            .toEqual('We win')
    });

    test('Recieve: "lorem ipsum", "kitty ipsum" must return: "We lose"', () => {
        expect(battle('lorem ipsum', 'kitty ipsum'))
            .toEqual('We lose')
    });

    test('Recieve: "hello world", "world hello" must return: "Draw"', () => {
        expect(battle('hello world', 'world hello'))
            .toEqual('Draw')
    });

    test('Recieve: "git checkout", "git switch" must return: "We win"', () => {
        expect(battle('git checkout', 'git switch'))
            .toEqual('We win')
    });

    test('Recieve: "Cheeseburger with fries", "Cheeseburger with Fries" must return: "We lose"', () => {
        expect(battle('Cheeseburger with fries', 'Cheeseburger with Fries'))
            .toEqual('We lose')
    });

    test('Recieve: "We must never surrender", "Our team must win" must return: "Draw"', () => {
        expect(battle('We must never surrender', 'Our team must win'))
            .toEqual('Draw')
    });
});