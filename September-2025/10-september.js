/*
INSTRUCTIONS

Array Diff
Given two arrays with strings values, return a new array containing all the 
values that appear in only one of the arrays.

    - The returned array should be sorted in alphabetical order.
*/

function arrayDiff(arr1, arr2) {
    let arrDif = []

    const formatedArray = (array) => {
        array.forEach(item => {
            if (item.includes(" ")) {
                let intermediateArray = item.split(" ")
                let index = array.indexOf(item)
                array.splice(index, 1)
                intermediateArray.map(item => {
                    array.push(item)
                })
            }
        })
        return array
    }

    let firstArray = formatedArray(arr1)
    let secondArray = formatedArray(arr2)

    firstArray.forEach(item => {
        if (!secondArray.includes(item))
            arrDif.push(item)
    });

    secondArray.forEach(item => {
        if (!firstArray.includes(item))
            arrDif.push(item)
    });


    return arrDif.toSorted();
}
module.exports = arrayDiff
