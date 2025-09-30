/*
INSTRUCTIONS

String Mirror

Given two strings, determine if the second string is a mirror of the first.

    - A string is considered a mirror if it contains the same letters 
    in reverse order.
    - Treat uppercase and lowercase letters as distinct.
    - Ignore all non-alphabetical characters.
*/

function isMirror(str1, str2) {
    const charOmit = /[^\w\s]/g
    const reverseStr1 = str1.split('').reverse().join('')
  
    if (!str2.includes(' ')) {
        if (reverseStr1 === str2.replace(charOmit, ' ').trim()) return true
    } else {
        if (reverseStr1 === str2.replace(charOmit, '').trim()) return true
    }

    return false;
}

module.exports = isMirror
