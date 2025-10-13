/*
INSTRUCTIONS

24 to 12

Given a string representing a time of the day in the 24-hour format of 
"HHMM", return the time in its equivalent 12-hour format of "H:MM AM" 
or "H:MM PM".

    - The given input will always be a four-digit string in 24-hour 
      time format, from "0000" to "2359".
*/


function to12(time) {
    const hour = parseInt(time.substring(0, 2))
    const minutes = parseInt(time.substring(2))
    const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true
    }
    const time24 = new Date()
    time24.setHours(hour, minutes, 0)

    const time12 = time24.toLocaleTimeString('en-Us', options)

    return time12
}

module.exports = to12
