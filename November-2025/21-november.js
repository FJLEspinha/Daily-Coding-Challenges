/*
INSTRUCTIONS

    LCM

Given two integers, return the least common multiple (LCM) of the two numbers.

The LCM of two numbers is the smallest positive integer that is a multiple of 
both numbers. For example, given 4 and 6, return 12 because:

    - Multiples of 4 are 4, 8, 12 and so on.
    - Multplies of 6 are 6, 12, 18 and so on.
    - 12 is the smallest number that is a multiple of both.
*/

function lcm(a, b) {
    if (a === 0 || b === 0) return 1

    const gcdEuclidean = (num1, num2) => {
        while (num2) {
            [num1, num2] = [num2, num1 % num2]
        }
        return num1;
    }

    return Math.abs(a * b) / gcdEuclidean(a, b)
}

module.exports = lcm
