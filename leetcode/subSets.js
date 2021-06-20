/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	let rs = [];
	let temp = [];
	const backtrack = (start) => {
		rs.push([...temp]);
		for (let i = start; i < nums.length; i++) {
			temp.push(nums[i]);
			backtrack(i + 1);
			temp.pop();
		}
	};
	backtrack(0);
	return rs;
};

subsets([1,2,3])