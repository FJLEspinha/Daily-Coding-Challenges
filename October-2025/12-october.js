/*
INSTRUCTIONS

Battle of Words

Given two sentences representing your team and an opposing team, where 
each word from your team battles the corresponding word from the opposing 
team, determine which team wins using the following rules:

    - The given sentences will always contain the same number of words.
    - Words are separated by a single space and will only contain letters.
    - The value of each word is the sum of its letters.
    - Letters "a" to "z" correspond to the values 1 through 26. 
      For example, a is 1, and z is 26.
    - A capital letter doubles the value of the letter. 
      For example, A is 2, and Z is 52.
    - Words battle in order: the first word of your team battles the 
      first word of the opposing team, and so on.
    - A word wins if its value is greater than the opposing word's value.
    - The team with more winning words is the winner.

Return "We win" if your team is the winner, "We lose" if your team loses, 
and "Draw" if both teams have the same number of wins.
*/


function battle(ourTeam, opponent) {
  const getPoints = (str) => {
    return str.split(' ')
      .map(word => {
        let wordPoints = 0
        for (const char of word) {
          if (char >= 'a' && char <= 'z') {
            wordPoints += char.charCodeAt(0) - 'a'.charCodeAt(0) + 1
          } else {
            wordPoints += (char.charCodeAt(0) - 'A'.charCodeAt(0) + 1) * 2
          }
        }
        return wordPoints
      })
  }

  const ourTeamPoints = getPoints(ourTeam)
  const opponentTeamPoints = getPoints(opponent)
  const winner = (our, opp) => {
    let ourPoints = 0
    let oppPoints = 0
    for (let i = 0; i < our.length; i++) {
      if (our[i] > opp[i]) ourPoints++
      if (our[i] < opp[i]) oppPoints++
    }
    if (ourPoints === oppPoints) return 'Draw'
    return ourPoints > oppPoints ? 'We win' : 'We lose'
  }

  return winner(ourTeamPoints, opponentTeamPoints)
}

module.exports = battle
