/*
INSTRUCTIONS

Slug Generator

Given a string, return a URL-friendly version of the string using the following constraints:

    - All letters should be lowercase.
    - All characters that are not letters, numbers, or spaces should be removed.
    - All spaces should be replaced with the URL-encoded space code %20.
    - Consecutive spaces should be replaced with a single %20.
    - The returned string should not have leading or trailing %20.

*/

function generateSlug(str) {
    const patternDelete = /[\W_]+/g
    const modifiedString = str.trim().toLowerCase()
    const removeLastChar = modifiedString.charAt(modifiedString.length - 1).match(patternDelete) !== null
        ? modifiedString.replace(modifiedString.charAt(modifiedString.length - 1), '')
        : modifiedString
    let strResult = ''

    for (let i = 0; i < removeLastChar.length; i++) {
        if (removeLastChar.charAt(i).match(patternDelete) && removeLastChar.charAt(i) !== ' ') {
            i++
        }
        if (removeLastChar.charAt(i).match(patternDelete)) {
            if (removeLastChar.charAt(i) === ' ' && removeLastChar.charAt(i + 1) === ' ') {
                i++
            }
            if (removeLastChar.charAt(i) === ' ') {
                strResult += '%20'
                i++
            }
        }

        strResult += modifiedString.charAt(i)
    }

    return strResult;
}

module.exports = generateSlug
