/*
INSTRUCTIONS

Weekday Finder

Given a string date in the format YYYY-MM-DD, return the day of the week.

Valid return days are:

    - "Sunday"
    - "Monday"
    - "Tuesday"
    - "Wednesday"
    - "Thursday"
    - "Friday"
    - "Saturday"

Be sure to ignore time zones.
*/

function getWeekday(dateString) {
    const yearMonthDay = dateString.split('-').map(Number)
    const date = new Date(yearMonthDay[0], yearMonthDay[1] - 1, yearMonthDay[2])
    const formatterDate = Intl.DateTimeFormat('en-Us', { weekday: 'long' })

    return formatterDate.format(date)
}

module.exports = getWeekday
