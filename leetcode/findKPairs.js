/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  let hashmap = {};
  let rs = 0;
  for(let i=0;i<nums.length;i++) {
    hashmap[nums[i]] = hashmap[nums[i]] + 1 || 1;
  }
  for(let key in hashmap) {
    if(k === 0) {
      if(hashmap[+key] > 1) {
        rs++;
      }
    }
    else {
      if(hashmap[+key+k]) {
        rs++;
      }
    }
  }
  return rs;
};
findPairs([3,1,4,1,5],2)