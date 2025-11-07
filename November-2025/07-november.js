/*
INSTRUCTIONS

Counting Cards

A standard deck of playing cards has 13 unique cards in each suit. Given an integer 
representing the number of cards to pick from the deck, return the number of unique 
combinations of cards you can pick.

    - Order does not matter. Picking card A then card B is the same as picking 
      card B then card A.

For example, given 52, return 1. There's only one combination of 52 cards 
to pick from a 52 card deck. And given 2, return 1326, There's 1326 card 
combinations you can end up with when picking 2 cards from the deck.
*/

function combinations(cards) {
    const TOTAL_CARDS = 52n
    const givenCards = BigInt(cards)

    if (cards > TOTAL_CARDS) return 0
    if (cards === 0) return 1

    const factorial = (num) => {
        if (num < 0) return 'Error! Factorial is not defined for negative numbers'
        let result = 1n
        for (let i = 2; i <= num; i++) {
            result *= BigInt(i)
        }
        return result
    }

    return Number(factorial(TOTAL_CARDS) / (factorial(givenCards) * factorial(TOTAL_CARDS - givenCards)))
}

module.exports = combinations
