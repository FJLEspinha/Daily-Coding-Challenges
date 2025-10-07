const getHeadings = require('../../September-2025/28-september')

test('Given a string: "name,age,city" must return an array: ["name", "age", "city"]', () => {
    expect(getHeadings("name,age,city"))
        .toEqual(["name", "age", "city"])
});

test('Given a string: "first name,last name,phone" must return an array: ["first name", "last name", "phone"]', () => {
    expect(getHeadings("first name,last name,phone"))
        .toEqual(["first name", "last name", "phone"])
});

test('Given a string: "username , email , signup date " must return an array: ["username", "email", "signup date"]', () => {
    expect(getHeadings("username , email , signup date "))
        .toEqual(["username", "email", "signup date"])
});