/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let flag = {};
	let rs = 0;
	for (let i = 0; i < nums.length; i++) {
		let num = nums[i];
		if (flag[num] !== 1) flag[num] = 1;
		else flag[num] = -1;
		rs += flag[num] * num;
	}
	return rs;
};
singleNumber([2,2,1])

var singleNumber = function (nums) {
	const dict = {}
	nums.forEach(v => {
		dict[v] = dict[v] + 1 || 1
	})
	for(let num in dict) {
		if(dict[num] === 1) return num
	}
}

var singleNumber = function (nums) {
	let rs = nums[0]
	for(let i = 1;i< nums.length;i++) {
		rs = rs ^ nums[i]
	}
	return rs
}
/**
 * Best practice using XOR
 * class Solution(object):
 *  def singleNumber(self, nums):
 *      a = 0
 *      for i in nums:
 *          a ^= i
 *      return a
 */