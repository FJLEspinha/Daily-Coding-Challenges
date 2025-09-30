/*
INSTRUCTIONS
Given a string, determine if it is a valid IPv4 Address. 
A valid IPv4 address consists of four integer numbers separated by dots (.).
Each number must satisfy the following conditions:

    - It is between 0 and 255 inclusive.
    - It does not have leading zeros (e.g. 0 is allowed, 01 is not).
    - Only numeric characters are allowed.
*/

function isValidIPv4(ipv4) {
    let isValid = true
    let resultsString = ipv4.split('.')

    if(resultsString.length !== 4) return isValid=false

    resultsString.map(item =>{ 
        if(item === '0' ) return isValid=true
        if(item.match(/^0/g) ) return isValid= false
        if(!( parseInt(item)>=0) || !(parseInt(item)<=255) || parseInt(item) ===NaN)  
            return isValid =false
    })
    

   return isValid;
}

module.exports = isValidIPv4


