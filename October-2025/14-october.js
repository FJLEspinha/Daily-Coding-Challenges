/*
INSTRUCTIONS

String Count

Given two strings, determine how many times the second string appears 
in the first.

    - The pattern string can overlap in the first string. 
      For example, "aaa" contains "aa" twice. 
      The first two a's and the second two.
*/

function count(text, pattern) {
    let counter = 0
    const length = text.length - pattern.length
    for (let i = 0; i <= length; i++) {
        if (text.charAt(i) === pattern.charAt(0)) {
            const isEqual = text.substring(i, (i + pattern.length))
            if (isEqual === pattern) counter++
        }
    }

    return counter
}

module.exports = count


