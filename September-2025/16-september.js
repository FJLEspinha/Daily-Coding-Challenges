/*
INSTRUCTIONS

Sentence Capitalizer

Given a paragraph, return a new paragraph where the first letter of each 
sentence is capitalized.

    - All other characters should be preserved.
    - Sentences can end with a period (.), one or more question marks (?), 
    or one or more exclamation points (!).

*/

function capitalize(paragraph) {
    const regexMarks = /[.!?]+/g
    let outputParagraph = ''
    for (let i = 0; i < paragraph.length; i++) {
        if (i === 0) {
            outputParagraph += paragraph.charAt(i).toUpperCase()
            i++
        }
        if (paragraph.charAt(i).match(regexMarks) && i < paragraph.length) {
            if (paragraph.charAt(i) === '.' && paragraph.charAt(i + 1) !== '.') {
                outputParagraph += paragraph.charAt(i)
                if (paragraph.charAt(i + 1) === ' ') {
                    outputParagraph += paragraph.charAt(i + 1)
                    outputParagraph += paragraph.charAt(i + 2).toUpperCase()
                    i += 3
                } else if (paragraph.charAt(i + 1) !== ' ') {
                    outputParagraph += paragraph.charAt(i + 1).toUpperCase()
                    i += 2

                }
            }
            if ((paragraph.charAt(i) === '!' && paragraph.charAt(i + 1) !== '!') || (paragraph.charAt(i) === '?' && paragraph.charAt(i + 1) !== '?')) {
                outputParagraph += paragraph.charAt(i)
                outputParagraph += paragraph.charAt(i + 1).toUpperCase()
                i += 2

            }
        }

        outputParagraph += paragraph.charAt(i)
    }
    return outputParagraph


}

module.exports = capitalize

