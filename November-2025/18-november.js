/*
INSTRUCTIONS

100 Characters

Welcome to the 100th Daily Coding Challenge!

Given a string, repeat its characters until the result is exactly 100 characters long. 
If your repetitions go over 100 characters, trim the extra so it's exactly 100.
*/

function oneHundred(chars) {
    const timesRepeat = Math.ceil(100 / chars.length)
    const oneHundredChars = chars.repeat(timesRepeat)

    return oneHundredChars.slice(0, 100)
}

module.exports = oneHundred
