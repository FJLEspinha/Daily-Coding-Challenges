/*
INSTRUCTIONS

What's My Age Again?

Given the date of someone's birthday in the format YYYY-MM-DD, return the person's age as of 
November 27th, 2025.

    - Assume all birthdays are valid dates before November 27th, 2025.
    - Return the age as an integer.
    - Be sure to account for whether the person has already had their birthday in 2025.
*/

function calculateAge(birthday) {
    const REFERENCE_DATE = new Date('2025-11-27')
    const birthdayDate = new Date(birthday)
    let age = REFERENCE_DATE.getFullYear() - birthdayDate.getFullYear()

    if (birthdayDate.getMonth() > REFERENCE_DATE.getMonth() || (birthdayDate.getMonth() === REFERENCE_DATE.getMonth() && birthdayDate.getDate() > REFERENCE_DATE.getDate())) {
        age -= 1
    }

    return age
}

module.exports = calculateAge
