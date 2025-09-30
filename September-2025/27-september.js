/*
INSTRUCTIONS

Spam Detector

Given a phone number in the format "+A (BBB) CCC-DDDD", 
where each letter represents a digit as follows:

    - A represents the country code and can be any number of digits.
    - BBB represents the area code and will always be three digits.
    - CCC and DDDD represent the local number and will always be 
    three and four digits long, respectively.

Determine if it's a spam number based on the following criteria:

    - The country code is greater than 2 digits long or 
    doesn't begin with a zero (0).
    - The area code is greater than 900 or less than 200.
    - The sum of first three digits of the local number appears 
    within last four digits of the local number.
    - The number has the same digit four or more times in a row 
    (ignoring the formatting characters).
*/

function isSpam(number) {
    const havePlus = number.includes('+')
    const arrayNumbers = number.match(/\d+/g)
    const arrayDigits = arrayNumbers.slice(1).toString().match(/\d/g)
    const countDigits = arrayDigits.reduce((acc, current) => {
        acc[current] = (acc[current] || 0) + 1
        return acc
    }, {})
    const countryCode = arrayNumbers[0]
    const areaCode = parseInt(arrayNumbers[1])
    const arrayThreeFirstLocalDigits = arrayNumbers[2].split('')
    const secondLocalNumber = arrayNumbers[3]
    const sumThreFirstDigits = arrayThreeFirstLocalDigits.reduce((acc, current) => parseInt(acc) + parseInt(current), 0)

    if(!havePlus) return true
    if (countryCode.length > 2 || !countryCode.includes('0')) return true
    if (areaCode > 900 || areaCode < 200) return true
    if (secondLocalNumber.includes(sumThreFirstDigits.toString())) return true

    for (const count in countDigits) {
        if (countDigits[count] >= 4) return true
    }

    return false
}

module.exports = isSpam
