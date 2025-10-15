const stripTags = require('../../October-2025/15-october')

describe('HTML Tag Stripper Challenge', () => {
    test('Given a string of HTML: "<a href="#">Click here</a>" must return the plain text: "Click here"', () => {
        expect(stripTags('<a href="#">Click here</a>'))
            .toEqual('Click here')
    });
    
    test('Given a string of HTML: "<p class="center">Hello <b>World</b>!</p>" must return the plain text: "Hello World!"', () => {
        expect(stripTags('<p class="center">Hello <b>World</b>!</p>'))
            .toEqual('Hello World!')
    });
    
    test('Given a string of HTML: "<img src="cat.jpg" alt="Cat">" must return the plain text: ""', () => {
        expect(stripTags('<img src="cat.jpg" alt="Cat">'))
            .toEqual('')
    });
    
    test('Given a string of HTML: "<main id="main"><section class="section">section</section><section class="section">section</section></main>" must return the plain text: "sectionsection"', () => {
        expect(stripTags('<main id="main"><section class="section">section</section><section class="section">section</section></main>'))
            .toEqual('sectionsection')
    });
});