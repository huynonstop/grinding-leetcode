/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		while (nums[i] !== nums[nums[i] - 1]) {
			let t = nums[i];
			nums[i] = nums[t - 1];
			nums[t - 1] = t;
		}
	}
	let rs = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== i + 1) rs.push(i + 1);
	}
	return rs;
};

var findDisappearedNumbers = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		let indexToChange = Math.abs(nums[i]) - 1;
		nums[indexToChange] = Math.abs(nums[indexToChange]) * -1;
	}
	let rs = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			rs.push(i + 1);
		}
	}
	return rs;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
