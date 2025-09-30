/*
INSTRUCTIONS
Word Frequency

Given a paragraph, return an array of the three most frequently occurring words.

    - Words in the paragraph will be separated by spaces.
    - Ignore case in the given paragraph. For example, 
    treat Hello and hello as the same word.
    - Ignore punctuation in the given paragraph. 
    Punctuation consists of commas (,), periods (.), 
    and exclamation points (!).
    - The returned array should have all lowercase words.
    - The returned array should be in descending order 
    with the most frequently occurring word first.


*/

function getWords(paragraph) {
    const regexPattern = /[\s.,!]+/g
    const cleanArrayWords = paragraph.toLowerCase().split(regexPattern)
    const countWords = cleanArrayWords.reduce((counter, word) => {
        counter[word] = (counter[word] || 0) + 1
        return counter
    }, {})
    const sortedCountWords = Object.entries(countWords).sort(([, countA], [, countB]) => countB - countA)
    const repeatWords = sortedCountWords.filter(([word, num]) => num > 1)
    if (repeatWords.length < 3) {
        repeatWords.push(sortedCountWords[2])
    }

    const resultWords = repeatWords.flat().filter(word => typeof (word) === 'string')

    return resultWords
}

module.exports = getWords
