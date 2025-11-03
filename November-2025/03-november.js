/*
INSTRUCTIONS

    Word Counter

Given a sentence string, return the number of words that are in the sentence.

    - Words are any sequence of non-space characters and are separated by 
      a single space.
*/

function countWords(sentence) {
    const words = sentence.replace(/[¡!,.¿?-]/g, '')
        .trim()
        .split(/\s+/)

    if (words[0] === '' && words.length === 1)
        return 0

    return words.length
}

module.exports = countWords
