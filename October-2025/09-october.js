/*
INSTRUCTIONS

Space Week Day 6: Moon Phase

For day six of Space Week, you will be given a date in the format "YYYY-MM-DD" and 
need to determine the phase of the moon for that day using the following rules:

Use a simplified lunar cycle of 28 days, divided into four equal phases:

    - "New": days 1 - 7
    - "Waxing": days 8 - 14
    - "Full": days 15 - 21
    - "Waning": days 22 - 28

After day 28, the cycle repeats with day 1, a new moon.

    - Use "2000-01-06" as a reference new moon (day 1 of the cycle) 
      to determine the phase of the given day.
    - You will not be given any dates before the reference date.
    - Return the correct phase as a string.
*/

function moonPhase(dateString) {
    const referenceDate = new Date("2000-01-06")
    const dateGive = new Date(dateString)
    const lunarCycle = {
        'New': day => day >= 1 && day <= 7,
        'Waxing': day => day >= 8 && day <= 14,
        'Full': day => day >= 15 && day <= 21,
        'Waning': day => day >= 22 && day <= 28
    }
    const keys = Object.keys(lunarCycle)
    const msInDay = 1000 * 60 * 60 * 24
    const diffMs = dateGive.getTime() - referenceDate.getTime()
    const daysDiff = Math.floor(diffMs / msInDay)
    const dayCycle = (daysDiff % 28) + 1
    
    for(const key of keys){
        if(lunarCycle[key](dayCycle)) return key
    }
}

module.exports = moonPhase
