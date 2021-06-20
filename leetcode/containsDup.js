/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	let hashmap = new Map();
	for (let n of nums) {
		if (hashmap.has(n)) return true;
		hashmap.set(n, true);
	}
	return false;
};
