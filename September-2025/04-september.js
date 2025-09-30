/*
INSTRUCTIONS
Vowel Repeater
Given a string, return a new version of the string where each vowel 
is duplicated one more time than the previous vowel you encountered. 
For instance, the first vowel in the sentence should remain unchanged. 
The second vowel should appear twice in a row. The third vowel should appear three times in a row, and so on.

  - The letters a, e, i, o, and u, in either uppercase or lowercase, are considered vowels.
  - The original vowel should keeps its case.
  - Repeated vowels should be lowercase.
  - All non-vowel characters should keep their original case.

*/


function repeatVowels(str) {
    const regex = /[aeiou]/gi
    let count = 1
    let strOut = ''

    strOut += str.replace(regex, (vowel) =>{
            vowel = vowel+vowel.repeat(count-1).toLowerCase()
            count++
            return vowel
    })

  return strOut;
}

module.exports = repeatVowels
