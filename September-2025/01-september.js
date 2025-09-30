/*
INSTRUCTIONS

The Tribonacci sequence is a series of numbers where each number is the sum of the three preceding ones. 
When starting with 0, 0 and 1, the first 10 numbers in the sequence are 0, 0, 1, 1, 2, 4, 7, 13, 24, 44.

Given an array containing the first three numbers of a Tribonacci sequence, and an integer representing 
the length of the sequence, return an array containing the sequence of the given length.

    - Your function should handle sequences of any length greater than or equal to zero.
    - If the length is zero, return an empty array.
    - Note that the starting numbers are part of the sequence.
*/

function tribonacciSequence(startSequence, length) {
    let result = [...startSequence]
    if (length === 0)
        return []
    if (length <= 3)
        return startSequence.slice(0, length)

    for (let i = 3; i < length; i++) {
        const nextNumber = result[i - 1] + result[i - 2] + result[i - 3];
        result.push(nextNumber);
    }


    return result
}

module.exports = tribonacciSequence
