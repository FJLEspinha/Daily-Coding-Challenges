/*
INSTRUCTIONS

BuzzFizz

Given an array, determine if it is a correct FizzBuzz sequence from 1 to the last item 
in the array. A sequence is correct if:

    - Numbers that are multiples of 3 are replaced with "Fizz"
    - Numbers that are multiples of 5 are replaced with "Buzz"
    - Numbers that are multiples of both 3 and 5 are replaced with "FizzBuzz"
    - All other numbers remain as integers in ascending order, starting from 1.
    - The array must start at 1 and have no missing or extra elements.
*/

// Imperative approach, highly efficient with early exit
function isFizzBuzzImperative(sequence) {
    const valid = ['FizzBuzz', 'Fizz', 'Buzz']
    for (let i = 0, j = 1; i < sequence.length; i++, j++) {
        if (j % 15 === 0) {
            if (valid[0] !== sequence[i]) {
                return false
            }
        }
        else if (j % 3 === 0) {
            if (sequence[i] !== valid[1])
                return false
        }
        else if (j % 5 === 0) {
            if (valid[2] !== sequence[i])
                return false
        }

        else if (j !== sequence[i])
            return false

    }

    return true

}

// More beautiful and easy to understand
function isFizzBuzzEasyUnderstand(sequence) {
    return Array.from({ length: sequence.length }, (_, i) => i + 1)
        .map(i => {

            if (i % 3 === 0 && i % 5 === 0)
                return 'FizzBuzz'
            if (i % 3 === 0)
                return 'Fizz'
            if (i % 5 === 0)
                return 'Buzz'
            return i
        }).every((num, i) => {
            return num === sequence[i]
        })
}

module.exports = { isFizzBuzzImperative, isFizzBuzzEasyUnderstand }
