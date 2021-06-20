/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
	let count = 0;
	const sink = (i, j) => {
		if (
			i >= 0 &&
			j >= 0 &&
			i < grid.length &&
			j < grid[i].length &&
			grid[i][j] === '1'
		) {
			grid[i][j] = '0';
			sink(i + 1, j);
			sink(i - 1, j);
			sink(i, j + 1);
			sink(i, j - 1);
			return 1;
		}
		return 0;
	};
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			count += sink(i, j);
		}
	}
	return count;
};

var numIslands = function (grid) {
	let count = 0;
	const sink = (i, j) => {
		if (
			i >= 0 &&
			j >= 0 &&
			i < grid.length &&
			j < grid[i].length &&
			grid[i][j] === '1'
		) {
			grid[i][j] = '0';
			sink(i + 1, j);
			sink(i - 1, j);
			sink(i, j + 1);
			sink(i, j - 1);
		}
	};
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
      if(grid[i][j] === '1') {
        sink(i, j)
        count += 1;
      }
		}
	}
	return count;
};

numIslands([
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '0'],
]);
