function getMatrixElementsSum(matrix) {
  let sum = 0;
  let colSum = 0;
  for (let i = 0; i < matrix[0].length; i++) {
    colSum = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== 0) {
        colSum += matrix[j][i];
      } else { break; }
    }
    sum += colSum;
  }
  return sum;
}

module.exports = getMatrixElementsSum;
