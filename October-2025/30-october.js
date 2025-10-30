/*
INSTRUCTIONS

Nth Prime

A prime number is a positive integer greater than 1 that is divisible only by 1 and itself. 
The first five prime numbers are 2, 3, 5, 7, and 11.

Given a positive integer n, return the nth prime number. For example, given 5 return the 5th 
prime number: 11.
*/

function nthPrime(n) {
    let primeNumbers = [2, 3, 5, 7, 11]

    if (n <= primeNumbers.length) return primeNumbers[n - 1]

    const isPrime = (num) => {
        for (let i = 2; i <= Math.sqrt(num); i++)
            if (num % i === 0)
                return false
        return true
    }

    let num = 12
    while (n !== primeNumbers.length) {
        if (isPrime(num)) primeNumbers.push(num)
        num++
    }

    return primeNumbers[primeNumbers.length - 1]

}

module.exports = nthPrime
