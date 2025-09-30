/*
INSTRUCTIONS

CSV Header Parser

Given the first line of a comma-separated values (CSV) file, 
return an array containing the headings.

    - The first line of a CSV file contains headings separated by commas.
    - Remove any leading or trailing whitespace from each heading.
*/


function getHeadings(csv) {
    const headings = csv.trim().split(',')
    for (const heading in headings) {
        headings[heading] = headings[heading].trim()
    }

    return headings
}

module.exports = getHeadings
// TESTS

console.log(getHeadings("username , email , signup date "))
//should return ["username", "email", "signup date"]