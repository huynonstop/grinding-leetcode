/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
	const n = nums.length;
	const hashmap = {};
	for (let i = 0; i < nums.length; i++) {
		hashmap[nums[i]] = hashmap[nums[i]] + 1 || 1;
		if (hashmap[nums[i]] >= n / 2) return nums[i];
	}
};

var majorityElement = function (nums) {
	let count = 0;
	let result = null;
	for (let num of nums) {
		if (count === 0) {
			result = num;
    }
    const add = (num === result) ? 1 : -1;
		count += add
	}
	return result;
};

majorityElement([3,2,3])