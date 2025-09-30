/*
INSTRUCTIONS
Digits vs Letters

Given a string, return "digits" if the string has more digits than letters, 
"letters" if it has more letters than digits, and "tie" if it has the same 
amount of digits and letters.

    - Digits consist of 0-9.
    - Letters consist of a-z in upper or lower case.
    - Ignore any other characters.
*/

function digitsOrLetters(str) {
    const letters = str.toLowerCase().match(/[a-z]/g)
    const digits = str.match(/[0-9]/g)

    if (letters.length > digits.length) return 'letters'
    if (letters.length < digits.length) return 'digits'

    return 'tie'
}

module.exports = digitsOrLetters
