/*
INSTRUCTIONS

Signature Validation

Given a message string, a secret key string, and a signature number, determine if 
the signature is valid using this encoding method:

    - Letters in the message and secret key have these values:
        · a to z have values 1 to 26 respectively.
        · A to Z have values 27 to 52 respectively.
    - All other characters have no value.
    - Compute the signature by taking the sum of the message plus the sum 
      of the secret key.

For example, given the message "foo" and the secret key "bar", 
the signature would be 57:

f (6) + o (15) + o (15) = 36
b (2) + a (1) + r (18) = 21
36 + 21 = 57

Check if the computed signature matches the provided signature.
*/

function verify(message, key, signature) {
    const valueChar = (char) => {
        const charCode = char.charCodeAt(0)
        if (char >= 'a' && char <= 'z') {
            return charCode - 'a'.charCodeAt(0) + 1
        }
        else if (char >= 'A' && char <= 'Z') {
            return charCode - 'A'.charCodeAt(0) + 27
        }

        return 0
    }

    const valueCharacters = (text) => {
        const arrayText = text.split('')
        const result = arrayText.reduce((accumulator, char) =>
            accumulator + valueChar(char), 0
        )

        return result
    }

    const signatureValue = valueCharacters(message) + valueCharacters(key)

    return signature === signatureValue
}

module.exports = verify
