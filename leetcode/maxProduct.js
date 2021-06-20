/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
	let m = Number.MIN_VALUE;
	let n = Number.MIN_VALUE;
	for (let num of nums) {
		if (num > m) {
			n = m;
			m = num;
		} else if (num > n) {
			n = num;
		}
	}
	return (m - 1) * (n - 1);
};
