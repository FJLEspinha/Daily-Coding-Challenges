/*
INSTRUCTIONS

Caught Speeding

Given an array of numbers representing the speed at which vehicles 
were observed traveling, and a number representing the speed limit, 
return an array with two items, theGiven an array that were speeding, 
followed by the average amount beyond the speed limit of those vehicles.

    If there were no vehicles speeding, return [0, 0].


*/
function speeding(speeds, limit) {
    let result = []
    const initAverage = 0
    const overLimit = speeds.filter((speed) => speed > limit)
    const carsOverLimit = overLimit.length
    result.push(carsOverLimit)

    const average = carsOverLimit !== 0
        ? overLimit.reduce((acc, current) =>
            acc + (current - limit), initAverage) / carsOverLimit
        : 0
    result.push(average)

    return result;
}

module.exports = speeding
