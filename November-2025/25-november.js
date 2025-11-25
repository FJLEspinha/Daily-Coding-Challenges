/*
INSTRUCTIONS

FizzBuzz

Given an integer (n), return an array of integers from 1 to n (inclusive), 
replacing numbers that are multiple of:

    - 3 with "Fizz".
    - 5 with "Buzz".
    - 3 and 5 with "FizzBuzz".
*/

function fizzBuzz(n) {
    return Array.from({ length: n }, (_, num) => num + 1)
        .map(num => {
            if (num % 3 === 0 && num % 5 === 0)
                return 'FizzBuzz'
            if (num % 3 === 0)
                return 'Fizz'
            if (num % 5 === 0)
                return 'Buzz'
            return num
        })
}

module.exports = fizzBuzz
