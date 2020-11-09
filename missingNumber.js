/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //XOR O(N) O(1)
  // [0,1,3,4]
  // 4 ^ (0^0) ^ (1^1) ^ (2^3) ^ (3^4)
  // 2
  let missing = nums.length;
  for (let i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
};

var missingNumber = function (nums) {
  // Gauss' Formula O(N) O(1)
  // Sum(0 -> n) = n*(n+1)/2
  let missing = (nums.length * (nums.length + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
    missing -= nums[i];
  }
  return missing;
};
