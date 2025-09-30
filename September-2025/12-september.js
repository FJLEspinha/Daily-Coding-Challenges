/*
INSTRUCTIONS
Screen Time
Given an input array of seven integers, representing a week's time, 
where each integer is the amount of hours spent on your phone that day, 
determine if it is too much screen time based on these constraints:

    - If any single day has 10 hours or more, it's too much.
    - If the average of any three days in a row is greater than or 
    equal to 8 hours, it’s too much.
    - If the average of the seven days is greater than or equal to 6 hours, 
    it's too much.
*/


function tooMuchScreenTime(hours) {
    const sortedHours = hours.sort((a, b) => b - a)
    const average7Days = (hours.reduce((accum, hour) => {
        accum += hour
        return accum
    }, 0)) / hours.length

    let totalHour = 0
    for (let i = 0; i <= 2; i++) {
        totalHour += sortedHours[i]
    }
    const average3First = totalHour / 3

    if (sortedHours[0] >= 10) return true
    if (average7Days >= 6) return true
    if (average3First >= 8) return true


    return false;
}

module.exports = tooMuchScreenTime

