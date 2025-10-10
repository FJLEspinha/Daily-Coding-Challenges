/*
ISNTRUCTIONS

Vowel Balance

Given a string, determine whether the number of vowels in the first half of the string 
is equal to the number of vowels in the second half.

    - The string can contain any characters.
    - The letters a, e, i, o, and u, in either uppercase or lowercase, 
      are considered vowels.
    - If there's an odd number of characters in the string, ignore the center character.
*/

function isBalanced(s) {

    const pattern = /[aeiou]/g
    const strLower = s.toLowerCase(s)
    const lengthStr = strLower.length
    const middleStr = lengthStr / 2
    const firstPart = strLower.substring(0, middleStr)
    const vowelsFirtPart = firstPart.match(pattern)

    const isTrue = (first, second) => {
        if ((first || []).length === (second || []).length) return true
        return false
    }

    if (lengthStr % 2 === 0) {
        const secondPart = strLower.substring(middleStr)
        const vowelsSecondPart = secondPart.match(pattern)

        return isTrue(vowelsFirtPart, vowelsSecondPart)
    }

    const secondPart = strLower.substring(middleStr + 1)
    const vowelsSecondPart = secondPart.match(pattern)

    return isTrue(vowelsFirtPart, vowelsSecondPart)
}

module.exports = isBalanced
