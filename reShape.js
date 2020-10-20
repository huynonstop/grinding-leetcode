/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
	let old_r = nums.length;
	let ord_c = nums[0].length;
	if (old_r * ord_c < r * c) return nums;
	let new_r = 0;
	let count = 0;
	let rs = [];
	for (let i = 0; i < old_r; i++) {
		for (let j = 0; j < ord_c; j++) {
			if (!rs[new_r]) {
				rs[new_r] = [];
			}
			if (count < c) {
				count++;
			}
			rs[new_r].push(nums[i][j]);
			if (count === c) {
				count = 0;
				new_r++;
			}
		}
	}
	return rs;
};

matrixReshape(
	[
		[1, 2],
		[3, 4],
	],
	4,
	1
);

var functionReShape = function(nums, r, c) {
  const all = nums.reduce((all, row) => [...all, ...row], []);
  return all.length === r * c ? new Array(r).fill(0).map((row, m) => all.slice(m * c, m * c + c)) : nums;
};
