/*
INSTRUCTIONS

Phone Number Formatter

Given a string of ten digits, return the string as a phone number 
in this format: "+D (DDD) DDD-DDDD".
*/

function formatNumber(number) {
    const regex = /^(\d)(\d{3})(\d{3})(\d{4})$/

    return number.replace(regex, '+$1 ($2) $3-$4')
}

module.exports = formatNumber
