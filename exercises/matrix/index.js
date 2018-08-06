// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = [];
  for (let i = 0; i < n; i += 1) {
    result.push([]);
  }

  let number = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i += 1) {
      result[startRow][i] = number;
      number += 1;
    }
    startRow += 1;

    for (let i = startRow; i <= endRow; i += 1) {
      result[i][endColumn] = number;
      number += 1;
    }
    endColumn -= 1;

    for (let i = endColumn; i >= startColumn; i -= 1) {
      result[endRow][i] = number;
      number += 1;
    }
    endRow -= 1;

    for (let i = endRow; i >= startRow; i -= 1) {
      result[i][startColumn] = number;
      number += 1;
    }
    startColumn += 1;
  }

  return result;
}

module.exports = matrix;
