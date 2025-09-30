/*
INSTRUCTIONS
Acronym Builder
Given a string containing one or more words, return an acronym of 
the words using the following constraints:

    - The acronym should consist of the first letter of 
    each word capitalized,  unless otherwise noted.
    - The acronym should ignore the first letter of these 
    words unless they are the first word of the given 
    string: a, for, an, and, by, and of.
    - The acronym letters should be returned in order they are given.
    - The acronym should not contain any spaces.

*/


function buildAcronym(str) {
    const ignoreWords = ['a', 'for', 'an', 'and', 'by', 'of']
    const strArray = str.split(' ')
    let acronym = ''

    acronym += strArray[0][0]

    for (let i = 1; i < strArray.length; i++) {
        if (ignoreWords.includes(strArray[i])) i++
        acronym += (strArray[i][0].toUpperCase())
    }
    return acronym;
}

module.exports = buildAcronym
