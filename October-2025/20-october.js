/*
INSTRUCTIONS

Tip Calculator

Given the price of your meal and a custom tip percent, return an array with 
three tip values; 15%, 20%, and the custom amount.

    - Prices will be given in the format: "$N.NN".
    - Custom tip percents will be given in this format: "25%".
    - Return amounts in the same "$N.NN" format, rounded to two decimal 
      places.

For example, given a "$10.00" meal price, and a "25%" custom tip value, 
return ["$1.50", "$2.00", "$2.50"].
*/

function calculateTips(mealPrice, customTip) {
    const price = parseFloat(mealPrice.replace('$', ''))
    const percent = parseFloat(customTip.replace('%', '')) / 100
    const percentageArray = [0.15, 0.20, percent]

    return percentageArray.map(value => '$' + ((value * price).toFixed(2)));
}

module.exports = calculateTips
