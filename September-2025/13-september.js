/*
INSTRUCTIONS
Missing Numbers
Given an array of integers from 1 to n, inclusive, return an array of all the missing integers 
between 1 and n (where n is the largest number in the given array).

    - The given array may be unsorted and may contain duplicates.
    - The returned array should be in ascending order.
    - If no integers are missing, return an empty array.

*/

function findMissingNumbers(arr) {
  const sortedArrayWithoutDuplicates = [... new Set(arr)].sort((a, b) => a - b)
  const maxNumber = sortedArrayWithoutDuplicates[sortedArrayWithoutDuplicates.length - 1]
  let missingNumbers = []
  let allNumbers = []

  for (let i = 0; i < maxNumber; i++) {
    allNumbers.push(i + 1)
    if (!sortedArrayWithoutDuplicates.includes(allNumbers[i])) {
      missingNumbers.push(allNumbers[i])
    }
  }


  return missingNumbers.sort()
}

module.exports = findMissingNumbers




