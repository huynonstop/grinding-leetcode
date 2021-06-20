/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    if (
      (hashmap[nums[i]] || hashmap[nums[i]] === 0) &&
      i - hashmap[nums[i]] <= k
    )
      return true;
    hashmap[nums[i]] = i;
  }
  return false;
};

containsNearbyDuplicate([1, 0, 1, 1], 1);
