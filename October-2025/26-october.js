/*
INSTRUCTIONS

Duration Formatter

Given an integer number of seconds, return a string representing the same 
duration in the format "H:MM:SS", where "H" is the number of hours, "MM" is 
the number of minutes, and "SS" is the number of seconds. Return the time 
using the following rules:

    - Seconds: Should always be two digits.
    - Minutes: Should omit leading zeros when they aren't needed. 
      Use "0" if the duration is less than one minute.
    - Hours: Should be included only if they're greater than zero.
*/

function format(seconds) {
    const hours = parseInt(seconds / 3600) !== 0
        ? parseInt(seconds / 3600) : ''
    const minutes = parseInt((seconds % 3600) / 60) >= 1
        ? (parseInt((seconds % 3600) / 60)) : '0'
    const endSeconds = (seconds % 60).toString().padStart(2, 0)

    return `${hours !== '' ? hours + ':' : ''}${hours !== '' ? minutes.toString().padStart(2, 0) : minutes}:${endSeconds}`;
}

module.exports = format
