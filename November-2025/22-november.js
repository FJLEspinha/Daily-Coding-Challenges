/*
INSTRUCTIONS

Recipe Scaler

Given an array of recipe ingredients and a number to scale the recipe, return an array with 
the quantities scaled accordingly.

    - Each item in the given array will be a string in the format: 
      "quantity unit ingredient". For example "2 C Flour".
    - Scale the quantity by the given number. Do not include any trailing zeros and 
      do not convert any units.
    - Return the scaled items in the same order they are given.
*/

function scaleRecipe(ingredients, scale) {
  const finalIngredients = ingredients.map(ingredientArray => {
    ingredientArray = ingredientArray.split(/\s+/)
    const scaledIngredient = Number((ingredientArray[0] * scale).toFixed(2)).toString()
    ingredientArray[0] = scaledIngredient
    const ingredientScaled = ingredientArray.join(' ')
    return ingredientScaled
  })

  return finalIngredients
}

module.exports = scaleRecipe
