/*
INSTRUCTIONS

    Email Signature Generator

Given strings for a person's name, title, and company, return an email signature as a 
single string using the following rules:

    - The name should appear first, preceded by a prefix that depends 
      on the first letter of the name. For names starting with 
      (case-insensitive):
        · A-I: Use >> as the prefix.
        · J-R: Use -- as the prefix.
        · S-Z: Use :: as the prefix.
    - A comma and space (, ) should follow the name.
    - The title and company should follow the comma and space, separated by " at " 
      (with spaces around it).

For example, given "Quinn Waverly", "Founder and CEO", and "TechCo" 
return "--Quinn Waverly, Founder and CEO at TechCo".
*/

function generateSignature(name, title, company) {
    const nameLower = name.toLowerCase()
    let nameWithPrefix = ''
    if (nameLower.charAt(0) >= 'a' && nameLower.charAt(0) <= 'i') {
        nameWithPrefix = `>>${name}`
    } else if (nameLower.charAt(0) >= 'j' && nameLower.charAt(0) <= 'r') {
        nameWithPrefix = `--${name}`
    } else {
        nameWithPrefix = `::${name}`
    }

    return nameWithPrefix.concat(', ' + title + ' at ' + company)
}

module.exports = generateSignature
