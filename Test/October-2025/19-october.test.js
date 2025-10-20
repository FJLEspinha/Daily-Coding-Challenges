const extractAttributes = require('../../October-2025/19-october')

describe('HTML Attribute Extractor Challenge', () => {
    test('Given a string of a valid HTML element: "<span class="red"></span>" , return the attributes: ["class, red"]', () => {
        expect(extractAttributes('<span class="red"></span>'))
            .toEqual(["class, red"])
    });

    test('Given a string of a valid HTML element: "<meta charset="UTF-8" />" , return the attributes: ["charset, UTF-8"]', () => {
        expect(extractAttributes('<meta charset="UTF-8" />'))
            .toEqual(["charset, UTF-8"])
    });

    test('Given a string of a valid HTML element: "<p>Lorem ipsum dolor sit amet</p>" , return the attributes: []', () => {
        expect(extractAttributes('<p>Lorem ipsum dolor sit amet</p>'))
            .toEqual([])
    });

    test('Given a string of a valid HTML element: "<input name="email" type="email" required="true" />" , return the attributes: ["name, email", "type, email", "required, true"]', () => {
        expect(extractAttributes('<input name="email" type="email" required="true" />'))
            .toEqual(["name, email", "type, email", "required, true"])
    });

    test('Given a string of a valid HTML element: "<button id="submit" class="btn btn-primary">Submit</button>" , return the attributes: ["id, submit", "class, btn btn-primary"]', () => {
        expect(extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>'))
            .toEqual(["id, submit", "class, btn btn-primary"])
    });
});