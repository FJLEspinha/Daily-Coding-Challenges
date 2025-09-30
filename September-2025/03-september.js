/*
INSTRUCTIONS
Pangram
Given a word or sentence and a string of lowercase letters, determine if the word 
or sentence uses all the letters from the given set at least once and no other letters.

  - Ignore non-alphabetical characters in the word or sentence.
  - Ignore letter casing in the word or sentence.

*/

function isPangram(sentence, letters) {
  let regex = /\w+/g
  sentence = sentence.toLowerCase()
  sentence = [...new Set(sentence)].join()
  sentence = [...sentence.matchAll(regex)]


  letters = [... new Set(letters)].join()
  letters = letters.split(',')

  if (sentence.length === letters.length) return true
  return false

}

module.exports = isPangram
