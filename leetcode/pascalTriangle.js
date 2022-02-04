/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [];
  if (!numRows) return triangle;
  triangle[0] = [1];
  for (let i = 1; i < numRows; i++) {
    let row = [1];
    let prevRow = triangle[i - 1];
    for (let j = 1; j < i; j++) {
      row[j] = prevRow[j] + prevRow[j - 1];
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
};
