/*
INSTRUCTIONS

Matrix Builder

Given two integers (a number of rows and a number of columns), return a matrix 
(an array of arrays) filled with zeros (0) of the given size.

For example, given 2 and 3, return:

        [
        [0, 0, 0],
        [0, 0, 0]
        ]
*/

function buildMatrix(rows, cols) {
    if (typeof (rows) !== 'number' || isNaN(rows) || typeof (cols) !== 'number' || isNaN(cols)) return 'Parameters must be positive numbers'
    if (rows <= 0 || cols <= 0) return 'Parameters must be positive numbers'

    return Array.from({ length: rows }, () =>
        new Array(cols).fill(0)
    )
}

module.exports = buildMatrix
