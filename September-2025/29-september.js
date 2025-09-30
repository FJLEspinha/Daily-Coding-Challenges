/*
INSTRUCTIONS

Longest Word

Given a sentence, return the longest word in the sentence.

    - Ignore periods (.) when determining word length.
    - If multiple words are ties for the longest, 
    return the first one that occurs.
*/

function getLongestWord(sentence) {
    return sentence.split(/[\s.]/).reduce((longWord, currentWord) => {
        return currentWord.length > longWord.length ? currentWord : longWord
    })
}

module.exports = getLongestWord
