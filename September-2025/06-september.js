/*
INSTRUCTIONS
Matrix Rotate
Given a matrix (an array of arrays), rotate the matrix 90 degrees clockwise 
and return it. 
For instance, given [[1, 2], [3, 4]], which looks like this:

    1	2
    3	4
You should return [[3, 1], [4, 2]], which looks like this:

    3	1
    4	2
*/


function rotate(matrix) {
  if(matrix.length === 1) return matrix

  const rows = matrix.length 
  const colums = matrix[0].length
  let rotateMatrix = Array(rows).fill(0).map(()=>Array(colums).fill(1))
  
  for(let i=rows -1; i>=0;i--){
    for(let j=0; j<colums;j++){
      rotateMatrix[j][i] = (matrix[i][j])
 
    }
  }

  rotateMatrix.map(n=> n.reverse())


  return rotateMatrix;
}

module.exports = rotate
