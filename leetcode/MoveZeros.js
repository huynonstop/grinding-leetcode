/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			nums[count] = nums[i];
			count++;
		}
	}
	while (count < nums.length) {
		nums[count] = 0;
		count++;
	}
};

var moveZeroes = function (nums) {
	let i_n_z = 0;
	let i = 0;
	while (i < nums.length) {
		if (nums[i] !== 0) {
			if (i !== i_n_z) {
				const t = nums[i];
				nums[i] = nums[i_n_z];
				nums[i_n_z] = t;
			}
			i_n_z++;
		}
		i++
	}
};
