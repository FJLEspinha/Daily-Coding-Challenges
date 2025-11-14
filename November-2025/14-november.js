/*
INSTRUCTIONS

Is It the Weekend?

Given a date in the format "YYYY-MM-DD", return the number of days left until the weekend.

    - The weekend starts on Saturday.
    - If the given date is Saturday or Sunday, return "It's the weekend!".
    - Otherwise, return "X days until the weekend.", where X is the number of days 
      until Saturday.
    - If X is 1, use "day" (singular) instead of "days" (plural).
    - Make sure the calculation ignores your local timezone.
*/

function daysUntilWeekend(dateString) {

    const date = new Date(dateString)
    const currentDay = date.getUTCDay()
    let daysUntilWeekend = 0

    if (currentDay === 0 || currentDay === 6)
        return "It's the weekend!"
    else
        daysUntilWeekend = 6 - currentDay

    if (daysUntilWeekend === 1)
        return `${daysUntilWeekend} day until the weekend.`

    return `${daysUntilWeekend} days until the weekend.`
}

module.exports = daysUntilWeekend
