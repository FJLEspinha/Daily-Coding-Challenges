/*
INSTRUCTIONS

P@ssw0rd Str3ngth!

Given a password string, return "weak", "medium", or "strong" based on the strength 
of the password.

A password is evaluated according to the following rules:

    - It is at least 8 characters long.
    - It contains both uppercase and lowercase letters.
    - It contains at least one number.
    - It contains at least one special character from this set: 
    !, @, #, $, %, ^, &, or *.

Return "weak" if the password meets fewer than two of the rules. 
Return "medium" if the password meets 2 or 3 of the rules. 
Return "strong" if the password meets all 4 rules.
*/


function checkStrength(password) {
    let points = 0
    if (password.length >= 8) points++
    if ((/[a-z]/g).test(password)  && (/[A-Z]/g).test(password)) points++
    if ((/\d/).test(password)) points++
    if ((/[!@#$%^&*]/).test(password)) points++

    return (points < 2)
        ? 'weak'
        : (points > 1 && points <= 3)
            ? 'medium'
            : 'strong'
}


module.exports = checkStrength
