/*
INSTRUCTIONS
Given a string, determine if all the characters in the string are unique.

- Uppercase and lowercase letters should be considered different characters.

*/
function allUnique(str) {

  const strSet = [...new Set(str)]
  if (str.length === strSet.length) return true
  return false;
}

module.exports = allUnique
