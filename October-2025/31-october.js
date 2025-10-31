/*
INSTRUCTIONS

SpOoKy~CaSe

Given a string representing a variable name, convert it to "spooky case" using 
the following constraints:

    - Replace all underscores (_), and hyphens (-) with a tilde (~).
    - Capitalize the first letter of the string, and every other letter 
      after that, ignore the tilde character when counting.

For example, given hello_world, return HeLlO~wOrLd.
*/

function spookify(boo) {
    const indexMatches = [...boo.matchAll(/[-_]/g)]

    let booArray = boo.split(/[-_]/)
    booArray = booArray.map(item => item.split('')).flat()

    booArray = booArray.map((char, i) => {
        if (i % 2 === 0) {
            return char.toUpperCase()
        }
        return char.toLowerCase()

    })

    for (const index of indexMatches) {
        booArray.splice(index.index, 0, '~')
    }

    return booArray.join('')
}

module.exports = spookify
