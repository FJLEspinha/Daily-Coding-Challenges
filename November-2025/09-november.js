/*
INSTRUCTIONS

Word Search

Given a matrix (an array of arrays) of single letters and a word to find, return the 
start and end indices of the word in the matrix.

    - The given matrix will be filled with all lowercase letters (a-z).
    - The word to find will always be in the matrix exactly once.
    - The word to find will always be in a straight line in one of these directions:
        - left to right
        - right to left
        - top to bottom
        - bottom to top

For example, given the matrix:

        [
        ["a", "c", "t"],
        ["t", "a", "t"],
        ["c", "t", "c"]
        ]

And the word "cat", return:

[[0, 1], [2, 1]]

Where [0, 1] are the indices for the "c" (start of the word), 
and [2, 1] are the indices for the "t" (end of the word
*/

function findWord(matrix, word) {
    const rowsLength = matrix.length
    const colsLength = matrix[0].length
    const wordLength = word.length
    const directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0]
    ]


    for (let i = 0; i < rowsLength; i++) {
        for (let j = 0; j < colsLength; j++) {
            if (matrix[i][j] === word[0]) {
                const startIndex = [i, j]

                for (const [rowDir, colDir] of directions) {
                    let found = true
                    let endIndex = startIndex

                    for (let k = 1; k < wordLength; k++) {
                        if (found) {
                            const nextInRow = i + k * rowDir
                            const nextInCol = j + k * colDir

                            if (nextInRow < 0 || nextInRow >= rowsLength || nextInCol < 0 || nextInCol >= colsLength)
                                found = false
                            else if (matrix[nextInRow][nextInCol] !== word[k]) found = false
                            else if (k === wordLength - 1) endIndex = [nextInRow, nextInCol]
                        }
                    }

                    if (found) return [startIndex, endIndex]

                }
            }
        }
    }
}

module.exports = findWord
