/*
INSTRUCTIONS

Character Count

Given a sentence string, return an array with a count of each character in alphabetical 
order.

    - Treat upper and lowercase letters as the same letter when counting.
    - Ignore numbers, spaces, punctuation, etc.
    - Return the count and letter in the format "letter count". For instance, "a 3".
    - All returned letters should be lowercase.
    - Do not return a count of letters that are not in the given string.
*/

function countCharacters(sentence) {
    const clearOrderedArraySentence = sentence.replace(/[^a-z]/gi, '')
        .toLowerCase()
        .split('')
        .sort()
    const countLetters = {}

    for (const letter of clearOrderedArraySentence) {
        countLetters[letter] = (countLetters[letter] || 0) + 1
    }

    const finalCounterChar = []
    for (const char in countLetters) {
        finalCounterChar.push(`${char} ${countLetters[char]}`)
    }

    return finalCounterChar
}

module.exports = countCharacters
