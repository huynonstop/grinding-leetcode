/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
	let rs = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			let v = grid[i][j];
			if (v !== 0) {
				rs += 4 * v + 2 - count(grid, i, j, v);
			}
		}
	}
	return rs;
};

function count(grid, i, j, h) {
	let t = 0,
		l = 0;
	if (i > 0) {
		t = h > grid[i - 1][j] ? grid[i - 1][j] : h;
	}
	if (j > 0) {
		l = h > grid[i][j - 1] ? grid[i][j - 1] : h;
	}
	return (t + l) * 2;
}

var surfaceArea = function (grid) {
	let rs = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			let v = grid[i][j];
			if (v > 0) {
				if (i > 0) {
					let t = grid[i - 1][j];
					rs -= 2 * (v > t ? t : v);
				}
				if (j > 0) {
					let l = grid[i][j - 1];
					rs -= 2 * (v > l ? l : v);
				}
				rs += 4 * v + 2;
			}
		}
	}
	return rs;
};

surfaceArea([
	[1, 2],
	[3, 4],
]);
