/*
INSTRUCTIONS

Fingerprint Test

Given two strings representing fingerprints, determine if they are a match using 
the following rules:

    - Each fingerprint will consist only of lowercase letters (a-z).
    - Two fingerprints are considered a match if:
        · They are the same length.
        · The number of differing characters does not exceed 10% of 
          the fingerprint length.
*/

function isMatch(fingerprintA, fingerprintB) {
    if (fingerprintA.length !== fingerprintB.length)
        return false
    const tenPerCentCharacters = Math.floor(fingerprintA.length * 0.10)
    let differentsChar = 0
    for (let i = 0; i < fingerprintA.length; i++) {
        if (fingerprintA.charAt(i) !== fingerprintB.charAt(i))
            differentsChar++
        if (differentsChar > tenPerCentCharacters)
            return false
    }

    return true
}

module.exports = isMatch
