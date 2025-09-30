/*
INSTRUCTIONS

RGB to Hex
Given a CSS rgb(r, g, b) color string, return its hexadecimal equivalent.

Here are some example outputs for a given input:

        Input	                Output
    "rgb(255, 255, 255)"	"#ffffff"
    "rgb(1, 2, 3)"      	"#010203"
- Make any letters lowercase.
- Return a # followed by six characters. Don't use any shorthand values.

*/

function rgbToHex(rgb) {
    const regex = /[0-9]+/g
    const rgbFound = [...rgb.matchAll(regex)]
    let finalHex = '#'

    for (let i = 0; i < 3; i++) {
        let num = 0
        let numHex = ''

        num = parseInt(rgbFound[i][0])
        numHex = num.toString(16)
        if (numHex.length < 2) {
            numHex = numHex.padStart(2, '0')
        }
        finalHex += numHex

    }
    return finalHex

}

module.exports = rgbToHex
