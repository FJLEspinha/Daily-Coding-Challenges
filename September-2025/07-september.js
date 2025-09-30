/*
INSTRUCTIONS
Roman Numeral Parser
Given a string representing a Roman numeral, return its integer value.

Roman numerals consist of the following symbols and values:

        Symbol	 Value
            I	  1
            V	  5
            X	  10
            L	  50
            C	  100
            D	  500
            M	  1000
    - Numerals are read left to right. 
    If a smaller numeral appears before a larger one, 
    the value is subtracted. Otherwise, values are added.

*/

function parseRomanNumeral(numeral) {
    const romanNumbers = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let counter = 0
    let number = romanNumbers[numeral[numeral.length - 1]]
    let romanNum = numeral[numeral.length - 1]

    for (let i = numeral.length - 2; i >= 0; i--) {
        if (numeral[i] === romanNum) counter++
        if (counter > 3) {
            counter = 0
            number -= romanNumbers[numeral[i]]
        }

        if (romanNumbers[numeral[i]] < romanNumbers[numeral[i + 1]])
            number -= romanNumbers[numeral[i]]

        else number += romanNumbers[numeral[i]]

    }


    return number;
}

module.exports = parseRomanNumeral
