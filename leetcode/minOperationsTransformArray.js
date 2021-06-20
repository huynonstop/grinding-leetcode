/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let rs = 0;
  let isNotAllZero = 1;
  while (isNotAllZero) {
    isNotAllZero = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] & 1) {
        nums[i] -= 1;
        rs += 1;
      }
      if (nums[i]) {
        nums[i] = nums[i] >> 1;
        isNotAllZero = 1;
      }
    }
    rs += isNotAllZero;
  }
  return rs;
};
var minOperations = function (nums) {
  let rs = 0;
  let maxLen = 1;
  for (let n of nums) {
    let curBits = 0;
    while (n) {
      rs += n & 1;
      curBits++;
      n = n >> 1;
    }
    maxLen = Math.max(maxLen, curBits);
  }
  return rs + maxLen - 1;
};
minOperations([1, 5]);

//  https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array/discuss/805740/JavaC%2B%2BPython-Bit-Counts
// Intuition
// Think in backward way,
// for each number a in A,
// if a % 2 == 1, we do operation 0 backward, turning 1 to 0.
// If all a % 2 == 0, we do operation 1 backward.

// Some observation here:

// For each bit "1" in the binary format of a,
// we need at least one operation 0.
// All operation 1 can be shared.
// Explanation
// For each number a,
// we count the number of bits "1",
// as well as the length of a in binary format.

// The number of operation 0 equals to the total number of bits "1".
// The number of operation 1 equals to maximum bit length - 1.
