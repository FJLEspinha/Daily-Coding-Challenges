/*
INSTRUCTIONS

Missing Socks

Given an integer representing the number of pairs of socks you started with, 
and another integer representing how many wash cycles you have gone through, 
return the number of complete pairs of socks you currently have using 
the following constraints:

    - Every 2 wash cycles, you lose a single sock.
    - Every 3 wash cycles, you find a single missing sock.
    - Every 5 wash cycles, a single sock is worn out and 
      must be thrown away.
    - Every 10 wash cycles, you buy a pair of socks.
    - You can never have less than zero total socks.
    - Rules can overlap. For example, on wash cycle 10, 
      you will lose a single sock, throw away a single sock, 
      and buy a new pair of socks.
    Return the number of complete pairs of socks.
*/

function sockPairs(pairs, cycles) {
  let totalSoks = pairs * 2

  for (let i = 2; i <= cycles; i++) {
    if (i % 2 === 0) totalSoks -= 1
    if (i % 3 === 0) totalSoks += 1
    if (i % 5 === 0) totalSoks -= 1
    if (i % 10 === 0) totalSoks += 2
    if (totalSoks <= 0) return 0


  }
  pairs = Math.floor(totalSoks / 2)

  return pairs
}

module.exports = sockPairs
