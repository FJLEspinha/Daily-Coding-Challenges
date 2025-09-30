/*
INSTRUCTIONS

2nd Largest

Given an array, return the second largest distinct number.
*/


function secondLargest(arr) {
    const arrWithoutDuplicates =[... new Set(arr)]
    const orderedArr = arrWithoutDuplicates.toSorted((a,b) => a-b)
    const secondLargest = orderedArr.length -2

  return orderedArr[secondLargest]
}

module.exports = secondLargest

// TEST


console.log(secondLargest([1, 0, -1, 0, 1, 0, -1, 1, 0]))
// should return 0