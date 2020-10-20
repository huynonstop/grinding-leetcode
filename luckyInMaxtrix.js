/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
	let rs = [];
	let minRow = [];
	for (let i = 0; i < matrix.length; i++) {
		let min = 0;
		for (let j = 0; j < matrix[0].length; j++) {
			if (matrix[i][j] < matrix[i][min]) {
				min = j;
			}
		}
		minRow[i] = min;
	}
	for (let i = 0; i < minRow.length; i++) {
		let max = i;
		for (let j = 0; j < matrix.length; j++) {
      if(matrix[j][minRow[i]] > matrix[max][minRow[i]]) {
        max = j;
      }
    }
    if(max === i) {
      rs.push(matrix[i][minRow[i]])
    }
  }
  return rs;
};
luckyNumbers([[3,7,8],[9,11,13],[15,16,17]])