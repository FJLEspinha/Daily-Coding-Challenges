/*
INSTRUCTIONS

Integer Sequence

Given a positive integer, return a string with all of the integers from 1 up 
to, and including, the given number, in numerical order.

For example, given 5, return "12345".
*/

function sequence(n) {

    return Array.from({ length: n }, (_, i) => i + 1).join('')
}

module.exports = sequence
