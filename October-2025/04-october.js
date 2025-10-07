/*
INSTRUCTIONS

Space Week Day 1: Stellar Classification

October 4th marks the beginning of World Space Week. The next seven days 
will bring you astronomy-themed coding challenges.

For today's challenge, you are given the surface temperature of a star 
in Kelvin (K) and need to determine its stellar classification based on 
the following ranges:

    "O": 30,000 K or higher
    "B": 10,000 K - 29,999 K
    "A": 7,500 K - 9,999 K
    "F": 6,000 K - 7,499 K
    "G": 5,200 K - 5,999 K
    "K": 3,700 K - 5,199 K
    "M": 0 K - 3,699 K

    Return the classification of the given star.
*/

function classification(temp) {
    const types = {
        "O": k => k >= 30000 ,
        "B": k => k >= 10000 && k<=29999,
        "A": k => k >= 7500 && k<=9999,
        "F": k => k >= 6000 && k<=7499,
        "G": k => k >= 5200 && k<=5999,
        "K": k => k >= 3700 && k<=5199,
        "M": k => k >= 0 && k <= 3699
    }
    const keys = Object.keys(types)
    for(const key of keys){
        if(types[key](temp)) return key
    }
     return 'Out of range'
}

module.exports = classification
