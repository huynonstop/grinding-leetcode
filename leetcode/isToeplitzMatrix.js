/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
	let row = matrix.length;
	let col = matrix[0].length;
	for (let i = 0; i < row; i++) {
		let r = i;
		let c = 0;
		let pre;
		while (r < row && c < col) {
			if (pre === undefined) pre = matrix[r][c];
			if (pre !== matrix[r][c]) return false;
			pre = matrix[r][c];
			r++;
			c++;
		}
	}
	for (let i = 1; i < col; i++) {
		let c = i;
		let r = 0;
		let pre;
		while (r < row && c < col) {
			if (pre === undefined) pre = matrix[r][c];
			if (pre !== matrix[r][c]) return false;
			pre = matrix[r][c];
			r++;
			c++;
		}
	}
	return true;
};

isToeplitzMatrix([
	[0, 33, 98],
	[34, 22, 33],
]);

var isToeplitzMatrix = function (matrix) {
	for (let i = 0; i < matrix.length - 1; i++) {
		for (let j = 0; j < matrix[i].length - 1; j++) {
			if (matrix[i][j] != matrix[i + 1][j + 1]) return false;
		}
	}
	return true;
};
