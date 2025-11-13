/*
INSTRUCTIONS

Array Shift

Given an array and an integer representing how many positions to shift the array, 
return the shifted array.

    - A positive integer shifts the array to the left.
    - A negative integer shifts the array to the right.
    - The shift wraps around the array.

For example, given [1, 2, 3] and 1, shift the array 1 to the left, 
returning [2, 3, 1].
*/

function shiftArray(arr, n) {
    let modifiedArr = [...arr]
    const arrLength = Math.abs(n) % arr.length

    if (n === 0 || arr.length === 0) return arr

    if (n > 0) {
        for (let i = 0; i < arrLength; i++) {
            const moveNumber = modifiedArr.shift()
            modifiedArr.push(moveNumber)
        }
    } else if (n < 0) {
        for (let i = 0; i < arrLength; i++) {
            const moveNumber = modifiedArr.pop()
            modifiedArr.unshift(moveNumber)
        }
    }

    return modifiedArr
}

module.exports = shiftArray
