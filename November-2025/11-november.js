/*
INSTRUCTIONS

Vowels and Consonants

Given a string, return an array with the number of vowels and number of consonants 
in the string.

    - Vowels consist of a, e, i, o, u in any case.
    - Consonants consist of all other letters in any case.
    - Ignore any non-letter characters.

For example, given "Hello World", return [3, 7].
*/

function count(str) {
    const arrayVowelsStr = str.toLowerCase()
        .match(/[aeiou]/g) || []
    const arrayConsonantstStr = str.toLowerCase()
        .replace(/[^a-z]/g, '')
        .match(/[^aeiou]/g) || []
    const countVowelsConsonats = [arrayVowelsStr.length, arrayConsonantstStr.length]

    return countVowelsConsonats

}

module.exports = count
