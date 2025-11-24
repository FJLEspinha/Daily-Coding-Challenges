/*
INSTRUCTIONS

Message Validator

Given a message string and a validation string, determine if the message is valid.

    - A message is valid if each word in the message starts with the 
      corresponding letter in the validation string, in order.
    - Letters are case-insensitive.
    - Words in the message are separated by single spaces.
*/

function isValidMessage(message, validator) {
    if (!message || !validator) return false

    const numberspacesInMessage = message.match(/\s/g)
        ? message.match(/\s/g).length
        : 0
    const messageLowerArray = message.toLowerCase().split(/\s/)
    const messageLength = messageLowerArray.length
    const validatorLower = validator.toLowerCase()

    if (numberspacesInMessage !== messageLength - 1) return false
    if (messageLength !== validator.length) return false

    const isValid = messageLowerArray.every((message, i) => {
        return message.charAt(0) === validatorLower.charAt(i)
    })

    return isValid
}

module.exports = isValidMessage
